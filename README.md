# Portfolio — Quach Dang Hoang My

React 19 + Vite + Tailwind CSS 4. Multi-page: the home page is a React app, the three case studies are static pages.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
```

## Structure

```
index.html                  Home page (React app mounts here)
projects/ohmyhotel/index.html   /projects/ohmyhotel/   case study
projects/utop/index.html        /projects/utop/        UI showcase
projects/livetrans/index.html   /projects/livetrans/   case study

src/
  main.jsx, App.jsx
  components/               React components (one per section)
  data/                     cv.js (CV content), contacts.js (links, CV url)
  hooks/                    useReducedMotion, useTilt
  styles/                   ALL css: index.css (Tailwind tokens) + one file per feature/page
  scripts/                  JS used by static pages (ohmyhotel.js)

public/                     served as-is at the site root
  images/
    site/                   portrait, favicon, airecord/
    ohmyhotel/ utop/ livetrans/
  files/                    CV pdf
  brand.html                standalone brand guideline page
```

Adding a case study: create `projects/<name>/index.html`, put images in `public/images/<name>/`,
its css in `src/styles/<name>.css`, and add `<name>` to `pages` in `vite.config.js`.
