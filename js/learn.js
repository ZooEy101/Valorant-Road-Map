/* VALORANT Road Map — learn guides: highlight the table-of-contents entry for the section in view.
   Plain vanilla JS. Does nothing if the page has no TOC or IntersectionObserver is unavailable. */
(function () {
  'use strict';

  var links = document.querySelectorAll('.toc__list a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;

  var linkById = {};
  var targets = [];
  Array.prototype.forEach.call(links, function (a) {
    var id = a.getAttribute('href').slice(1);
    var el = id ? document.getElementById(id) : null;
    if (el) {
      linkById[id] = a;
      targets.push(el);
    }
  });
  if (!targets.length) return;

  var activeId = null;
  function setActive(id) {
    if (id === activeId) return;
    if (activeId && linkById[activeId]) {
      linkById[activeId].removeAttribute('aria-current');
    }
    activeId = id;
    if (linkById[id]) linkById[id].setAttribute('aria-current', 'true');
  }

  // A section counts as active while it crosses the upper-middle band of the viewport.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });

  targets.forEach(function (el) { observer.observe(el); });
})();
