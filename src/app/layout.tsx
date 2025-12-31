import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/header/Banner";
import Footer from "@/components/header/Footer";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: {
    default: "ServiCrep - Inspección Técnica Acreditada de Estaciones de Servicio",
    template: "%s | ServiCrep"
  },
  description: "Organismo de Inspección Tipo A acreditado por ONAC. Expertos en inspección técnica de estaciones de servicio para combustibles líquidos. Imparcialidad, independencia y cumplimiento normativo.",
  keywords: [
    "inspección técnica",
    "estaciones de servicio",
    "ONAC",
    "acreditación ISO/IEC 17020",
    "verificación técnica",
    "combustibles líquidos",
    "cumplimiento normativo",
    "organismo de inspección",
    "dictamen técnico"
  ],
  authors: [{ name: "ServiCrep", url: "https://www.servicrep.com" }],
  creator: "ServiCrep",
  publisher: "ServiCrep",
  generator: "Next.js",
  applicationName: "ServiCrep",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL('https://www.servicrep.com.co/'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'es': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.servicrep.com.co/',
    siteName: 'ServiCrep',
    title: 'ServiCrep - Inspección Técnica Acreditada',
    description: 'Organismo de Inspección Tipo A acreditado por ONAC. Inspección técnica de estaciones de servicio para combustibles líquidos bajo la norma ISO/IEC 17020.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ServiCrep - Inspección Técnica',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'ServiCrep Logo',
        type: 'image/jpeg',
      }
    ],
    videos: [
      {
        url: '/videos/servicrep-intro.mp4',
        width: 1280,
        height: 720,
        type: 'video/mp4',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@servicrep',
    creator: '@servicrep',
    title: 'ServiCrep - Inspección Técnica Acreditada',
    description: 'Organismo de Inspección Tipo A acreditado por ONAC. Inspección técnica de estaciones de servicio para combustibles líquidos.',
    images: ['https://www.servicrep.com.co//images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-yandex',
    yahoo: 'tu-codigo-yahoo',
    other: {
      'msvalidate.01': 'tu-codigo-bing',
      'facebook-domain-verification': 'tu-codigo-facebook',
    },
  },
  category: 'technology',
  classification: 'Servicios de Reparación',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: 'ServiCrep',
    statusBarStyle: 'default',
  },
  appLinks: {
    web: {
      url: 'https://www.servicrep.com',
      should_fallback: true,
    },
  },
  archives: ['https://www.servicrep.com.co//sitemap.xml'],
  assets: ['https://www.servicrep.com.co//assets'],
  bookmarks: ['https://www.servicrep.com.co//favoritos'],
  other: {
    'theme-color': '#ffffff',
    'msapplication-TileColor': '#da532c',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'application-name': 'ServiCrep',
    'msapplication-tooltip': 'Inspección Técnica ServiCrep',
    'msapplication-starturl': '/',
    'msapplication-navbutton-color': '#ffffff',
    'msapplication-window': 'width=1024;height=768',
    'msapplication-task': 'name=Inspección;action-uri=/servicios;icon-uri=/favicon.ico',
    'format-detection': 'telephone=no',
    'HandheldFriendly': 'true',
    'MobileOptimized': '320',
    'cleartype': 'on',
    'skype_toolbar': 'skype_toolbar_parser_compatible',
    'google-site-verification': 'tu-codigo-de-verificacion-google',
    'p:domain_verify': 'tu-codigo-pinterest',
    'yandex-verification': 'tu-codigo-yandex',
    'alexaVerifyID': 'tu-codigo-alexa',
    'norton-safeweb-site-verification': 'tu-codigo-norton',
    'article:publisher': 'https://www.facebook.com/servicrep',
    'article:author': 'https://www.facebook.com/servicrep',
    'geo.region': 'ES',
    'geo.placename': 'España',
    'ICBM': '40.4168,-3.7038',
    'DC.title': 'ServiCrep - Inspección Técnica Acreditada',
    'DC.creator': 'ServiCrep',
    'DC.subject': 'Inspección Técnica',
    'DC.description': 'Organismo de Inspección Tipo A acreditado por ONAC. Inspección técnica de estaciones de servicio para combustibles líquidos.',
    'DC.publisher': 'ServiCrep',
    'DC.contributor': 'ServiCrep Team',
    'DC.date': '2025',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.servicrep.com.co/',
    'DC.source': 'https://www.servicrep.com.co/',
    'DC.language': 'es',
    'DC.relation': 'https://www.servicrep.com.co/',
    'DC.coverage': 'España',
    'DC.rights': 'Copyright ServiCrep 2025',
  },
};

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
            "telephone": "+34-XXX-XXX-XXX",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ES",
              "addressRegion": "Madrid",
              "addressLocality": "Madrid"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.facebook.com/servicrep",
              "https://www.twitter.com/servicrep",
              "https://www.instagram.com/servicrep"
            ],
            "serviceType": "Inspección Técnica de Estaciones de Servicio",
            "areaServed": "España",
            "priceRange": "€€"
          })}
        </Script>
        
        <Banner />
        {children}
        <Footer />

        {/* Scripts */}
        <Script 
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script 
          src="/lib/waypoints/waypoints.min.js"
          strategy="afterInteractive"
        />
        <Script 
          src="/lib/easing/easing.min.js"
          strategy="afterInteractive"
        />
        <Script 
          src="/lib/owlcarousel/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script 
          src="/lib/wow/wow.min.js"
          strategy="afterInteractive"
        />
        <Script 
          src="/main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
