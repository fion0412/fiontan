# I'M CEO website

Responsive brand website with 8 category routes, gallery, brand partnership draft download, and a local interactive member demo.

Run from the parent folder: `python3 -m http.server 4173 --bind 127.0.0.1`
Open http://127.0.0.1:4173/im-ceo/

Member login is explicitly a demonstration, not authentication. Bookings and wishes are stored locally in this browser; events are fictional examples. There is no payment, backend, official reservation, or outbound form submission. Real launch requires authentication, member-scoped database storage, confirmed event content and an agreed contact endpoint. Supplied photos are preserved; the site uses its own line icons based on the eight category concepts. Existing parent website files are unchanged.

## Real-life photo orbit (2026-09-12)
The homepage now shows eight local real photographs around a stationary brand core. The rotor and counter-rotating photo links share an 80-second CSS clock. Hover, keyboard focus, the explicit pause button, offscreen state, and reduced-motion preferences pause motion. Category routes and member recommendations retain the photo card grid.

Photo authors, source pages, license URLs, and focal positions are in `photos.js`. Public attribution and license notices are at `photo-credits.html`. Photos are illustrative, not club event records or endorsements. CC BY-SA photo adaptations retain the corresponding license; source PNG illustrations remain archived and are not used by the new category UI.

Browser checks (run through gstack browse while the homepage is open):
- `browse eval <absolute-project-path>/im-ceo/checks/orbit-geometry.js` at 1440, 768, 390 and 320px checks 80 rotation positions, boundaries, non-overlap and upright images.
- `browse eval <absolute-project-path>/im-ceo/checks/orbit-behavior.js` checks motion, pause/resume, pointer/keyboard behavior, offscreen handling, simulated reduced-motion controller state, and all eight category routes. Reload after checks to restore a fresh animation timeline.

The homepage hero uses a full-bleed community photo with a left-to-right dark gradient, the Chinese headline「玩嗨第二人生」, white type, and gold details inspired by the supplied reference layout. The photo now fills the complete hero frame with no side gutter; on small screens it remains full-bleed behind the readable copy.

## Real wishing tree
The dream banner uses the local `assets/wish-tree.png` scene: a photorealistic, richly leafed tree with many suspended wish cards. The scene was generated for this concept and contains no external image dependency or embedded text; the three highlighted wishes remain as accessible HTML overlays.
