export function initContact() {
  emailjs.init('kR443ZbmZjLMmZgTD');
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const params = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_of8a87v', 'template_bm0z6yn', params)
    .then(() => {
      btn.textContent = '✅ Sent!';
      btn.style.background = 'linear-gradient(135deg,#00ff88,#00d4ff)';
      document.getElementById('contactForm').reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      btn.textContent = '❌ Failed. Try again.';
      btn.style.background = 'linear-gradient(135deg,#ff0080,#7b2ff7)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
}

// Make function globally accessible for onsubmit handler in HTML
// This is intentional - the function needs to be called from HTML onsubmit attribute
window.handleContactSubmit = handleContactSubmit;
