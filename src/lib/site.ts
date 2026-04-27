export const SITE_NAME = "WHYTE Logistics";
export const SITE_SHORT = "WHYTE";
export const SITE_TAGLINE = "Comfort. Prompt. Professional.";
export const CITIES = ["Abuja", "Lagos", "Port Harcourt", "Kano", "Enugu"];

export function getSiteUrl(): string {
  if (typeof window !== "undefined") return window.location.origin;
  return "https://whytelogistics.com";
}

export function absoluteUrl(path: string) {
  const base = getSiteUrl().replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
