export function initTypewriter() {
  const phrases = ['Frontend Developer', 'React Developer', 'UI/UX Enthusiast', 'Mobile App Developer'];
  let pi = 0, ci = 0, del = false;
  
  function typed() {
    const el = document.getElementById('typed-text');
    if (!el) return;
    if (!del) {
      if (ci < phrases[pi].length) {
        el.textContent = phrases[pi].slice(0, ++ci);
        setTimeout(typed, 80);
      } else {
        del = true;
        setTimeout(typed, 2000);
      }
    } else {
      if (ci > 0) {
        el.textContent = phrases[pi].slice(0, --ci);
        setTimeout(typed, 40);
      } else {
        del = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(typed, 400);
      }
    }
  }
  
  setTimeout(typed, 1800);
}

export function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('section').forEach(s => obs.observe(s));
}
