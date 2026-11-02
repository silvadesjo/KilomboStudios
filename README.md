# Kilombo Studios — Website

Community photography and creative space at 1282 Dundas St. W, Little Portugal, Toronto.
Live at **kilombostudios.ca** (GitHub Pages, deployed from the `main` branch).

## Pages

| File | What's on it |
|---|---|
| `index.html` | Home: hero, what's on and past workshops, the five rooms, rates |
| `workshops.html` | Next event (`#coming-up`), past workshops (`#past`), host a workshop form (`#host`) |
| `about.html` | Story, values, address and hours (`#find-us`) |
| `book.html` | Rates and memberships (`#rates`), booking request form (`#request`) |
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

**Change the upcoming event** — edit the black "Coming up" box in `workshops.html` and the "What's on" section in `index.html`.

Also update the black "next up" box in the `index.html` hero and the date in the top strip.

**Add a past workshop** — in `workshops.html` under `id="past"`, copy an `<article class="feature">` block
(alternate `feature--reverse` for a zig-zag layout), and add a teaser on `index.html`. Put posters in `images/`.

**Forms** — all forms send to kilombophotostudios@gmail.com through FormSubmit (set in `js/site.js`).
Links can pre-select the booking form topic with `book.html?interest=Book%20a%20Tour#request`;
the text must match an option in the "I'd like to book" list on `book.html`.
