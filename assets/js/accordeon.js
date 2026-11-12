// Ervaring en Achtergrond klappen op smalle schermen uit, één onderdeel tegelijk.
// Op brede schermen staat alles open. Zonder JavaScript staat ook alles open.
// De breedte hier hoort gelijk te zijn aan die in assets/css/site.css (760px).
(function () {
  var smal = window.matchMedia('(max-width: 760px)');
  var groepen = document.querySelectorAll('[data-accordeon]');

  function pasToe() {
    groepen.forEach(function (groep) {
      var naam = groep.getAttribute('data-accordeon');
      groep.querySelectorAll('details').forEach(function (item) {
        var kop = item.querySelector('summary');
        if (smal.matches) {
          item.open = false;
          item.setAttribute('name', naam);
          kop.removeAttribute('tabindex');
        } else {
          item.removeAttribute('name');
          item.open = true;
          kop.setAttribute('tabindex', '-1');
        }
      });
    });
  }

  pasToe();
  smal.addEventListener('change', pasToe);

  document.addEventListener('click', function (event) {
    if (!smal.matches && event.target.closest('[data-accordeon] summary')) event.preventDefault();
  });

  var html = document.documentElement;
  html.classList.add('acc-klaar');
  requestAnimationFrame(function () { requestAnimationFrame(function () { html.classList.add('acc-anim'); }); });
})();
