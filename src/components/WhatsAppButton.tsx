import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface Props {
  message: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
  label?: string;
}

export function WhatsAppButton({
  message,
  className,
  variant = "default",
  size = "default",
  label = "Book on WhatsApp",
}: Props) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        variant === "default" &&
          "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold border-0 font-medium",
        variant === "outline" &&
          "border-primary/60 text-primary hover:bg-primary/10 hover:text-primary",
        className,
      )}
    >
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
