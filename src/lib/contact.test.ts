import { describe, expect, it } from "vitest";
import { isLikelyBotSubmission, validateContactForm } from "./contact";

describe("validateContactForm", () => {
  it("accepts a complete professional contact request", () => {
    const result = validateContactForm({
      name: "Dr Raina",
      email: "professor@example.edu",
      organization: "Research Lab",
      reason: "Research collaboration",
      message: "I would like to discuss an environmental genomics project.",
    });

    expect(result).toEqual({ ok: true, errors: {} });
  });

  it("requires name, a valid email, and a meaningful message", () => {
    const result = validateContactForm({
      name: " ",
      email: "not-an-email",
      message: "short",
    });

    expect(result.ok).toBe(false);
    expect(result.errors.name).toBe("Name is required.");
    expect(result.errors.email).toBe("Enter a valid email address.");
    expect(result.errors.message).toBe(
      "Message should be at least 12 characters.",
    );
  });

  it("flags hidden honeypot submissions as likely bot traffic", () => {
    expect(
      isLikelyBotSubmission({
        name: "Spam Bot",
        email: "bot@example.com",
        message: "This is a spammy but long enough message.",
        website: "https://spam.example",
      }),
    ).toBe(true);

    expect(
      isLikelyBotSubmission({
        name: "Dr Raina",
        email: "professor@example.edu",
        message: "I would like to discuss an environmental genomics project.",
      }),
    ).toBe(false);
  });
});
