import { Icon } from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site do Instituto Servir.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-16 w-16 animate-wiggle items-center justify-center rounded-full border-[3px] border-outline bg-[#25d366] text-outline shadow-[4px_4px_0_var(--color-pop)] transition-transform hover:scale-110"
    >
      <Icon name="whatsapp" className="h-8 w-8" />
    </a>
  );
}
