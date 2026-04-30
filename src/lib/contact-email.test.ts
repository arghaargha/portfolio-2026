import { describe, expect, it } from "vitest";
import {
  buildContactEmail,
  resolveContactEmailConfig,
} from "./contact-email";

describe("buildContactEmail", () => {
  it("creates a safe portfolio contact email payload", () => {
    const payload = buildContactEmail(
      {
        name: "Dr <Raina>",
        email: "professor@example.edu",
        organization: "Environmental Lab",
        reason: "Research collaboration",
        message: "Could we discuss <script>alert('x')</script> genomic analysis?",
      },
      new Date("2026-04-29T10:30:00.000Z"),
    );

    expect(payload.subject).toBe(
      "Portfolio contact: Research collaboration from Dr <Raina>",
    );
    expect(payload.replyTo).toBe("professor@example.edu");
    expect(payload.text).toContain("Environmental Lab");
    expect(payload.html).toContain("Dr &lt;Raina&gt;");
    expect(payload.html).toContain("&lt;script&gt;alert(&#39;x&#39;)&lt;/script&gt;");
    expect(payload.html).not.toContain("<script>");
  });
});

describe("resolveContactEmailConfig", () => {
  it("requires an API key unless dry-run mode is enabled", () => {
    expect(resolveContactEmailConfig({}).ok).toBe(false);

    expect(
      resolveContactEmailConfig({
        CONTACT_DRY_RUN: "true",
      }),
    ).toMatchObject({
      ok: true,
      dryRun: true,
    });
  });
});
