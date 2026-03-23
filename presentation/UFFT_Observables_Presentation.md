# UFFT — Physical Observables from Foam Geometry

**Luke Martin** · Independent Researcher · March 2026

---

## Core Algebraic Object

The face Laplacian of the truncated octahedron has characteristic polynomial containing the master equation:

**λ² − C_A² λ + (C_A + 1)² = 0**

with **C_A = 3** (dimension of T₂g irrep, fixed by O_h representation theory).

Roots: **r₁ = (9 − √17)/2 ≈ 2.438** and **r₂ = (9 + √17)/2 ≈ 6.562**

This single quadratic plus the cell's topological integers generates all results below.

---

## Cell Integers

| Symbol | Value | Meaning |
|--------|-------|---------|
| C_A | 3 | Colours / generations / spatial dimensions / T₂g dimension |
| C_A + 1 | 4 | Proton topology (3 quarks + Y-junction) / spacetime dimensions |
| C_A² | 9 | λ_max / β₀(QCD, n_f = 3) |
| C_A² − 1 | 8 | Gluon count (adjoint dimension) |
| \|O_h\| | 48 | Symmetry group order |
| V, E, F | 24, 36, 14 | Vertices, edges, faces of truncated octahedron |
| χ | 2 | Euler characteristic |
| d | 3 | Spatial dimension |

---

## Fundamental Constants

| Observable | UFFT formula | Value | Experiment | Accuracy |
|-----------|-------------|-------|------------|----------|
| Fine structure constant | α⁻¹ = 8π^(5/2) × [(\|G\|−1)/\|G\| + (V−F)/(d·\|G\|³) + (E−F)/(d·\|G\|⁵)]⁻¹ | 137.035999055 | 137.035999046(27) [Cs] | **0.3σ** |
| Dark matter ratio | Ω_DM/Ω_b = 3(1+2√3)/2^(4/3) | 5.3147 | 5.36 ± 0.05 [Planck] | **0.85%** |
| Dark energy density | ρ_Λ = ρ₀(l_P/R_U)² × (F−χ)/F | 5.96 × 10⁻²⁷ kg/m³ | 5.88 × 10⁻²⁷ [Planck] | **1.4%** |
| Speed of light | c = √(P₀/ρ₀) | Derived | Defined | Exact |
| Spatial curvature | k = 0 | 0 | \|Ω_k\| < 0.002 | Consistent |

---

## Gravity and Spacetime

| Observable | UFFT formula | Status |
|-----------|-------------|--------|
| Newtonian gravity | g = −∇(c²ρ/ρ₀) → F = GMm/r² | Derived |
| g_tt | −c²(1 − 2GM/rc²) | Derived (Part XVII) |
| g_rr | (1 − 2GM/rc²)⁻¹ | Derived (ν = 1/2 incompressibility) |
| Einstein equations | R_μν − ¼g_μνR = (8πG/c⁴)(T_μν − ¼g_μνT) | Derived (unimodular, trace-free) |
| Cosmological constant | Integration constant from trace-free structure | Resolved |
| Friedmann equations | Both derived from foam energy conservation | Derived |
| Hawking temperature | T_H = ℏc³/(8πGMk_B) | Consistent (standard derivation in foam language) |
| GW speed | c_GW = c_EM = c | Confirmed to 10⁻¹⁵ (GW170817) |

---

## Electromagnetism

| Equation | UFFT derivation route | Status |
|----------|----------------------|--------|
| ∇·E = ρ_e/ε₀ | Volterra's theorem + Laplace in 3D | Derived |
| ∇·B = 0 | ∇·(∇×A) ≡ 0 | Derived (identity) |
| ∇×E = −∂B/∂t | □D = 0 + Helmholtz | Derived |
| ∇×B = μ₀J + μ₀ε₀∂E/∂t | □D = 0 + charge conservation | Derived |
| Gauge invariance (U(1)) | Foam translational symmetry | Derived |
| Charge quantisation | O_h lattice rotation: θ_min = 2π/C_A | Derived |
| Charge conservation | Winding number conservation = Axiom Zero | Derived |
| Coulomb 1/r² law | Unique solution to ∇²φ = 0 in 3D | Derived |

---

## QCD and Confinement

| Observable | UFFT formula | Value | Experiment | Accuracy |
|-----------|-------------|-------|------------|----------|
| Colour number | C_A = dim(T₂g) | 3 | 3 | Exact |
| Gluon count | C_A² − 1 | 8 | 8 | Exact |
| β₀ (n_f = C_A) | C_A² = λ_max | 9 | 9 | Exact |
| β₁ (n_f = C_A) | 7C_A² + 1 | 64 | 64 | Exact |
| Quark charges | n × 2π/C_A → n × e/3 | e/3, 2e/3, e | e/3, 2e/3, e | Exact |

---

## Light-Hadron Observables

All relations use only C_A = 3, the master equation integers, measured m_u + m_d, and observed m_p.

