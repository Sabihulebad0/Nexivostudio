# Website Spec — Web Design, Development, Social Media & SEO Brand

## Overview
A single-page marketing website for a digital agency offering web design, web development, social media marketing, and search engine optimization. Dark background with glassmorphism accents throughout.

---

## Design Tokens

### Colors
- **Background:** `#0d0d0d` (near black)
- **Primary Accent:** `#FF6A1C` (orange)
- **Secondary Accent:** `#FFFAF3` (warm off-white / cream)
- **Glass Surface:** `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(12px)`
- **Glass Border:** `rgba(255, 255, 255, 0.12)`
- **Text Primary:** `#FFFAF3`
- **Text Muted:** `rgba(255, 250, 243, 0.55)`

### Typography
- **Primary Font:** `Host Grotesk` — used for headings, nav, buttons
- **Secondary Font:** `Bricolage Grotesque` — used for subheadings, body, form labels
- Import both from Google Fonts

### Border Radius
- Buttons: `9999px` (fully rounded pill shape)
- Cards / Glass panels: `16px`
- Form inputs: `10px`

---

## Global Styles
- Dark background (`#0d0d0d`) across full page
- Smooth scroll behavior
- Font rendering: antialiased

---

## Sections (in order)

---

### 1. Header (Sticky)
**Layout:** 3-column flex row
- **Left:** Logo (text or SVG)
- **Center:** Navigation links (Home, About, Services, Blog, Portfolio, Contact)
- **Right:** Two pill-shaped buttons with glassmorphism styling
  - "Schedule a Call" (outlined/glass)
  - "Contact Us" (filled orange `#FF6A1C`)

**Style notes:**
- Sticky on scroll
- Slightly frosted glass background on scroll (`backdrop-filter: blur`)
- Nav links in Host Grotesk, hover color `#FF6A1C`
- Buttons fully rounded, glass effect with subtle border

---

### 2. Hero Section
**Layout:** Two columns (left content, right form)

**Left column:**
- Subheading (small label, muted color, Bricolage Grotesque)
- Main heading (large, Host Grotesk, bold)
- Two CTA buttons (pill-shaped, glassmorphism):
  - "Call Us"
  - "Schedule a Call"

**Right column — Lead Generator Form:**
Form fields (Bricolage Grotesque labels):
- Name
- Email
- Phone Number
- Service (dropdown or text)
- Required Message (textarea)
- Checkbox: "I agree with Terms and Conditions"
- Submit button

**Form style:** Glassmorphism card (`rgba(255,255,255,0.05)`, blur, rounded corners, subtle border)

---

### 3. About Us Section
**Layout:** Minimal, clean, attractive
- Short paragraph about the brand/team
- Maybe a stat row or two-column split (image left, text right)
- Keep whitespace generous

---

### 4. Services Section
**Layout:** Card grid (3 or 4 columns)
- Each card: icon + service title + short description
- Card style: Glassmorphism (`rgba(255,255,255,0.05)`, blur, `border: 1px solid rgba(255,255,255,0.12)`, `border-radius: 16px`)
- Services to include:
  - Web Design
  - Web Development
  - Social Media Marketing
  - Search Engine Optimization

---

### 5. Technologies Section
**Layout:** Horizontal logo/icon strip or grid
- Show logos/icons of technologies the brand works with
- Could be a scrolling marquee or static grid
- Muted icons that brighten on hover

---

### 6. Portfolio Section
**Layout:** Tabbed interface
- Tabs for categories (e.g., Web Design, Web Dev, SEO, Social Media)
- Each tab shows a grid of portfolio cards
- Cards: project thumbnail + title + short tag
- Tab active state: orange underline or pill

---

### 7. Blog Section
**Layout:** Card row (3 cards)
- Each card: thumbnail + category tag + title + excerpt + "Read More" link
- Card style: glass effect consistent with services section

---

### 8. Newsletter Section
**Layout:** Centered, minimal
- Heading + subheading
- Email input + Subscribe button (orange pill)
- Glass card wrapper

---

