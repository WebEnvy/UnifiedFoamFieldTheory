# UFFT Cosmological Predictions vs Observational Data

**Unified Foam Field Theory — Mapping Predictions to Current and Upcoming Surveys**
Luke Martin · luke@webenvy.com.au · Newcastle, Australia
April 2026

---

## Abstract

We compile the cosmological predictions of the Unified Foam Field Theory (UFFT) and compare each against current observational data from Planck 2018, BICEP/Keck, DESI, NICER, and gravitational wave observations. Five cosmological quantities are derived from the truncated octahedron geometry with zero free parameters. All five are within 2σ of observation. We identify which upcoming surveys (LiteBIRD, CMB-S4, Euclid, DESI DR2, LIGO O5) will provide definitive tests, and state the specific numerical targets for each.

---

## 1. The Cosmological Predictions

UFFT derives cosmological quantities from the same cell geometry that produces particle physics. The key inputs are the same topological integers: F = 14 faces, E = 36 edges, V = 24 vertices, F_hx = 8 hexagonal faces, F_sq = 6 square faces, C_A = 3, Δ = 17, and the master equation eigenvalues r₁ = (9−√17)/2, r₂ = (9+√17)/2.

### 1.1 Dark Matter to Baryon Ratio

**Formula:** Ω_DM/Ω_b = d(1 + 2√3) / 2^((d+1)/d), where d = 3 spatial dimensions

**UFFT value:** 5.315

**Observed (Planck 2018):** 5.36 ± 0.06

**Tension:** 0.75σ

**Origin:** The BCC lattice (the tiling structure of the truncated octahedron) has an intrinsic anisotropy between its body-diagonal directions (hexagonal face contacts, 8 directions) and its axial directions (square face contacts, 6 directions). This anisotropy manifests at cosmological scales as a geometric dark matter effect — the "missing mass" is the foam's directional stiffness, not a particle.

**Falsification:** Detection of any dark matter particle. All direct detection experiments (LZ, XENONnT, PandaX, ADMX) return null — consistent with UFFT.

### 1.2 Baryon Asymmetry

**LO Formula:** η_B = α³ / (C_A × F_sq³) = α³ / 648

**LO value:** 5.997 × 10⁻¹⁰ (1.8% below observed)

**NLO Formula:** η_B = [α³/648] × (1 + √17/220)

where 220 = (V − F)(E − F) = 10 × 22 independent topological channels at the electroweak bubble wall.

**NLO value:** 6.111 × 10⁻¹⁰

**Observed (Planck 2018):** (6.104 ± 0.058) × 10⁻¹⁰

**Tension:** 0.09σ (essentially zero)

**Origin:** The CP violation that produces the baryon asymmetry is a topological property of the foam: the truncated octahedron's face geometry treats bubble (matter) and void (antimatter) displacements asymmetrically at the level of α³ divided by colour and face combinatorics. The NLO correction counts the number of independent topological scattering channels available during the electroweak phase transition.

### 1.3 Primordial Spectral Index

**Formula:** n_s from displacement cascade statistics (foam analogue of slow-roll)

**UFFT value:** 0.9621

**Observed (Planck 2018):** 0.9649 ± 0.0042

**Tension:** 0.7σ

**Origin:** The primordial power spectrum tilt measures how displacement energy distributes across scales during the foam's initial perturbation (the event we call the big bang). The slight red tilt (n_s < 1) arises because larger-scale modes have more phase space in the BCC lattice.

### 1.4 Tensor-to-Scalar Ratio

