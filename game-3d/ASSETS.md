# /game-3d custom asset list

The app ships fully procedural (placeholder geometry, canvas textures, no
audio). Every asset below is optional: drop the file at the exact path under
`public/game-3d-assets/` and the app picks it up automatically on the next
build. Missing files are skipped silently.

Test with `bun run build && bun run preview` (the HMR dev server does not
serve `public/`).

Style brief for everything: **low-poly, flat-shaded, night/twilight palette
(deep navy #0a0c18, indigo #232c44), neon accents, slight emissive surfaces.**
Emissive parts should be authored as separate bright/emissive materials so
the bloom pass picks them up.

## 3D models (Meshy.ai) → `public/game-3d-assets/models/*.glb`

Export as `.glb`, Y-up, centered at origin, sitting on the ground plane
(y = 0). Scale does not matter; the app normalizes by footprint. Keep each
under ~15k triangles and ~2 MB.

| File | What to generate | Prompt hints |
| --- | --- | --- |
| `ufo.glb` | The player saucer | Low-poly flying saucer, metallic hull, glass dome, glowing cyan rim lights and underside emitter ring |
| `monument.glb` | Center plaza statue | Low-poly monument for a software engineer: obelisk or holographic terminal on a pedestal, subtle blue emissive details |
| `tree.glb` | Replaces all placeholder trees | Single low-poly stylized pine/poplar, 2 to 3 color flat-shaded foliage |
| `landmark-kraken.glb` | Kraken district (crypto exchange) | Low-poly crypto exchange tower: dark glass skyscraper with purple (#5741d9) neon kraken-tentacle motif and a rooftop Bitcoin beacon |
| `landmark-box.glb` | Box district (cloud content) | Low-poly data-center campus: stacked cube buildings (literal boxes), blue (#0061d5) neon edge lighting, satellite dishes |
| `landmark-timechimp.glb` | TimeChimp district (time-tracking SaaS) | Low-poly clock tower with orange (#f97316) glowing clock faces, small startup office at its base |
| `landmark-travix.glb` | Travix district (travel payments) | Low-poly small airport: terminal, control tower, one stylized plane, red (#e4002b) runway lights |
| `landmark-genius-sports.glb` | Genius Sports district (betting data) | Low-poly stadium with green (#16a34a) floodlights and a scoreboard |
| `landmark-finestmedia.glb` | Finestmedia district (Estonian govtech) | Low-poly government building with columns, Tallinn old-town flavor, amber (#b45309) window glow, antenna array (X-Road data exchange) |
| `landmark-speys-speyscloud.glb` | Speys district (logistics) | Low-poly logistics depot: warehouse, parcel truck, conveyor, teal (#0d9488) accent lights |
| `landmark-abb.glb` | ABB district (industrial automation) | Low-poly factory with robot arm, power pylons, red (#e30613) warning beacons |
| `landmark-projects-park.glb` | Side Projects Park | Low-poly fairground/arcade park: retro arcade cabinet, tiny tank, ferris wheel, pink (#db2777) neon |

Nice-to-have extras (no code slot yet, easy to add): street props
(`prop-car.glb`, `prop-bench.glb`), an observatory for the education section.

## Textures (Midjourney) → `public/game-3d-assets/textures/*.png|jpg|webp`

| File | What to generate | Notes |
| --- | --- | --- |
| `sky-panorama.png` | Night/twilight sky | Equirectangular 4096x2048 (or 2048x1024), starry night, purple-orange glow at the horizon, stylized flat-color look, no ground |
| `ground.png` | Ground tile | Seamless/tileable 1024x1024, stylized dark grass/turf top-down, flat shapes, desaturated navy-green |

Optional (would need small wiring, listed for the Midjourney batch):
`facade-a/b/c.png` (stylized building facades with lit windows, tileable
vertically), `asphalt.png` (dark stylized road tile), `og-game3d.png`
(social preview shot of the town).

## Audio (ElevenLabs) → `public/game-3d-assets/audio/*.mp3`

Loops should be seamless; keep files small (mono, 96 to 128 kbps is fine).

| File | What to generate |
| --- | --- |
| `ambient-town.mp3` | 30 to 60s seamless loop: calm night-city ambience, distant traffic, crickets, soft synth pad |
| `ufo-hum.mp3` | 5 to 10s seamless loop: soft sci-fi anti-gravity hum |
| `takeoff.mp3` | 1 to 2s whoosh/power-up for the "Take off" button |
| `scan-reveal.mp3` | Short ascending chime when a district lights up |
| `ui-click.mp3` | Tiny soft click for buttons (slot exists, wire as desired) |
| `vo-kraken.mp3` | Voiceover, ~10s, narrator style: the Kraken chapter (payments at a top crypto exchange, Node.js and Rust, on-call for real money) |
| `vo-box.mp3` | Voiceover: Box chapter (digital signatures and doc generation at enterprise scale) |
| `vo-timechimp.mp3` | Voiceover: TimeChimp chapter (lead engineer, 10 microservices, CQRS and event sourcing, team of 8) |
| `vo-travix.mp3` | Voiceover: Travix chapter (Apple/Google Pay, 3-D Secure 2.0, travel payments) |
| `vo-genius-sports.mp3` | Voiceover: Genius Sports chapter (risk management microservices for sports betting) |
| `vo-finestmedia.mp3` | Voiceover: Finestmedia chapter (Estonia's national research-grant portal, X-Road) |
| `vo-speys-speyscloud.mp3` | Voiceover: Speys chapter (parcel-tracking platform architected from scratch) |
| `vo-abb.mp3` | Voiceover: ABB chapter (first job, WPF analytics that helped cut workplace accidents 3x) |
| `vo-projects-park.mp3` | Voiceover: side projects (Rust/Bevy tank game, multiplayer drawing game, this portfolio) |

Voiceovers play automatically the first time the UFO hovers a district. Keep
scripts to 2 or 3 sentences; source the facts from `src/data/cv.ts`.

## How the override mechanism works

`src/game3d/assets.ts` probes each path with a HEAD request at startup:

- models: placeholder group is cleared and the GLB is swapped in, scaled to
  the slot's footprint and grounded at y = 0
- `sky-panorama` / `ground`: replace the procedural gradient/flat material
- audio: registered with the `AudioManager`; everything stays silent until
  the user presses "Take off" (browser autoplay rules)
