/**
 * CONTACT_INFO
 * Centralized contact information for the entire project.
 * To update the phone number, ONLY edit the PHONE_DIGITS constant below.
 */

const PHONE_DIGITS = "3107203270"; // EDIT ONLY THIS LINE TO CHANGE THE PHONE NUMBER
const WHATSAPP_MESSAGE =
  "Hola, vengo de la web, me gustaría recibir más información sobre sus servicios a estaciones de gasolina."; // EDIT THIS TO CHANGE THE WHATSAPP MESSAGE
const SUBTLE_MARKER = " [Ref:W-WEB]"; // THIS WILL BE ADDED TO THE END OF THE WHATSAPP MESSAGE

export const CONTACT_INFO = {
  phone: `+57 ${PHONE_DIGITS.slice(0, 3)} ${PHONE_DIGITS.slice(3, 6)} ${PHONE_DIGITS.slice(6)}`,
  phoneRaw: PHONE_DIGITS,
  whatsappUrl: `https://wa.me/57${PHONE_DIGITS}?text=${encodeURIComponent(WHATSAPP_MESSAGE + SUBTLE_MARKER)}`,
  telUrl: `tel:+57${PHONE_DIGITS}`,
  // Prefer corporate email when available; keep centralized here.
  email: "servicrep04@gmail.com",
  address: "Carrera 14 # 77a-87, Mz 4 Cs 11, Los Robles, Soledad, Colombia",
  location: "Soledad, Colombia",
  instagramUrl: "https://www.instagram.com/servicrep",
  facebookUrl: "https://facebook.com/servicrep",
  linkedinUrl: "https://linkedin.com/company/servicrep",
};

export const CTA_LABELS = {
  whatsapp: "Cotizar por WhatsApp",
  services: "Ver servicios",
  howToQuote: "Cómo cotizar",
} as const;
