# Hosting on Hostinger — Static vs. Node.js

You said Hostinger is asking for a **Node.js app**. Here's the honest situation,
then the steps for whichever route you take.

## Important: you most likely do NOT need Node.js

This website is **static** (plain HTML/CSS/JS). Static sites are served directly by
Hostinger from the `public_html` folder — **no Node.js, no setup, nothing to "run."**
This is simpler, faster, and more reliable. Hostinger's panel sometimes offers a
"Node.js" option, but for a site like this you can ignore it.

- **Recommended:** follow `START-HERE-Deployment-Guide.md` → upload the files to
  `public_html`. Done. (The `app.js` and `package.json` files are simply ignored.)

Only use the Node.js route below if your specific plan/setup requires it, or you
already started down that path and want to finish it.

---

## If you ARE using Hostinger's Node.js app

I've included a tiny server (`app.js` + `package.json`) that serves this website.
It's tested and working.

1. **Upload the project** to your hosting (e.g., into a folder like
   `domains/YOURDOMAIN.com/nodeapp` via File Manager — upload the ZIP and extract).
   Make sure `app.js`, `package.json`, `index.html`, `css/`, `js/`, `images/` are all
   in that folder.
2. In hPanel, open **Advanced → Node.js** (the "Setup Node.js App" / Node.js Selector).
3. Click **Create Application** and set:
   - **Node.js version:** 18 or higher (20 is great)
   - **Application mode:** Production
   - **Application root:** the folder where you uploaded the files (the one containing `app.js`)
   - **Application URL:** your domain
   - **Application startup file:** `app.js`
4. Create it, then click **Run NPM Install** (this installs Express — defined in
   `package.json`). Do **not** upload the `node_modules` folder yourself; the server
   builds it here.
5. Click **Start** (or Restart) the application.
6. Visit your domain — the site should load.

### Notes
- The server reads the port from `process.env.PORT`, which Hostinger/Passenger sets
  automatically. You don't need to configure a port.
- Extensionless URLs work: `/founder` serves `founder.html`.
- Missing pages serve `404.html`.

---

### My recommendation
Use the **static** route (`public_html`) unless you have a reason not to — it's the
least that can go wrong. If you hit a wall with either path, tell me exactly what the
Hostinger screen says and I'll guide you click-by-click.
