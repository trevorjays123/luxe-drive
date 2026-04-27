import { Link } from "react-router-dom";
import {
  Plane,
  Briefcase,
  Heart,
  Camera,
  Map as MapIcon,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generalInquiryMessage } from "@/lib/whatsapp";
import airportImg from "@/assets/services/airport.jpg";
import corporateImg from "@/assets/services/corporate.jpg";
import weddingsImg from "@/assets/services/weddings.jpg";
import toursImg from "@/assets/services/tours.jpg";
import interstateImg from "@/assets/services/interstate.jpg";
import securityImg from "@/assets/services/security.jpg";

interface Service {
  id: string;
  Icon: React.ComponentType<{ className?: string }>;
  image: string;
  title: string;
  tagline: string;
  body: string;
  inclusions: string[];
}

const services: Service[] = [
  {
    id: "airport",
    Icon: Plane,
    title: "Airport Transfers",
    tagline: "Curb-to-cabin in five-star comfort.",
    body: "Meet-and-greet pickups at every major Nigerian airport. We monitor flight times, track delays and ensure your chauffeur is curbside the moment you land.",
    inclusions: [
      "Flight tracking & meet-and-greet",
      "Help with luggage and trolleys",
      "60 min complimentary wait time",
      "Bottled water and chilled towels",
    ],
  },
  {
    id: "corporate",
    Icon: Briefcase,
    title: "Corporate Chauffeur",
    tagline: "A mobile boardroom for your busiest day.",
    body: "Hourly, half-day or full-day chauffeur hire for executives, board members and visiting delegations. Discreet, on-time and dressed to match your brand.",
    inclusions: [
      "Suited, vetted chauffeurs",
      "Wi-Fi & phone chargers on board",
      "Multi-stop itineraries",
      "Monthly retainer plans available",
    ],
  },
  {
    id: "weddings",
    Icon: Heart,
    title: "Weddings & Events",
    tagline: "An entrance worthy of the moment.",
    body: "Bridal cars, family convoys and guest shuttles arranged with the same care as the rest of your day. Ribbons, signage and decor coordinated with your planner.",
    inclusions: [
      "Coordinated convoys (S-Class, V-Class, Sprinter)",
      "Wedding decor & ribbons",
      "Bridal & guest schedules",
      "Backup vehicle on standby",
    ],
  },
  {
    id: "tours",
    Icon: Camera,
    title: "City Tours",
    tagline: "Discover Nigeria from the back of a flagship.",
    body: "Guided private tours of Lagos, Abuja, Calabar and Lekki. Curated stops, English-speaking chauffeur-guides and full flexibility on the day.",
    inclusions: [
      "Customisable half- or full-day tours",
      "Concierge restaurant reservations",
      "Bottled water & light refreshments",
      "Optional hotel coordination",
    ],
  },
  {
    id: "interstate",
    Icon: MapIcon,
    title: "Inter-state Travel",
    tagline: "Long-distance comfort, end to end.",
    body: "Lagos–Abuja, Abuja–Kaduna, Lagos–Ibadan, Port Harcourt–Owerri and beyond. Two-driver options for overnight runs, with route planning and rest stops included.",
    inclusions: [
      "Two-driver option for long routes",
      "Inter-state vehicle insurance",
      "Pre-planned rest & fuel stops",
      "GPS tracking shared with you",
    ],
  },
  {
    id: "security",
    Icon: ShieldCheck,
    title: "Secure VIP Movement",
    tagline: "Discretion, protocol and peace of mind.",
    body: "For dignitaries and high-profile clients, we coordinate convoy protocol, lead vehicles and (on request) licensed security partners.",
    inclusions: [
      "Convoy planning & lead vehicle",
      "Licensed security partners (on request)",
      "Discreet, NDA-bound chauffeurs",
      "Encrypted itinerary handling",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Services — Chauffeur, Airport, Weddings & VIP | WHYTE Logistics"
        description="Airport transfers, corporate chauffeur, weddings, city tours, inter-state travel and secure VIP movement across Nigeria."
        canonicalPath="/services"
      />
      <SiteHeader />

      <section className="border-b border-border/60 bg-card/20">
        <div className="container-luxe py-20 md:py-28">
          <span className="eyebrow">Our services</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Tailored chauffeur services for
            <br />
            <span className="italic text-gradient-gold">every occasion</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            From quiet airport runs to multi-vehicle wedding convoys — every WHYTE Logistics service is delivered to the same flagship standard.
          </p>
        </div>
      </section>

      <section className="container-luxe py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="group relative flex flex-col rounded-lg border border-border bg-card/60 p-7 shadow-luxe transition-colors hover:border-primary/50 scroll-mt-28"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary">
                <s.Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-2xl">{s.title}</h2>
              <p className="mt-1 text-sm italic text-primary/80">{s.tagline}</p>
              <p className="mt-4 text-sm text-muted-foreground">{s.body}</p>

              <ul className="mt-6 space-y-2 border-t border-border/70 pt-5">
                {s.inclusions.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary"
                >
                  Request quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="container-luxe grid gap-8 py-16 text-center md:grid-cols-[1fr,auto] md:items-center md:text-left">
          <div>
            <span className="eyebrow">Need something custom?</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              We build <span className="italic text-gradient-gold">bespoke</span> itineraries
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell us what you need — we'll quote within the hour.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <WhatsAppButton message={generalInquiryMessage()} size="lg" />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-primary/60 px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
