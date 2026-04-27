import { useMemo, useState } from "react";
import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FleetCard } from "@/components/FleetCard";
import { fleet, tiers, type Tier } from "@/data/fleet";
import { cn } from "@/lib/utils";

export default function FleetIndex() {
  const [filter, setFilter] = useState<Tier | "All">("All");

  const filtered = useMemo(
    () => (filter === "All" ? fleet : fleet.filter((v) => v.tier === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Our Luxury Fleet — WHYTE Logistics"
        description="Browse our chauffeur-driven luxury fleet — Mercedes S-Class, G-Class, V-Class, Sprinter, Lexus LX 600, Range Rover Sport, Cadillac Escalade and more."
        canonicalPath="/fleet"
      />
      <SiteHeader />

      <section className="border-b border-border/60 bg-card/20">
        <div className="container-luxe py-20 md:py-28">
          <span className="eyebrow">Our fleet</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            A curated collection of
            <br />
            <span className="italic text-gradient-gold">flagship vehicles</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Each vehicle is chauffeur-driven, fully insured and maintained to flagship standards.
          </p>
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="flex flex-wrap gap-2">
          {(["All", ...tiers] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors",
                filter === t
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <FleetCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
