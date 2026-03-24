# UFFT in Ten Minutes

## What It Is, What It Predicts, How to Falsify It

**Luke Martin · Independent Researcher · March 2026**

---

## What Is UFFT?

A framework that derives standard physics from one axiom and one cell geometry. No free parameters.

**Axiom:** B(x) + V(x') = D — every event is a displacement in a Planck-density mechanical substrate

**Cell:** the truncated octahedron (Kelvin cell) — the unique Archimedean solid that tiles ℝ³

**Equation of state:** P = ρc² (maximally stiff, w = 1)

**Master equation:** λ² − 9λ + 16 = 0 (from the face Laplacian of the Kelvin cell)

Everything below follows from these inputs. 36 papers published on Zenodo. Full spectrum verification script runs in under a minute on any laptop.

---

## What It Derives (With Numbers)

### Fundamental Constants

| Observable | UFFT formula | Result | Observed | Accuracy |
|-----------|-------------|--------|----------|----------|
| Fine structure constant | α⁻¹ = 8π^(5/2) × [47/48 + 10/(3·48³) + 22/(3·48⁵)] | 137.035999055 | 137.035999046(27) | **0.21 ppb** |
| Dark matter ratio | Ω_DM/Ω_b = 3(1+2√3)/2^(4/3) | 5.3147 | 5.36 ± 0.06 | **0.92%** |
| Dark energy density | ρ_Λ = ρ₀(l_P/R_U)² × 6/7 | 5.96 × 10⁻²⁷ kg/m³ | 5.88 × 10⁻²⁷ | **1.4%** |
| Higgs/Z mass ratio | m_H/M_Z = 18/(9+√17) | 1.3716 | 1.3735 | **0.14%** |

All inputs are topological integers of the truncated octahedron: |O_h| = 48, V = 24, E = 36, F = 14, d = 3, Δ = 17. Zero free parameters.

### Gravity and Spacetime

The complete Schwarzschild metric, all four Maxwell equations, the Einstein field equations (unimodular), and both Friedmann equations are derived from the foam equation of state P = ρc². The covariant vacuum density ρ = ρ₀(−g_tt/c²) is the unique equilibrium of a maximally stiff fluid — five lines of algebra from the relativistic Euler equation.

### Particle Physics

| Observable | UFFT formula | Result | Observed | Accuracy |
|-----------|-------------|--------|----------|----------|
| Gauge group | SU(3)×SU(2)×U(1) from torsion topology | exact | exact | **Exact** |
| Koide angle (lepton masses) | θ = 2/9 | exact | exact | **Exact** |
| m_μ (from Koide + b-τ) | Koide with θ = 2/9 | 105.652 MeV | 105.658 MeV | **0.006%** |
| m_e (from Koide + b-τ) | Koide with θ = 2/9 | 0.51096 MeV | 0.51100 MeV | **0.007%** |
| Proton charge radius | r_p = 4ℏ/(m_p c) | 0.8412 fm | 0.8414 fm | **0.02%** |
| Pion mass (GOR) | m_π = √((m_u+m_d)·C_A·m_p) | 138.7 MeV | 139.6 MeV | **0.66%** |
| 5 quark masses | From torsion + Orbit-Stabiliser | — | — | **< 3% each** |
| Weinberg angle (GUT) | sin²θ_W = 3/8 = C_A/(C_A²−1) | 0.375 | 0.375 | **Exact** |
| β₀ (QCD, n_f = 3) | C_A² = 9 | 9 | 9 | **Exact** |

### Neutrino Mixing (PMNS)

| Parameter | UFFT | Observed | σ |
|-----------|------|----------|---|
| tan²θ₁₂ (solar) | √17/9 = 0.458 | 0.443 ± 0.027 | 0.56 |
| sin²θ₂₃ (atmospheric) | 1/2 (Z₂ symmetry) | 0.546 ± 0.021 | 2.2 |
| sinθ₁₃ (reactor) | √17/27 = 0.153 | 0.148 ± 0.002 | 2.3 |
| |Δm²₃₂|/Δm²₂₁ | 2Δ−1 = 33 | 32.6 ± 0.9 | 0.5 |

### Quark Mixing (CKM)

| Parameter | UFFT | Observed | Accuracy |
|-----------|------|----------|----------|
| λ (Cabibbo) | sin(π/14) = 0.2225 | 0.2250 | 1.1% |
| A | (9−√17)/6 = 0.8128 | 0.826 | 1.6% |
| m_d/m_s | sin²(π/14) = 0.0495 | 0.0500 | 1.0% |

### Problems Dissolved

| Problem | UFFT resolution |
|---------|----------------|
| Cosmological constant (10¹²³) | ρ_Λ/ρ₀ = (l_P/R_U)² × 6/7 — geometry, not fine-tuning |
| Strong CP (θ problem) | θ_phys = 0 exactly from torsion dynamics — no axion |
| Hierarchy (quadratic divergences) | Physical Planck lattice — no divergences, no SUSY needed |
| Periodic table structure | Foam IS the crystal field — 4 subshells, capacities, periods all derived |

### Additional Derived Results

The anomalous magnetic moment of the electron through two loops (Schwinger term + C₂ coefficient with ζ(3) emerging from foam topology). The S-matrix from foam (LSZ reduction, unitarity, Compton scattering). Baryon and lepton number conservation as topological theorems. Supersymmetry geometrically forbidden. Aufbau ordering from O_h crystal field splitting. Void network speed c√(3/2) for Bell non-locality. GUT coupling α_GUT⁻¹ = 25.

---

## What It Predicts (Falsifiable)

### Prediction 1 — Gravitational Suppression of Decoherence

**Formula:** Γ(r)/Γ(∞) = 1 − 2GM/rc²

Decoherence rates **decrease** near massive objects. Standard QM: no gravitational effect. Diósi-Penrose: enhancement (opposite sign). UFFT: suppression. The sign distinguishes UFFT from all competitors.

### Prediction 2 — Qubit-Type Independence

The suppression factor 1 − 2GM/rc² is **independent of qubit type**. Photonic, superconducting, and trapped-ion qubits all show the same coefficient.

### Prediction 3 — No Superpartners, No Axion, No Dark Matter Particles

SUSY is geometrically forbidden by the Kelvin cell (O_h has no Z₂ R-parity). θ_phys = 0 exactly (no axion needed). Dark matter is lattice geometry, not a particle. All three null predictions are consistent with all experimental results to date.

### Prediction 4 — Quadratic Lorentz Violation

**Formula:** δc/c ~ (E/E_P)²

Quadratic, not linear. Distinguishes UFFT from loop quantum gravity and string-inspired models that predict linear violation.

---

## What It Does NOT Do (Honestly)

| Gap | Status |
|-----|--------|
| Complete particle mass spectrum | Mechanism identified (topological defects), full knot classification open |
| Kerr metric | Density prediction exists, full axisymmetric derivation open |
| H₀ from first principles | Boundary condition, not derivable from dynamics |
| CP-violating phases (δ_CP) | Open in both PMNS and CKM |
| Top Yukawa coupling | Requires full RG flow from GUT scale |
| Spectral index n_s | Displacement cascade statistics not computed |
| Baryon-to-photon ratio η | Foam baryogenesis not computed |

---

## How to Reproduce

Every result can be checked independently. The spectrum verification script (Python, numpy + sympy) confirms all numerical predictions and runs in under one minute.

GitHub: [github.com/WebEnvy/UnifiedFoamFieldTheory](https://github.com/WebEnvy/UnifiedFoamFieldTheory)

36 papers on Zenodo with permanent DOIs. All under Creative Commons Attribution 4.0.

---

## Contact

Luke Martin · Independent Researcher · Sydney, Australia · 2026

Developed in collaboration with Claude (Anthropic). All mathematical results independently verified.
