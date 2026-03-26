/**
 * CONTACT_INFO
 * Centralized contact information for the entire project.
 * To update the phone number, ONLY edit the PHONE_DIGITS constant below.
 */

const PHONE_DIGITS = "3107203270"; // EDIT ONLY THIS LINE TO CHANGE THE PHONE NUMBER

export const CONTACT_INFO = {
  phone: `+57 ${PHONE_DIGITS.slice(0, 3)} ${PHONE_DIGITS.slice(3, 6)} ${PHONE_DIGITS.slice(6)}`,
  phoneRaw: PHONE_DIGITS,
  whatsappUrl: `https://wa.me/57${PHONE_DIGITS}`,
  telUrl: `tel:+57${PHONE_DIGITS}`,
  email: "servicrep04@gmail.com",
  address: "Carrera 14 # 77a-87, Mz 4 Cs 11, Los Robles, Soledad, Colombia",
  location: "Soledad, Colombia",
  instagramUrl: "https://www.instagram.com/servicrep",
  facebookUrl: "https://facebook.com/servicrep",
  linkedinUrl: "https://linkedin.com/company/servicrep",
};
