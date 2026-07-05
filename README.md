# Kilombo Studios — Website

Community photography and creative space at 1282 Dundas St. W, Little Portugal, Toronto.

---

## File Structure

```
kilombo-studios/
├── index.html        ← Main website (single-page)
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Scroll reveal, nav, form behaviour
└── README.md
```

---

## Deploying to GitHub Pages

1. **Create a new GitHub repository** (e.g. `kilombo-studios`)
2. **Upload all files** — drag and drop into GitHub, or use Git:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR-USERNAME/kilombo-studios.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch, **/ (root)** folder
   - Click Save
4. Your site will be live at `https://YOUR-USERNAME.github.io/kilombo-studios/`

---

## Updating Content

### Change bulletin board cards
Open `index.html` and find the section with `id="bulletin"`.
Each card looks like this — edit the text directly:

```html
<div class="pin-card tone-mustard tilt-right reveal">
  <span class="pin-label">Upcoming Workshop</span>
  <h3>Workshop Title Here</h3>
  <p>Description of the workshop...</p>
  <div class="pin-date">Saturday, July 19 · 2–5pm</div>
  <span class="pin-spots">6 spots left</span>
  <a href="#contact" class="pin-link">Register</a>
</div>
```

Card colour tones: `tone-mustard`, `tone-terra`, `tone-sage`, `tone-white`
Card tilts: `tilt-left`, `tilt-right` (or omit for straight)
Wide cards: add `wide` class → `class="pin-card wide"`

### Change workshop dates or pricing
Search `index.html` for the text you want to update and edit in place.

### Swap the logo
The fire logo is an SVG built into the page. To replace it with your own image:
- Open `index.html`
- Find `id="fire-logo"` inside the `<svg style="display:none">` block
- Replace the contents with your own SVG, or switch both `<use href="#fire-logo">` instances to `<img src="logo.png">` tags

### Connect the contact form
The form currently shows a success state on submit but does not send emails.
To make it live, use **[Formspree](https://formspree.io)**:
1. Create a free Formspree account
2. Create a form and copy your endpoint URL (e.g. `https://formspree.io/f/xyzabc`)
3. In `index.html`, find `<form class="contact-form"` and add `action="YOUR_ENDPOINT" method="POST"`
4. Do the same for `<form class="host-form"`

---

## Brand Colours

| Name | Hex |
|---|---|
| Deep Green | `#264232` |
| Medium Green | `#3d6652` |
| Pale Sage | `#e8f0eb` |
| Mustard | `#c88715` |
| Terracotta | `#b2572b` |
| Cream | `#fdf6ec` |
| Warm Tan | `#f5ede0` |
| Charcoal | `#2a2018` |

---

Built with HTML, CSS, and vanilla JavaScript. No frameworks or dependencies.
Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
