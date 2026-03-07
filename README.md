# AOSEA Global Resources Limited – Corporate Website

Indigenous technical services for Nigeria's oil & gas sector.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` – Pages (Home, About, Services, Industries, Contact)
- `components/` – Navbar, Footer, CTA, InquiryForm, ServiceCard, HeroVideo
- `app/globals.css` – Design tokens (fonts, colors)

## Contact Form (Brevo)

The contact form sends emails via [Brevo](https://www.brevo.com/) (formerly Sendinblue). Configure:

1. Copy `.env.example` to `.env.local`
2. Add your Brevo API key from [Brevo API Keys](https://app.brevo.com/settings/keys/api)
3. Register and verify your sender email in [Brevo Senders](https://app.brevo.com/senders/list)
4. Set `CONTACT_RECIPIENT_EMAIL` to the inbox that receives inquiry notifications

Two emails are sent per submission: a confirmation to the user and a notification to your team. Custom HTML templates are in `lib/email-templates.ts`.

## Hero Video

Add your intro video to `public/hero-video.mp4`. The hero section will display it. If the file is missing, a placeholder is shown.

## Design System

- **Fonts:** DM Sans (headings), Source Sans 3 (body)
- **Colors:** Navy 950–600, Accent (gold) 400–600, Gray scale
- **Tone:** Industrial, executive, high-trust

## Deploy on Vercel

```bash
vercel
```

## Pages

| Route                          | Description                                   |
| ------------------------------ | --------------------------------------------- |
| `/`                            | Home – Hero, services, differentiators, CTAs  |
| `/about`                       | Company overview, mission, values, leadership |
| `/services`                    | Service portfolio overview                    |
| `/services/technical`          | Technical services                            |
| `/services/project-management` | Project management                            |
| `/services/procurement`        | Procurement & supplies                        |
| `/services/training`           | Training & compliance                         |
| `/services/manpower`           | Manpower supply                               |
| `/industries`                  | Industries served                             |
| `/contact`                     | Contact form, offices                         |
