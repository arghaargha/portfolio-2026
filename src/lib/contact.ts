import type { ContactFormInput, ContactValidationResult } from "@/types/portfolio";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  input: ContactFormInput,
): ContactValidationResult {
  const errors: ContactValidationResult["errors"] = {};

  if (!input.name?.trim()) {
    errors.name = "Name is required.";
  }

  if (!input.email?.trim() || !EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!input.message?.trim() || input.message.trim().length < 12) {
    errors.message = "Message should be at least 12 characters.";
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
  };
}

export function isLikelyBotSubmission(input: ContactFormInput): boolean {
  return Boolean(input.website?.trim());
}
