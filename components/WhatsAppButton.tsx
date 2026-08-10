import { company } from "@/lib/content";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Royal Group, I'd like to know more about your products and services."
  );
  const href = `https://wa.me/${company.phoneIntl}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Royal Group on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-leaf py-3 pl-3 pr-4 text-parchment shadow-lg shadow-soil/30 transition-all hover:pr-5 hover:bg-leaf-dark sm:bottom-8 sm:right-8"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-parchment text-leaf">
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.01 3C9.38 3 4 8.37 4 15c0 2.36.68 4.55 1.86 6.4L4 29l7.79-1.83A11.9 11.9 0 0 0 16.01 27C22.63 27 28 21.63 28 15S22.63 3 16.01 3Zm0 21.7c-2.02 0-3.9-.58-5.49-1.58l-.39-.24-4.62 1.09 1.13-4.5-.26-.41A9.63 9.63 0 0 1 6.3 15c0-5.36 4.36-9.7 9.71-9.7 5.36 0 9.7 4.34 9.7 9.7 0 5.36-4.34 9.7-9.7 9.7Zm5.32-7.27c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.2.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.57-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.19 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
        </svg>
      </span>
      <span className="font-body text-sm font-semibold">
        Chat on WhatsApp
      </span>
    </a>
  );
}
