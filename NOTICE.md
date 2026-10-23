# Avisos / Notices

*[English](#english) · [Español](#español)*

## English

### Unofficial fan project

**Inflation! Coop Lite-RPG** is a free, non-profit fan project. It is inspired by *Inflation RPG* by Tatsuki Sasaki, and **is not affiliated with, sponsored or endorsed** by its author or publishers. *Inflation RPG* and its names, logos and related elements belong to their respective owners; they are mentioned here only to describe the game this project is inspired by.

The MIT license of this repository covers **only this project's original code and assets**. It grants no rights over *Inflation RPG* or any other third-party material. Some item names, game values (such as item stats and formulas) and character designs follow the original game; they are not covered by the MIT license. If you publish a fork, please **rename it** and don't present it as an official product.

### Original assets

The creatures, bosses, characters, items, props, ground textures and battle backgrounds are original: they are low-poly models built by scripts in Blender and rendered into pixel-art sprites. The music and sound effects are synthesized in real time in the browser. All of them are distributed under the same MIT license as the code.

### Third-party software and assets

three.js and PeerJS are bundled into the compiled game (`assets/`). Their licenses are reproduced below, as they require. The fonts are loaded from Google Fonts at runtime and are not included in this repository.

| Component | Use | License |
|---|---|---|
| [three.js](https://github.com/mrdoob/three.js) 0.186.1 | 3D world | MIT |
| [PeerJS](https://github.com/peers/peerjs) 1.5.4 | Peer-to-peer connection (WebRTC) for online play | MIT |
| [Lilita One](https://fonts.google.com/specimen/Lilita+One), [DotGothic16](https://fonts.google.com/specimen/DotGothic16), [Zen Maru Gothic](https://fonts.google.com/specimen/Zen+Maru+Gothic) (Google Fonts) | Interface fonts | SIL Open Font License 1.1 |

Online play uses the public PeerJS signaling server to pair players; the games themselves travel directly between browsers.

### Credits (a request, not a requirement)

Beyond what the MIT license requires (keeping the copyright notice and the license text in copies), **we kindly ask** that if you use this project or part of it in another project, you credit the original somewhere visible (README, credits or an "about" screen). For example:

```
Based on Inflation! Coop Lite-RPG by Sowtank — https://github.com/KurusuDes/rpg-anillos
```

This is a courtesy request: it doesn't change the terms of the MIT license. And if you make something with it, we'd love to see it!

---

## Español

### Proyecto de fans, no oficial

**Inflation! Coop Lite-RPG** es un proyecto de fans, gratuito y sin ánimo de lucro. Se inspira en *Inflation RPG*, de Tatsuki Sasaki, y **no está afiliado, patrocinado ni aprobado** por su autor ni por sus editores. *Inflation RPG* y sus nombres, logotipos y elementos asociados pertenecen a sus respectivos dueños; aquí se mencionan solo para describir el juego en el que se inspira este proyecto.

La licencia MIT de este repositorio cubre **únicamente el código y los recursos originales de este proyecto**. No concede ningún derecho sobre *Inflation RPG* ni sobre material de terceros. Algunos nombres de objetos, valores de juego (como las estadísticas de los objetos y las fórmulas) y diseños de personajes siguen al juego original; no están cubiertos por la licencia MIT. Si publica un fork, le pedimos que **le cambie el nombre** y no lo presente como producto oficial.

### Recursos propios

Las criaturas, los jefes, los personajes, los objetos, los props, las texturas del suelo y los fondos de combate son originales: son modelos low poly construidos con scripts en Blender y renderizados como sprites de pixel art. La música y los efectos de sonido se sintetizan en tiempo real en el navegador. Todos se distribuyen bajo la misma licencia MIT que el código.

### Software y recursos de terceros

three.js y PeerJS van incluidos en el juego compilado (`assets/`). Sus licencias se reproducen más abajo, como exigen. Las tipografías se cargan desde Google Fonts al jugar y no están en este repositorio.

| Componente | Uso | Licencia |
|---|---|---|
| [three.js](https://github.com/mrdoob/three.js) 0.186.1 | Mundo en 3D | MIT |
| [PeerJS](https://github.com/peers/peerjs) 1.5.4 | Conexión entre navegadores (WebRTC) del juego en línea | MIT |
| [Lilita One](https://fonts.google.com/specimen/Lilita+One), [DotGothic16](https://fonts.google.com/specimen/DotGothic16), [Zen Maru Gothic](https://fonts.google.com/specimen/Zen+Maru+Gothic) (Google Fonts) | Tipografías de la interfaz | SIL Open Font License 1.1 |

El juego en línea usa el servidor de señalización público de PeerJS para emparejar a los jugadores; las partidas en sí viajan directamente entre los navegadores.

### Créditos (petición, no obligación)

Además de lo que exige la licencia MIT (conservar el aviso de copyright y el texto de la licencia en las copias), **le pedimos amablemente** que, si usa este proyecto o parte de él en otro proyecto, mencione el original en un lugar visible (README, créditos o pantalla "acerca de"). Por ejemplo:

```
Basado en Inflation! Coop Lite-RPG de Sowtank — https://github.com/KurusuDes/rpg-anillos
```

Es una petición de cortesía: no modifica los términos de la licencia MIT. Y si hace algo con él, ¡nos encantaría verlo!

---

## Licenses of bundled software / Licencias del software incluido

### three.js

```
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### PeerJS

```
Copyright (c) 2015 Michelle Bu and Eric Zhang, http://peerjs.com

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
