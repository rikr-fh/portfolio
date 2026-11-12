// Eén plek voor vaste gegevens. Positionering: Rik en zijn ervaring; werkgever genoemd;
// geen beschikbaarheid; contact via LinkedIn.
export const site = {
  // Tijdelijke single pager: alleen de voorpagina, zonder werk en cases.
  // Terug naar de volledige site: zet dit op false en hernoem in src/pages
  // `_index-volledig.astro` → `index.astro`, `_over.astro` → `over.astro`, `_werk` → `werk`.
  tijdelijk: true,
  name: 'Rik Runge',
  role: 'Senior product designer',
  description:
    'Rik Runge, senior product designer bij Freshheads. Ik maak digitale producten eenvoudig. En geruststellend op de momenten dat het spannend wordt.',
  linkedin: { url: 'https://www.linkedin.com/in/rikrunge/', label: '/in/rikrunge' },
  employer: { name: 'Freshheads', place: 'Tilburg', url: 'https://www.freshheads.com/' },
  intro: 'Ik maak digitale producten eenvoudig. En geruststellend op de momenten dat het spannend wordt.',
  // Eén regel bewijs bovenaan de pagina.
  bewijs: 'Eerder werkte ik bij Philips Design, Trifork en Mirabeau. Mijn werk is bekroond met onder meer een Red\u00a0Dot en iF\u00a0Design\u00a0Award.',
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
    { label: 'Wat ik doe', items: ['Productstrategie', 'UX- en interactieontwerp', 'Testbare interactieve prototypes'] },
    { label: 'Hoe ik werk', items: ['Kort cyclisch, met het team', 'Eerst begrijpen, dan tekenen', 'Soms als coach van agile teams'] },
    { label: 'Waar ik op let', items: ['Zo min mogelijk stappen', 'Vooraf zeggen wat er gebeurt', 'Achteraf bevestigen dat het lukte'] },
  ],
};

export const categorieen = ['UX', 'Strategie', 'Prototype', 'Identiteit'] as const;
