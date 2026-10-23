# Project media sources

All displayed project media comes from real app interfaces or the project's own output. Previews autoplay when their cards are visible, with individual pause controls. Offscreen previews pause; reduced-motion preferences default to still posters. Clicking a preview opens a larger view.

## Braille Reader

- `braille-demo.gif`: the existing 14-second walkthrough assembled from eight actual Braille Reader screenshots, using the DUCK sample, Local YOLO detection, and EfficientNet-B0 classification.
- `braille-poster.webp`: the completed detection view extracted from the walkthrough.
- The sequence demonstrates recognition and text output. It does not demonstrate audio playback.
- Project: https://github.com/yhkimslv/braille-text-to-speech-converter

## Quiz Generator

- `quiz-demo.mp4`: the unmodified project's video generator run with its bundled sample question about the 2022 FIFA World Cup. The seven-second output includes the countdown and Argentina answer reveal.
- `quiz-poster.webp`: the answer view extracted from that output.
- Generator: `src/generate_quiz_video.py`, input: item 1 of `src/dummy_quizzes.json`, purple theme.
- Source revision: `524db959160af05c796b1f033f8242893776433e` of https://github.com/yhkimslv/quiz-generator
- This demonstrates the video-generation stage using sample input.

## VIVA

- `viva-demo-clean.gif`: an actual English-language VIVA walkthrough captured from the unmodified desktop app with an isolated demo profile and sample Git repository.
- The sequence creates a feature branch, stages two changed files, enters a commit message, saves a local Git commit, and switches to the main branch.
- `viva-poster-clean.webp`: the staged files and commit message screen.
- Recaptured on October 22, 2026. The pointer was parked on the native window titlebar before each capture, and the titlebar was excluded from the final frame. No recording controls or pointer are included; the app content is unchanged.
- Eight frames, 1200 × 768, 14.12 seconds, looping. The former GIF and poster were replaced with new filenames so cached previews update.
- The app was not connected to GitHub or an AI provider. All project files are demonstration data.
- The earlier `viva-clone.jpg` screenshot is retained as an unused reference; the displayed preview uses the English GIF.
- Project: https://github.com/yhkimslv/viva
- Source revision: `261a86b4c3289cc2d31d17a6b45e9e18e2d90658`. The isolated sample repository records the demonstrated commit as `30e1ad9e7f704f6e1cd0c56517f98b4e29da8a64`.
- The original MIT license is retained in `VIVA-LICENSE.txt`.

## My Ledger

- `gagyebu-demo.gif`: an actual app walkthrough assembled from screenshots captured by interacting with the original My Ledger renderer, running offline in an isolated local environment.
- The sequence adds a sample expense, saves it, switches to the calendar, opens statistics, and selects a spending category.
- `gagyebu-poster.webp`: the spending statistics screen.
- All entries are clearly named sample transactions. No personal financial records were used.
- Source revision: `877e3944cafb4855490c1c3e2035d6f53cad30ed` of https://github.com/yhkimslv/gagyebu
- Captured on October 22, 2026.

## California Bicyclist Collisions

- `bicyclist-demo.gif`: five actual screenshots of the authored STAT 133 Project 4 rendered dashboard, captured by switching its Day-Hour, Collision Type, and Long-term Trends tabs.
- `bicyclist-poster.webp`: the Collision Type view, including aggregate totals and collision-type rankings.
- Source: the completed `project4.qmd` / self-contained `project4.html`, titled “California Bicyclist Collisions Dashboard (2014-2023)” and authored by Yoonha Kim.
- Captured on October 22, 2026. 943 × 925; 12.8 seconds, looping. Browser content screenshots contain no pointer or recording overlay. The original dashboard was served locally for capture; no course solution code or datasets are published here.

## State of the Union

- `sotu-demo.gif`: five actual screenshots from the completed STAT 133 Project 6 Quarto analysis site: overall word frequencies, words by president, keyword trends, Bing sentiment totals, and sentiment over time.
- `sotu-poster.webp`: the words-by-president view.
- Sources: rendered `analysis1.html` and `analysis2.html` from the completed site, corresponding to authored Quarto analysis files. All code disclosures stayed closed.
- Captured on October 22, 2026. 928 × 911; 12.8 seconds, looping. Browser content screenshots contain no pointer or recording overlay. Only the visible outputs are included; raw analysis code is not hosted with the portfolio.
