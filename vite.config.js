import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Case-study pages live in /projects/<name>/index.html and are served at
// /projects/<name>/ (dev, preview and production) without typing "index.html".
const dir = "projects";
const pages = ["ohmyhotel", "utop", "livetrans"];

// Redirect "/utop" -> "/utop/" in dev and preview (Vercel does this via vercel.json).
const trailingSlash = () => {
  const middleware = (req, res, next) => {
    const url = req.url.split("?")[0];
    const name = url.replace(/^\/|\/$/g, "");
    if (pages.some((p) => name === `${dir}/${p}`) && !url.endsWith("/")) {
      res.statusCode = 301;
      res.setHeader("Location", `/${name}/`);
      return res.end();
    }
    next();
  };
  return {
    name: "case-study-trailing-slash",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
};

export default defineConfig({
  plugins: [react(), tailwindcss(), trailingSlash()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        ...Object.fromEntries(pages.map((p) => [p, resolve(import.meta.dirname, dir, p, "index.html")])),
      },
    },
  },
});
