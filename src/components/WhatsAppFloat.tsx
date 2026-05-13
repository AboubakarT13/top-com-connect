import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site-config";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppFloat() {
  const url = buildWhatsAppUrl(
    "Bonjour TOP COM! 👋\nJe viens de visiter votre site et je souhaite avoir un devis pour :\n",
  );
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
