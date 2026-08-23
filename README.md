# Apichit Plueangklang — Portfolio Website

Personal portfolio website for **Apichit Plueangklang**, a Frontend Developer.
Built with vanilla HTML, CSS, and JavaScript — no build tools or frameworks required.

---

## Project Overview

A cyber/neon-themed portfolio website featuring:
- Particle canvas background with mouse interaction
- Typing animation effect
- Scroll-triggered section reveals
- Interactive project galleries with lightbox
- Thai/English language switching
- PDF CV generation with print dialog
- Contact form powered by EmailJS
- Fully responsive design (mobile to desktop)

---

## Folder Structure

```
Resume/
├── index.html              ← Main portfolio page (HTML + inline CSS + inline language script)
├── cv-print.html           ← Printable CV page with Thai/English toggle
├── style.css               ← Legacy CSS (not used by current index.html)
├── README.md               ← This file
├── .MD                     ← Quick serve command note
├── Resume-Apichit-EN.pdf   ← English CV PDF
├── Resume-Apichit-EN.jpg   ← English CV image
├── Resume-Apichit.pdf      ← Thai CV PDF
├── Resume-Apichit.jpg      ← Thai CV image
│
├── js/
│   ├── main.js             ← Module entry point (imports and initializes all modules)
│   ├── animations.js       ← Typing effect + scroll-reveal (IntersectionObserver)
│   ├── canvas.js           ← Particle animation background (Canvas API)
│   ├── contact.js          ← EmailJS contact form handler
│   ├── cv.js               ← CV generation (opens cv-print.html + triggers print)
│   ├── nav.js              ← Navigation: mobile menu, smooth scroll, active link highlight
│   └── slider.js           ← Project galleries, thumbnails, and lightbox navigation
│
├── images/
│   ├── profile.jpg         ← Profile photo
│   ├── certs/              ← Certificate images
│   │   ├── aucc2026.jpg
│   │   ├── cea-dataviz.jpg
│   │   ├── set-bmc.jpg
│   │   └── thaimooc-excel.jpg
│   ├── elderly/            ← Elderly Health Monitoring project screenshots
│   │   ├── 1.jpg … 4.jpg
│   ├── payroll/            ← Payroll Management System screenshots
│   │   ├── 1.png … 4.png
│   ├── stock/              ← Stock Management System screenshots
│   │   ├── 1.jpg … 4.jpg
│   └── profile/            ← Additional profile images
│       └── profile.jpg
│
└── Hack/                   ← ⚠️ Unrelated personal files (NOT part of the portfolio)
```

---

## Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, grid, flexbox, backdrop-filter, animations |
| JavaScript (ES6+) | All interactivity, Canvas API, IntersectionObserver |

### Fonts (Google Fonts CDN)
| Font | Use |
|------|-----|
| Inter | Primary sans-serif font |

### External Libraries (CDN)
| Library | Purpose |
|---------|---------|
| EmailJS v4 | Contact form email delivery |
| jsPDF v2.5.1 | PDF generation for CV |
| THSarabunNew (Thai font) | Thai text rendering in CV PDF |

---

## JavaScript Modules

### `js/main.js` — Entry Point
Imports and initializes all modules on `DOMContentLoaded`.

### `js/animations.js` — Typing & Scroll Reveal
- **Typewriter**: Cycles through 4 job titles ("Frontend Developer", "React Developer", "UI/UX Enthusiast", "Mobile App Developer")
- **Scroll Reveal**: IntersectionObserver watches all `<section>` elements, adds `.in-view` class at 15% threshold

### `js/canvas.js` — Particle Background
- 80 particles with random velocity and lifecycle
- Connecting lines between nearby particles (< 100px)
- Grid overlay (60px spacing)
- Mouse-following radial gradient glow
- Pauses animation when browser tab is hidden (Page Visibility API)
- Hidden entirely when `prefers-reduced-motion: reduce` is active

### `js/contact.js` — Contact Form
- EmailJS initialization with public key
- Form validation (required fields, email format, length limits)
- Honeypot anti-spam field (hidden, bots fill it)
- Loading / success / error states with visual feedback
- Double-submit prevention via disabled button

### `js/cv.js` — CV Generation
- Opens `cv-print.html` in a new window
- Triggers browser print dialog after page loads

### `js/nav.js` — Navigation
- Mobile hamburger menu toggle
- Close menu on link click or outside click
- Smooth scroll for all anchor links
- Scroll-based navbar background/shadow effect
- Active link highlighting based on scroll position

### `js/slider.js` — Galleries & Lightbox
- 3 independent project galleries (Stock, Payroll, Elderly)
- Thumbnail switching with fade transition
- Lightbox with full-screen image view
- Keyboard navigation (Arrow keys, Escape)
- Each gallery's thumb selection is scoped to its own container

---

## Animation System

All animations use CSS transitions and keyframes — no animation libraries.

| Animation | Trigger | Element |
|-----------|---------|---------|
| Typewriter | Auto-start after 1.8s | `#typed-text` |
| Scroll reveal | IntersectionObserver | All `<section>` elements |
| Section fade-in | `.in-view` class | Section labels and titles |
| Button hover | CSS `:hover` | All buttons |
| Lightbox open | Class toggle | `.lightbox.open` |
| Canvas particles | `requestAnimationFrame` | `#canvas-bg` canvas |

