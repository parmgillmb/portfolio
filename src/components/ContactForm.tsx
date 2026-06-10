"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    // No backend in this static build: compose a prefilled email to the owner.
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role or project…"
          className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Send message
        </button>
        {status === "sent" && (
          <p className="text-sm text-accent" role="status">
            Opening your email client…
          </p>
        )}
      </div>
      <p className="text-xs text-muted">
        This form opens your email app with the message pre-filled. Prefer direct?{" "}
        <a href={`mailto:${profile.email}`} className="font-medium text-accent hover:underline">
          {profile.email}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
