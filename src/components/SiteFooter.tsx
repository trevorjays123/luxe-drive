import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { fleet } from "@/data/fleet";
import { CITIES, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-2xl">
            Whyte<span className="text-gradient-gold"> Cars</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{SITE_TAGLINE}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Premium chauffeur-driven luxury car hire across Nigeria.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/fleet", label: "Fleet" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Fleet</h4>
          <ul className="space-y-3 text-sm">
            {fleet.slice(0, 6).map((v) => (
              <li key={v.slug}>
                <Link
                  to={`/fleet/${v.slug}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>{CITIES.join(" · ")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="italic">Comfort. Prompt. Professional.</p>
        </div>
      </div>
    </footer>
  );
}
