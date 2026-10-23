# Yoonha Kim

Personal portfolio for a UC Berkeley Data Science and Statistics student, with a domain emphasis in Robotics.

**Website:** https://yhkimslv.github.io/

## Projects

- [Braille Text-to-Speech Converter](https://github.com/yhkimslv/braille-text-to-speech-converter) — AI4ALL Ignite computer vision team project. My experiment uses YOLO11n detection and EfficientNet-B0 classification.
- [AI Quiz and Video Generation](https://github.com/yhkimslv/quiz-generator) — collaborative Likelion × NAVER ZEP project for quiz generation, validation, and video workflows.
- [VIVA](https://github.com/yhkimslv/viva) — collaborative Git desktop application with Honda Research Institute USA through 99P Labs.
- [Gagyebu](https://github.com/yhkimslv/gagyebu) — independently developed personal and shared finance apps.
- Titanic Survival Prediction — DATA 144, UC Berkeley.
- NASA Global Temperature Visualization — STAT 159, UC Berkeley.

## Editing and local preview

The website uses plain HTML, CSS, JavaScript, and SVG. No build step is required.

- `index.html`: portfolio content, project links, and page metadata.
- `styles.css`: responsive layout, typography, and colors.
- `media.css`: project previews and the responsive demo viewer.
- `script.js`: project filters, demo playback, and footer year.
- `assets/media/`: real app walkthroughs, screenshots, and sample video output. See its README for sources and capture details.
- `assets/`: favicon and earlier conceptual illustrations.

Project previews autoplay in their cards when visible. GIFs and the muted quiz video have individual Play/Pause controls; clicking a preview opens the larger demo viewer. Offscreen previews pause, and reduced-motion preferences default to still posters. The demo viewer supports pausing GIF walkthroughs, video controls, Escape to close, and keyboard focus. To replace a demo, update the card's `data-demo-src`, `data-demo-poster`, accessible description, and caption in `index.html`.

Run `python3 -m http.server 8000` in this directory, then visit http://localhost:8000.

For GitHub Pages, select **Settings → Pages → Deploy from a branch → main → /(root)**. The custom `index.html` supplies the site layout; the original Cayman theme configuration remains available.

Originally forked from the [AI4ALL GitHub Pages template](https://github.com/AI4ALL-Official/ai4all-official.github.io). The original template license is retained.
