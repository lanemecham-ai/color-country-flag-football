/* Color Country Flag Football League — site scripts
   Mobile navigation toggle. (Forms are embedded JotForms; each page's embed
   is initialized by the jotformEmbedHandler snippet at the bottom of the page.) */

(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu when a link inside it is chosen
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Communities dropdown ------------------------------------------- */

  var drops = Array.prototype.slice.call(document.querySelectorAll('.nav-drop'));

  function closeDrops(except) {
    drops.forEach(function (drop) {
      if (drop === except) { return; }
      drop.classList.remove('open');
      var b = drop.querySelector('.nav-drop-toggle');
      if (b) { b.setAttribute('aria-expanded', 'false'); }
    });
  }

  drops.forEach(function (drop) {
    var btn = drop.querySelector('.nav-drop-toggle');
    if (!btn) { return; }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      closeDrops(drop);
    });
  });

  if (drops.length) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-drop')) { closeDrops(null); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeDrops(null); }
    });
  }
})();
