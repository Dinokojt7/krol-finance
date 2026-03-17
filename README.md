# Accountant Website Template

A Next.js landing page template for South African accounting firms.

## Quick Setup

1. **Brand colors** — edit `src/app/globals.css`:
   - `--primary`: your main dark color (navy, charcoal, etc.)
   - `--accent`: your highlight color (red, gold, green, etc.)

2. **Logo** — replace `public/images/logo.jpg` with your firm's logo

3. **Content** — edit `src/lib/data/site-data.json`:
   - Business info (name, phone, email, location)
   - Services (up to 6)
   - Stats (3 numbers)
   - Testimonials (3)
   - FAQ (5 questions)

4. **Stock images** — replace in `public/images/`:
   - `services-office.jpg` — shown in the Services section
   - `about-team.jpg` — shown in the About section

5. **Run dev server**:
   ```bash
   npm install
   npm run dev
   ```

## Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- Lucide React
