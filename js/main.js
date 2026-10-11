/* VALORANT Road Map — shared behaviour: sticky header, mobile menu, helpers.
   Plain vanilla JS, no dependencies. Every piece is optional-safe. */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var toggle = header ? header.querySelector('.nav-toggle') : null;
  var nav = document.getElementById('site-nav');

  function setOpen(open) {
    if (!header || !toggle) return;
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  function isMobile() {
    return window.matchMedia('(max-width: 900px)').matches;
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(!header.classList.contains('is-open'));
    });
  }

  // Close the mobile menu after picking a link, on Escape, or when clicking outside.
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && isMobile()) setOpen(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header && header.classList.contains('is-open')) {
      setOpen(false);
      if (toggle) toggle.focus();
    }
  });
  document.addEventListener('click', function (e) {
    if (header && header.classList.contains('is-open') && !header.contains(e.target)) setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (!isMobile()) setOpen(false);
  });

  // Shadow on the sticky header once the page scrolls.
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Shared helpers for other scripts.
  window.VRM = window.VRM || {};
  window.VRM.getParam = function (name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (err) {
      return null;
    }
  };
  // Escape text before inserting into innerHTML.
  window.VRM.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
})();
