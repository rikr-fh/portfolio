// Ervaring, nieuwste eerst. Bron: LinkedIn-profiel (maart 2025) en cv (april 2022).
// `concept: true` = nog aanvullen; toont een gele tag op de site.
export interface Ervaring {
  periode: string;
  rol: string;
  organisatie: string;
  tekst?: string;
  concept?: boolean;
}

export const ervaring: Ervaring[] = [
  {
    periode: '2023 — heden',
    rol: 'Productontwerper',
    organisatie: 'Freshheads, Tilburg',
    tekst:
      'Ik werk aan meerdere producten tegelijk: van onderzoek en strategie tot klikbare prototypes. Soms coach ik teams in hoe ze samen beter bouwen.',
  },
  {
    periode: '2018 — 2023',
    rol: 'Creative consultant',
    organisatie: 'Trifork, Eindhoven',
    tekst:
      'Klantervaring ontworpen voor uiteenlopende bedrijven en organisaties. Ik leidde ontwerpworkshops en conceptontwikkeling en werkte mee in meerdere agile teams.',
  },
  {
    periode: '2013 — 2018',
    rol: 'Design (UX) consultant',
    organisatie: 'Philips Design, Eindhoven',
    tekst:
      'Software voor medische beeldvorming eenvoudiger gemaakt, met teams over de hele wereld: röntgen, CT, mammografie en echografie. De DigitalDiagnost C90 won onder meer een Red Dot en een iF Design Award.',
  },
  {
    periode: '2011 — 2013',
    rol: 'Interaction designer',
    organisatie: 'Mirabeau, Eindhoven',
    tekst:
      'Apps en websites voor consumenten prettig in gebruik gemaakt, van concept en gebruikersonderzoek tot prototype en usabilitytest. Voor onder meer SkyTeam, DAF Trucks, Jumbo en CZ.',
  },
  {
    periode: '2007 — 2018',
    rol: 'Oprichter en ontwerper',
    organisatie: 'Utopian Army, Eindhoven',
    tekst:
      'Eigen studio voor start-ups, landelijke organisaties en internationale bedrijven. Later vooral iPhone-apps ontworpen en gebouwd, zoals de bekroonde wekker-app Wakelicious.',
  },
];

// Achtergrond naast het werk. Bron: zelfde cv en LinkedIn-profiel.
export const achtergrond = [
  {
    label: 'Opleiding',
    items: ['Industrial Design Engineering, TU Eindhoven', 'Industrial Design, National University of Singapore (2006)'],
  },
  {
    label: 'Erkenning',
    items: [
      'Red Dot, iF, UX en Muse Design Award voor Philips DigitalDiagnost C90',
      'Dutch Interactive Award 2012, beste merksite',
      'Best Designed App 2012',
    ],
  },
  {
    label: 'Octrooien',
    items: [
      'Protocol based replacement of UI elements using AR (Philips, 2021)',
      'Patient positioning in diagnostic imaging (Philips, 2019)',
      'Apparatus for implementing a clinical protocol (Philips, 2019)',
    ],
  },
  {
    label: 'Daarnaast',
    items: ['Mede-oprichter van buurttuin Groene Oase in Tilburg, sinds 2020'],
  },
];
