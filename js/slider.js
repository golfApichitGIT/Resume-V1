// Slider and Lightbox functionality

const galleries = [
  {
    slides: [
      {src:"images/stock/1.jpg", title:"หน้า Dashboard", sub:"// ภาพรวมระบบ · สถิติ · กราฟ realtime"},
      {src:"images/stock/2.jpg", title:"หน้าจัดการสต็อก", sub:"// รายการอะไหล่ · ค้นหา · แก้ไข"},
      {src:"images/stock/3.jpg", title:"หน้ารายงาน", sub:"// สรุปยอด · กราฟ · Export"},
      {src:"images/stock/4.jpg", title:"หน้าออเดอร์", sub:"// รายการสั่งซื้อ · สถานะ · ประวัติ"}
    ],
    current: 0,
    mainId: 'mainImg', captionTitleId: 'captionTitle', captionSubId: 'captionSub',
    thumbsId: 'thumbs1', lightboxId: 'lightbox', lightboxImgId: 'lightboxImg'
  },
  {
    slides: [
      {src:"images/payroll/1.png", title:"Payroll Dashboard", sub:"// ระบบจัดการเงินเดือน · สลิปเงินเดือน · รายงาน"},
      {src:"images/payroll/2.png", title:"Employee Management", sub:"// จัดการข้อมูลพนักงาน · แก้ไขข้อมูลส่วนตัว"},
      {src:"images/payroll/3.png", title:"Payroll Generation", sub:"// สร้างสลิปเงินเดือน · อัปโหลด Excel · คำนวณอัตโนมัติ"},
      {src:"images/payroll/4.png", title:"Reports & Analytics", sub:"// รายงานยอดจ่ายรวม · กราฟ · Export PDF"}
    ],
    current: 0,
    mainId: 'mainImg2', captionTitleId: 'captionTitle2', captionSubId: 'captionSub2',
    thumbsId: 'thumbs2', lightboxId: 'lightbox2', lightboxImgId: 'lightboxImg2'
  },
  {
    slides: [
      {src:"images/elderly/1.jpg", title:"หน้า Dashboard", sub:"// ภาพรวมระบบ · สถิติ · ข้อมูลผู้สูงอายุ"},
      {src:"images/elderly/2.jpg", title:"หน้าจัดการสุขภาพ", sub:"// บันทึกสุขภาพ · ความดัน · น้ำตาล · ชีพจร"},
      {src:"images/elderly/3.jpg", title:"หน้ารายงาน", sub:"// กราฟแนวโน้ม · ประวัติสุขภาพ · Export"},
      {src:"images/elderly/4.jpg", title:"หน้าแผนที่", sub:"// ตำแหน่ง GPS · LINE Bot · แจ้งเตือน"}
    ],
    current: 0,
    mainId: 'mainImg3', captionTitleId: 'captionTitle3', captionSubId: 'captionSub3',
    thumbsId: 'thumbs3', lightboxId: 'lightbox3', lightboxImgId: 'lightboxImg3'
  }
];

function switchSlideInternal(gallery, idx) {
  gallery.current = idx;
  const main = document.getElementById(gallery.mainId);
  main.style.transition = 'opacity .2s ease, transform .4s ease';
  main.style.opacity = '0';
  main.style.transform = 'scale(1.02)';
  setTimeout(() => {
    main.src = gallery.slides[idx].src;
    document.getElementById(gallery.captionTitleId).textContent = gallery.slides[idx].title;
    document.getElementById(gallery.captionSubId).textContent = gallery.slides[idx].sub;
    main.style.opacity = '1';
    main.style.transform = 'scale(1)';
  }, 200);
  // Scope thumb selection to THIS gallery only
  document.querySelectorAll('#' + gallery.thumbsId + ' .thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
}

function openLightboxInternal(gallery) {
  document.getElementById(gallery.lightboxImgId).src = gallery.slides[gallery.current].src;
  document.getElementById(gallery.lightboxId).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightboxInternal(gallery) {
  document.getElementById(gallery.lightboxId).classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNavInternal(gallery, dir) {
  gallery.current = (gallery.current + dir + gallery.slides.length) % gallery.slides.length;
  document.getElementById(gallery.lightboxImgId).src = gallery.slides[gallery.current].src;
  switchSlideInternal(gallery, gallery.current);
}

// Create public functions bound to each gallery index
function makePublicFns(galleryIdx) {
  const g = galleries[galleryIdx];
  return {
    switchSlide: (idx) => switchSlideInternal(g, idx),
    openLightbox: () => openLightboxInternal(g),
    closeLightbox: () => closeLightboxInternal(g),
    closeLightboxOutside: (e) => { if (e.target === document.getElementById(g.lightboxId)) closeLightboxInternal(g); },
    lightboxNav: (dir) => lightboxNavInternal(g, dir),
    getCurrent: () => g.current
  };
}

export function initSlider() {
  const fns = [makePublicFns(0), makePublicFns(1), makePublicFns(2)];

  // Expose globally for inline onclick handlers
  // Gallery 1
  window.switchSlide = fns[0].switchSlide;
  window.openLightbox = () => fns[0].openLightbox();
  window.closeLightbox = () => fns[0].closeLightbox();
  window.closeLightboxOutside = (e) => fns[0].closeLightboxOutside(e);
  window.lightboxNav = (dir) => fns[0].lightboxNav(dir);
  Object.defineProperty(window, 'currentSlide', {
    get() { return fns[0].getCurrent(); },
    set(v) { galleries[0].current = v; }
  });

  // Gallery 2
  window.switchSlide2 = fns[1].switchSlide;
  window.openLightbox2 = () => fns[1].openLightbox();
  window.closeLightbox2 = () => fns[1].closeLightbox();
  window.closeLightboxOutside2 = (e) => fns[1].closeLightboxOutside(e);
  window.lightboxNav2 = (dir) => fns[1].lightboxNav(dir);
  Object.defineProperty(window, 'currentSlide2', {
    get() { return fns[1].getCurrent(); },
    set(v) { galleries[1].current = v; }
  });

  // Gallery 3
  window.switchSlide3 = fns[2].switchSlide;
  window.openLightbox3 = () => fns[2].openLightbox();
  window.closeLightbox3 = () => fns[2].closeLightbox();
  window.closeLightboxOutside3 = (e) => fns[2].closeLightboxOutside(e);
  window.lightboxNav3 = (dir) => fns[2].lightboxNav(dir);
  Object.defineProperty(window, 'currentSlide3', {
    get() { return fns[2].getCurrent(); },
    set(v) { galleries[2].current = v; }
  });

  // Keyboard navigation for all lightboxes
  document.addEventListener('keydown', (e) => {
    galleries.forEach((g) => {
      if (document.getElementById(g.lightboxId).classList.contains('open')) {
        if (e.key === 'Escape') closeLightboxInternal(g);
        if (e.key === 'ArrowLeft') lightboxNavInternal(g, -1);
        if (e.key === 'ArrowRight') lightboxNavInternal(g, 1);
      }
    });
  });
}
