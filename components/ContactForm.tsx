"use client";

import { useState, FormEvent } from "react";

// No backend required: submitting opens the visitor's email client with the
// message pre-filled. Swap this for a real API route (e.g. app/api/contact)
// once you have an email service or CRM to send it to.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:info@royalgroup.example?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-1.5">
        <label htmlFor="name" className="font-body text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-lg border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-gold"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="font-body text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-gold"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="font-body text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="rounded-lg border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="justify-self-start rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-parchment hover:bg-gold"
      >
        Send message
      </button>
      {sent && (
        <p className="font-body text-sm text-leaf" role="status">
          Opening your email app to send this &mdash; if nothing opens, email us directly.
        </p>
      )}
    </form>
  );
}
