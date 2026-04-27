import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingForm } from "@/components/BookingForm";
import { CITIES, SITE_NAME } from "@/lib/site";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_NUMBER,
  generalInquiryMessage,
  whatsappLink,
} from "@/lib/whatsapp";

const offices = [
  {
    city: "Lagos (HQ)",
    address: "12B Akin Adesola Street, Victoria Island, Lagos",
    phone: PHONE_DISPLAY,
  },
  {
    city: "Abuja",
    address: "Plot 1421, Aminu Kano Crescent, Wuse 2, Abuja",
    phone: PHONE_DISPLAY,
  },
  {
    city: "Port Harcourt",
    address: "27 Olu Obasanjo Road, GRA Phase 2, Port Harcourt",
    phone: PHONE_DISPLAY,
  },
];

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    telephone: PHONE_TEL,
    email: EMAIL,
    areaServed: CITIES,
    address: {
      "@type": "PostalAddress",
      streetAddress: offices[0].address,
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact WHYTE Logistics — Book Your Chauffeur"
        description="Reach WHYTE Logistics by phone, WhatsApp, email or our online booking form. Available 24/7 across Lagos, Abuja, Port Harcourt, Kano and Enugu."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="border-b border-border/60 bg-card/20">
        <div className="container-luxe py-20 md:py-28">
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Let's plan your <span className="italic text-gradient-gold">next ride</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Reach out by phone, WhatsApp, email — or use the form below. We respond to every inquiry within minutes, 24 hours a day.
          </p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="container-luxe py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <ContactCard
            Icon={Phone}
            title="Call us"
            sub="Available 24/7"
            value={PHONE_DISPLAY}
            href={`tel:${PHONE_TEL}`}
            cta="Tap to call"
          />
          <ContactCard
            Icon={MessageCircle}
            title="WhatsApp"
            sub="Fastest response"
            value={PHONE_DISPLAY}
            href={whatsappLink(generalInquiryMessage(), WHATSAPP_NUMBER)}
            cta="Open chat"
            highlight
          />
          <ContactCard
            Icon={Mail}
            title="Email"
            sub="For quotes & invoicing"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
            cta="Send email"
          />
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="border-t border-border/60 bg-card/20">
        <div className="container-luxe py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr] lg:items-start">
            <div>
              <span className="eyebrow">Reservation form</span>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                Request a <span className="italic text-gradient-gold">quote</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Share your trip details and we'll confirm availability and pricing within minutes.
              </p>

              <div className="mt-8 space-y-5 border-t border-border pt-6">
                <InfoRow Icon={Clock} title="Hours">
                  24 hours · 7 days a week
                </InfoRow>
                <InfoRow Icon={MapPin} title="Coverage">
                  {CITIES.join(" · ")}
                </InfoRow>
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Follow</p>
                <div className="mt-3 flex gap-3">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social link"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="container-luxe py-20">
        <div className="text-center">
          <span className="eyebrow">Our offices</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Where to <span className="italic text-gradient-gold">find us</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offices.map((o) => (
            <article
              key={o.city}
              className="rounded-lg border border-border bg-card/60 p-7 transition-colors hover:border-primary/50"
            >
              <h3 className="font-display text-xl text-primary">{o.city}</h3>
              <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {o.address}
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{" "}
                <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                  {o.phone}
                </a>
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Don't see your city? We also operate on request in Kano, Enugu, Calabar and across the country.{" "}
          <Link to="/services" className="text-primary hover:underline">
            See all services
          </Link>
          .
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactCard({
  Icon,
  title,
  sub,
  value,
  href,
  cta,
  highlight = false,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  value: string;
  href: string;
  cta: string;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group rounded-lg border p-7 transition-all ${
        highlight
          ? "border-primary/60 bg-card shadow-gold"
          : "border-border bg-card/60 hover:border-primary/50"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{sub}</p>
      <h3 className="mt-1 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-base text-foreground/90">{value}</p>
      <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
        {cta} →
      </p>
    </a>
  );
}

function InfoRow({
  Icon,
  title,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 text-primary" />
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
        <p className="text-sm text-foreground/90">{children}</p>
      </div>
    </div>
  );
}
