# Particle Physics from One Shape

**Interactive Course Design — Teaching the Standard Model Through Foam Geometry**
Luke Martin · luke@webenvy.com.au · Newcastle, Australia
April 2026

---

## Concept

An interactive web-based course that teaches particle physics to non-physicists using the geometry of the truncated octahedron. No equations required for the learner — every concept is demonstrated through 3D visualizations they can rotate, toggle, and probe.

The course answers one question: **"What if everything is made of one shape vibrating?"**

---

## Course Structure

### Module 1: The Shape
**Duration:** 10 minutes · **Visualization:** Interactive truncated octahedron explorer

Introduce the truncated octahedron: 24 vertices, 36 edges, 14 faces (8 hexagons, 6 squares). Let the user rotate it, count faces, tap faces to highlight them. Introduce the key idea: this shape fills space with no gaps. Show the tiling. Ask: what happens if you vibrate one face?

**Key takeaway:** One shape tiles all of space. It has two kinds of faces. That's all you need.

### Module 2: Seven Ways to Vibrate
**Duration:** 15 minutes · **Visualization:** Eigenmode explorer (new, extends hydrogen_vibration.html)

Show the seven eigenmodes of the face Laplacian, one at a time. Each mode is a different way the 14 faces can vibrate. Let the user toggle each on/off and see how the faces displace:

- A₁g (λ=0): All faces breathe together → this is the photon / gravity / EM
- T₁u (λ≈2.4): Dipole — top pushes out, bottom pulls in → these are the fermions (you!)
- Eg (λ=4): Only the square faces vibrate → this is the weak force
- T₁u (λ≈6.6): The other dipole → right-handed fermions
- T₂g (λ=7): Hexagons alternate → this is the strong force / colour
- A₁g (λ=7): Accidental twin of T₂g → this is dark matter (geometric, not a particle)
- A₂u (λ=9): Alternating hexagons, antisymmetric → CP violation

**Key takeaway:** The shape has exactly seven ways to vibrate. Four of them are the four forces. The rest are matter.

### Module 3: Making an Electron
**Duration:** 10 minutes · **Visualization:** Single-cell T₁u mode (from hydrogen_vibration.html)

Focus on the T₁u mode at eigenvalue r₁ ≈ 2.438. Show the dipole vibration — faces pushing one way on top, the other way on bottom. Explain: this pattern is the electron. Not "represents" the electron — IS the electron. The vibration frequency is the electron's mass. It's been vibrating for 13.8 billion years.

Slider: amplitude. Show that even at the tiniest amplitude, the pattern persists — the geometry sustains it.

**Key takeaway:** A particle is a vibration that won't stop. The cell's geometry forces it to keep going.

### Module 4: Making Hydrogen
**Duration:** 15 minutes · **Visualization:** hydrogen_patterns.html (already built)

Layer the six modes of hydrogen one by one:
1. Electron (T₁u, pink)
2. Up quark red (T₁u, red)
3. Up quark green (T₁u, green)
4. Down quark blue (T₁u, blue)
5. Colour lock (T₂g, gold) — the glue that holds quarks together
6. EM binding (A₁g, white) — the force that holds the atom together

**Key takeaway:** Hydrogen is six vibrations on one cell. Four particles, two binding forces.

### Module 5: How Patterns Spread
**Duration:** 15 minutes · **Visualization:** hydrogen_propagation.html (already built)

Show the 15-cell foam. Hit Propagate. Watch:
- Fermions stay home (that's what "being a particle" means)
- Colour leaks one cell and dies (that's why the strong force is short-range)
- EM goes forever (that's why you can feel a charge from across the room)

Toggle weak force on — barely leaks.

**Key takeaway:** The range of a force is set by how far its vibration mode can spread through the foam.

### Module 6: Confinement
**Duration:** 15 minutes · **Visualization:** proton_confinement.html (already built)

Show the Y-junction. Three quarks, three colours, locked by T₂g flux tubes through shared hexagonal faces. Pull the stretch slider. Watch the string stretch. Watch it snap. See pair production.

**Key takeaway:** You can never isolate a single colour. The foam won't allow it. Pull hard enough and it creates new quarks instead of letting go.

### Module 7: From Particles to the Cosmos
**Duration:** 15 minutes · **Visualization:** Scale hierarchy explorer (new — zoom from Planck to cosmic web)

Interactive zoom: start at one cell (10⁻³⁵ m), zoom out through nuclear (10⁻¹⁵ m), atomic (10⁻¹⁰ m), human (1 m), stellar (10¹⁰ m), galactic (10²¹ m), cosmic web (10²⁶ m). At each scale, show which vibration mode dominates. The same A₁g mode builds structure at every scale because λ = 0 means it never stops.

**Key takeaway:** One vibration mode, 60 orders of magnitude. The same breathing that binds the atom shapes the cosmic web.

### Module 8: Why This Shape?
**Duration:** 10 minutes · **Visualization:** Five Fedorov cells side by side (new)

Show all five space-filling shapes. Compute their face Laplacian eigenvalues (live, in front of the user). Only the truncated octahedron gives irrational eigenvalues. Only it gives a prime discriminant. Only it has the right number of faces for three-generation fermion physics.

**Key takeaway:** Of all the shapes that fill space, only one has the mathematics to produce our universe. And it's this one.

---

## Technical Specifications

- **Platform:** Static HTML/JS website. No server required. Hostable on GitHub Pages or Netlify.
- **3D Engine:** Three.js r128 (same as existing visualizations)
- **Responsive:** Works on desktop and mobile (touch orbit controls already implemented)
- **Accessibility:** All visualizations include text descriptions. Colour choices are colourblind-safe where possible (will need review).
- **Size:** Estimated <2 MB total (no external assets except Three.js CDN)

---

## What Exists vs What's Needed

| Module | Visualization | Status |
|--------|--------------|--------|
| 1 | Truncated octahedron explorer | New (simple, ~2 hours) |
| 2 | Eigenmode explorer | Extend hydrogen_vibration.html (~3 hours) |
| 3 | Single-mode T₁u | Extract from hydrogen_vibration.html (~1 hour) |
| 4 | Hydrogen patterns | **Done** (hydrogen_patterns.html) |
| 5 | Propagation | **Done** (hydrogen_propagation.html) |
| 6 | Confinement | **Done** (proton_confinement.html) |
| 7 | Scale hierarchy | New (~4 hours) |
| 8 | Five Fedorov cells | New (~3 hours) |

**3 of 8 visualizations already built.** Estimated ~13 hours additional development for a complete course.

---

## Audience

**Primary:** Scientifically curious non-physicists. People who read popular science books, watch PBS SpaceTime, attend science festivals.

**Secondary:** Physics undergraduates encountering the Standard Model for the first time. The visualizations give geometric intuition that textbooks lack.

**Tertiary:** Working physicists evaluating UFFT. The interactive demonstrations are more convincing than equations because they can be poked at.

---

## Distribution Channels

1. **Standalone website** — particle-physics-from-one-shape.com (or similar)
2. **YouTube companion series** — screen recordings of each module with narration
3. **Science festival installation** — large touchscreen with all 8 modules
4. **Academic supplement** — link from Zenodo papers and the math paper

---

*B + V = D*
