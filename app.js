/* =============================================================
   Prime Care Senior Services — Node.js server
   A tiny Express server that serves the static website files.
   Use this ONLY if you're deploying via Hostinger's "Node.js app"
   setup. For plain static hosting you do NOT need this file.
   ============================================================= */
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the website files (index.html, css/, js/, images/, etc.)
// `extensions: ['html']` lets /founder resolve to founder.html
app.use(
  express.static(__dirname, {
    extensions: ["html"],
    setHeaders: (res, filePath) => {
      // Cache static assets for a week; keep HTML fresh
      if (/\.(css|js|png|jpe?g|svg|webp|ico)$/i.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=604800");
      }
    },
  })
);

// Anything not found -> friendly 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Prime Care website is running on port ${PORT}`);
});
