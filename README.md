# rikrunge.nl

Persoonlijke site van Rik Runge. Statische site met [Astro](https://astro.build), live via GitHub Pages op [www.rikrunge.nl](https://www.rikrunge.nl).

## Teksten aanpassen

| Wat | Bestand |
| --- | --- |
| Intro, functietitel, cijfers, werkwijze, omschrijving voor zoekmachines | `src/data/site.ts` |
| Ervaring en achtergrond | `src/data/ervaring.ts` |
| Over-tekst en knoppen op de voorpagina | `src/pages/index.astro` |
| Contactblok en footer | `src/components/Footer.astro` |
| Portret | `src/assets/portret.jpg` (vervangen met dezelfde naam) |

## Lokaal bekijken

```bash
npm install
npm run dev
```

Daarna open je http://localhost:4321.

## Live zetten

Elke push naar `main` bouwt en publiceert de site via `.github/workflows/deploy.yml`.

## Tijdelijke single pager

Nu staat alleen de voorpagina live. De volledige site met werk en cases staat opzij in `src/pages/_index-volledig.astro`, `src/pages/_over.astro` en `src/pages/_werk/`. Terugzetten: zet `tijdelijk` op `false` in `src/data/site.ts` en haal de liggende streep weg uit die drie namen (`_index-volledig.astro` wordt `index.astro`).
