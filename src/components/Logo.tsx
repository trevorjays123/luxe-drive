import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

/**
 * WHYTE Logistics monogram — gold "WL" inside a thin square frame.
 */
export function Logo({ className, size = 40, showWordmark = true }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="relative inline-flex items-center justify-center rounded-sm border border-primary/70 bg-background"
        style={{ width: size, height: size }}
      >
        <span className="absolute inset-[3px] rounded-[2px] border border-primary/30" />
        <span
          className="font-display font-semibold leading-none text-gradient-gold"
          style={{ fontSize: size * 0.5, letterSpacing: "-0.03em" }}
        >
          WL
        </span>
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-[0.2em] text-foreground">WHYTE</span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
            Logistics
          </span>
        </span>
      )}
    </span>
  );
}
