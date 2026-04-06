// Slider and Lightbox functionality
const slides = [
  {src:"https://img2.pic.in.th/1c0763506bcdc5553.jpeg", title:"หน้า Dashboard", sub:"// ภาพรวมระบบ · สถิติ · กราฟ realtime"},
  {src:"https://img1.pic.in.th/images/26fa3a2a87722a77d.jpeg", title:"หน้าจัดการสต็อก", sub:"// รายการอะไหล่ · ค้นหา · แก้ไข"},
  {src:"https://img1.pic.in.th/images/3b6a8c22506cedfd7.jpeg", title:"หน้ารายงาน", sub:"// สรุปยอด · กราฟ · Export"},
  {src:"https://img2.pic.in.th/4fb7c12d9f33527ec.jpeg", title:"หน้าออเดอร์", sub:"// รายการสั่งซื้อ · สถานะ · ประวัติ"}
];

const slides2 = [
  {src:"https://img2.pic.in.th/payroll_01_dashboard.jpeg", title:"Payroll Dashboard", sub:"// ระบบจัดการเงินเดือน · สลิปเงินเดือน · รายงาน"},
  {src:"https://img1.pic.in.th/images/payroll_02_salary_management.jpeg", title:"Employee Management", sub:"// จัดการข้อมูลพนักงาน · แก้ไขข้อมูลส่วนตัว"},
  {src:"https://img1.pic.in.th/images/payroll_03_manage_users.jpeg", title:"Payroll Generation", sub:"// สร้างสลิปเงินเดือน · อัปโหลด Excel · คำนวณอัตโนมัติ"},
  {src:"https://img2.pic.in.th/payroll_04_my_payslips.jpeg", title:"Reports & Analytics", sub:"// รายงานยอดจ่ายรวม · กราฟ · Export PDF"}
];

let currentSlide = 0;
let currentSlide2 = 0;

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

export function initSlider() {
  window.currentSlide = currentSlide;
  window.currentSlide2 = currentSlide2;
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
  console.log('Slider initialized');
}
