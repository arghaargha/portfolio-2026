import type { ContactFormInput } from "@/types/portfolio";

const DEFAULT_TO_EMAIL = "antarachakraborty030@gmail.com";
const DEFAULT_FROM_EMAIL = "Antara Chakraborty Portfolio <onboarding@resend.dev>";

type ContactEmailConfigSuccess = {
  ok: true;
  apiKey?: string;
  dryRun: boolean;
  from: string;
  to: string;
};

type ContactEmailConfigError = {
  ok: false;
  message: string;
};

export type ContactEmailConfig =
  | ContactEmailConfigSuccess
  | ContactEmailConfigError;

export type ContactEmailPayload = {
  subject: string;
  replyTo: string;
  text: string;
  html: string;
};

export function resolveContactEmailConfig(
  env: Record<string, string | undefined> = process.env,
): ContactEmailConfig {
  const dryRun = env.CONTACT_DRY_RUN === "true";
  const apiKey = env.RESEND_API_KEY?.trim();

  if (!dryRun && !apiKey) {
    return {
      ok: false,
      message:
        "Contact email is not configured yet. Please contact me directly by email.",
    };
  }

  return {
    ok: true,
    apiKey,
    dryRun,
    from: env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO_EMAIL,
  };
}

export function buildContactEmail(
  input: ContactFormInput,
  receivedAt = new Date(),
): ContactEmailPayload {
  const name = normalize(input.name);
  const email = normalize(input.email);
  const organization = normalize(input.organization) || "Not provided";
  const reason = normalize(input.reason) || "General inquiry";
  const message = normalize(input.message);
  const received = receivedAt.toISOString();

  const subject = `Portfolio contact: ${reason} from ${name}`;
  const text = [
    `New portfolio contact request`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization / Institution: ${organization}`,
    `Reason: ${reason}`,
    `Received: ${received}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #10223a;">
      <h2 style="margin: 0 0 16px;">New portfolio contact request</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${emailRow("Name", name)}
        ${emailRow("Email", email)}
        ${emailRow("Organization / Institution", organization)}
        ${emailRow("Reason", reason)}
        ${emailRow("Received", received)}
      </table>
      <div style="margin-top: 20px;">
        <strong>Message</strong>
        <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  return {
    subject,
    replyTo: email,
    text,
    html,
  };
}

function emailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 8px 12px; border: 1px solid #dce4dc; font-weight: 700; width: 210px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding: 8px 12px; border: 1px solid #dce4dc;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function normalize(value?: string) {
  return value?.trim() ?? "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
