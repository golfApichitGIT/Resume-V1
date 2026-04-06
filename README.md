# 🚀 Apichit Plueangklang — Portfolio Website

Portfolio website ของ **อภิชิต เปลื้องกลาง** สาย Frontend Developer  
สร้างด้วย Vanilla HTML / CSS / JavaScript ไฟล์เดียว ไม่ต้องติดตั้งอะไรเพิ่มเลย

---

## 📁 โครงสร้างไฟล์

```
portfolio/
└── index.html     ← ไฟล์เดียวจบ (HTML + CSS + JS รวมกัน)
```

---

## 🛠️ Library / Technology ที่ใช้

### Fonts (โหลดจาก Google Fonts CDN)

| Font | ประเภท | ใช้ทำอะไร |
|------|--------|-----------|
| **Share Tech Mono** | Monospace | Logo, labels, typed text, badges, section numbers |
| **Rajdhani** | Display Sans-serif | ตัวหนังสือหลักทั้งหมด, ชื่อ, เนื้อหา |

```html
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

### JavaScript (ทั้งหมดเขียนเอง — ไม่มี external JS library)

| ฟีเจอร์ | เทคโนโลยี | รายละเอียด |
|---------|-----------|-----------|
| **Particle Background** | Canvas API (Vanilla JS) | วาด particle 120 จุด เคลื่อนไหวสุ่ม, เชื่อมเส้นระหว่าง particle ที่ใกล้กัน (<100px), มี glow ตาม mouse |
| **Grid Background** | Canvas API | วาด grid เส้นสีฟ้าอ่อน ขนาด 60px |
| **Mouse Glow** | Canvas RadialGradient | แสงไล่สีตาม cursor ของ mouse |
| **Typing Effect** | Vanilla JS (setTimeout) | พิมพ์-ลบ text สลับ 4 วลีอัตโนมัติ |
| **Scroll Reveal** | IntersectionObserver API | ทุก section โผล่เมื่อ scroll ถึง |
| **Smooth Scroll** | scrollIntoView() | กด nav link แล้ว scroll ลื่น |

---

### CSS Features (ทั้งหมดเป็น Pure CSS)

| ฟีเจอร์ | CSS ที่ใช้ | รายละเอียด |
|---------|-----------|-----------|
| **Glitch Effect** | `::before` / `::after` + `clip-path` + `@keyframes` | ชื่อ Hero มีสีแดง/ฟ้าเคลื่อนทุก 3 วินาที |
| **Skill Bar Animation** | CSS Custom Property (`--w`) + `transition` | bar เติมเมื่อ section เข้า viewport |
| **Navbar Blur** | `backdrop-filter: blur(12px)` | navbar โปร่งแสงแบบ glassmorphism |
| **Timeline Line** | `::before` + `height: 0 → 100%` + `transition` | เส้น timeline วาดลงมาเมื่อ scroll ถึง |
| **Hover Transitions** | CSS transform + transition | card ยกขึ้น, border เรืองแสง |
| **Gradient Text** | `-webkit-background-clip: text` | ชื่อใน Hero ไล่สี |
| **CSS Variables** | `:root { --accent, --bg, ... }` | ระบบสีทั้งหมดควบคุมจากจุดเดียว |
| **Responsive** | `@media (max-width: 680px)` + `clamp()` | รองรับมือถือ |
| **Scroll Hint Animation** | `@keyframes scrollAnim` | เส้นเลื่อนขึ้นลงที่ปุ่ม scroll |

---

## 🎨 Color Palette

```css
--bg:       #050a0f   /* พื้นหลังหลัก (เกือบดำ) */
--bg2:      #0a1520   /* พื้น card / section */
--bg3:      #0d1f2d   /* พื้นที่สาม */
--accent:   #00d4ff   /* ฟ้า Cyan — สีหลัก */
--accent2:  #00ff88   /* เขียว Neon — accent รอง */
--accent3:  #7b2ff7   /* ม่วง Purple — accent สาม */
--text:     #c8d8e8   /* ตัวหนังสือหลัก */
--text2:    #7a9ab5   /* ตัวหนังสือรอง / muted */
```

---

## 📄 Section ทั้งหมดในหน้าเว็บ

| # | Section | ID | เนื้อหา |
|---|---------|-----|---------|
| — | Hero | `#hero` | ชื่อ, ตำแหน่ง, typing text, ปุ่ม CTA |
| 01 | About | `#about` | แนะนำตัว + stat cards (GPA, Projects) |
| 02 | Skills | `#skills` | 4 skill card พร้อม progress bar |
| 03 | Projects | `#projects` | โปรเจกต์สต็อกอะไหล่ + feature list |
| 04 | Education | `#education` | Timeline การศึกษา ปวช. → ป.ตรี |
| 05 | Contact | `#contact` | Email, LINE, Tel, GitHub |

---

## 🚀 วิธี Deploy

### วิธีที่ 1 — เปิดดูในเครื่อง
ดับเบิ้ลคลิก `index.html` เปิดใน Browser ได้เลย ไม่ต้องติดตั้งอะไร

### วิธีที่ 2 — GitHub Pages (ฟรี)
```bash
# 1. สร้าง repo ใหม่ใน GitHub ชื่อว่า username.github.io
# 2. อัพโหลด index.html ขึ้นไป
# 3. ไปที่ Settings > Pages > Source: main branch
# 4. เว็บจะขึ้นที่ https://username.github.io
```

### วิธีที่ 3 — Netlify / Vercel (ฟรี)
ลาก `index.html` วางใน Netlify Drop ได้เลย → ได้ URL ทันที  
https://app.netlify.com/drop

---

## ✏️ วิธีแก้ไขข้อมูล

ทุกอย่างอยู่ใน `index.html` ไฟล์เดียว ค้นหาแล้วแก้ได้เลย:

| ต้องการแก้ | ค้นหาคำว่า |
|-----------|-----------|
| ชื่อ | `Apichit Plueangklang` |
| ตำแหน่งที่ typing | `const phrases = [` |
| คำอธิบายตัวเอง | `hero-desc` |
| เพิ่ม Project | `projects-grid` |
| GitHub link | `Coming Soon...` |
| Email | `golfgod9996@gmail.com` |
| เบอร์โทร | `096-395-1661` |
| LINE ID | `goldgod9531` |

---

## 📦 Dependencies สรุป

```
ไม่มี npm install
ไม่มี node_modules
ไม่มี build step
ไม่มี framework

ใช้แค่:
  - Google Fonts (CDN) — Share Tech Mono + Rajdhani
  - Canvas API (built-in browser)
  - IntersectionObserver API (built-in browser)
  - Vanilla JavaScript (ES6+)
  - Pure CSS3
```

---

## 🔧 สิ่งที่ยังต้องเพิ่ม

- [ ] GitHub profile link (รอสร้าง repo เสร็จ)
- [ ] เพิ่ม Project อื่นๆ ใน `#projects`
- [ ] เพิ่มรูปโปรไฟล์ (ถ้าต้องการ)
- [ ] Custom domain (ถ้าต้องการ)

---

> Built with ❤ by Apichit Plueangklang · 2025