### 9. Contact Us Section
**Layout:** Two columns
- **Left:** Contact information
  - Address
  - Phone
  - Email
  - Social links
- **Right:** Contact form
  - Name, Email, Message fields
  - Submit button (orange, pill-shaped)
- Both wrapped in a glass card or side-by-side on dark section

---

### 10. Footer
**Layout:** Multi-column
- Logo + short brand tagline
- Quick links (nav)
- Services list
- Social media icons
- Bottom bar: copyright line

---

## Component Notes

### Glassmorphism Recipe (reusable)
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: 16px;
```

### Pill Button — Primary (Orange)
```css
background: #FF6A1C;
color: #FFFAF3;
border-radius: 9999px;
padding: 12px 28px;
font-family: 'Host Grotesk', sans-serif;
font-weight: 600;
border: none;
cursor: pointer;
```

### Pill Button — Ghost (Glass)
```css
background: rgba(255, 255, 255, 0.07);
color: #FFFAF3;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 9999px;
padding: 12px 28px;
font-family: 'Host Grotesk', sans-serif;
backdrop-filter: blur(8px);
cursor: pointer;
```

---

## Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500;600;700&family=Bricolage+Grotesque:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + custom CSS variables for glassmorphism
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Icons:** Lucide React
- **Fonts:** Google Fonts via `next/font/google` (Host Grotesk + Bricolage Grotesque)

---

## Folder Structure

```
/
├── app/
│   ├── layout.tsx               # Root layout — fonts, metadata, global styles
│   ├── page.tsx                 # Main single-page entry, imports all sections
│   ├── globals.css              # CSS variables, base resets, glassmorphism utilities
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Sticky nav — logo, links, two CTA buttons
│   │   └── Footer.tsx           # Multi-column footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx             # Split layout — heading + lead gen form
│   │   ├── AboutUs.tsx          # Minimal about section
│   │   ├── Services.tsx         # Glassmorphism card grid
│   │   ├── Technologies.tsx     # Tech logo strip / marquee
│   │   ├── Portfolio.tsx        # Tabbed portfolio grid
│   │   ├── Blog.tsx             # 3-card blog row
│   │   ├── Newsletter.tsx       # Email capture strip
│   │   └── ContactUs.tsx        # Split — contact info + contact form
│   │
│   └── ui/
│       ├── Button.tsx           # Reusable pill button (primary + ghost variants)
│       ├── GlassCard.tsx        # Reusable glassmorphism card wrapper
│       ├── SectionLabel.tsx     # Small muted eyebrow label
│       ├── LeadForm.tsx         # Hero lead generator form component
│       └── ContactForm.tsx      # Contact section form component
│
├── public/
│   ├── logo.svg
│   ├── images/
│   │   ├── portfolio/           # Portfolio project thumbnails
│   │   └── blog/                # Blog post thumbnails
│   └── icons/
│       └── tech/                # Technology logos (SVG)
│
├── lib/
│   └── constants.ts             # Nav links, services list, tech list, blog data, portfolio data
│
├── types/
│   └── index.ts                 # Shared TypeScript interfaces (e.g. BlogPost, PortfolioItem)
│
├── tailwind.config.ts           # Extend theme with brand colors and fonts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## tailwind.config.ts — Theme Extension
```ts
theme: {
  extend: {
    colors: {
      brand: {
        orange: '#FF6A1C',
        cream: '#FFFAF3',
        bg: '#0d0d0d',
      }
    },
    fontFamily: {
      grotesk: ['Host Grotesk', 'sans-serif'],
      bricolage: ['Bricolage Grotesque', 'sans-serif'],
    }
  }
}
```

## globals.css — CSS Variables
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-blur: blur(12px);
  --color-orange: #FF6A1C;
  --color-cream: #FFFAF3;
  --color-bg: #0d0d0d;
}

.glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
}
```

---

## Section Order Summary
1. Header (sticky)
2. Hero (split: content + lead gen form)
3. About Us
4. Services (glass cards)
5. Technologies
6. Portfolio (tabbed)
7. Blog
8. Newsletter
9. Contact Us (split: info + form)
10. Footer
