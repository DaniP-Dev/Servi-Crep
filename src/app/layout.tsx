import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/header/Banner";
import Footer from "@/components/header/Footer";
import JQueryScripts from "@/components/common/JQueryScripts";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = 'https://www.servicrep.com.co';

export const metadata: Metadata = {
  title: {
    default: "ServiCrep - Inspección Técnica y pruebas de hermeticidad - Estaciones de servicio de combustible",
    template: "%s | ServiCrep"
  },
  description: "Organismo de Inspección. Inspección técnica de estaciones de servicio de combustibles y pruebas de hermeticidad a Tanques de almacenamiento de combustible bajo ISO/IEC 17020.",
  keywords: [
    "inspección técnica",
    "prueba de hermeticidad",
    "ONAC",
    "acreditación ISO/IEC 17020",
    "estaciones de servicio",
    "combustibles líquidos"
  ],
  authors: [{ name: "ServiCrep", url: "https://www.servicrep.com.co" }],
  creator: "ServiCrep",
  publisher: "ServiCrep",
  metadataBase: new URL('https://www.servicrep.com.co/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "ServiCrep",
    title: "ServiCrep - Inspección Técnica Acreditada",
    description: "Organismo de Inspección Tipo A acreditado por ONAC. Inspección técnica de estaciones de servicio.",
    images: [
      {
        url: `${siteUrl}/isologo.png`, // Tu isotipo
        width: 800,
        height: 800,
        alt: "ServiCrep - Inspección Técnica Acreditada",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary", // Cambia a "summary" para imagen cuadrada
    title: "ServiCrep - Inspección Técnica Acreditada",
    description: "Organismo de Inspección Tipo A acreditado por ONAC.",
    images: [`${siteUrl}/isologo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'fe2acbf43dd0099b',
  },
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* CSS Links */}
        <link rel="stylesheet" href="/lib/animate/animate.min.css" />
        <link rel="stylesheet" href="/lib/owlcarousel/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="/lib/owlcarousel/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
        
        {/* JSON-LD Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ServiCrep",
            "description": "Organismo de Inspección Tipo A acreditado por ONAC. Inspección técnica de estaciones de servicio para combustibles líquidos.",
            "url": "https://www.servicrep.com.co/",
            "telephone": "+57-6053940809",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CO",
              "addressRegion": "Atlántico",
              "addressLocality": "Soledad",
              "streetAddress": "Soledad, Atlántico, Colombia"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.facebook.com/servicrep",
              "https://www.instagram.com/servicrep"
            ],
            "serviceType": "Inspección Técnica de Estaciones de Servicio",
            "areaServed": "Colombia",
            "priceRange": "$$$"
          })}
        </Script>
        
        <Banner />
        {children}
        <Footer />

        <JQueryScripts />
      </body>
    </html>
  );
}