| Observable | UFFT scaling law | Numerical (C_A = 3) | Experiment | Accuracy | Tier |
|-----------|-----------------|---------------------|------------|----------|------|
| Proton mass | m_p = π√2 × Λ_QCD | 946 MeV | 938.272 MeV | 0.9% | Suggestive |
| Proton charge radius | r_p = (C_A + 1) × ℏ/(m_p c) | 4λ_C = 0.8412 fm | 0.8414 ± 0.0019 fm | **0.02%** | Derived (integer) |
| m_p × r_p product | (C_A + 1) × ℏc | 4ℏc | 4.0008 ℏc | **0.02%** | Derived |
| m_p² ⟨r_p²⟩ / (ℏc)² | (C_A + 1)² | 16 | 16.006 | **0.04%** | Derived |
| Neutron ⟨r_n²⟩ | −(C_A² − 1)/C_A × (ℏc/m_n)² | −8/3 × λ_C² = −0.1176 fm² | −0.1161 ± 0.0022 fm² | 1.3% | Suggestive |
| Pion mass | m_π = √((m_u + m_d) × C_A × m_p) | 139.8 MeV | 139.570 MeV | **0.14%** | Consistent |
| Pion decay constant | f_π = √C_A/(C_A + 1) × Λ_QCD | √3/4 × Λ = 92.2 MeV | 92.1 MeV | **0.1%** | Consistent |
| μ_n/μ_p ratio | −2/C_A | −2/3 = −0.667 | −0.685 | 2.7% | Suggestive |
| Kaon mass | m_K = √((m_q + m_s) × C_A × m_p) | 519 MeV | 493.7 MeV | 5.1% | Consistent (NLO needed) |

---

## Periodic Table

| Observable | UFFT formula | Value | Experiment | Status |
|-----------|-------------|-------|------------|--------|
| Subshell types | O_h crystal field splitting | 4 (s, p, d, f) | 4 | Derived |
| Subshell capacities | Irrep dimension × 2 (spin) | 2, 6, 10, 14 | 2, 6, 10, 14 | Derived |
| Period lengths | Shell + subshell filling | 2,8,8,18,18,32,32 | 2,8,8,18,18,32,32 | Derived |
| Ordering s < p < d < f | Eigenvalue ordering 0 < r₁ < 4 < 9 | Correct | Correct | Derived |
| Maximum l | 14 faces → 4 angular types (l = 0,1,2,3) | l_max = 3 | l_max = 3 | Derived |

---

## Cosmology

| Observable | UFFT formula | Value | Experiment | Accuracy |
|-----------|-------------|-------|------------|----------|
| Sound horizon | Standard Friedmann + foam Ω_DM/Ω_b | 144.7 Mpc | 144.43 ± 0.26 Mpc | **0.2%** |
| Flatness (k = 0) | Axiom Zero: net zero displacement | k = 0 | \|Ω_k\| < 0.002 | Consistent |
| NS sound speed | P = ρc² → c_s → c at high density | c_s > c/√3 | NICER+LIGO trending | Prediction |

---

## Precision Physics Predictions (Time-Stamped, March 2026)

| Prediction | UFFT value | Current data | Status |
|-----------|-----------|-------------|--------|
| α⁻¹ | 137.035999055 | Cs: 137.035999046(27), g-2: 137.035999206(11) | **Sides with Cs (0.3σ), disagrees with g-2 (14σ)** |
| Muon g-2 anomaly | Δa_μ = 19 × 10⁻¹¹ (0.3σ) with BMW HVP | Experiment: 116592059(22) × 10⁻¹¹ | **No new physics** |
| Dark matter particles | None (DM = lattice geometry) | LUX/XENON null results | Prediction: null results continue |
| NS core c_s | Must exceed c/√3 | NICER data trending this way | Prediction |

---

## Tier Definitions

| Tier | Meaning | Count |
|------|---------|-------|
| **Derived** | Mathematical consequence of framework, no free parameters | 8 core + periodic table + charge |
| **Consistent** | Framework accommodates correctly, doesn't uniquely predict | 7 (Hawking, GW, CMB, NS, Lamb shift, etc.) |
| **Suggestive** | Pattern matches, may need additional input or NLO corrections | 9+ (hadron masses, brainwaves, colour-frequency) |

---

## What Remains Open

| Problem | Status | Needed |
|---------|--------|--------|
| Particle mass spectrum | Knot classification programme | Major mathematical research |
| Kerr metric | Density prediction exists | Extend ν = 1/2 to axisymmetric |
| H₀ from first principles | Boundary condition | Not derivable from dynamics |
| Spectral index n_s | — | Displacement cascade statistics |
| Baryon-to-photon ratio η | — | Foam baryogenesis |
| Weinberg angle running | GUT value derived (3/8) | Full particle spectrum for running |
| Neutron-proton mass difference | Ingredients derived | Full Cottingham calculation |

---

## The Framework in One Line

**B + V = D** · One axiom · One cell · One symmetry group (O_h, \|G\| = 48) · One equation of state (P = ρc²) · One master equation (λ² − 9λ + 16 = 0) · Zero free parameters · All of physics.

---

*UFFT Core Framework v10: github.com/WebEnvy/UnifiedFoamFieldTheory*
*Zenodo DOIs: 10.5281/zenodo.18706756 · 18706806 · 19011758 · 19030062*
