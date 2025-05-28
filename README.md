# Press Your Luck – Air Hockey Scoreboard

**Version:** v1.3.4 (Qundo)

A web-based scorekeeping tool designed for a dynamic air hockey format called **Press Your Luck** — built for anywhere from 3 to 9 players. This app supports a multi-round elimination and scoring structure with undo functionality, test mode, and mobile-optimized rules guidance.

---

## 🎮 Gameplay Summary

**Player Count:** 3 to 9 recommended (5–7 ideal)

**Rounds:** 7 by default

**Objective:** Score the most points after all rounds are completed.

---

## 🧠 Core Features

- ⚙️ **Game Setup:** Add/remove players (3–9), enter name and rating
- 🧪 **Test Mode:** Shake device to toggle test features like auto-fill
- 🧾 **Floating Rulebook:** Mobile-friendly How to Play button
- 🔁 **Turn Flow:** Offense faces defenders one by one in rating order
- 🎲 **Press / Walk / Fail** buttons track scoring logic
- ⬅️ **Undo (Qundo):** Reverse last press, walk, or fail
- 📱 **Mobile-first layout** with scrollable scoreboards
- 📊 **Live Tracker:** Streak and point total updates on the fly
- 🔁 **Reseeding Logic:** Auto-sorts players by score after each round
- 🏁 **Final Standings:** Auto-generated medal placements at game end

---

## 💡 Rules Summary (v1.0)

**Turn Options:**
- ✅ **Resign:** Keep current round score
- 🎯 **Press Your Luck:** Attempt to score — risk losing all points
- ❌ **Fail:** Defender scores on you = -1 round score

**Scoring Formula:**
- n successful presses = `n(n+1)/2` points

**Rotation:** Defenders rotate in from lowest to highest rating

**End of Round:** All players take a turn, then reseed by total score

**Game End:** Highest score after 7 rounds wins

---

## 🔐 Hidden Dev Features

- `?test=true` in the URL reveals Test Mode buttons
- Device shake triggers Test Mode toggle with confirmation

---

## 🧰 Version History

### v1.3.4 – (Qundo)
- Undo for walk and fail turns
- BACK button on Turn Complete page
- Shake-to-toggle test mode
- Floating "How to Play" button
- Mobile-optimized rule display
- Expanded to support 9 players
- Scoreboard and input layout refinements

---

Made with 💛 for the Air Hockey community
