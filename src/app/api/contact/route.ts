import { Resend } from "resend";
import {
  isLikelyBotSubmission,
  validateContactForm,
} from "@/lib/contact";
import {
  buildContactEmail,
  resolveContactEmailConfig,
} from "@/lib/contact-email";
import type { ContactFormInput } from "@/types/portfolio";

export const runtime = "nodejs";

let resendClient: Resend | null = null;

function getResendClient(apiKey: string) {
  resendClient ??= new Resend(apiKey);
  return resendClient;
}

export async function POST(request: Request) {
  let payload: ContactFormInput;

  try {
    payload = (await request.json()) as ContactFormInput;
  } catch {
    return Response.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  if (isLikelyBotSubmission(payload)) {
    return Response.json({
      message: "Thank you for reaching out. I will get back to you soon.",
    });
  }

  const validation = validateContactForm(payload);

  if (!validation.ok) {
    return Response.json(
      {
        message: "Please check the highlighted fields.",
        errors: validation.errors,
      },
      { status: 400 },
    );
  }

  const config = resolveContactEmailConfig();

  if (!config.ok) {
    return Response.json({ message: config.message }, { status: 503 });
  }

  const email = buildContactEmail(payload);

  if (config.dryRun) {
    console.info("Contact form dry run", {
      to: config.to,
      subject: email.subject,
      replyTo: email.replyTo,
    });

    return Response.json({
      message: "Thank you for reaching out. I will get back to you soon.",
    });
  }

  if (!config.apiKey) {
    return Response.json(
      {
        message:
          "Contact email is not configured yet. Please contact me directly by email.",
      },
      { status: 503 },
    );
  }

  const { error } = await getResendClient(config.apiKey).emails.send({
    from: config.from,
    to: config.to,
    subject: email.subject,
    replyTo: email.replyTo,
    text: email.text,
    html: email.html,
  });

  if (error) {
    console.error("Contact email failed", error);

    return Response.json(
      {
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    message: "Thank you for reaching out. I will get back to you soon.",
  });
}
