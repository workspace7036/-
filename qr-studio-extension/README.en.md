# QR Studio

**A minimal QR code generator for Chrome.** Custom dot and eye shapes, captioned frames, gradients, a centered logo (including dotted logos), and export to PNG, JPG, WEBP and SVG. Works fully offline.

[Русский](README.md) · [Publishing and security](PUBLISHING.md)

<p align="center">
  <img src="docs/screenshot-light.png" width="49%" alt="Light theme">
  <img src="docs/screenshot-dark.png" width="49%" alt="Dark theme">
</p>

## Features

- **Data types:** text and URLs, Wi‑Fi, Email, SMS, phone, geo, vCard, social links (Telegram, WhatsApp, Instagram, YouTube, TikTok, GitHub), and a "Current tab" button
- **Dots:** 9 shapes (squares, fluid, soft squares, dots, classic, diamonds, crosses, horizontal and vertical lines), module size and roundness
- **Eyes:** 7 shapes each for the frame and the center, with separate colors
- **Color:** solid, linear and radial fills, 7 palettes, random style button, transparent or rounded background, error correction L / M / Q / H
- **Frames:** 8 styles with a caption (banner top and bottom, thin and double line, dashed, corner brackets, badge, hard shadow)
- **Logo:** QR dots **wrap around the logo's shape** instead of cutting a square hole, or use a square cutout. Logos can also be converted into dots (diamonds, squares, circles, or the QR's own style)
- **Export:** PNG / JPG / WEBP / SVG up to 4096 px, copy image to clipboard, scan check via Chrome's built-in detector where available
- **Interface:** light and dark theme, reset, large window, remembered settings, Russian / Polish / Ukrainian / English

<p align="center"><img src="docs/popup.png" width="300" alt="Compact popup"></p>

## Installation

1. Download the repository and unzip it.
2. Open `chrome://extensions` and enable Developer mode.
3. Click "Load unpacked" and select the project folder (the one containing `manifest.json`).

To preview the UI, just open `popup.html` in a browser. There is no build step.

## Privacy and security

- Everything runs locally. No network requests (`connect-src 'none'`), no analytics, no remote code
- QR content (passwords, contacts) is never stored, only appearance settings are
- Strict CSP without `unsafe-inline` or `unsafe-eval`, minimal permissions: `activeTab`, `clipboardWrite`, and optional `tabs`
- Uploaded logos are type- and size-checked and re-rendered to PNG, so scripts inside SVG never run

See [PUBLISHING.md](PUBLISHING.md) and [PRIVACY.md](PRIVACY.md).

## Project layout

`manifest.json` (MV3, CSP, permissions) · `popup.html` / `popup.css` (UI) · `popup.js` (SVG generation, frames, logo, export, translations) · `qr-lib.js` (QR encoding) · `_locales/` (extension name and description) · `icons/`

## Licenses

QR encoding uses "QRCode for JavaScript" by Kazuhiko Arase (MIT), see [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt). "QR Code" is a registered trademark of DENSO WAVE INCORPORATED.
