// Navigation functionality
export function initNav() {
  // Hamburger menu toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
  
  // Smooth scroll behavior for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Reset animation so it re-triggers on nav click
        target.classList.remove('in-view');
        setTimeout(() => {
          target.classList.add('in-view');
        }, 50);
      }
    });
  });
  
  // Navigation scroll behavior (add shadow/background on scroll)
  let lastScroll = 0;
  const nav = document.querySelector('nav');
  
  if (nav) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add/remove background based on scroll position
      if (currentScroll > 50) {
        nav.style.background = 'rgba(5, 10, 15, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
      } else {
        nav.style.background = 'rgba(5, 10, 15, 0.85)';
        nav.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navMenuItems = document.querySelectorAll('.nav-links a[href^="#"]');
  
  function highlightActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navMenuItems.forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink(); // Initial call
}
