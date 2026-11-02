# Kilombo Studios — Website

Community photography and creative space at 1282 Dundas St. W, Little Portugal, Toronto.
Live at **kilombostudios.ca** (GitHub Pages, deployed from the `main` branch).

## Pages

| File | What's on it |
|---|---|
| `index.html` | Home: hero, $5 Headshot Day, the five rooms, our story, studio access rates, newsletter |
| `workshops.html` | Coming up, what we teach, past events (`#past`), host a workshop form (`#host`) |
| `visit.html` | Address and hours, memberships and rates (`#rates`), booking and contact form (`#contact`) |
| `events.html` | Redirects old links to `workshops.html#past` |

Shared files: `css/site.css` (all styles), `js/site.js` (forms and the hero animation),
`fonts/` (self-hosted Galindo, Space Mono, Space Grotesk), `images/`.

## Look and feel

Taken from the $5 Headshot Day poster.

| Name | Hex | Use |
|---|---|---|
| Paper | `#F0EFEA` | Page background |
| Ink | `#1D1C19` | Text |
| Black | `#000000` | Photo frames, buttons, inverted sections |
| Violet | `#7B4DFF` | Only for "happening now": the current event's frame, focus rings, the current page in the menu |
| Cow hide | `images/hide.jpg` | Large backgrounds only (hero, page bands, footer) |

Type: **Galindo** for the wordmark and page titles, **Space Mono** for headings and details,
**Space Grotesk** for body text.

Every photo sits in a thick black frame (`<figure class="frame">`). Add `frame--now` to give
the current event its violet ring.

## Common updates

**Add an event to "Coming up"** — in `workshops.html`, copy one `<li>` inside `<ul class="rows">`
and edit the date, title, description and button.

**Change the featured event** — edit the "What's on" section and the black "next up" box in
`index.html`, plus the date in the top strip on each page.

**Add a past event** — in `workshops.html` under `id="past"`, copy the `<div class="feature">` block.
Put photos or posters in `images/`.

**Forms** — all forms send to kilombophotostudios@gmail.com through FormSubmit (set in `js/site.js`).
Links can pre-select the contact form topic with `visit.html?interest=Book%20a%20Tour#contact`;
the text must match an option in the "I'm interested in" list on `visit.html`.
