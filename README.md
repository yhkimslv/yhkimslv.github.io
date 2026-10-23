# Yoonha Kim

Personal portfolio for a UC Berkeley Data Science and Statistics student, with a domain emphasis in Robotics.

**Website:** https://yhkimslv.github.io/

## Projects

- [Braille Text-to-Speech Converter](https://github.com/yhkimslv/braille-text-to-speech-converter) — AI4ALL Ignite computer vision team project. My experiment uses YOLO11n detection and EfficientNet-B0 classification.
- [AI Quiz and Video Generation](https://github.com/yhkimslv/quiz-generator) — collaborative Likelion × NAVER ZEP project for quiz generation, validation, and video workflows.
- [VIVA](https://github.com/yhkimslv/viva) — collaborative Git desktop application with Honda Research Institute USA through 99P Labs.
- [Gagyebu](https://github.com/yhkimslv/gagyebu) — independently developed personal and shared finance apps.
- Code Compass / RepoKnow — a Git-history and CodeQL repository-analysis CLI prototype. Source is private.

## Coursework archive

20 projects across seven UC Berkeley courses are listed in the [classroom section](https://yhkimslv.github.io/#classroom):

- DATA 100: Cook County housing exploration (A1), housing price prediction (A2), spam/ham classification (B1), and an expanded spam classifier (B2).
- STAT 133: NBA salary scrollytelling, bicyclist collision dashboard, crash map, and State of the Union text analysis.
- CS 61B: Haunted Room Escape and NGordnet / WordNet Explorer.
- CS 188: search, multi-agent search, reinforcement learning, probabilistic tracking, and neural networks/transformers.
- CS 168: traceroute, distance-vector routing, and simulated TCP transport.
- DATA 144: Titanic survival prediction modeling lab.
- DIGHUM 100: Did AI Take the Jobs? — analysis and narrative role in a collaborative study.

Descriptions are based on implemented coursework and saved reports. Course solutions, raw notebooks, and private repositories are not published here. The DATA 100 images are actual saved notebook outputs; see `assets/coursework/README.md` for provenance. Cross-validation results are identified as such.

## Editing and local preview

The website uses plain HTML, CSS, JavaScript, and SVG. No build step is required.

- `index.html`: portfolio content, project links, and page metadata.
- `styles.css`: responsive layout, typography, and colors.
- `media.css`: project previews and the responsive demo viewer.
- `coursework.css`: course archive, project cards, and figure layout.
- `script.js`: project/course filters, course disclosures, demo playback, and footer year.
- `assets/media/`: real app walkthroughs, screenshots, and sample video output. See its README for sources and capture details.
- `assets/coursework/`: selected genuine analysis figures, with provenance.
- `assets/`: favicon and earlier conceptual illustrations.

Project previews autoplay in their cards when visible. GIFs and the muted quiz video have individual Play/Pause controls; clicking a preview opens the larger demo viewer. Offscreen previews pause, and reduced-motion preferences default to still posters. The demo viewer supports pausing GIF walkthroughs, video controls, Escape to close, and keyboard focus. To replace a demo, update the card's `data-demo-src`, `data-demo-poster`, accessible description, and caption in `index.html`.

To add coursework, copy a `.course-card` inside its `.course-group` in `index.html`, then edit the title, description, context, and tags. A new course needs a `.course-group` with a unique `data-course` value and a matching `data-course-filter` button. Update the course counts, classroom total, and initial status text. The filters count visible cards automatically after interaction. Keep collaboration roles explicit and distinguish training, cross-validation, and test results. Optional figure buttons use `data-demo-type="image"` with an accurate description and image alt text. Native course disclosures work without JavaScript; DATA 100 opens by default.

Run `python3 -m http.server 8000` in this directory, then visit http://localhost:8000.

For GitHub Pages, select **Settings → Pages → Deploy from a branch → main → /(root)**. The custom `index.html` supplies the site layout; the original Cayman theme configuration remains available.

Originally forked from the [AI4ALL GitHub Pages template](https://github.com/AI4ALL-Official/ai4all-official.github.io). The original template license is retained.
