// Slider and Lightbox functionality
const slides = [
  {src:"https://img2.pic.in.th/1c0763506bcdc5553.jpeg", title:"หน้า Dashboard", sub:"// ภาพรวมระบบ · สถิติ · กราฟ realtime"},
  {src:"https://img1.pic.in.th/images/26fa3a2a87722a77d.jpeg", title:"หน้าจัดการสต็อก", sub:"// รายการอะไหล่ · ค้นหา · แก้ไข"},
  {src:"https://img1.pic.in.th/images/3b6a8c22506cedfd7.jpeg", title:"หน้ารายงาน", sub:"// สรุปยอด · กราฟ · Export"},
  {src:"https://img2.pic.in.th/4fb7c12d9f33527ec.jpeg", title:"หน้าออเดอร์", sub:"// รายการสั่งซื้อ · สถานะ · ประวัติ"}
];

let currentSlide = 0;

function switchSlide(idx) {
  currentSlide = idx;
  const main = document.getElementById('mainImg');
  main.style.opacity = '0';
  main.style.transform = 'scale(1.02)';
  setTimeout(() => {
    main.src = slides[idx].src;
    document.getElementById('captionTitle').textContent = slides[idx].title;
    document.getElementById('captionSub').textContent = slides[idx].sub;
    main.style.opacity = '1';
    main.style.transform = 'scale(1)';
  }, 200);
  document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
  main.style.transition = 'opacity .2s ease, transform .4s ease';
}

function openLightbox(idx) {
  document.getElementById('lightboxImg').src = slides[idx].src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLightboxOutside(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}

function lightboxNav(dir) {
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  document.getElementById('lightboxImg').src = slides[currentSlide].src;
  switchSlide(currentSlide);
}

export function initSlider() {
  window.currentSlide = currentSlide;
  window.switchSlide = switchSlide;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.closeLightboxOutside = closeLightboxOutside;
  window.lightboxNav = lightboxNav;
  console.log('Slider initialized');
}
