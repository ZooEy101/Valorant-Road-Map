/* VALORANT Road Map — map detail renderer (map.html?map=<slug>).
   Reads the slug with window.VRM.getParam, renders from window.VRM_MAPS (data/maps.js),
   and escapes every value that goes into innerHTML. Unknown slugs get a friendly "not found" view. */
(function () {
  'use strict';

  var root = document.getElementById('map-root');
  if (!root) return;

  var esc = (window.VRM && window.VRM.esc) || function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  var maps = Array.isArray(window.VRM_MAPS) ? window.VRM_MAPS : [];
  var rawSlug = window.VRM && window.VRM.getParam ? window.VRM.getParam('map') : null;
  var slug = rawSlug ? String(rawSlug).trim().toLowerCase() : '';

  var map = null;
  for (var i = 0; i < maps.length; i++) {
    if (maps[i] && maps[i].slug === slug) { map = maps[i]; break; }
  }

  var crumb = document.getElementById('map-crumb');
  var SUFFIX = ' — Maps — VALORANT Road Map';

  var CTA =
    '<nav class="map-cta" aria-label="Next steps">' +
      '<a class="btn btn--ghost" href="maps.html">Back to all maps</a>' +
      '<a class="btn" href="agents.html">Agents</a>' +
      '<a class="btn" href="fundamentals.html">Fundamentals</a>' +
    '</nav>';

  function block(heading, src) {
    return (
      '<div class="map-block">' +
        '<h3>' + esc(heading) + '</h3>' +
        '<figure class="media map-block__media ratio-16x9">' +
          '<img src="' + esc(src) + '" alt="Example strategy screenshot" width="1280" height="720" loading="lazy" decoding="async">' +
        '</figure>' +
      '</div>'
    );
  }

  function renderNotFound() {
    document.title = 'Map not found' + SUFFIX;
    if (crumb) crumb.textContent = 'Not found';
    root.innerHTML =
      '<header class="section__header map-hero">' +
        '<span class="eyebrow">Map</span>' +
        '<h1>Map not found</h1>' +
        '<p class="section__lead">We could not find that map. Check the link, or browse the full list of maps to pick one.</p>' +
      '</header>' +
      '<div class="flex-wrap">' +
        '<a class="btn" href="maps.html">Back to all maps</a>' +
      '</div>';
  }

  function guideHtml(name) {
    var wiki = 'https://valorant.fandom.com/wiki/' + encodeURI(String(name).replace(/ /g, '_'));
    return '<h2 id="map-guides-title">Guides and lineups</h2>' +
      '<ul class="guide-links">' +
        '<li><a href="' + wiki + '" target="_blank" rel="noopener noreferrer">' + esc(name) + ' map page on the VALORANT Wiki</a></li>' +
        '<li><a href="https://valoplant.gg/" target="_blank" rel="noopener noreferrer">VALOPLANT.GG: ' + esc(name) + ' lineups and strategies</a></li>' +
      '</ul>';
  }

  function renderMap(m) {
    var name = esc(m.name);
    document.title = m.name + SUFFIX;
    if (crumb) crumb.textContent = m.name;
    var ex = Array.isArray(m.examples) ? m.examples : [];
    root.innerHTML =
      '<header class="section__header map-hero">' +
        '<span class="eyebrow">Map</span>' +
        '<h1>' + name + '</h1>' +
        '<p class="section__lead">' + esc(m.description) + '</p>' +
      '</header>' +
      '<section class="map-compositions" aria-labelledby="map-compositions-title">' +
        '<h2 id="map-compositions-title">Map agent compositions</h2>' +
        block('Example of map defence', ex[0] || '') +
        block('Example of map hits : attacking', ex[1] || ex[0] || '') +
      '</section>' +
      '<section class="card guides" aria-labelledby="map-guides-title">' + guideHtml(m.name) + '</section>' +
      CTA;
  }

  if (map) {
    renderMap(map);
  } else {
    renderNotFound();
  }
})();
