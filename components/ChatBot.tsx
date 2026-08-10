"use client";

import { useState } from "react";
import { company } from "@/lib/content";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-32 right-5 z-40 flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-ink shadow-lg hover:bg-gold-light sm:bottom-40 sm:right-8"
          aria-label="Open chat widget"
        >
          <span>💬 Chat</span>
        </button>
      )}

      {/* Chat Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-40 w-96 max-w-[calc(100vw-2rem)] rounded-2xl border border-ink/10 bg-parchment shadow-2xl overflow-hidden flex flex-col sm:bottom-8 sm:right-8">
          {/* Header */}
          <div className="bg-leaf border-b border-gold/30 px-6 py-4 text-parchment flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-gold-light">Royal Group</h3>
              <p className="font-body text-xs text-parchment/60">Typically replies within minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-parchment/60 hover:text-gold rounded p-1"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-96">
            {/* Bot Message */}
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf text-parchment text-xs font-bold">
                RG
              </div>
              <div className="flex-1 rounded-lg bg-ink/5 px-4 py-3">
                <p className="font-body text-sm text-ink">
                  Hi! 👋 Welcome to Royal Group. How can we help you today?
                </p>
              </div>
            </div>

            {/* Quick Options */}
            <div className="mt-2 space-y-2">
              <p className="font-body text-xs text-ink/50">Choose an option or message us:</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(
                    "I'd like to know more about your operations"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left rounded-lg bg-ink text-parchment px-3 py-2 font-body text-sm hover:bg-leaf transition"
                >
                  📊 Our Operations
                </a>
                <a
                  href={`https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(
                    "Tell me about your training programs"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left rounded-lg bg-ink text-parchment px-3 py-2 font-body text-sm hover:bg-leaf transition"
                >
                  🎓 Training Programs
                </a>
                <a
                  href={`https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(
                    "I'm interested in a partnership"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left rounded-lg bg-ink text-parchment px-3 py-2 font-body text-sm hover:bg-leaf transition"
                >
                  🤝 Partnership Inquiry
                </a>
                <a
                  href={`tel:+${company.phoneIntl}`}
                  className="text-left rounded-lg bg-gold text-ink px-3 py-2 font-body text-sm font-semibold hover:bg-gold-light transition"
                >
                  ☎️ Call Us
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf text-parchment text-xs font-bold">
                RG
              </div>
              <div className="flex-1 rounded-lg bg-ink/5 px-4 py-3">
                <p className="font-body text-xs text-ink/70">
                  Prefer to write? Fill out our{" "}
                  <a href="/contact" className="underline hover:text-ink font-semibold">
                    contact form
                  </a>
                  {" "}and we&apos;ll get back to you shortly.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-ink/10 bg-parchment px-6 py-3 text-center">
            <p className="font-body text-xs text-ink/50">
              Powered by WhatsApp & Direct Contact
            </p>
          </div>
        </div>
      )}
    </>
  );
}
