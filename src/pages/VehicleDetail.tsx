import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Briefcase, Check, Cog, Users, Calendar } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FleetCard } from "@/components/FleetCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BookingForm } from "@/components/BookingForm";
import { fleet, formatNaira, getVehicle } from "@/data/fleet";
import { vehicleInquiryMessage } from "@/lib/whatsapp";
import NotFound from "@/pages/NotFound";

export default function VehicleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = slug ? getVehicle(slug) : undefined;

  if (!vehicle) return <NotFound />;

  const related = fleet.filter((v) => v.slug !== vehicle.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    image: typeof window !== "undefined" ? `${window.location.origin}${vehicle.image}` : vehicle.image,
    description: vehicle.intro,
    brand: { "@type": "Brand", name: vehicle.name.split(" ")[0] },
    offers: {
      "@type": "Offer",
      priceCurrency: "NGN",
      price: vehicle.pricing.airportTransfer,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${vehicle.name} — Chauffeur Hire | WHYTE Logistics`}
        description={vehicle.intro}
        canonicalPath={`/fleet/${vehicle.slug}`}
        ogImage={vehicle.image}
        jsonLd={jsonLd}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="border-b border-border/60 bg-card/20">
        <div className="container-luxe grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to fleet
            </Link>
            <span className="eyebrow mt-6 block">{vehicle.tier}</span>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] md:text-6xl">
              {vehicle.name}
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">{vehicle.intro}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border/70 py-6">
              <Spec Icon={Users} label="Seats" value={vehicle.seats.toString()} />
              <Spec Icon={Briefcase} label="Bags" value={vehicle.luggage.toString()} />
              <Spec Icon={Cog} label="Trans." value={vehicle.transmission} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton
                message={vehicleInquiryMessage(vehicle.name)}
                label={`Book the ${vehicle.name.split(" ").slice(-1)}`}
                size="lg"
              />
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                Reserve Online
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-border shadow-luxe">
              <img
                src={vehicle.image}
                alt={`${vehicle.name} luxury chauffeur car`}
                width={1280}
                height={900}
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-md border border-primary/40 bg-card px-6 py-5 shadow-gold md:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Model year</p>
              <p className="font-display text-2xl text-gradient-gold">{vehicle.model}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container-luxe py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div>
            <span className="eyebrow">Overview</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              About the <span className="italic text-gradient-gold">{vehicle.name.split(" ").slice(-1)}</span>
            </h2>
            <p className="mt-5 text-muted-foreground">{vehicle.longDescription}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {vehicle.overview.map((s) => (
                <div key={s.title} className="rounded-md border border-border bg-card/40 p-5">
                  <h3 className="font-display text-lg text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-lg border border-primary/40 bg-card p-7 shadow-gold">
              <p className="eyebrow">Hire from</p>
              <p className="mt-2 font-display text-4xl text-gradient-gold">
                {formatNaira(vehicle.pricing.airportTransfer)}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                / airport transfer
              </p>

              <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                <PriceRow label="Half day (5 hrs)" value={formatNaira(vehicle.pricing.halfDay)} />
                <PriceRow label="Full day (10 hrs)" value={formatNaira(vehicle.pricing.fullDay)} />
                <PriceRow label="Additional hour" value={formatNaira(vehicle.pricing.additionalHour)} />
                <PriceRow label="Airport transfer" value={formatNaira(vehicle.pricing.airportTransfer)} />
              </ul>

              <div className="mt-7 grid gap-3">
                <WhatsAppButton
                  message={vehicleInquiryMessage(vehicle.name)}
                  label="Inquire on WhatsApp"
                  className="w-full"
                />
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Calendar className="h-4 w-4" /> Reserve online
                </a>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Included features</p>
                <ul className="mt-3 grid gap-2">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="border-t border-border/60 bg-card/20">
        <div className="container-luxe py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:items-start">
            <div>
              <span className="eyebrow">Reserve this vehicle</span>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Book the <span className="italic text-gradient-gold">{vehicle.name}</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Submit your trip details and we'll confirm availability within minutes.
              </p>
            </div>
            <BookingForm prefill={{ vehicle: vehicle.name }} />
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="container-luxe py-20">
        <span className="eyebrow">You may also like</span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          More from our <span className="italic text-gradient-gold">fleet</span>
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((v) => (
            <FleetCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Spec({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div>
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-2 font-display text-lg">{value}</p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-display text-foreground">{value}</span>
    </li>
  );
}
