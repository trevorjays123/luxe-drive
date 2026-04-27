import { Link } from "react-router-dom";
import { Award, ShieldCheck, Clock, Sparkles, Users, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Testimonials } from "@/components/Testimonials";
import { CITIES } from "@/lib/site";
import chauffeurImg from "@/assets/chauffeur.jpg";
import heroImg from "@/assets/hero.jpg";

const values = [
  {
    Icon: Award,
    title: "Editorial standard",
    body: "Every detail — from the chauffeur's tie to the cabin fragrance — is tuned to a five-star benchmark.",
  },
  {
    Icon: ShieldCheck,
    title: "Trust & discretion",
    body: "Vetted, NDA-bound chauffeurs trained to handle dignitaries, executives and private clients with absolute discretion.",
  },
  {
    Icon: Clock,
    title: "On-time, every time",
    body: "Flights tracked, traffic monitored, schedules buffered. We don't make excuses — we make arrivals.",
  },
  {
    Icon: Sparkles,
    title: "Flagship fleet only",
    body: "We curate, never compromise. Each vehicle is hand-picked, fully insured and maintained beyond manufacturer schedule.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About WHYTE Logistics — Nigeria's Editorial Chauffeur House"
        description="WHYTE Logistics is Nigeria's editorial chauffeur house — flagship vehicles, vetted chauffeurs and concierge-grade service across five cities."
        canonicalPath="/about"
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="container-luxe py-24 md:py-32">
          <span className="eyebrow">About us</span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Nigeria's editorial
            <br />
            <span className="italic text-gradient-gold">chauffeur house</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            WHYTE Logistics was founded on a simple belief — that getting from A to B should feel like part of the destination, not a chore on the way to it.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container-luxe grid gap-14 py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-border shadow-luxe">
            <img
              src={chauffeurImg}
              alt="WHYTE Logistics professional chauffeur"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -right-6 -top-6 hidden rounded-md border border-primary/40 bg-card px-6 py-5 shadow-gold md:block">
            <p className="font-display text-3xl text-gradient-gold">2009</p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Established</p>
          </div>
        </div>
        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Built for <span className="italic text-gradient-gold">discerning</span> travellers
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              What began in 2009 with a single Mercedes E-Class and a hand-shake promise has grown into one of Nigeria's most trusted private chauffeur companies — moving boards, dignitaries, brides and visiting delegations across five cities.
            </p>
            <p>
              Every car in our fleet is chosen by hand. Every chauffeur is interviewed, trained and continually mentored. And every booking — whether it's a 30-minute airport run or a 10-day inter-state programme — is handled by a small, senior team who answer the phone themselves.
            </p>
            <p>
              We've never aimed to be the biggest. We aim to be the most trusted. That, more than any award, is the standard we measure ourselves against.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border/60 bg-card/20">
        <div className="container-luxe py-20">
          <div className="text-center">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Four <span className="italic text-gradient-gold">non-negotiables</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-border bg-card/60 p-7 transition-colors hover:border-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <v.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-luxe py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <Stat icon={Users} n="2,400+" label="Clients served" />
          <Stat icon={Sparkles} n="9" label="Flagship vehicles" />
          <Stat icon={MapPin} n={`${CITIES.length}`} label="Cities covered" />
          <Stat icon={Award} n="15+" label="Years in service" />
        </div>
      </section>

      {/* CHAUFFEURS */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="container-luxe py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Our chauffeurs</span>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                The people who make the <span className="italic text-gradient-gold">difference</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Our chauffeurs aren't drivers — they're hospitality professionals. Each one completes a structured onboarding covering defensive driving, executive protocol, route mastery and confidentiality.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Minimum 5 years professional driving experience</li>
                <li>• Background-checked & police-verified</li>
                <li>• Certified in defensive & advanced driving</li>
                <li>• Trained in five-star hospitality protocol</li>
                <li>• Bound by client confidentiality agreements</li>
              </ul>
            </div>
            <div className="rounded-lg border border-primary/30 bg-card p-8 shadow-gold">
              <p className="font-display text-2xl italic">
                "We don't sell rides. We sell the feeling of being looked after — from the moment your door is opened to the moment it's closed behind you."
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">
                — The WHYTE Logistics team
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        eyebrow="Client voices"
        heading="Trusted by Nigeria's finest"
        subheading="A small selection from over a decade of editorial-grade service."
      />

      {/* CTA */}
      <section className="container-luxe py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl">
          Ready to ride <span className="italic text-gradient-gold">with us?</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/fleet"
            className="rounded-md bg-gradient-gold px-7 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:opacity-90"
          >
            Explore the fleet
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-primary/60 px-7 py-3 text-sm font-medium text-primary hover:bg-primary/10"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({
  icon: Icon,
  n,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  n: string;
  label: string;
}) {
  return (
    <div className="border-t border-border pt-6">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-3 font-display text-4xl text-gradient-gold">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}
