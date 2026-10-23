# Project media sources

All displayed project media comes from real app interfaces or the project's own output. Previews use still posters; animation starts only when the visitor opens a demo.

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

- `viva-clone.jpg`: an existing application screenshot from the repository's Korean user guide. The source file has a `.png` extension but contains JPEG image data.
- Source: https://github.com/yhkimslv/viva/blob/main/assets/screenshots/native-clone-ko.png
- The screenshot shows the Korean GitHub project import dialog. It is a screenshot, not a recording.
- The original MIT license is retained in `VIVA-LICENSE.txt`.

## My Ledger

- `gagyebu-demo.gif`: an actual app walkthrough assembled from screenshots captured by interacting with the original My Ledger renderer, running offline in an isolated local environment.
- The sequence adds a sample expense, saves it, switches to the calendar, opens statistics, and selects a spending category.
- `gagyebu-poster.webp`: the spending statistics screen.
- All entries are clearly named sample transactions. No personal financial records were used.
- Source revision: `877e3944cafb4855490c1c3e2035d6f53cad30ed` of https://github.com/yhkimslv/gagyebu
- Captured on October 22, 2026.
