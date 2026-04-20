// Slider and Lightbox functionality
const slides = [
  {src:"images/stock/1.jpg", title:"หน้า Dashboard", sub:"// ภาพรวมระบบ · สถิติ · กราฟ realtime"},
  {src:"images/stock/2.jpg", title:"หน้าจัดการสต็อก", sub:"// รายการอะไหล่ · ค้นหา · แก้ไข"},
  {src:"images/stock/3.jpg", title:"หน้ารายงาน", sub:"// สรุปยอด · กราฟ · Export"},
  {src:"images/stock/4.jpg", title:"หน้าออเดอร์", sub:"// รายการสั่งซื้อ · สถานะ · ประวัติ"}
];

const slides2 = [
  {src:"images/payroll/1.png", title:"Payroll Dashboard", sub:"// ระบบจัดการเงินเดือน · สลิปเงินเดือน · รายงาน"},
  {src:"images/payroll/2.png", title:"Employee Management", sub:"// จัดการข้อมูลพนักงาน · แก้ไขข้อมูลส่วนตัว"},
  {src:"images/payroll/3.png", title:"Payroll Generation", sub:"// สร้างสลิปเงินเดือน · อัปโหลด Excel · คำนวณอัตโนมัติ"},
  {src:"images/payroll/4.png", title:"Reports & Analytics", sub:"// รายงานยอดจ่ายรวม · กราฟ · Export PDF"}
];

const slides3 = [
  {src:"images/elderly/1.jpg", title:"หน้า Dashboard", sub:"// ภาพรวมระบบ · สถิติ · ข้อมูลผู้สูงอายุ"},
  {src:"images/elderly/2.jpg", title:"หน้าจัดการสุขภาพ", sub:"// บันทึกสุขภาพ · ความดัน · น้ำตาล · ชีพจร"},
  {src:"images/elderly/3.jpg", title:"หน้ารายงาน", sub:"// กราฟแนวโน้ม · ประวัติสุขภาพ · Export"},
  {src:"images/elderly/4.jpg", title:"หน้าแผนที่", sub:"// ตำแหน่ง GPS · LINE Bot · แจ้งเตือน"}
];

let currentSlide = 0;
let currentSlide2 = 0;
let currentSlide3 = 0;

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

// Second project functions
function switchSlide2(idx) {
  currentSlide2 = idx;
  const main = document.getElementById('mainImg2');
  main.style.opacity = '0';
  main.style.transform = 'scale(1.02)';
  setTimeout(() => {
    main.src = slides2[idx].src;
    document.getElementById('captionTitle2').textContent = slides2[idx].title;
    document.getElementById('captionSub2').textContent = slides2[idx].sub;
    main.style.opacity = '1';
    main.style.transform = 'scale(1)';
  }, 200);
  document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
  main.style.transition = 'opacity .2s ease, transform .4s ease';
}

function openLightbox2(idx) {
  document.getElementById('lightboxImg2').src = slides2[idx].src;
  document.getElementById('lightbox2').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox2() {
  document.getElementById('lightbox2').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLightboxOutside2(e) {
  if (e.target === document.getElementById('lightbox2')) closeLightbox2();
}

function lightboxNav2(dir) {
  currentSlide2 = (currentSlide2 + dir + slides2.length) % slides2.length;
  document.getElementById('lightboxImg2').src = slides2[currentSlide2].src;
  switchSlide2(currentSlide2);
}

// Third project functions
function switchSlide3(idx) {
  currentSlide3 = idx;
  const main = document.getElementById('mainImg3');
  main.style.opacity = '0';
  main.style.transform = 'scale(1.02)';
  setTimeout(() => {
    main.src = slides3[idx].src;
    document.getElementById('captionTitle3').textContent = slides3[idx].title;
    document.getElementById('captionSub3').textContent = slides3[idx].sub;
    main.style.opacity = '1';
    main.style.transform = 'scale(1)';
  }, 200);
  document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
  main.style.transition = 'opacity .2s ease, transform .4s ease';
}

function openLightbox3(idx) {
  document.getElementById('lightboxImg3').src = slides3[idx].src;
  document.getElementById('lightbox3').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox3() {
  document.getElementById('lightbox3').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLightboxOutside3(e) {
  if (e.target === document.getElementById('lightbox3')) closeLightbox3();
}

function lightboxNav3(dir) {
  currentSlide3 = (currentSlide3 + dir + slides3.length) % slides3.length;
  document.getElementById('lightboxImg3').src = slides3[currentSlide3].src;
  switchSlide3(currentSlide3);
}

export function initSlider() {
  // Make functions globally accessible for onclick handlers in HTML
  // This is intentional - the functions need to be called from HTML onclick attributes
  window.currentSlide = currentSlide;
  window.currentSlide2 = currentSlide2;
  window.currentSlide3 = currentSlide3;
  window.switchSlide = switchSlide;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.closeLightboxOutside = closeLightboxOutside;
  window.lightboxNav = lightboxNav;
  window.switchSlide2 = switchSlide2;
  window.openLightbox2 = openLightbox2;
  window.closeLightbox2 = closeLightbox2;
  window.closeLightboxOutside2 = closeLightboxOutside2;
  window.lightboxNav2 = lightboxNav2;
  window.switchSlide3 = switchSlide3;
  window.openLightbox3 = openLightbox3;
  window.closeLightbox3 = closeLightbox3;
  window.closeLightboxOutside3 = closeLightboxOutside3;
  window.lightboxNav3 = lightboxNav3;

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    // Lightbox 1
    if (document.getElementById('lightbox').classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxNav(-1);
      if (e.key === 'ArrowRight') lightboxNav(1);
    }
    // Lightbox 2
    if (document.getElementById('lightbox2').classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox2();
      if (e.key === 'ArrowLeft') lightboxNav2(-1);
      if (e.key === 'ArrowRight') lightboxNav2(1);
    }
    // Lightbox 3
    if (document.getElementById('lightbox3').classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox3();
      if (e.key === 'ArrowLeft') lightboxNav3(-1);
      if (e.key === 'ArrowRight') lightboxNav3(1);
    }
  });

  console.log('Slider initialized');
}
