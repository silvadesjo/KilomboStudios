    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // ── Nav scroll style ─────────────────────────────────────────────
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 60
        ? 'rgba(253,246,236,0.99)'
        : 'rgba(253,246,236,0.96)';
    });

    // ── Form submit ──────────────────────────────────────────────────
    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.form-submit');
      btn.textContent = 'Message Sent';
      btn.style.background = '#264232';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
        e.target.reset();
      }, 3000);
    }

    function handleHostSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.form-submit');
      btn.textContent = 'Proposal Sent';
      btn.style.background = '#264232';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Submit Proposal';
        btn.style.background = '';
        btn.disabled = false;
        e.target.reset();
      }, 3000);
    }

    // ── Sticky logo visibility ───────────────────────────────────────
    const stickyLogo = document.getElementById('sticky-logo');
    const heroSection = document.getElementById('hero');
    const stickyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          stickyLogo.classList.add('visible');
        } else {
          stickyLogo.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
    stickyObserver.observe(heroSection);