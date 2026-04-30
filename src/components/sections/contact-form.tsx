"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { validateContactForm } from "@/lib/contact";
import type { ContactFormInput } from "@/types/portfolio";

const reasons = [
  "Research collaboration",
  "Internship opportunity",
  "Club / student initiative",
  "Speaking / workshop",
  "Academic networking",
  "Other",
];

type FormStatus =
  | { kind: "idle"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormInput = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      reason: String(formData.get("reason") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const validation = validateContactForm(payload);
    if (!validation.ok) {
      setErrors(validation.errors as Record<string, string>);
      setStatus({
        kind: "error",
        message: "Please check the highlighted fields.",
      });
      return;
    }

    setErrors({});
    setSubmitting(true);
    setStatus({ kind: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit");
      }

      form.reset();
      setStatus({
        kind: "success",
        message:
          result?.message ||
          "Thank you for reaching out. I will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or contact me directly by email.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[#dce4dc] bg-white p-5 shadow-sm"
      noValidate
    >
      <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <span>Website</span>
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required />
        <Field label="Email" name="email" type="email" error={errors.email} required />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Organization / Institution" name="organization" />
        <label className="block">
          <span className="text-sm font-semibold text-[#10223a]">
            Reason for contact
          </span>
          <select
            name="reason"
            className="mt-2 min-h-11 w-full rounded-md border border-[#ccd8ce] bg-white px-3 text-sm text-[#10223a] outline-none transition focus:border-[#2b8c7f] focus:ring-2 focus:ring-[#2b8c7f]/20"
            defaultValue="Research collaboration"
          >
            {reasons.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-semibold text-[#10223a]">Message</span>
        <textarea
          name="message"
          rows={6}
          required
          className="mt-2 w-full rounded-md border border-[#ccd8ce] bg-white px-3 py-3 text-sm text-[#10223a] outline-none transition focus:border-[#2b8c7f] focus:ring-2 focus:ring-[#2b8c7f]/20"
        />
        {errors.message ? (
          <span className="mt-1 block text-xs font-semibold text-[#9c3b30]">
            {errors.message}
          </span>
        ) : null}
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#113f35] bg-[#113f35] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b2f28] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={17} aria-hidden="true" />
          {submitting ? "Sending" : "Send message"}
        </button>
        {status.message ? (
          <p
            className={
              status.kind === "success"
                ? "text-sm font-semibold text-[#2b6f63]"
                : "text-sm font-semibold text-[#9c3b30]"
            }
            aria-live="polite"
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#10223a]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 min-h-11 w-full rounded-md border border-[#ccd8ce] bg-white px-3 text-sm text-[#10223a] outline-none transition focus:border-[#2b8c7f] focus:ring-2 focus:ring-[#2b8c7f]/20"
      />
      {error ? (
        <span className="mt-1 block text-xs font-semibold text-[#9c3b30]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
