// Kilombo Studios — shared site script

// Drop the hero prints in once the page (and its images) are ready.
window.addEventListener('load', () => document.documentElement.classList.add('loaded'));
setTimeout(() => document.documentElement.classList.add('loaded'), 1800);

// ── Contact form topic ─────────────────────────────────────────────
// Links can pre-select what someone is asking about, either on the same
// page (data-interest="...") or from another page (visit.html?interest=...).
(function () {
  const select = document.getElementById('contact-interest');
  if (!select) return;
  const choose = (text) => {
    const match = [...select.options].find(o => o.text === text);
    if (match) select.value = match.text;
  };
  const fromUrl = new URLSearchParams(location.search).get('interest');
  if (fromUrl) choose(fromUrl);
  document.querySelectorAll('a[data-interest]').forEach(link =>
    link.addEventListener('click', () => choose(link.dataset.interest)));
})();

// ── Forms: send submissions to the studio inbox via FormSubmit ─────
// The first submission triggers a one-time activation email to
// kilombophotostudios@gmail.com — click the link in it to start receiving.
(function () {
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/kilombophotostudios@gmail.com';
  const MESSAGES = {
    contact:    { busy: 'Sending…', done: 'Message sent', ok: "Thanks! Your message is on its way. We'll get back to you soon." },
    host:       { busy: 'Sending…', done: 'Proposal sent', ok: "Thank you! Joyce will reach out within a week to talk through your idea." },
    newsletter: { busy: 'Joining…', done: "You're in", ok: "Welcome to the Kilombo community. Watch your inbox." }
  };

  document.querySelectorAll('form[data-form]').forEach(form => {
    const msg = MESSAGES[form.dataset.form];
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    const status = form.querySelector('.form-status') || form.parentElement.querySelector('.form-status');

    const show = (html, ok) => {
      if (!status) return;
      status.hidden = false;
      status.className = 'form-status ' + (ok ? 'ok' : 'err');
      status.innerHTML = html;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (data._honey) return;              // a bot filled the hidden field
      delete data._honey;
      data._subject = form.dataset.subject;
      data._template = 'table';

      btn.disabled = true;
      btn.textContent = msg.busy;
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || String(json.success) === 'false') throw new Error(json.message || res.status);
        btn.textContent = msg.done;
        show(msg.ok, true);
        form.reset();
        setTimeout(() => { btn.textContent = label; btn.disabled = false; }, 4000);
      } catch (err) {
        btn.textContent = label;
        btn.disabled = false;
        show('That didn’t go through. Try again, or email <a href="mailto:kilombophotostudios@gmail.com">kilombophotostudios@gmail.com</a>.', false);
      }
    });
  });
})();
