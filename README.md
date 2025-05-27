
# Press Your Luck Scoreboard (PWA)

This is a progressive web app (PWA) scoreboard for a custom air hockey-inspired game based on the **Press Your Luck** mechanic. Each player faces every other opponent once and chooses to press their luck for more points or walk away.

## 🔥 Features

- Supports **3 to 8 players**
- Dynamic player setup with name + rating
- Turn-based format: each player takes a round as the PYL challenger
- Triangular scoring formula: `n(n+1)/2` for each successful press
- Option to "Walk Away" and keep current score
- Ends turn after facing all opponents (n - 1 max)
- Automatic **final standings screen** after all turns
- **CSV export** of results
- Installable as a **PWA** (offline support)

## 📁 File List

- `press_your_luck_dynamic_players.html` – Main game UI
- `manifest.json` – PWA manifest
- `service-worker.js` – Offline caching
- `icon-192.png`, `icon-512.png` – App icons
- `PYLlogonoBG.png` – Game logo

## 🚀 Usage

1. Open `press_your_luck_dynamic_players.html` in a browser
2. Add 3–8 players and click **Start Game**
3. Each player takes turns pressing or walking
4. View final results and export them

## 📲 PWA Install Instructions

- Add to home screen on mobile (Chrome/Safari)
- Works offline after first load

---

Created with 💥 mallet-swinging madness by Pete.
