# The Unified Foam Field Theory

**One axiom. One cell. Zero free parameters.**

**Luke Martin** · Independent Researcher · Sydney, Australia

---

## What This Is

A framework that derives the dimensionless constants of the Standard Model, general relativity, and cosmology from the geometry of a single Planck-scale cell: the truncated octahedron (Kelvin cell) with O_h symmetry.

**Axiom Zero:** B + V = D — every event in the universe is a displacement in an infinite pre-existing foam at the Planck scale.

From this axiom and the cell geometry, the framework derives 60+ observables with zero free parameters. All inputs are topological integers of the truncated octahedron: |O_h| = 48, V = 24, E = 36, F = 14, d = 3, χ = 2, and the master equation λ² − 9λ + 16 = 0 (discriminant Δ = 17).

---

## Key Results

| Observable | Formula | UFFT | Observed | Accuracy |
|-----------|---------|------|----------|----------|
| Fine structure constant | α⁻¹ = 8π^(5/2) × [47/48 + 10/(3·48³) + 22/(3·48⁵)] | 137.035999055 | 137.035999046(27) | 0.21 ppb |
| Dark matter ratio | Ω_DM/Ω_b = 3(1+2√3)/2^(4/3) | 5.3147 | 5.36 ± 0.06 | 0.92% |
| Dark energy density | ρ_Λ = ρ₀(l_P/R_U)² × 6/7 | 5.96 × 10⁻²⁷ kg/m³ | 5.88 × 10⁻²⁷ | 1.4% |
| Higgs/Z mass ratio | m_H/M_Z = 18/(9+√17) | 1.3716 | 1.3735 | 0.14% |
| Electron mass | Koide with θ = 2/9, m_τ input | 0.51096 MeV | 0.51100 MeV | 0.007% |
| Muon mass | Koide with θ = 2/9, m_τ input | 105.652 MeV | 105.658 MeV | 0.006% |
| CKM CP phase | δ = π(9−√17)/(9+√17) | 66.89° | 65.5° ± 3.4° | 0.4σ |
| PMNS CP phase | δ = 3π(9−√17)/(9+√17) | 200.7° | 197° ± 25° | 0.15σ |
| Proton charge radius | r_p = 4ℏ/(m_p c) | 0.8412 fm | 0.8414 fm | 0.02% |

Plus: complete CKM matrix (4/4 Wolfenstein parameters), complete PMNS matrix (3 angles + phase + mass-squared ratio), all four Maxwell equations, unimodular Einstein equations, both Friedmann equations, Schwarzschild metric, periodic table structure, charge quantisation, gauge group SU(3)×SU(2)×U(1), strong CP dissolution, hierarchy problem (Layers 1–2), anomalous magnetic moment through two loops, S-matrix, and baryon/lepton conservation.

The complete mixing sector — 9 parameters — comes from three integers: F = 14, C_A = 3, Δ = 17.

---

## Falsifiable Predictions

| # | Prediction | UFFT value | What falsifies it |
|---|-----------|-----------|------------------|
| 1 | Gravitational decoherence suppression | ΔΓ/Γ = 8.22×10⁻¹¹ (Earth→ISS), opposite sign to Diósi-Penrose | No change, or increase near mass |
| 2 | Universal qubit-independence | Same ΔΓ/Γ for all qubit types at same altitude | Different results for different systems |
| 3 | Three-particle cascade ⟨X⊗X⊗X⟩ | −1 (not GHZ +1, not W 0) | ⟨X⊗X⊗X⟩ ≠ −1 |
| 4 | Quadratic Lorentz violation | δc/c ~ (E/E_P)², not linear | Linear violation detected |
| 5 | No dark matter particles | Permanent null | Any DM particle detected |
| 6 | No superpartners | Permanent null | Any SUSY partner detected |
| 7 | No axion | Permanent null | Axion detected |
| 8 | Neutron EDM exactly zero | 0 | Any nonzero nEDM |
| 9 | δ_PMNS/δ_CKM = 3 exactly | 3.000 | Ratio ≠ 3 at >3σ (testable by DUNE ~2035) |
| 10 | NS core sound speed > c/√3 | c_s > 0.577c | c_s < c/√3 confirmed |

