# UFFT in Ten Minutes

## What It Is, What It Predicts, How to Falsify It

**Luke Martin · Independent Researcher · March 2026**

---

## What Is UFFT?

A framework that derives standard physics from one axiom and one cell geometry. No free parameters.

**Axiom:** B(x) + V(x') = D — every event is a displacement in a Planck-density mechanical substrate

**Cell:** the truncated octahedron (Kelvin cell) — the unique Archimedean solid that tiles ℝ³

**Equation of state:** P = ρc² (maximally stiff, w = 1)

Everything below follows from these three inputs.

---

## What It Derives (With Numbers)

### 1. Fine Structure Constant

**Formula:**

α⁻¹ = 8π^(5/2) × [47/48 + 10/(3·48³) + 22/(3·48⁵)]

**Inputs:** |O_h| = 48, V = 24, E = 36, F = 14, d = 3 — all topological integers of the truncated octahedron. The three correction terms come from the CW-complex boundary structure: leading order = (|G|−1)/|G|, sub-leading = (V−F)/(d·|G|³), sub-sub-leading = (E−F)/(d·|G|⁵). These are spectral coefficients from the Peter-Weyl decomposition of the identity channel in the regular representation of O_h.

**Result:** 137.035 999 055

**Observed:** 137.035 999 084 ± 0.021

**Accuracy:** 0.21 ppb (1.4σ). Zero free parameters.

**Zenodo:** [10.5281/zenodo.19011758](https://zenodo.org/records/19011758)

---

### 2. Dark Matter Ratio

**Formula:**

Ω_DM/Ω_b = 3(1 + 2√3) / 2^(4/3)

**Derivation:** Weaire-Phelan foam topology. BCC lattice connectivity: each cell has 8 nearest and 6 next-nearest neighbours. The anisotropic coupling fraction between hexagonal and square faces, with d = 3 spatial dimensions providing the dimensional factor.

**Result:** 5.3147

**Observed (Planck 2018):** 5.3272

**Accuracy:** 0.23%. Zero free parameters.

---

### 3. Dark Energy Density

**Formula:**

ρ_Λ = ρ₀ × (l_P / R_U)² × (F − χ) / F

**Inputs:** ρ₀ = Planck density, l_P = Planck length, R_U = particle horizon (observed), F = 14 faces, χ = 2 (Euler characteristic of a closed polyhedron). The factor (F−χ)/F = 12/14 = 6/7 accounts for the topological constraint on propagating degrees of freedom across the cell boundary.

**Result:** 5.96 × 10⁻²⁷ kg/m³

**Observed:** 5.88 × 10⁻²⁷ kg/m³

**Accuracy:** 1.4%. Zero free parameters. The 10¹²³ "cosmological constant problem" is dissolved: ρ_Λ/ρ_Planck = (l_P/R_U)² × 6/7, which is small because the universe is large.

---

### 4. Covariant Vacuum Density

**Formula:**

ρ_foam = ρ₀ × (−g_tt / c²)

**Derivation:** Five lines. Relativistic Euler equation for P = ρc² gives acceleration a = −(c²/2)∇(ln ρ). GR gives a = −(c²/2)∇(ln(−g_tt)). Equating and integrating gives ρ = ρ₀(−g_tt/c²). The factor of 2 from relativistic enthalpy (ρ + P/c² = 2ρ for w = 1) cancels the factor of 2 in GR. This result is **unique to w = 1**. General formula: ρ ∝ (−g_tt)^((1+w)/(2w)), which gives exponent 1 only when w = 1.

**Verified against:** Schwarzschild, Newtonian limit, horizon (ρ→0), FLRW comoving (ρ=ρ₀), Kerr, de Sitter, gravitational waves.

---

### 5. Face Laplacian Spectrum

The graph Laplacian of the 14-face adjacency graph of the truncated octahedron:

**Spec(L) = {0¹, ((9−√17)/2)³, 4², ((9+√17)/2)³, 7⁴, 9¹}**

**Characteristic polynomial:** p(λ) = λ(λ²−9λ+16)³(λ−4)²(λ−7)⁴(λ−9)

**O_h irrep decomposition:** A1g, T1u, Eg, T1u, A1g⊕T2g, A2u

**Key physical result:** At λ = 7, the A1g (gravity/density) and T2g (torsion/shear) modes are **degenerate**. This is the gravity-torsion coupling that enables the experimental prediction in §6 below.

**Zenodo:** [10.5281/zenodo.19030062](https://zenodo.org/records/19030062)

---

### 6. Gauge Group

**Result:** SU(3) × SU(2) × U(1) emerges from the foam torsion topology.

- SU(3): torsion around 3 independent BCC lattice axes → 3 colour charges, 8 generators
- SU(2): chiral (left-handed) helical discharge modes → weak isospin doublets
- U(1): the single rotational degree of freedom of a displacement event → electric charge

The gauge group is not postulated — it is the symmetry group of the allowed topological excitations in the truncated octahedral foam.

---

## What It Predicts (Falsifiable)

### Prediction 1 — Gravitational Suppression of Decoherence

**Formula:** Γ(r)/Γ(∞) = 1 − 2GM/rc²

Decoherence rates **decrease** near massive objects. Standard QM: no gravitational effect. Diósi-Penrose: enhancement (opposite sign). UFFT: suppression.

**Test:** Compare qubit decoherence times at different gravitational potentials (e.g., ground vs satellite, or near vs far from a massive sphere). The sign distinguishes UFFT from all competitors.

**Zenodo:** [10.5281/zenodo.18706756](https://zenodo.org/records/18706756)

---

### Prediction 2 — Qubit-Type Independence

The suppression factor 1 − 2GM/rc² is **independent of qubit type**. Photonic, superconducting, and trapped-ion qubits all show the same coefficient. This tests whether decoherence couples to gravity universally (UFFT) or through system-specific channels (alternatives).

---

### Prediction 3 — Gravity-Torsion Coupling in BCC Crystals

The λ = 7 degeneracy (A1g ⊕ T2g) is a property of **truncated octahedral geometry**, not of the Planck scale. BCC metals (W, Fe, Nb) have Wigner-Seitz cells that ARE truncated octahedra. Their phonon spectra carry the same degeneracy at ~4 THz.

**Experimental design:**
- Sample: single-crystal superconducting niobium, 100 cm³, T < 2K
- Source: free electron laser at 4.1 THz (the λ = 7 phonon mode)
- Detector: atom interferometer gravimeter
- Control: FCC copper (different Wigner-Seitz cell → null result expected)
- Control: same Nb at a non-λ=7 frequency → null result expected

**Predicted signal:** g ≈ 3 × 10⁻⁷ m/s² (10× above lab gravimeter sensitivity)

**Signature:** gravitational signal at 2× drive frequency, orientation-dependent, BCC-only, scaling with crystal volume.

**What this tests:** whether the foam tiles as truncated octahedra. If the signal exists, the cell geometry is confirmed. If null at predicted sensitivity, the cell geometry is falsified.

**Estimated cost:** $200–500k + FEL beamtime

---

### Prediction 4 — Three-Particle Cascade State

**State:** |Ψ⟩ = (1/√2)(|010⟩ − |101⟩)

Distinct from GHZ (|000⟩ + |111⟩) and W (|001⟩ + |010⟩ + |100⟩). The cascade topology predicts X⊗X⊗X = −1. Preparable with current quantum hardware.

---

### Prediction 5 — Quadratic Lorentz Violation

**Formula:** δc/c ~ (E/E_P)²

The discrete foam structure produces a quadratic (not linear) deviation from exact Lorentz invariance at energies approaching the Planck scale. At LHC energies: δc/c ~ 10⁻³⁸. Below current detection but distinguishes UFFT from proposals predicting linear violation.

---

## What It Does NOT Do (Honestly)

| Gap | Status |
|-----|--------|
| Maxwell's equations from foam dynamics | Future programme |
| Einstein-Hilbert action from foam | Future programme |
| Spatial metric component g_rr | Known discrepancy: foam gives (1−x)^(−2/3), GR gives (1−x)^(−1) |
| Particle mass spectrum | Mechanism identified (topological defect classification), masses not computed |
| Friedmann equations | Future programme |
| Full QFT emergence | Wave equation chain derived; formal QFT construction not done |
| Strong/weak coupling constants beyond α | Mechanism established, numbers not derived |

---

## How to Reproduce

Every result can be checked independently:

1. **α:** Evaluate 8π^(5/2) × [47/48 + 10/(3·48³) + 22/(3·48⁵)] on any calculator. Verify inputs: |O_h| = 48, V = 24, E = 36, F = 14, d = 3 from any crystallography reference.

2. **Dark matter ratio:** Evaluate 3(1 + 2√3)/2^(4/3). Compare to Planck 2018 Table 2 (Ω_c h² / Ω_b h²).

3. **Dark energy:** Evaluate 5.155×10⁹⁶ × (1.616×10⁻³⁵ / 4.4×10²⁶)² × 6/7. Compare to Planck 2018 ρ_Λ.

4. **Face Laplacian:** Build the 14×14 adjacency matrix from truncated octahedron face coordinates (permutations of (0,±1,±2)). Compute L = D−A. Diagonalise. Requires only integer arithmetic and one square root (√17).

5. **Covariant density:** Three lines of algebra from the relativistic Euler equation for P = ρc².

---

## Published Preprints

| Paper | DOI |
|-------|-----|
| Gravitational Suppression of Quantum Decoherence | [10.5281/zenodo.18706756](https://zenodo.org/records/18706756) |
| Void-Pair Conservation and Bell Correlations | [10.5281/zenodo.18706806](https://zenodo.org/records/18706806) |
| The Fine Structure Constant from Foam Geometry | [10.5281/zenodo.19011758](https://zenodo.org/records/19011758) |
| The Laplacian Spectrum of the Kelvin Cell | [10.5281/zenodo.19030062](https://zenodo.org/records/19030062) |

---

## Contact

Luke Martin · Independent Researcher · Sydney, Australia · 2026

Developed in collaboration with Claude (Anthropic). All mathematical results independently verified.
