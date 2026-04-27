export const WHATSAPP_NUMBER = "2348058174134";
export const PHONE_DISPLAY = "+234 805 817 4134";
export const PHONE_TEL = "+2348058174134";
export const EMAIL = "hello@whytelogistics.com";

export function whatsappLink(message: string, phone: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function vehicleInquiryMessage(name: string) {
  return `Hello 👋, I'm interested in the ${name}. Please share availability and a quote.`;
}

export function generalInquiryMessage() {
  return `Hello WHYTE Logistics 👋, I'd like to book a chauffeur service.`;
}
