/* Glass Painting: menu, header, and quote form behavior */
(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  // ---- Mobile menu ----
  if (toggle && nav) {
    const setMenu = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', () => {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after choosing a link, pressing Escape, or tapping outside the header
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (nav.classList.contains('is-open') && !header.contains(event.target)) setMenu(false);
    });
    window.matchMedia('(min-width: 1140px)').addEventListener('change', (event) => {
      if (event.matches) setMenu(false);
    });
  }

  // ---- Header shadow once the page scrolls ----
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // ---- Hide the phone-sized call/quote bar while the quote form is on screen ----
  const mobileBar = document.querySelector('.mobile-cta');
  const quoteSection = document.getElementById('quote');
  if (mobileBar && quoteSection && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      mobileBar.classList.toggle('is-hidden', entry.isIntersecting);
    }, { threshold: 0.1 }).observe(quoteSection);
  }

  // ---- Footer year ----
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // ---- Quote form (sent through Web3Forms) ----
  const form = document.getElementById('quote-form');
  if (!form) return;

  const success = document.getElementById('form-success');
  const error = document.getElementById('form-error');
  const button = form.querySelector('button[type="submit"]');
  const label = button.querySelector('.btn-label');
  const idleLabel = label.textContent;

  const showError = () => {
    error.hidden = false;
    error.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.hidden = true;

    const data = Object.fromEntries(new FormData(form));

    // The hidden "botcheck" box is only ever ticked by spam bots
    if (data.botcheck) return;

    if (!data.access_key || data.access_key.startsWith('YOUR_')) {
      console.warn('Quote form is not connected yet: add the Web3Forms access key in index.html (see README).');
      showError();
      return;
    }

    data.subject = `New quote request: ${data.name} (${data.project_type})`;

    button.disabled = true;
    label.textContent = 'Sending...';
    form.setAttribute('aria-busy', 'true');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.message || `Request failed with status ${response.status}`);
      }

      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (err) {
      console.error('Quote form could not be sent:', err);
      showError();
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
      label.textContent = idleLabel;
      form.removeAttribute('aria-busy');
    }
  });
})();
