Press Your Luck – Air Hockey Scoreboard

Version: v1.4.3 (upnext)

A web-based scorekeeping tool designed for a dynamic air hockey format called Press Your Luck — built for anywhere from 3 to 9 players. This app supports a multi-round elimination and scoring structure with undo functionality, test mode, and mobile-optimized rules guidance.

⸻

🎮 Gameplay Summary

Player Count: 3 to 9 recommended (5–7 ideal)

Rounds: 7 by default

Objective: Score the most points after all rounds are completed.

⸻

🧠 Core Features
	•	⚙️ Game Setup: Add/remove players (3–9), enter name and rating
	•	🧪 Test Mode: Shake device to toggle test features like auto-fill
	•	🧾 Floating Rulebook: Mobile-friendly How to Play button
	•	🔁 Turn Flow: Offense faces defenders one by one in rating order
	•	🎲 Press / Walk / Fail buttons track scoring logic
	•	⬅️ Undo (Qundo): Reverse last press, walk, or fail
	•	📱 Mobile-first layout with scrollable scoreboards
	•	📊 Live Tracker: Streak and point total updates on the fly
	•	🔁 Reseeding Logic: Auto-sorts players by score after each round
	•	🏁 Final Standings: Auto-generated medal placements at game end

⸻

💡 Rules Summary (v1.0)

Turn Options:
	•	✅ Resign: Keep current round score
	•	🎯 Press Your Luck: Attempt to score — risk losing all points
	•	❌ Fail: Defender scores on you = -1 round score

Scoring Formula:
	•	n successful presses = n(n+1)/2 points

Rotation: Defenders rotate in from lowest to highest rating

End of Round: All players take a turn, then reseed by total score

Game End: Highest score after 7 rounds wins

⸻

🔐 Hidden Dev Features
	•	?test=true in the URL reveals Test Mode buttons
	•	Device shake triggers Test Mode toggle with confirmation

⸻

🧰 Changelog

v1.4.3 – (upnext)
	•	Updated Round Queue Display to only show the “Up Next” player (offense)
	•	Temporarily removed the “Next Defender” display to avoid confusion
	•	Fixed Undo Button Logic:
	•	Restores previous streak, score, and opponent index
	•	Returns to gameplay screen if walk/fail is undone
	•	Now also updates the round queue display correctly
	•	Maintained scoreboard UI with piped values, bold highlighting for offense and defense
	•	Version label updated in setup screen

v1.4.2 – (upnext)
	•	New compact turn info panel shows both upcoming offense and next defender
	•	Aligned the two info tags horizontally for easier scanning
	•	Improved defender highlighting logic

v1.4.1 – (upnext)
	•	Added dynamic turn queue tracking
	•	Shows current player, defending player, and who’s up next
	•	Added labels (Now Playing, Defending, Up Next)
	•	Compact and mobile-friendly scoreboard layout

⸻

Made with 💛 for the Air Hockey community
