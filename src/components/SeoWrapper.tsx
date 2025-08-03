'use client';

import { NextSeo } from 'next-seo';

export default function SeoWrapper() {
  return (
    <NextSeo
      title="ServiCrep - Servicios de Reparación"
      description="Servicios profesionales de reparación, mantenimiento y soluciones técnicas especializadas"
      canonical="https://www.servicrep.com"
      openGraph={{
        type: 'website',
        locale: 'es_ES',
        url: 'https://www.servicrep.com',
        siteName: 'ServiCrep',
        title: 'ServiCrep - Servicios de Reparación',
        description: 'Servicios profesionales de reparación, mantenimiento y soluciones técnicas especializadas',
        images: [
          {
            url: '/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'ServiCrep - Servicios de Reparación',
          },
        ],
      }}
      twitter={{
        handle: '@servicrep',
        site: '@servicrep',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
      ]}
    />
  );
}