// Eén plek voor vaste gegevens. Positionering: Rik en zijn ervaring; werkgever genoemd;
// geen beschikbaarheid; contact via LinkedIn.
export const site = {
  // Tijdelijke single pager: alleen de voorpagina, zonder werk en cases.
  // Terug naar de volledige site: zet dit op false en hernoem in src/pages
  // `_index-volledig.astro` → `index.astro`, `_over.astro` → `over.astro`, `_werk` → `werk`.
  tijdelijk: true,
  name: 'Rik Runge',
  role: 'productontwerper',
  description:
    'Rik Runge, productontwerper bij Freshheads. Ik ontwerp digitale producten die eenvoudig zijn — en geruststellend waar het spannend wordt.',
  linkedin: { url: 'https://www.linkedin.com/in/rikrunge/', label: '/in/rikrunge' },
  employer: { name: 'Freshheads', place: 'Tilburg', url: 'https://www.freshheads.com/' },
  intro: 'Ik maak digitale producten eenvoudig — en geruststellend op de momenten dat het spannend wordt.',
  facts: [
    { label: 'Rol', value: 'Senior product designer' },
    { label: 'Werkt bij', value: 'Freshheads, Tilburg' },
    { label: 'Focus', value: 'UX · strategie · prototypes' },
    { label: 'Basis', value: 'Noord-Brabant, NL' },
  ],
  // Prijzen en octrooien komen uit cv en LinkedIn. "12+" komt uit de mock-up; cv wijst op meer (in het vak sinds 2007).
  cijfers: [
    { waarde: '12+', label: 'Jaar ervaring' },
    { waarde: '6', label: 'Designprijzen' },
    { waarde: '3', label: 'Octrooien' },
  ],
  werkwijze: [
    { label: 'Wat ik doe', items: ['Productstrategie', 'UX- en interactieontwerp', 'Prototypes die je kunt testen'] },
    { label: 'Hoe ik werk', items: ['Kort cyclisch, met het team', 'Eerst begrijpen, dan tekenen', 'Soms als coach van agile teams'] },
    { label: 'Waar ik op let', items: ['Zo min mogelijk stappen', 'Vooraf zeggen wat er gebeurt', 'Achteraf bevestigen dat het lukte'] },
  ],
};

export const categorieen = ['UX', 'Strategie', 'Prototype', 'Identiteit'] as const;