---

## Canvas System

The canvas background (`#canvas-bg`) is a fixed-position full-viewport layer:
- **Particles**: 80 circles with random color (cyan or green), lifecycle, and velocity
- **Connections**: Lines drawn between particles within 100px
- **Grid**: 60px grid overlay at very low opacity
- **Mouse glow**: Radial gradient follows cursor position
- **Performance**: Pauses when tab is hidden; completely hidden when user prefers reduced motion

---

## Contact System

### EmailJS Configuration
- **Public Key**: Stored in `js/contact.js` (client-side, safe for public portfolio)
- **Service ID**: `service_of8a87v`
- **Template ID**: `template_bm0z6yn`

### Anti-Spam
- Honeypot field (`website`): Hidden from users, bots auto-fill it
- Character limits: Name (100), Email (100), Message (2000)
- Email format regex validation

---

## CV System

### Files
- `cv-print.html` — Standalone printable CV page
- `Resume-Apichit.pdf` / `Resume-Apichit-EN.pdf` — Pre-generated PDFs

### Features
- Thai/English language toggle (persisted in localStorage)
- Photo upload (client-side, not saved)
- A4 print-optimized layout (210mm × 297mm)
- `@media print` rules hide toolbar, remove shadows
- Generate button in portfolio opens page + triggers print dialog

---

## Thai/English Language System

### Portfolio (`index.html`)
- Uses `data-th` and `data-en` attributes on elements
- `applyLang()` swaps text content, `toggleLang()` switches between languages
- Language preference saved in `localStorage('portfolioLang')`
- Smooth opacity transition during language switch

### CV (`cv-print.html`)
- Uses a `cvTranslations` object with all Thai/English text
- `applyCV()` function swaps all text by element ID
- Language preference saved in `localStorage('cvLang')`

---

## Deployment Instructions

### Option 1 — GitHub Pages (Free)
```bash
# 1. Create a repo named username.github.io on GitHub
# 2. Push this project to the repo
# 3. Go to Settings > Pages > Source: main branch
# 4. Site will be live at https://username.github.io
```

### Option 2 — Netlify (Free)
Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop).

### Option 3 — Vercel (Free)
```bash
# Install Vercel CLI
npm i -g vercel
# Deploy
vercel --prod
```

### Option 4 — Local Preview
```bash
# Using npx serve (no install needed)
npx serve .

# Or using Python
python -m http.server 8000
```

---

## Local Development

No build step required. All CSS is in `<style>` tags in `index.html`. JavaScript uses ES modules (`type="module"`).

1. Clone or download the project
2. Open `index.html` in a browser, or start a local server
3. Edit files directly — changes are visible on reload

---

## How to Update Personal Information

| What to change | Where to look |
|---------------|---------------|
| Name | `index.html` — search `Apichit Plueangklang` |
| Job title / typing phrases | `js/animations.js` — `const phrases = [...]` |
| About description | `index.html` — `data-th` and `data-en` on `.hero-desc` |
| Stats (projects, years) | `index.html` — `.stat-num` elements |
| Education | `index.html` — `.education-strip` section |
| Email | `index.html` — `mailto:apichit.puang@gmail.com` |
| Phone | `index.html` — `tel:0963951661` |
| GitHub link | `index.html` — search `golfApichitGIT` |
| LinkedIn link | `index.html` — search `linkedin.com/in/apichit-plueangklang` |

---

## How to Add Projects

1. Add screenshot images to `images/<project-name>/`
2. In `index.html`, duplicate a `project-card` article block
3. Update: image paths, title, description, tech tags, GitHub link
4. In `js/slider.js`, add a new slides array and gallery functions, or extend the `galleries` array

---

## How to Replace Images

- **Profile photo**: Replace `images/profile.jpg`
- **Project screenshots**: Replace images in `images/stock/`, `images/payroll/`, `images/elderly/`
- **Certificate images**: Replace images in `images/certs/`

Keep the same filenames to avoid breaking paths.

---

## How to Update CV

Edit `cv-print.html` — both the HTML content and the `cvTranslations` object at the bottom of the file contain all CV text in Thai and English.

---

## Production Checklist

- [x] All section anchors work (#about, #projects, #skills, etc.)
- [x] External links have `target="_blank" rel="noopener"`
- [x] Contact form validates input and handles errors
- [x] Honeypot anti-spam field in contact form
- [x] Canvas animation pauses when tab is hidden
- [x] Canvas hidden when user prefers reduced motion
- [x] CSS `prefers-reduced-motion` disables animations
- [x] Skip-to-content link for keyboard users
- [x] Focus-visible outlines for keyboard navigation
- [x] ARIA labels on lightbox controls
- [x] Lightbox keyboard navigation (Arrow keys, Escape)
- [x] SEO meta tags (description, Open Graph, Twitter Card)
- [x] Semantic HTML (nav, section, article, footer, h1/h2/h3 hierarchy)
- [x] Responsive at 375px – 1920px
- [ ] Remove `Hack/` directory before public deployment
- [ ] Remove `style.css` (legacy, not used) before deployment
- [ ] Verify EmailJS service is active
- [ ] Add canonical URL if deploying to a custom domain
- [ ] Consider adding a favicon

---

> Built by Apichit Plueangklang · Frontend Developer · 2025
