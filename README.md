# Yoonha Kim

Personal portfolio for a UC Berkeley Data Science and Statistics student, with a domain emphasis in Robotics.

**Website:** https://yhkimslv.github.io/

## Selected work

- [Braille Text-to-Speech Converter](https://github.com/yhkimslv/braille-text-to-speech-converter) — AI4ALL Ignite computer vision team project. My experiment uses YOLO11n detection and EfficientNet-B0 classification.
- [AI Quiz and Video Generation](https://github.com/yhkimslv/quiz-generator) — collaborative Likelion × ZEP project for quiz generation, validation, and video workflows.
- [VIVA](https://github.com/yhkimslv/viva) — collaborative Git desktop application with Honda Research Institute USA through 99P Labs.
- [Gagyebu](https://github.com/yhkimslv/gagyebu) — independently developed personal and shared finance apps.
- [Haunted Room Escape](https://yhkimslv.github.io/#course-cs61b) — a CS 61B course team project: a seeded Java game with procedural rooms and corridors, BFS click-to-walk navigation, undo/redo, and replay-based save/load.
- Code Compass / RepoKnow — a Git-history and CodeQL repository-analysis CLI prototype. Source is private.
- California Bicyclist Collisions — an interactive STAT 133 dashboard with an actual tab-switching walkthrough.
- State of the Union — a STAT 133 text-analysis site, previewed through its rendered frequency and sentiment views.
- Cook County Housing Models — collaborative DATA 100 A1/A2 exploration, regression modeling, and residual analysis.
- Gamma-Ray Arrivals & Bootstrap Uncertainty — STAT 135 estimation and bootstrap analyses from Homework 3 and 4.

The ten selected projects can be browsed by AI and machine learning, software and systems, data visualization, or statistical analysis. Selected coursework also remains in the course archive for context.

## Coursework archive

24 projects and analyses across eight UC Berkeley courses are listed in the [classroom section](https://yhkimslv.github.io/#classroom):

- DATA 100: Cook County housing exploration (A1), housing price prediction (A2), spam/ham classification (B1), and an expanded spam classifier (B2).
- STAT 133: NBA salary scrollytelling, bicyclist collision dashboard, crash map, and State of the Union text analysis.
- STAT 135: survey sampling, Gamma estimation and bootstrap, bearing failure-time tests, and body temperature/heart-rate regression (completed homework analyses).
- CS 61B: Haunted Room Escape and NGordnet / WordNet Explorer.
- CS 188: search, multi-agent search, reinforcement learning, probabilistic tracking, and neural networks/transformers.
- CS 168: traceroute, distance-vector routing, and simulated TCP transport.
- DATA 144: Titanic survival prediction modeling lab.
- DIGHUM 100: Did AI Take the Jobs? — analysis and narrative role in a collaborative study.

Descriptions are based on implemented coursework and saved reports. Course solutions, raw notebooks, and private repositories are not published here. DATA 100 and STAT 135 are presented through descriptions only; their assignment figures are withheld pending publication permission. CS 61B is also description-only, with its gameplay media withheld pending permission. STAT 133 project walkthroughs remain available, consistent with the course's project-publication requirements.

## Editing and local preview

The website uses plain HTML, CSS, JavaScript, and SVG. No build step is required.

- `index.html`: portfolio content, project links, and page metadata.
- `styles.css`: responsive layout, typography, and colors.
- `media.css`: project previews and the responsive demo viewer.
- `coursework.css`: course archive and project cards.
- `selected-work.css`: expanded project filters, description-only course features, and filtered grid layouts.
- `script.js`: project/course filters, course disclosures, demo playback, and footer year.
- `assets/media/`: real app walkthroughs, screenshots, and sample video output. See its README for sources and capture details.
- `assets/`: favicon and earlier conceptual illustrations.

Project previews autoplay in their cards when visible. GIFs and the muted quiz video have individual Play/Pause controls; clicking a preview opens the larger demo viewer. Offscreen previews pause, and reduced-motion preferences default to still posters. The demo viewer supports pausing GIF walkthroughs, video controls, Escape to close, and keyboard focus. To replace a demo, update the card's `data-demo-src`, `data-demo-poster`, accessible description, and caption in `index.html`.

Selected-work filters use each article’s `data-category` and update their counts automatically. Add a matching filter with `data-filter`, a descriptive `data-filter-label`, and a `data-filter-count` span when introducing a new area. Coursework-context links open and select the corresponding course in the archive.

To add coursework, copy a `.course-card` inside its `.course-group` in `index.html`, then edit the title, description, context, and tags. A new course needs a `.course-group` with a unique `data-course` value and a matching `data-course-filter` button. Update the course counts, classroom total, and initial status text. The filters count visible cards automatically after interaction. Keep collaboration roles explicit and check the applicable course's publication policy before adding assignment outputs, source code, or media. Native course disclosures work without JavaScript; DATA 100 opens by default.

Run `python3 -m http.server 8000` in this directory, then visit http://localhost:8000.

For GitHub Pages, select **Settings → Pages → Deploy from a branch → main → /(root)**. The custom `index.html` supplies the site layout; the original Cayman theme configuration remains available.

Originally forked from the [AI4ALL GitHub Pages template](https://github.com/AI4ALL-Official/ai4all-official.github.io). The original template license is retained.
