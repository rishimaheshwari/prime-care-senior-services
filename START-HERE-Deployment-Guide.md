# Prime Care Senior Services — Website Guide

Welcome! Your website is **built and ready**. This guide walks you through everything,
step by step, in plain English. No coding required. Take it one section at a time.

> **The 4 big steps:** (1) Preview it on your computer → (2) Turn on the contact form
> → (3) Upload to Hostinger → (4) Connect your domain + turn on the padlock (HTTPS).
> Budget about 30–45 minutes total.

---

## What you have

A folder called **`prime-care-website`** containing your whole site:

```
prime-care-website/
├── index.html      ← your home page
├── founder.html    ← the "Meet Our Founder" page
├── 404.html        ← shown if someone hits a broken link
├── css/styles.css  ← the design (colors, fonts, layout)
├── js/main.js       ← the menu, animations, and contact form
├── images/         ← (optional) put photos here later
├── favicon.svg     ← the little icon in the browser tab
├── robots.txt      ← helps Google
└── sitemap.xml     ← helps Google
```

You never *have* to touch the code. The only edits you'll make are the simple
find-and-replace steps below.

---

## STEP 1 — Preview it on your computer (2 minutes)

1. Open the `prime-care-website` folder.
2. **Double-click `index.html`.** It opens in your web browser. That's your live site!
3. Click around: the menu, the "Meet Our Founder" link, the buttons. Resize the
   window narrow to see how it looks on a phone.

> Nothing here is online yet — this is just a private preview on your own computer.

---

## STEP 2 — Turn on the contact form (5 minutes, one time)

Your site has a contact form. To make it email submissions to **3vedam@gmail.com**,
you'll use a free service called **Web3Forms** (no account or credit card needed).

1. Go to **https://web3forms.com**
2. In the box, type your email: **3vedam@gmail.com** and click **"Create Access Key."**
3. Check that email inbox — Web3Forms sends you an **Access Key** (a long string of
   letters/numbers like `a1b2c3d4-...`). Copy it.
4. Open the file **`index.html`** in a text editor:
   - On Mac: right-click `index.html` → **Open With → TextEdit**.
5. Use **Edit → Find & Replace** to find this exact text:
   ```
   YOUR_WEB3FORMS_ACCESS_KEY
   ```
   Replace it with the key you copied. Save the file (⌘S).

That's it — the form will now email every submission straight to the Gmail inbox.

> **Don't want a form at all?** You can skip this entirely. The big **Call** and
> **Email** buttons work on their own with zero setup. If the form is left
> unconnected, it politely tells visitors to call or email instead.

---

## STEP 3 — Add your domain name to the files (3 minutes)

A few files have a placeholder, **`www.YOURDOMAIN.com`**, that should become your real
domain (the one you bought). This is only for Google/search and link previews — the
site works without it, but it's worth doing.

1. In each of these files: **`index.html`**, **`founder.html`**, **`robots.txt`**,
   **`sitemap.xml`** —
2. Find every **`www.YOURDOMAIN.com`** and replace it with your real domain
   (for example `www.primecareseniorservices.com`). Use Find & Replace, save each file.

> Tell me your domain and I'll do this replacement for you automatically.

---

## STEP 4 — Put it online with Hostinger

You need two things from Hostinger: a **hosting plan** (this stores your website files)
and your **domain** connected to it. If you only bought a domain so far, you'll also need
a hosting plan — Hostinger's basic **"Premium Web Hosting"** plan is plenty for this site.

### 4a. Upload the website files

1. Log in at **https://hpanel.hostinger.com** (this is Hostinger's control panel, "hPanel").
2. On the top menu, click **Websites**, then **Manage** next to your site/domain.
3. In the sidebar, open **Files → File Manager**.
4. Double-click the **`public_html`** folder. This is the public home of your website.
   - If you see Hostinger's sample files in there (like `default.php` or a placeholder
     `index.html`), select them and **delete** them so they don't conflict.
5. Click the **Upload** button (an up-arrow icon, top right).
   - **Easiest method:** upload the file **`prime-care-website.zip`** (I created this for
     you — it's right next to your project folder). After it uploads, right-click it →
     **Extract** → extract into `public_html`. Then delete the .zip.
   - **Important:** `index.html` must sit *directly inside* `public_html` — NOT inside a
     sub-folder. If after extracting you see a `prime-care-website` folder inside
     `public_html`, open it, select all the files, and **move** them up one level into
     `public_html`.
6. Visit your domain in a browser. Your site should appear! (If you don't see it yet,
   do Step 4b — the domain may not be connected.)

### 4b. Connect your domain (only if the site doesn't show up yet)

- **If you bought the domain *from Hostinger*:** it's usually linked automatically. If
  not, in hPanel go to **Domains** and point it to this hosting plan.
- **If you bought the domain *somewhere else* (GoDaddy, Namecheap, etc.):** you need to
  point it to Hostinger. The cleanest way:
  1. In hPanel, find your **nameservers** (hPanel → look for "Nameservers"; Hostinger's
     are typically `ns1.dns-parking.com` and `ns2.dns-parking.com` — but use whatever
     hPanel shows you).
  2. Log in to wherever you bought the domain, find **DNS / Nameserver settings**, and
     replace the existing nameservers with Hostinger's.
  3. Save. DNS changes can take anywhere from a few minutes to 24 hours to take effect.

### 4c. Turn on the padlock (free HTTPS / SSL) — important

This gives your site the secure `https://` padlock. Visitors (and Google) expect it.

1. In hPanel, go to **Security → SSL** (sometimes under your website's settings).
2. If an SSL certificate isn't already active, click **Install** (it's free, via Let's
   Encrypt). It can take a few minutes to an hour.
3. Then look for a **"Force HTTPS"** toggle and turn it **on**, so visitors always get
   the secure version.

✅ **Done!** Your website is live and secure.

---

## STEP 5 — Help Google find you (recommended, ~15 min, optional)

1. **Google Business Profile** (most important for local care businesses):
   go to **https://www.google.com/business**, create a free listing for "Prime Care
   Senior Services LLC," add your phone, service area (Cuyahoga/Summit/Medina/Portage),
   and website link. This is how families nearby will find you on Google Maps/Search.
2. **Google Search Console** (`https://search.google.com/search-console`): add your
   domain and submit your sitemap (`https://www.YOURDOMAIN.com/sitemap.xml`) so Google
   indexes your pages faster.

---

## How to make edits later

- **Text changes** (phone number, wording, services): open the `.html` file in TextEdit,
  use Find & Replace, save, then re-upload that one file to `public_html` (overwrite it).
- **Colors:** open `css/styles.css` — the very top section (under "Design tokens") has all
  the colors in one place with plain labels.
- **Add a photo of Dr. Maheshwari:** see `images/README.txt` for the exact 2-line change.
- Or just tell me what you want changed and I'll do it.

---

## Quick reference

| Thing | Value |
|---|---|
| Business | Prime Care Senior Services LLC |
| Phone | (216) 777-0435 |
| Email | 3vedam@gmail.com |
| Service areas | Cuyahoga, Summit, Medina, Portage + NE Ohio |
| Hostinger panel | https://hpanel.hostinger.com |
| Form service | https://web3forms.com |

You've got this. Go one step at a time, and reach out if any step looks different on
your screen than what's described here.
