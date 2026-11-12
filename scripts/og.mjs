// Maakt public/og.png: de afbeelding die LinkedIn, WhatsApp e.d. tonen bij een gedeelde link.
// Draaien na een wijziging in naam, rol of portret:  npm run og
import { readFileSync, writeFileSync } from 'node:fs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const font = (p) => readFileSync(new URL(`../node_modules/${p}`, import.meta.url));
const portret = `data:image/jpeg;base64,${readFileSync(new URL('../src/assets/portret.jpg', import.meta.url)).toString('base64')}`;

const c = { bg: '#f1efe8', ink: '#1d1d1b', muted: '#5f5d56', line: '#d8d5cc', signal: '#e05a24' };
const h = (type, style, ...children) => ({ type, props: { style, children: children.length === 1 ? children[0] : children } });

const kaart = h('div', { width: 1200, height: 630, display: 'flex', position: 'relative', background: c.bg, paddingLeft: 72, alignItems: 'center' },
  h('div', { display: 'flex', flexDirection: 'column', width: 572 },
    h('div', { fontFamily: 'Plex', fontWeight: 500, fontSize: 28, color: c.muted }, 'Productontwerper bij Freshheads'),
    h('div', { fontFamily: 'Archivo', fontWeight: 800, fontSize: 136, lineHeight: 0.95, letterSpacing: -4, color: c.ink, marginTop: 20, display: 'flex', flexDirection: 'column' },
      h('span', {}, 'Rik'), h('span', {}, 'Runge')),
    h('div', { display: 'flex', alignItems: 'center', marginTop: 48, fontFamily: 'Plex', fontWeight: 500, fontSize: 26, color: c.ink },
      h('div', { width: 14, height: 14, borderRadius: 999, background: c.signal, marginRight: 14 }), 'www.rikrunge.nl')),
  h('div', { display: 'flex', position: 'absolute', top: 105, left: 708, width: 420, height: 420, borderRadius: 16, overflow: 'hidden' },
    { type: 'img', props: { src: portret, width: 420, height: 420, style: { width: 420, height: 420, objectFit: 'cover' } } }));

const svg = await satori(kaart, {
  width: 1200, height: 630,
  fonts: [
    { name: 'Archivo', data: font('@fontsource/archivo/files/archivo-latin-800-normal.woff'), weight: 800, style: 'normal' },
    { name: 'Plex', data: font('@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff'), weight: 400, style: 'normal' },
    { name: 'Plex', data: font('@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff'), weight: 500, style: 'normal' },
  ],
});
const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
writeFileSync(new URL('../public/og.png', import.meta.url), png);
console.log(`public/og.png geschreven (${Math.round(png.length / 1024)} kB)`);
