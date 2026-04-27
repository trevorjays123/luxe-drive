import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Adaeze Okafor",
    role: "Managing Director, Lagos",
    quote:
      "WHYTE Logistics handled our board's airport pickups for three days straight — flawlessly. The chauffeurs were impeccable and the S-Class was spotless every morning.",
    rating: 5,
  },
  {
    name: "Tunde Bakare",
    role: "Investment Banker, Abuja",
    quote:
      "I use them weekly for my Abuja-Lagos meetings. Always on time, always discreet. The G-Wagon is my regular — never disappoints.",
    rating: 5,
  },
  {
    name: "Mrs. Chidinma Eze",
    role: "Wedding Planner, Port Harcourt",
    quote:
      "Booked three V-Class vans and a Sprinter for our client's wedding party. The convoy looked stunning and the team was on point from start to finish.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Tech Founder, Lagos",
    quote:
      "Brought a delegation of investors from London — WHYTE made the entire trip feel five-star. From airport to hotel to meetings, every detail was handled.",
    rating: 5,
  },
  {
    name: "Hauwa Mohammed",
    role: "Diplomat, Kano",
    quote:
      "Discreet, professional and always punctual. The Land Cruiser handled our up-country trip to Kaduna effortlessly. Highly recommended.",
    rating: 5,
  },
  {
    name: "Bola Adeyemi",
    role: "Brand Director, Lagos",
    quote:
      "We needed an Escalade for an artist transfer at short notice — WHYTE delivered within the hour. Cabin was pristine, driver was courteous. World-class.",
    rating: 5,
  },
];

interface Props {
  items?: Testimonial[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

export function Testimonials({
  items = defaultTestimonials,
  eyebrow = "Testimonials",
  heading = "What our clients say",
  subheading = "Trusted by executives, dignitaries and discerning travellers across Nigeria.",
}: Props) {
  return (
    <section className="border-t border-border/60 bg-card/20">
      <div className="container-luxe py-24">
        <div className="text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic text-gradient-gold">{heading.split(" ").slice(-1)}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subheading}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <article
              key={i}
              className="group relative flex flex-col justify-between rounded-lg border border-border bg-card/60 p-7 shadow-luxe transition-colors hover:border-primary/50"
            >
              <Quote className="h-8 w-8 text-primary/40" aria-hidden />
              <p className="mt-5 text-foreground/90">"{t.quote}"</p>

              <div className="mt-7 flex items-center justify-between border-t border-border/70 pt-5">
                <div>
                  <p className="font-display text-base">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.role}
                  </p>
                </div>
                {t.rating && (
                  <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
