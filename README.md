# da1ssk.github.io
My github pages!

The root `index.html` is the landing page for Kakumei apps. Each app has its own
directory (`vfc`, `furuicam`, `snapcinema`, `dreamtunes`, `jh`) and loads `shared.css`
plus a per-app theme file that defines the colour variables; the root page uses `home.css`.

ShotEvals is a web app hosted separately at <https://shotevals.netlify.app/>.

`caddiesense`, `mikan` and `fakebrowser` are still in the repository but are no longer
linked from the landing page.


## Codedas share links

Codedas shares cards as `https://da1ssk.github.io/codedas/add/#n=…&t=…&c=…`. Three files make that work:

- `.well-known/apple-app-site-association` tells iOS to open `/codedas/add/` in the app (Universal Links).
- `_config.yml` includes `.well-known`; Jekyll would otherwise skip folders starting with a dot.
- `codedas/add/index.html` is where the link lands when the app isn't installed. It points to the
  App Store, then offers `codedas://add#…` so the card can be added after installing.

The card sits after the `#`, which browsers never send to the server. Keep analytics and external
scripts off that page. The link format lives in `Codedas/Services/SharedCard.swift` in the
Codedas repository; change both together.

To check: `https://da1ssk.github.io/.well-known/apple-app-site-association` should return the JSON,
and Apple's CDN copy at `https://app-site-association.cdn-apple.com/a/v1/da1ssk.github.io` can take
about a day to update.
