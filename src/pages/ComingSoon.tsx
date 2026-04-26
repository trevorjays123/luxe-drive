import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export default function ComingSoon({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${title} — Whyte Cars Logistics`} description={description} canonicalPath={path} />
      <SiteHeader />
      <section className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">Coming soon</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="italic text-gradient-gold">{title.split(" ").slice(-1)}</span>
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">{description}</p>
        <div className="mt-8 flex gap-3">
          <Button asChild className="bg-gradient-gold text-primary-foreground shadow-gold">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/60 text-primary hover:bg-primary/10">
            <Link to="/fleet">Browse Fleet</Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
