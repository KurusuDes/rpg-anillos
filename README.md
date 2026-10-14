# Inflation! Coop Lite-RPG

*English · [Español](README.es.md)*

**A cooperative incremental RPG that runs in your browser.** Battles are automatic. You won't win the first one that matters. Or the second. But every round your combos get longer, your numbers get sillier and your gear gets shinier, until the ring that flattened you becomes your warm-up. And the best part comes when you bring your friends along: you explore the same world, fight side by side and, between rounds, find out once and for all who has the best build.

Free, no ads, no accounts, nothing to install. Plays on a computer with a keyboard.

| | |
|---|---|
| **Play** | https://kurusudes.github.io/rpg-anillos/ |
| **Trailer (English)** | [Watch in the browser](https://kurusudes.github.io/rpg-anillos/trailer/inflation-coop-trailer-en.mp4) · [MP4](trailer/inflation-coop-trailer-en.mp4) |
| **Languages** | English and Spanish (pick one on the start screen) |
| **Players** | Solo, or with friends over the internet using a five-letter room code |

[![Inflation! Coop Lite-RPG](trailer/poster.jpg)](https://kurusudes.github.io/rpg-anillos/trailer/inflation-coop-trailer-en.mp4)

---

## The trailer

A 70-second motion-graphics trailer about the loop, without pretending the battles aren't automatic: you lose, you go back to level 1, you try again (and again), the combos and the numbers get out of hand, you spend your points, buy shinier gear, and then meet the 270 creatures and 42 bosses of the default map, until something waits in the dark past the sixth ring. Then the biomes, the items (58 of them are jewelry), the characters and, best of all, your friends: who has the best build?

![Again, and again](readme/again.gif)

Every frame is a pure function of the clock, built from real gameplay captured from the game and the game's own sprites, and recorded frame by frame. The chiptune soundtrack and sound effects are synthesized in code and timed to the cuts.

---

## Screenshots

| Combos | Levels, plural |
|---|---|
| ![Combos](readme/combos.jpg) | ![+2,297 levels in one fight](readme/levels.jpg) |
| **Spend your points** | **Shop and gear** |
| ![Attributes](readme/attributes.jpg) | ![Shop and gear](readme/shop.jpg) |
| **Exploring a biome** | **The shared map** |
| ![Turbo Circuit](readme/exploration.jpg) | ![Shared map](readme/map.jpg) |
| **Fighting together** | **Duels between rounds** |
| ![Group battle](readme/group.jpg) | ![Duel](readme/duel.jpg) |

---

## The loop

1. **A round starts.** You wake up at the camp in the middle of the world with **level 1**, no gold, a 20-minute clock and **45 Battle Points (BP)**.
2. **Walk.** Wherever creatures live, the encounter meter fills up. The fuller it gets, the likelier a fight starts.
3. **Fight.** Combat plays itself: you watch, and press Space or click to speed it along. Every fight costs 1 BP (losing costs 3). Bosses give some BP back.
4. **Level up.** Each victory brings experience. Each level brings skill points to spend on HP, ATK, DEF, AGI and LUC. How you split them is your build.
5. **Gear up.** Spend your gold in the shop on weapons, armor and jewelry, and hope the loot table likes your luck.
6. **The round ends** when the clock or your BP run out. Your level and gold go back to zero. You keep the map you discovered, **one item** of your choice and the characters you unlocked, and your character grows a little stronger for next time.
7. **Again.** And again. Each time you get a bit further out.

Six rings of growing danger surround the camp. Somewhere past the last one waits the reason you are doing all this. We won't spoil it. It doesn't fall to one player.

---

## Features

### A world made from a seed
- **Six rings** around a central camp, split into hundreds of zones (332 on the default map) and generated from a seed: everyone in a room gets exactly the same world.
- **54 biomes**, each with its own ground, props, creatures and battle background: from meadows and racing circuits to haunted crypts and alien jungles.
- **270 creatures** and dozens of bosses (42 on the default map), each one the strongest of its neighborhood.
- A **shared map** that remembers what the group has discovered, round after round. The recommended level of each zone is colored by risk.

### Battles that grow with you
- **Automatic combat** with combos, criticals and hit effects that get flashier as your power grows.
- Enemy health shown as **stacked colored bars** (bosses don't tell you how many are left).
- A slot-machine style **payout** for experience, gold and loot at the end of each fight.
- Formulas faithful to the classic incremental RPG it's inspired by: numbers start small and end up enormous.

### Gear, jewelry and characters
- **141 items:** 59 weapons, 24 armors and 58 accessories (rings, gems and necklaces), many with special effects.
- **16 characters** to unlock, one more each round, each with its own leanings.
- Choose which item to keep between rounds.

### Better with friends
- **Online co-op** with a room code: the host's browser runs the game and the others connect directly (WebRTC).
- **Group battles:** wait together next to a boss and everyone fights it at once.
- **Duels between rounds:** every player faces every other one with equalized stats, so the best build wins, not the longest session. A crown for the winner, eternal glory included.
- If you drop out, you can rejoin the room with your code and name.

### Comfort
- English and Spanish, a help sheet (**H**) and a "reduce motion" option for shakes, flashes and particles.
- Chiptune music and sound effects synthesized in the browser.

## Controls

| Key | Action |
|---|---|
| W A S D | Move |
| Shift | Run |
| Space or click | Speed up the battle |
| C | Attributes (spend your points) |
| E | Shop and gear |
| M | Shared map |
| N | Music on or off |
| H | Help |

---

## Tech

- Written in **TypeScript**, bundled with **Vite** and served as a static site from GitHub Pages. There is no game server and no database: nothing is stored, not even in your browser.
- **3D world** with [three.js](https://threejs.org/), and online play over WebRTC with [PeerJS](https://peerjs.com/).
- **Deterministic world generator:** every browser builds the same map from the room's seed, and checks a fingerprint to make sure.
- **Host-authoritative simulation**, kept separate from rendering and covered by automated tests.
- **Art made in Blender by scripts:** low-poly models of the creatures, props, items and characters, rendered with a pixel-art pass into sprites.

This repository only hosts the compiled game. The source code lives in a separate, private repository.

### Privacy

No accounts, no cookies, no analytics. To pair players, online games use the public PeerJS signaling server; after that, game data travels directly between the players' browsers. Some school or office networks block WebRTC; if a room won't connect, try another network.

---

## License and credits

Original code and assets are under the [MIT license](LICENSE) © 2026 Sowtank. If you use this project or part of it, a visible credit is kindly appreciated (details in [NOTICE.md](NOTICE.md)).

**Unofficial fan project.** It is inspired by *Inflation RPG* by Tatsuki Sasaki, and isn't affiliated with, sponsored or endorsed by its author or publishers. *Inflation RPG* is the property of its respective owners; some item names, game values and character designs follow the original and are not covered by the MIT license. Third-party notices (three.js, PeerJS, fonts) are in [NOTICE.md](NOTICE.md).