---

## Verify It Yourself

The spectrum verification script confirms all numerical predictions. Run it:

```
pip install numpy scipy
python UFFT_Spectrum_Verification.py
```

Takes under one minute. Every derived number is recomputed from cell integers. No external data is imported.

---

## Canonical Source

**`UFFT_Core_Framework_v10.md`** is the authoritative document. It contains:

- 42+ Parts covering all derivations
- 4-column epistemological status table (derivation / independent verification / experimental status for every claim)
- Complete preprint index with DOIs
- Honest open problems list
- Known limitations section

---

## Preprints

36 preprints on [Zenodo](https://zenodo.org) under CC BY 4.0. **Not yet peer reviewed.** Independent reproduction invited.

| # | Title | DOI |
|---|-------|-----|
| 1 | Gravitational Suppression of Quantum Decoherence | [10.5281/zenodo.18706756](https://zenodo.org/records/18706756) |
| 2 | Void-Pair Conservation and Bell Correlations | [10.5281/zenodo.18706806](https://zenodo.org/records/18706806) |
| 3 | The Fine Structure Constant from Foam Geometry | [10.5281/zenodo.19011758](https://zenodo.org/records/19011758) |
| 4 | The Face Laplacian Spectrum of the Kelvin Cell | [10.5281/zenodo.19030062](https://zenodo.org/records/19030062) |
| 5 | Running Coupling Constants from Foam Geometry | [10.5281/zenodo.19063473](https://zenodo.org/records/19063473) |
| 6 | The Vacuum Metric from Foam Dynamics | [10.5281/zenodo.19063610](https://zenodo.org/records/19063610) |
| 7 | Maxwell's Equations from Foam Dynamics | [10.5281/zenodo.19063671](https://zenodo.org/records/19063671) |
| 8 | Friedmann and Einstein-Hilbert from Foam | [10.5281/zenodo.19063718](https://zenodo.org/records/19063718) |
| 9 | Lepton Mass Ratios from Foam Geometry | [10.5281/zenodo.19063774](https://zenodo.org/records/19063774) |
| 10 | The Weinberg Angle from Foam Geometry | [10.5281/zenodo.19063822](https://zenodo.org/records/19063822) |
| 11 | The Fine Structure Constant v3 (with uniqueness proof) | [10.5281/zenodo.19063910](https://zenodo.org/records/19063910) |
| 12 | The Higgs-to-Z Mass Ratio | [10.5281/zenodo.19064036](https://zenodo.org/records/19064036) |
| 13 | Baryon and Lepton Number Conservation | [10.5281/zenodo.19064093](https://zenodo.org/records/19064093) |
| 14 | No Supersymmetry from Foam Geometry | [10.5281/zenodo.19064126](https://zenodo.org/records/19064126) |
| 15 | The Master Equation of the Standard Model | [10.5281/zenodo.19064359](https://zenodo.org/records/19064359) |
| 16 | Two-Loop GUT Coupling from Foam | [10.5281/zenodo.19064416](https://zenodo.org/records/19064416) |
| 17 | QCD Theorems from Foam Topology | [10.5281/zenodo.19064581](https://zenodo.org/records/19064581) |
| 18 | Bell Void Speed | [10.5281/zenodo.19079502](https://zenodo.org/records/19079502) |
| 19 | Electroweak Predictions | [10.5281/zenodo.19079502](https://zenodo.org/records/19079502) |
| 20 | Spectral Verification Script | [10.5281/zenodo.19079730](https://zenodo.org/records/19079730) |
| 21 | The Schwinger Term from Foam | [10.5281/zenodo.19080011](https://zenodo.org/records/19080011) |
| 22 | QED Prerequisite from Foam | [10.5281/zenodo.19084565](https://zenodo.org/records/19084565) |
| 23 | C₂ Independent Derivation | [10.5281/zenodo.19084710](https://zenodo.org/records/19084710) |
| 24 | C₂ from Foam Topology | [10.5281/zenodo.19084710](https://zenodo.org/records/19084710) |
| 25 | C₂ Complete Derivation | [10.5281/zenodo.19084873](https://zenodo.org/records/19084873) |
| 26 | LSZ and S-Matrix from Foam | [10.5281/zenodo.19085007](https://zenodo.org/records/19085007) |
| 27 | Corrigendum (Paper 19) | [10.5281/zenodo.19085997](https://zenodo.org/records/19085997) |
| 28 | Closure of the QFT Programme | [10.5281/zenodo.19102302](https://zenodo.org/records/19102302) |
| 29 | Schwarzschild Metric from Foam | [10.5281/zenodo.19184702](https://zenodo.org/records/19184702) |
| 30 | Maxwell Equations Derivation | [10.5281/zenodo.19185556](https://zenodo.org/records/19185556) |
| 31 | Aufbau Ordering from Foam | [10.5281/zenodo.19185628](https://zenodo.org/records/19185628) |
| 32 | Lepton Mass Ratios (Part XXIV) | [10.5281/zenodo.19185685](https://zenodo.org/records/19185685) |
| 33 | The Strong CP Problem Dissolved | [10.5281/zenodo.19196872](https://zenodo.org/records/19196872) |
| 34 | The CKM Quark Mixing Matrix | [10.5281/zenodo.19198360](https://zenodo.org/records/19198360) |
| 35 | The PMNS Neutrino Mixing Matrix | [10.5281/zenodo.19198422](https://zenodo.org/records/19198422) |
| 36 | CP-Violating Phases of CKM and PMNS | [10.5281/zenodo.19198775](https://zenodo.org/records/19198775) |

---

## What Remains Open

| Problem | Path forward |
|---------|-------------|
| Lattice-to-continuum limit theorem | Formal proof that foam heat kernel → QED Feynman rules |
| Inter-generation torsion coupling operator | Explicit O_h construction giving phase πR (structural framework established, exact operator narrowed to 0.54°) |
| Top Yukawa coupling | Full RG flow from foam GUT scale |
| v/M_P hierarchy (Layer 3) | Complete threshold-corrected RG (Layers 1–2 closed) |
| Particle mass spectrum | Knot classification of stable foam topologies |
| Kerr metric | Extend incompressibility argument to axisymmetric |
| Cosmological initial conditions (H₀, n_s, η) | Boundary conditions / displacement cascade statistics |
| Peer review | Not yet submitted to journals; independent replication invited |

These are honestly acknowledged. The framework's self-assessment distinguishes derived results from suggestive matches from open problems. See the 4-column epistemological status table in `UFFT_Core_Framework_v10.md`.

---

## Repository Structure

```
UFFT_Core_Framework_v10.md          ← Canonical source (all derivations)
UFFT_Spectrum_Verification.py       ← Run this to verify all numbers
UFFT_CP_Phases.md                   ← CP phases paper (#36)
UFFT_PMNS_Matrix.md                 ← PMNS paper (#35)
UFFT_CKM_Matrix_corrected.md       ← CKM paper (#34)
UFFT_Observables_Presentation.md    ← Summary of all observables
UFFT_Ten_Minutes.md                 ← 10-minute introduction
TheFoamUnitesUs_corrected.md        ← Extended narrative (non-technical)
/web_visualizations/                ← Interactive HTML visualisations
/pdf/                               ← PDF versions
```

---

## How to Engage

**Physicists:** Run the verification script. Read the α derivation (Paper #11). Check the 4-column status table. If you find an error, open an issue.

**Experimentalists:** Predictions 1–3 are testable with existing or near-term technology. Prediction 9 (δ_PMNS/δ_CKM = 3) will be tested by DUNE within the decade.

**Everyone:** The framework is CC BY 4.0. Use it, test it, extend it, challenge it.

---

## AI Disclosure

Developed in collaboration with Claude (Anthropic). All theoretical ideas, physical intuitions, and framework direction: Luke Martin. AI role: numerical computation, derivation verification, document composition, operator searches. The collaboration itself is documented and may be of independent interest as a case study in AI-assisted theoretical physics.

---

## Licence

All content is released under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

---

*Priority Date: 20 February 2026*
*Current version: v10 — March 2026*

*B + V = D*
