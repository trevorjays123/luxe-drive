import { Link } from "react-router-dom";
import { Vehicle, formatNaira } from "@/data/fleet";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { vehicleInquiryMessage } from "@/lib/whatsapp";

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-gold">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <div className="absolute left-4 top-4 z-10">
          <span className="rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur">
            {vehicle.tier}
          </span>
        </div>
        <img
          src={vehicle.image}
          alt={`${vehicle.name} luxury chauffeur car`}
          loading="lazy"
          width={1280}
          height={832}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl">{vehicle.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{vehicle.description}</p>

        <div className="mt-5 flex items-center gap-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" />
            {vehicle.seats} seats
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 text-primary" />
            {vehicle.luggage} bags
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">From</p>
            <p className="font-display text-xl text-gradient-gold">
              {formatNaira(vehicle.pricing.airportTransfer)}
            </p>
            <p className="text-[10px] text-muted-foreground">/ airport transfer</p>
          </div>
          <Link
            to={`/fleet/${vehicle.slug}`}
            className="group/link inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-primary"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-5">
          <WhatsAppButton
            message={vehicleInquiryMessage(vehicle.name)}
            label="Book this vehicle"
            className="w-full"
            size="sm"
          />
        </div>
      </div>
    </article>
  );
}
