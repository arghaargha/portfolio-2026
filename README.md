# Antara Chakraborty Portfolio

Professional biotechnology portfolio built with Next.js, TypeScript, Tailwind CSS, Motion, and a serverless contact backend.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The local `.env.local` uses `CONTACT_DRY_RUN=true`, so contact form submissions return success without sending email.

## Contact Backend

The contact form posts to `POST /api/contact`.

Production email delivery uses Resend. Add these environment variables in Vercel or your hosting provider:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=antarachakraborty030@gmail.com
CONTACT_FROM_EMAIL=Antara Chakraborty Portfolio <hello@your-verified-domain.com>
CONTACT_DRY_RUN=false
```

Notes:

- `CONTACT_FROM_EMAIL` must be a sender verified in Resend.
- Keep `CONTACT_DRY_RUN=false` in production.
- The form includes server-side validation and a hidden honeypot field for basic spam protection.

## Verification

```bash
npm test -- --run
npm run lint
npm run typecheck
npm run build
```

## Deploy

Recommended hosting: Vercel.

```bash
npx vercel
npx vercel env add RESEND_API_KEY production
npx vercel env add CONTACT_TO_EMAIL production
npx vercel env add CONTACT_FROM_EMAIL production
npx vercel env add CONTACT_DRY_RUN production
npx vercel --prod
```

Set `CONTACT_DRY_RUN` to `false` for production.
