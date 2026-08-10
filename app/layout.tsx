import type { Metadata } from "next";
import { Zilla_Slab, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-zilla",
});

const work = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Royal Group | Integrated Agro-Allied Enterprise, Delta State",
  description:
    "Royal Group is a Nigerian agro-allied enterprise integrating livestock, aquaculture, cassava processing, cold storage and agribusiness training — from farm to market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${zilla.variable} ${work.variable} ${plexMono.variable}`}>
      <head>
        {/* Chatbot Integration Ready:
            The custom ChatBot component below provides a functional chat widget.
            For production with AI chatbot capabilities, integrate:
            - Tidio (tidio.co) - Add script with real account ID
            - Botpress (botpress.com) - Add webchat script
            - Custom AI via OpenAI/Anthropic
            Current setup uses WhatsApp integration as the backend.
        */}
      </head>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}
