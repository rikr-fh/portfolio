// Accordeon, alleen op smalle schermen. Op brede schermen staat alles open en is er niets te klikken.
// Zonder JavaScript staat alles open (de <details> hebben `open` in de HTML).
// Let op: de breedte hier moet gelijk zijn aan de media query in Ervaring.astro en Achtergrond.astro.
const smal = window.matchMedia('(max-width: 760px)');
const groepen = [...document.querySelectorAll<HTMLElement>('[data-accordeon]')];

function pasToe() {
  for (const groep of groepen) {
    const naam = groep.dataset.accordeon!;
    for (const item of groep.querySelectorAll<HTMLDetailsElement>('details')) {
      const kop = item.querySelector('summary');
      if (smal.matches) {
        item.open = false;
        item.setAttribute('name', naam); // zelfde naam = één tegelijk open
        kop?.removeAttribute('tabindex');
      } else {
        item.removeAttribute('name');
        item.open = true;
        kop?.setAttribute('tabindex', '-1');
      }
    }
  }
}

pasToe();
smal.addEventListener('change', pasToe);

// Breed scherm: klikken op een kop klapt niets in.
document.addEventListener('click', (event) => {
  if (!smal.matches && (event.target as Element).closest('[data-accordeon] summary')) event.preventDefault();
});

const html = document.documentElement;
html.classList.add('acc-klaar');
requestAnimationFrame(() => requestAnimationFrame(() => html.classList.add('acc-anim')));
