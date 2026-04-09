# Unified Foam Field Theory (UFFT)

**Author:** Luke Martin — Independent Researcher, Sydney, Australia
**Priority Date:** 20 February 2026
**Current Version:** Framework v9 (April 2026)
**Status:** 50 papers published or pending on Zenodo · Not yet peer reviewed · Independent reproduction invited

---

## What This Is

The Unified Foam Field Theory derives the dimensionless constants of the Standard Model, general relativity, and cosmology from the geometry of a single Planck-scale cell — the truncated octahedron (Kelvin cell).

**Axiom Zero: B + V = D** — Bubble + Void = Displacement.

Every event in the universe is a displacement in an infinite pre-existing foam at the Planck scale. From this single axiom and the integer topology of the Kelvin cell, the framework derives **60+ observables with zero free parameters**.

---

## Core Inputs

All inputs are topological integers of the truncated octahedron:

| Symbol | Value | Meaning |
|--------|-------|---------|
| \|O_h\| | 48 | Order of octahedral symmetry group |
| V | 24 | Vertices |
| E | 36 | Edges |
| F | 14 | Faces (8 hexagonal + 6 square) |
| F_hx | 8 | Hexagonal faces |
| F_sq | 6 | Square faces |
| d | 3 | Spatial dimensions |
| Δ | 17 | Discriminant of master equation |
| C_A | 3 | Colour number (= F_hx/F − 1) |
| r₁ | (9−√17)/2 ≈ 2.438 | Lower T₁u eigenvalue (left-handed fermions) |
| r₂ | (9+√17)/2 ≈ 6.562 | Upper T₁u eigenvalue (right-handed fermions) |

**Master equation:** λ² − 9λ + 16 = 0

---

## Selected Results

| Observable | Formula | Accuracy |
|-----------|---------|----------|
| α⁻¹ (fine structure) | (4π)^{3/2}π[47/48 + 10/(3·48³) + 22/(3·48⁵)] | 0.3σ from Cs 2018 |
| sin²θ_W (Weinberg angle) | 3/13 (MS-bar) | 0.3σ |
| α_s(M_Z) | C_A² − C_A ln(C_A)/(2π) | 0.01σ |
| m_H/M_Z | 18/(9+√17) | 0.14% |
| λ (Cabibbo, NLO) | sin(π/14)(1 + √17/363) | 0.07σ |
| δ_PMNS/δ_CKM | = 3 exactly (colour factor C_A) | Novel — testable by DUNE ~2035 |
| m₁ (neutrino) | = 0 exact theorem | Exact |
| m₃ (neutrino) | m_e exp(−(11+13√17)/4) | 0.075% |
| Bekenstein area quantum k | = C_A = 3 | Exact |
| r_p (proton radius) | 4ℏ/(m_p c) | 0.02% |

---

## Sharpest Falsifiable Prediction

**δ_PMNS / δ_CKM = 3 exactly.**
This follows from the colour factor C_A = 3 alone. It is exact, parameter-free, and testable by the DUNE experiment around 2035. If the ratio is confirmed ≠ 3 at >3σ, the framework is falsified.

Full list of 11 falsifiable predictions in `UFFT_Core_Framework_v9.md`.

---

## Repository Structure

```
UFFT_Core_Framework_v9.md     ← Canonical framework (57 parts, all derivations)
papers/                        ← All 50 Zenodo papers (1–46 published, 47–50 pending)
books/                         ← Full-length books for general and technical readers
  From_Foam_to_Fermions_v2.md  ← Primary canonical book (most complete)
  The_Foam_Unites_Us_v4.md
  The_Shape_of_Everything.md
verification/                  ← Numerical verification script (zero external data)
presentations/                 ← Short-form overviews
explorations/                  ← Connections to adjacent domains (speculative)
```

---

## Verification

Every number in this repository can be recomputed from the cell integers alone:

```bash
pip install numpy scipy
python verification/19079730_UFFT_Spectrum_Verification.py
```

Runs in under one minute. No external data imported.

---

## Zenodo

Papers 1–46 are published with permanent DOIs. Papers 47–50 are written and pending upload:

| Paper | Title |
|-------|-------|
| 47 | NLO Neutrinos, α_s, M_W |
| 48 | SM From One Matrix |
| 49 | Baryon, Bekenstein, Cosmology |
| 50 | Uniqueness of the Foam Cell |

---

## Epistemological Status

The framework uses a four-tier classification for all claims:

- **Tier 1 — Mathematical theorems:** m₁ = 0, Koide identity, normal hierarchy, SUSY exclusion
- **Tier 2 — Derived given identifications:** The bulk of 60+ observables
- **Tier 3 — >1.5σ tension:** ρ̄ parameter (R_b path identified)
- **Tier 4 — Suggestive/speculative:** Dark energy 6/7 factor, visible spectrum mapping

Full status table in `UFFT_Core_Framework_v9.md`.

---

## AI Disclosure

Developed in collaboration with Claude (Anthropic). All theoretical ideas, physical intuitions, and framework direction: Luke Martin. AI role: numerical computation, derivation verification, formula search, operator construction, document composition. The framework reached 60+ derived observables in approximately five weeks (February–April 2026).

---

*Priority Date: 20 February 2026 · Framework v9 · April 2026*

**B + V = D**
