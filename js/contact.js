export function initContact() {
  emailjs.init('kR443ZbmZjLMmZgTD');
}

function handleContactSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');

  // Honeypot check — bots fill hidden fields, humans don't
  const honeypot = form.querySelector('input[name="website"]');
  if (honeypot && honeypot.value) {
    // Silently reject spam submissions
    btn.textContent = '✅ Sent!';
    btn.style.background = 'linear-gradient(135deg,#00ff88,#00d4ff)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
    }, 3000);
    return;
  }

  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const messageEl = document.getElementById('message');

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const message = messageEl.value.trim();

  // Validate fields
  if (!name || !email || !message) {
    return;
  }

  // Email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return;
  }

  // Length limits to prevent abuse
  if (name.length > 100 || email.length > 100 || message.length > 2000) {
    return;
  }

  // Prevent double-submit
  if (btn.disabled) return;

  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const params = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send('service_of8a87v', 'template_bm0z6yn', params)
    .then(() => {
      btn.textContent = '✅ Sent!';
      btn.style.background = 'linear-gradient(135deg,#00ff88,#00d4ff)';
      form.reset();
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

// Global handler for inline onsubmit
window.handleContactSubmit = handleContactSubmit;
