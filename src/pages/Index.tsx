import { Link } from "react-router-dom";
import { Award, Clock, ShieldCheck, Wifi, Zap, Umbrella, Droplets, Cookie, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FleetCard } from "@/components/FleetCard";
import { BookingForm } from "@/components/BookingForm";
import { fleet } from "@/data/fleet";
import { CITIES, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import heroImg from "@/assets/hero.jpg";
import chauffeurImg from "@/assets/chauffeur.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="WHYTE Logistics — Luxury Chauffeur Car Hire in Nigeria"
        description="Premium chauffeur-driven luxury car rentals in Abuja, Lagos, Port Harcourt, Kano and Enugu. Mercedes S-Class, G-Class, Range Rover, Escalade and more."
        canonicalPath="/"
        ogImage={heroImg}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Chauffeur opening door of luxury Mercedes-Benz S-Class at a hotel"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-onyx-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="container-luxe flex min-h-[88vh] flex-col justify-center py-24">
          <span className="eyebrow animate-fade-up">WHYTE Logistics</span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem] animate-fade-up">
            Luxury Car Rentals
            <br />
            <span className="italic text-gradient-gold">with Chauffeur</span>
          </h1>
          <p className="mt-7 max-w-xl text-base text-muted-foreground md:text-lg animate-fade-up">
            Discreet, vetted chauffeurs and a hand-picked fleet across {CITIES.slice(0, -1).join(", ")} and {CITIES.slice(-1)}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90">
              <Link to="/contact">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/60 text-primary hover:bg-primary/10 hover:text-primary"
            >
              <Link to="/fleet">Explore Fleet</Link>
            </Button>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border/50 pt-8 animate-fade-up">
            <Stat n="9" label="Premium vehicles" />
            <Stat n="5" label="Cities covered" />
            <Stat n="15+" label="Years experience" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-luxe grid gap-16 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            A private, polished ride —
            <span className="italic text-gradient-gold"> every single time.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            {SITE_NAME} is Nigeria's editorial chauffeur house. We move executives, dignitaries and discerning travellers
            with the discretion of a five-star concierge and the precision of a flagship hotel.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Pillar Icon={Award} title="Award Service" body="Concierge-grade hospitality at every touchpoint." />
            <Pillar Icon={ShieldCheck} title="Vetted Chauffeurs" body="Trained, licensed, background-checked." />
            <Pillar Icon={Clock} title="On-Time Promise" body="Punctual pickups, monitored flights, no excuses." />
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-border shadow-luxe">
            <img
              src={chauffeurImg}
              alt="Professional chauffeur in formal attire beside a luxury car"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-md border border-primary/40 bg-card px-6 py-5 shadow-gold md:block">
            <p className="font-display text-3xl text-gradient-gold">15+</p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </section>

      {/* TAGLINE BANNER */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container-luxe py-16 text-center">
          <p className="eyebrow">Our promise</p>
          <p className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Comfort. <span className="italic text-gradient-gold">Prompt.</span> Professional.
          </p>
        </div>
      </section>

      {/* FLEET GRID */}
      <section className="container-luxe py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Our fleet</span>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              A curated <span className="italic text-gradient-gold">collection</span>
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Nine flagship vehicles across First Class, Business and Group Shuttle tiers.
            </p>
          </div>
          <Link
            to="/fleet"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.slice(0, 6).map((v) => (
            <FleetCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="border-t border-border/60 bg-card/20">
        <div className="container-luxe py-20">
          <div className="text-center">
            <span className="eyebrow">On-board amenities</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Small comforts. <span className="italic text-gradient-gold">Big difference.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            <Amenity Icon={Wifi} label="Free WiFi" />
            <Amenity Icon={Zap} label="Phone Charger" />
            <Amenity Icon={Umbrella} label="Umbrella" />
            <Amenity Icon={Droplets} label="Bottled Water" />
            <Amenity Icon={Cookie} label="Snacks" />
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="container-luxe py-24" id="book">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr] lg:items-start">
          <div>
            <span className="eyebrow">Reserve a vehicle</span>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Book your <span className="italic text-gradient-gold">private ride</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Fill in your details and we'll confirm availability within minutes. Prefer to talk?
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-6 inline-flex items-center gap-2 font-display text-2xl text-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-5 w-5 text-primary" /> {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Available 24/7 · {SITE_TAGLINE}
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-gradient-gold md:text-4xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    </div>
  );
}

function Pillar({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Amenity({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-sm text-foreground/90">{label}</p>
    </div>
  );
}
