import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { Logo } from "@/components/Logo";

const services = [
  { label: "Airport Transfers", to: "/services#airport" },
  { label: "Corporate Chauffeur", to: "/services#corporate" },
  { label: "Weddings & Events", to: "/services#weddings" },
  { label: "City Tours", to: "/services#tours" },
  { label: "Inter-state Travel", to: "/services#interstate" },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Fleet" },
];

const tail = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "text-sm font-medium tracking-wide transition-colors",
    isActive ? "text-primary" : "text-foreground/80 hover:text-primary",
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container-luxe flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="WHYTE Logistics home">
          <Logo size={40} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-wide text-foreground/80 outline-none transition-colors hover:text-primary">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((s) => (
                <DropdownMenuItem key={s.to} asChild>
                  <Link to={s.to}>{s.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {tail.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <Button asChild className="bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90">
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88%] max-w-sm border-l-border/60 bg-background">
            <div className="mt-8 flex flex-col gap-6">
              {[...links, ...tail].map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-display text-2xl",
                      isActive ? "text-primary" : "text-foreground hover:text-primary",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Accordion type="single" collapsible>
                <AccordionItem value="services" className="border-0">
                  <AccordionTrigger className="font-display text-2xl text-foreground hover:text-primary hover:no-underline">
                    Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3 pl-1 pt-2">
                      {services.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          onClick={() => setOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
                <Button asChild className="bg-gradient-gold text-primary-foreground shadow-gold">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