**Formula (corrected, Paper #55):** r = 16/[9 ln(16)] × (1 − n_s) = 0.641 × (1 − n_s)

where ln(16) = ln(r₁r₂) is the total amplitude from the master equation's constant term.

**UFFT value (using observed n_s):** r = 0.0225

**UFFT value (using cascade n_s):** r = 0.0243

**Current bound (BICEP/Keck 2021):** r < 0.032 (95% CL)

**Status:** Inside current bound ✓

**Origin:** The tensor-to-scalar ratio measures the strength of gravitational wave perturbations relative to density perturbations in the primordial spectrum. In UFFT, this ratio is set by the master equation eigenvalue product: the gravitational (tensor) channel samples all 14 faces equally, while the scalar channel is filtered through the T₁u subspace.

**Critical test:** LiteBIRD (launch ~2032) will measure r to precision σ_r ≈ 0.001. CMB-S4 (first light ~2035) will reach σ_r ≈ 0.001. Both would detect r = 0.023 at >20σ if correct. This is a clean, decisive test.

### 1.5 Dark Energy Density

**Formula:** ρ_Λ = ρ₀ × (ℓ_P/R_U)² × (F − χ)/F

where χ = 2 (Euler characteristic of the truncated octahedron), giving (F − χ)/F = 12/14 = 6/7.

**UFFT value:** 5.96 × 10⁻²⁷ kg/m³

**Observed (Planck 2018, Ω_Λ = 0.689):** 5.88 × 10⁻²⁷ kg/m³

**Agreement:** 1.4%

**Origin:** The cosmological constant is the residual energy of the big bang pressure wave at the scale of the observable universe. The 6/7 factor arises from the Euler characteristic constraint: of the 14 face-mode degrees of freedom, 2 are topologically frozen (χ = 2), leaving 12/14 = 6/7 available to carry dark energy. This dissolves the cosmological constant problem — there is no 10¹²⁰ fine-tuning because dark energy is not a sum of vacuum fluctuations.

**DESI note:** DESI 2024 data show mild preference for evolving dark energy (w₀ ≈ −0.55, w_a ≈ −1.1 in CPL parameterisation). A foam pressure wave naturally accommodates time-varying dark energy as the wave front expands. UFFT predicts w deviates from −1 at the level of (ℓ_P/R_U)² ≈ 10⁻¹²² — effectively indistinguishable from w = −1 with current precision, but the direction of deviation matches DESI's hint.

---

## 2. Comparison Table

| Observable | UFFT Formula | UFFT Value | Observed | σ | Status |
|-----------|-------------|-----------|----------|---|--------|
| Ω_DM/Ω_b | BCC anisotropy | 5.315 | 5.36 ± 0.06 | 0.75σ | ✓ |
| η_B (NLO) | α³(1+√17/220)/648 | 6.111×10⁻¹⁰ | 6.104±0.058×10⁻¹⁰ | 0.09σ | ✓ |
| n_s | Cascade | 0.9621 | 0.9649±0.0042 | 0.7σ | ✓ |
| r | 0.641(1−n_s) | 0.0225 | <0.032 | Inside bound | ✓ |
| ρ_Λ | ρ₀(ℓ_P/R_U)²(6/7) | 5.96×10⁻²⁷ | 5.88×10⁻²⁷ | 1.4% | ✓ |

All five predictions are within 2σ of observation. All use zero free parameters.

---

## 3. Upcoming Survey Targets

### 3.1 LiteBIRD (launch ~2032)

**Measurement:** CMB B-mode polarisation → tensor-to-scalar ratio r
**Sensitivity:** σ_r ≈ 0.001
**UFFT target:** r = 0.023 ± 0.002
**Discrimination:** If r = 0.023 detected → strong support. If r < 0.01 or r > 0.04 → tension. If r = 0 → falsified.

### 3.2 CMB-S4 (first light ~2035)

**Measurement:** High-resolution CMB temperature, polarisation, lensing
**UFFT targets:**
- r = 0.023 (confirmation of LiteBIRD)
- n_s = 0.9621 (improvement on Planck precision)
- Σm_ν < 0.06 eV (UFFT predicts Σm_ν = m₂ + m₃ ≈ 58 meV; CMB-S4 sensitivity reaches ~40 meV from lensing)

### 3.3 Euclid (launched July 2023, data ongoing)

**Measurement:** Galaxy clustering, weak lensing, baryon acoustic oscillations
**UFFT targets:**
- Ω_DM/Ω_b = 5.315 (improved precision over Planck)
- Dark energy equation of state w(z): UFFT predicts w ≈ −1 with deviation < 10⁻¹²² (effectively constant)
- Large-scale structure anisotropy: test whether filamentary structure shows preferred directions consistent with 14-direction foam geometry

### 3.4 DESI (operational, DR2 expected ~2026)

**Measurement:** BAO, galaxy clustering, quasar spectra
**UFFT targets:**
- Ω_DM/Ω_b refined
- w₀, w_a dark energy parameters: UFFT predicts w₀ ≈ −1, w_a ≈ 0 (but accommodates small deviations from foam wave evolution)
- DR1 (2024) hints at evolving dark energy are not inconsistent with foam dynamics but need DR2 confirmation

### 3.5 LIGO/Virgo/KAGRA O5 (starting ~2027)

**Measurement:** Binary neutron star mergers → equation of state
**UFFT target:** Neutron star core sound speed c_s = c√(7/12) ≈ 0.764c > c/√3
**Test:** Post-merger gravitational wave spectrum encodes the EOS. Combined with NICER radius measurements, this constrains c_s in the core.

### 3.6 NICER (ongoing on ISS)

**Measurement:** Neutron star mass-radius relations via X-ray pulse profiling
**UFFT target:** EOS consistent with c_s = c√(7/12) in the core of massive (>2 M☉) neutron stars
**Status:** Current NICER data (PSR J0740+6620 at 2.08 M☉) already suggest stiff EOS compatible with c_s > c/√3. More targets being observed.

---

## 4. The Decisive Tests

If we rank by impact and timeline:

**By 2028:** DESI DR2 + improved Planck reanalysis will tighten Ω_DM/Ω_b to ±0.02. UFFT's 5.315 will be tested at ~2σ precision. Any DM detection falsifies immediately.

**By 2030:** nEDM experiments reach 10⁻²⁸ e·cm. Each null confirms UFFT's d_n = 0.

**By 2033:** LiteBIRD measures r to ±0.001. This is the sharpest cosmological test — r = 0.023 is a specific, falsifiable number. Detection confirms; null falsifies.

**By 2035:** DUNE measures δ_PMNS to ±10°. Tests δ_PMNS/δ_CKM = 3 at 3σ. CMB-S4 provides definitive r, n_s, and Σm_ν.

**By 2040:** HL-LHC completes. If no SUSY, no DM particle, and no axion by this date, UFFT's permanent null predictions will have survived two decades of dedicated searching with the most powerful instruments ever built.

---

## 5. What UFFT Does NOT Predict

For completeness, the following cosmological quantities are NOT derived from cell geometry:

- **Hubble constant H₀:** Depends on R_U (particle horizon radius), which is a boundary condition specifying which universe we inhabit, not a property of the foam cell.
- **CMB temperature T_CMB:** Set by the initial conditions of the big bang event, not by cell topology.
- **Exact dark energy time evolution w(z):** The foam pressure wave model gives w ≈ −1 but the precise evolution depends on boundary conditions.

These are genuinely external parameters — they describe which particular foam excitation occurred, not the properties of the foam itself. Honest epistemology requires distinguishing what the framework derives from what it takes as input.

---

*B + V = D*
