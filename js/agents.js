/* Agent template: renders one agent from window.VRM_AGENTS using ?agent=<slug>.
   Every value from the data goes through VRM.esc before it reaches innerHTML. */
(function () {
  'use strict';

  var root = document.getElementById('agent-root');
  if (!root) return;

  var helpers = window.VRM || {};
  var esc = typeof helpers.esc === 'function' ? helpers.esc : function (s) { return String(s == null ? '' : s); };
  var getParam = typeof helpers.getParam === 'function' ? helpers.getParam : function () { return null; };
  var list = Array.isArray(window.VRM_AGENTS) ? window.VRM_AGENTS : [];

  function findAgent(slug) {
    if (!slug) return null;
    var wanted = String(slug).toLowerCase();
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === wanted) return list[i];
    }
    return null;
  }

  function placeholder(agent, extraClass) {
    return '<div class="agent-placeholder ' + extraClass + '" aria-hidden="true">' +
      '<span class="agent-placeholder__initial">' + esc(agent.name.charAt(0)) + '</span>' +
      '<span class="agent-placeholder__role">' + esc(agent.role) + '</span>' +
      '</div>';
  }

  function keyChip(key) {
    if (!key || key === 'Extra') return '';
    if (key === 'Passive') return '<span class="key-chip key-chip--passive">Passive</span>';
    return '<span class="key-chip"><span class="sr-only">Key </span>' + esc(key) + '</span>';
  }

  function abilityIcon(ability) {
    if (ability.icon) {
      return '<img src="' + esc(ability.icon) + '" width="64" height="64" loading="lazy" decoding="async" alt="">';
    }
    var label = ability.key && ability.key !== 'Passive' && ability.key !== 'Extra' ? ability.key : '•';
    return '<span class="ability-chip" aria-hidden="true">' + esc(label) + '</span>';
  }

  function renderMissing(slug) {
    document.title = 'Agent not found — Agents — VALORANT Road Map';
    root.innerHTML =
      '<p><a class="back-link" href="agents.html">&larr; Back to Agents</a></p>' +
      '<div class="not-found card">' +
        '<h1>Agent not found</h1>' +
        '<p>We could not find an agent called <code>' + esc(slug || '') + '</code>. Check the link, or pick an agent from the roster.</p>' +
        '<p><a class="btn" href="agents.html">Back to Agents</a></p>' +
      '</div>';
  }

  function guideHtml(name) {
    var wiki = 'https://valorant.fandom.com/wiki/' + encodeURI(String(name).replace(/ /g, '_'));
    return '<h2 id="guides-title">Guides and lineups</h2>' +
      '<ul class="guide-links">' +
        '<li><a href="' + wiki + '" target="_blank" rel="noopener noreferrer">' + esc(name) + ' on the VALORANT Wiki</a></li>' +
        '<li><a href="https://valoplant.gg/" target="_blank" rel="noopener noreferrer">VALOPLANT.GG: lineups and strategies</a></li>' +
      '</ul>';
  }

  function renderAgent(agent) {
    document.title = agent.name + ' — Agents — VALORANT Road Map';

    var roleList = list.filter(function (a) { return a.role === agent.role; });
    var pos = roleList.indexOf(agent);
    var prev = roleList[(pos - 1 + roleList.length) % roleList.length];
    var next = roleList[(pos + 1) % roleList.length];

    var media = agent.art
      ? '<img src="' + esc(agent.art) + '" width="1000" height="908" decoding="async" alt="' + esc(agent.name) + ' artwork">'
      : placeholder(agent, 'agent-placeholder--hero');

    var abilities = (agent.abilities || []).map(function (ab) {
      return '<li class="card ability-card">' +
        '<div class="ability-card__icon">' + abilityIcon(ab) + '</div>' +
        '<div class="ability-card__body">' +
          '<h3>' + esc(ab.name) + keyChip(ab.key) + '</h3>' +
          '<p>' + esc(ab.desc) + '</p>' +
        '</div>' +
      '</li>';
    }).join('');

    var tips = (agent.beginnerTips || []).map(function (tip) {
      return '<li>' + esc(tip) + '</li>';
    }).join('');

    root.innerHTML =
      '<p><a class="back-link" href="agents.html">&larr; Back to Agents</a></p>' +
      '<div class="agent-hero split">' +
        '<div class="agent-hero__media media">' + media + '</div>' +
        '<div class="agent-hero__text">' +
          '<span class="tag">' + esc(agent.role) + '</span>' +
          '<h1>' + esc(agent.name) + '</h1>' +
          '<p class="agent-hero__intro">' + esc(agent.intro) + '</p>' +
        '</div>' +
      '</div>' +
      '<section class="agent-block" aria-labelledby="abilities-title">' +
        '<h2 id="abilities-title">Abilities</h2>' +
        '<ul class="grid grid--2 ability-list">' + abilities + '</ul>' +
      '</section>' +
      '<section class="card howto" aria-labelledby="howto-title">' +
        '<h2 id="howto-title">How to play as ' + esc(agent.name) + '</h2>' +
        '<ul class="howto-list">' + tips + '</ul>' +
      '</section>' +
      '<section class="card guides" aria-labelledby="guides-title">' + guideHtml(agent.name) + '</section>' +
      '<nav class="agent-pager" aria-label="Other ' + esc(agent.role) + 's">' +
        '<a class="pager-prev" href="agent-' + esc(prev.slug) + '.html"><small>Previous ' + esc(agent.role) + '</small><strong>&larr; ' + esc(prev.name) + '</strong></a>' +
        '<a class="pager-next" href="agent-' + esc(next.slug) + '.html"><small>Next ' + esc(agent.role) + '</small><strong>' + esc(next.name) + ' &rarr;</strong></a>' +
      '</nav>' +
      '<p class="keep-learning">Keep learning: <a href="fundamentals.html">Fundamentals</a> &middot; <a href="maps.html">Maps</a></p>';
  }

  var slug = getParam('agent') || (document.body && document.body.getAttribute('data-agent'));
  var agent = findAgent(slug);
  if (agent) {
    renderAgent(agent);
  } else {
    renderMissing(slug);
  }
})();
