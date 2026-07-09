# Página web OIN - Estaciones de Gasolina

Página web institucional para una Organización de Inspección (OIN) especializada en estaciones de gasolina, desarrollada con Next.js.

## Tecnologías utilizadas

- Next.js
- React
- TypeScript
- CSS / Bootstrap 
- Axios
- ESLint
- Prettier
- Vercel

## Uso

Instala las dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

- `DISCORD_WEBHOOK_URL` — webhook de Discord (solo servidor) para leads del formulario y clics de WhatsApp
- `NEXT_PUBLIC_GA_ID` — ID de medición de Google Analytics 4 (opcional)
- `VALIDATOR_URL` — URL base del Google Sheet del validador de certificados
