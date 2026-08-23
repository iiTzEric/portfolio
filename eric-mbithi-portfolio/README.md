# Eric Mbithi — Portfolio

Bold, animated software engineer portfolio built with vanilla JS, GSAP, and Vite.

## Structure

```
├── index.html              # page markup
├── src/
│   ├── main.js              # entry point — imports styles, wires up all modules
│   ├── styles/
│   │   ├── main.css          # resets, variables, nav, base layout
│   │   ├── hero.css          # hero, marquee, about
│   │   ├── projects.css      # work list + skills grid
│   │   └── contact.css       # contact section
│   ├── animations/
│   │   ├── cursor.js         # custom cursor
│   │   ├── hero.js           # load-in timeline + progress bar
│   │   ├── marquee.js        # infinite scrolling band
│   │   ├── counters.js       # animated stat numbers
│   │   ├── scrollReveals.js  # ScrollTrigger reveals per section
│   │   ├── navScroll.js      # smooth in-page nav links
│   │   └── renderProjects.js # renders project cards from data
│   └── data/
│       └── projects.js       # ← edit this to add/change projects
└── public/
    └── resume.pdf            # ← drop your resume here
```

## Setup

```bash
npm install
npm run dev       # starts local dev server, usually http://localhost:5173
```

## Editing content

- **Projects**: edit the array in `src/data/projects.js` — no HTML editing needed.
- **Name / bio / skills**: edit directly in `index.html`.
- **Colors / fonts**: CSS variables at the top of `src/styles/main.css`.
- **Resume**: replace `public/resume.pdf` with your own file (same filename).

## Build & deploy

```bash
npm run build      # outputs production build to dist/
npm run preview    # serve the production build locally to sanity-check it
```

Deploy the `dist/` folder to any static host:

```bash
npx vercel          # Vercel
npx netlify deploy --prod --dir=dist   # Netlify
```
