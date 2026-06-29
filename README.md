# KUK-CO d.o.o. — web stranica

Redizajnirana službena web stranica tvrtke **KUK-CO d.o.o.** (Solin) — izvođenje
elektroinstalacija jake i slabe struje.

Statična stranica izrađena u **HTML / CSS / JS** uz **Tailwind CSS**, optimizirana
za SEO i izvedbu (jedno-stranični, brzi, responzivni layout).

## Tehnologije

- HTML5 (semantički, `lang="hr"`)
- Tailwind CSS 3.4 (build preko Bun)
- Vanilla JavaScript (bez ovisnosti) — mobilni izbornik, scroll-reveal, animirani brojači
- SEO: meta + Open Graph + Twitter, JSON-LD (`Electrician` / `LocalBusiness`), `sitemap.xml`, `robots.txt`, web manifest

## Struktura

```
.
├── index.html              # cijela stranica (sve sekcije)
├── src/input.css           # ulazni Tailwind (direktive + komponente)
├── assets/css/styles.css   # generirani (minificirani) CSS
├── assets/js/main.js       # interakcije
├── assets/og-image.svg     # društvene mreže
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── tailwind.config.js
└── package.json
```

## Razvoj (Bun)

```bash
bun install        # instalacija ovisnosti
bun run dev        # Tailwind u watch modu
bun run build      # produkcijski (minificirani) CSS
bun run serve      # lokalni statički server
```

Stranica je čista statika — može se hostati bilo gdje (Netlify, Vercel,
GitHub Pages, Nginx/Apache). Za produkciju je dovoljno objaviti sve datoteke
osim `node_modules/` i `src/`.

## Kontakt forma

Obrazac koristi [FormSubmit](https://formsubmit.co/) (`action` u `index.html`).
Pri prvom slanju potrebno je jednokratno potvrditi e-adresu primatelja.
Zamijenite je vlastitim backendom po potrebi.
