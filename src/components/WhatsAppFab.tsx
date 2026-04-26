import { MessageCircle } from "lucide-react";
import { whatsappLink, generalInquiryMessage } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(generalInquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
