import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20IVF%20consultation."
    target="_blank"
    rel="noopener"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-glow hover:scale-110 transition-transform animate-pulse-soft"
  >
    <MessageCircle className="h-7 w-7" />
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
  </a>
);

export default WhatsAppButton;
