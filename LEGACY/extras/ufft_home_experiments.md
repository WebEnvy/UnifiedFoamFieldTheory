# UFFT Home Experiments
## Testing Foam Physics for Under $200

*by Luke Martin · 2026*

---

## Overview

Most of physics requires million-dollar equipment. These experiments don't.

UFFT makes specific, quantitative predictions about how foam oscillation modes couple between material boundaries. One of those predictions — **Prediction #3: Layer-count scaling** — can be tested at home with materials from a hardware store.

The key question: **Does the effect scale linearly (N) or as the square root (√N)?**

- **Linear scaling (∝ N):** Coherent foam coupling. Oscillation modes are phase-locked across layers. UFFT prediction.
- **Square-root scaling (∝ √N):** Incoherent coupling. Random phase relationship. Null hypothesis.

This same experiment tests claims made by Wilhelm Reich (orgone accumulators) in the 1940s. If you confirm linear scaling, you've validated both UFFT and Reich's observations — with 21st-century controls.

---

## Experiment 1: Temperature Anomaly Test

### What You're Measuring

A layered structure of alternating organic (dielectric) and metallic (conductor) materials creates Casimir-type boundary conditions for foam oscillation modes. This alters the local vacuum energy density. Altered energy density → altered temperature.

**Predicted effect:** Interior temperature 0.1–0.5°C above ambient, scaling with layer count.

### Materials

| Item | Purpose | Approx. Cost |
|------|---------|--------------|
| Aluminium foil (heavy duty) | Metallic boundary layer | $8 |
| Wool felt sheets (6mm thick) | Organic dielectric layer | $25 |
| Cardboard box (30×30×30cm) | Structural container | $5 |
| Digital thermometer (0.1°C resolution) | Interior temperature | $20 |
| Second thermometer (or same model) | Ambient reference | $20 |
| Hygrometer (optional) | Humidity control | $15 |
| Stopwatch or phone timer | Timing measurements | Free |
| Notepad | Data recording | Free |
| **Total** | | **~$93** |

### Construction

1. Cut wool felt into six 28×28cm squares.
2. Cut aluminium foil into six 28×28cm squares.
3. Line inside of cardboard box with one layer of foil (shiny side out).
4. Add one layer of felt against the foil.
5. Add another layer of foil against the felt.
6. Continue alternating: felt, foil, felt, foil...
7. End with foil on the innermost surface.
8. Leave the top open (or make a removable lid with same layering).

**Layer configurations to test:**
- 1 layer pair (1 foil + 1 felt)
- 3 layer pairs
- 5 layer pairs
- 7 layer pairs
- 10 layer pairs (if material allows)

### Procedure

1. **Equilibration (critical):**
   - Place box in temperature-stable location (basement, interior room)
   - Away from windows, heating vents, direct sunlight
   - Allow 24 hours for thermal equilibration

2. **Baseline measurement:**
   - Place interior thermometer in center of box
   - Place reference thermometer 1 metre away at same height
   - Record both temperatures every 10 minutes for 2 hours
   - Calculate mean difference (should be near zero for empty box)

3. **Layered measurement:**
   - Construct box with N layer pairs
   - Allow 12 hours for equilibration
   - Record temperatures every 10 minutes for 6 hours
   - Calculate mean temperature difference ΔT(N)

4. **Repeat for each N value:**
   - Build new box OR add layers to existing box
   - Always allow equilibration time
   - Minimum 3 repetitions per N value

### Controls

- **Empty box:** Same cardboard, no layers. Should show ΔT ≈ 0.
- **Random arrangement:** Same materials, jumbled together (not layered). Tests whether layered structure matters.
- **Inverted box:** Flip entire structure upside down. Effect should persist (not gravity-dependent).
- **Time-of-day variation:** Measure at multiple times. Effect should be constant (not solar-dependent).

### Data Analysis

Plot ΔT vs N on log-log axes. Fit a power law:

**ΔT = A × N^α**

If **α ≈ 1.0**: Coherent coupling confirmed. UFFT prediction verified.
If **α ≈ 0.5**: Incoherent coupling. Null hypothesis.
If **α ≈ 0**: No effect. Both models wrong.

Calculate 95% confidence interval on α. The prediction is distinguishable if CI excludes 0.5.

---

## Experiment 2: Weight Anomaly Test (Advanced)

### What You're Measuring

Casimir cavity arrays may produce a net directional force. UFFT predicts measurable weight anomaly for ordered cavity structures.

**Predicted effect:** Weight change of order 10⁻⁵ to 10⁻³ of structure weight.

### Additional Materials

| Item | Purpose | Approx. Cost |
|------|---------|--------------|
| Precision scale (0.01g resolution) | Weight measurement | $30 |
| Laser-drilled acrylic panels (hex pattern) | Ordered cavity array | $40 |
| Vibration isolation pad | Reduce noise | $15 |
| Faraday cage (foil-lined box) | EM shielding | $10 |
| **Additional Total** | | **~$95** |

### Panel Specifications

Commission laser-drilled hexagonal hole arrays:
- Material: Clear acrylic, 0.5mm thick
- Hole diameter: 50 μm
- Hole spacing: 100 μm (centre-to-centre)
- Pattern: Regular hexagonal array
- Panel size: 50×50mm
- Quantity: 5 panels

Laser cutting services (e.g., Ponoko, local makerspaces) can produce these for $30–60.

### Procedure

1. **Setup:**
   - Place vibration pad on concrete floor (not desk)
   - Place scale on pad
   - Enclose in Faraday cage
   - Tare scale, record drift over 1 hour

2. **Baseline:**
   - Measure weight of single panel
   - Record 30 readings over 5 minutes
   - Calculate mean and standard deviation

3. **Stacked measurement:**
   - Stack 2 panels in aligned orientation (hex patterns registered)
   - Measure weight, 30 readings, 5 minutes
   - Repeat for 3, 4, 5 panels

4. **Controls:**
   - **Misaligned stack:** Rotate alternate panels 30°. Breaks hex registration.
   - **Solid blank:** Same acrylic, same mass, no holes.
   - **Inverted stack:** Flip 180°. If directional, sign should reverse.

### Data Analysis

Calculate weight anomaly ΔW(N) = W(measured) − W(expected from individual panels).

Plot ΔW vs N. Look for systematic deviation from zero.

Predicted: ΔW ∝ N for coherent coupling, ΔW ∝ √N for incoherent.

---

## Experiment 3: Electrostatic Lift Test (Advanced)

### What You're Measuring

Asymmetric capacitor geometry may produce net thrust from foam pressure asymmetry (Biefeld-Brown effect).

**Warning:** This experiment involves high voltage. Only attempt if you have appropriate electrical safety training.

### Materials (add to precision scale setup)

| Item | Purpose | Approx. Cost |
|------|---------|--------------|
| High-voltage DC supply (20–30kV) | Electric field generation | $50–100 |
| Thin aluminium wire (0.1mm) | Upper electrode | $10 |
| Aluminium foil strip | Lower electrode | $2 |
| Balsa wood frame | Support structure | $8 |
| Nylon thread | Suspension | $3 |
| **Additional Total** | | **~$70–120** |

### Construction (Asymmetric Capacitor "Lifter")

1. Build triangular balsa frame (30cm sides)
2. Attach thin wire along top edge (small radius electrode)
3. Attach foil strip (3cm wide) along bottom edge (large radius electrode)
4. Gap between electrodes: 3–5cm
5. Suspend from scale or torsion balance

### Procedure

1. **Baseline:** Measure weight with no voltage
2. **Powered:** Apply high voltage (start at 10kV, increase to 25kV)
3. **Record:** Weight change vs voltage

### Key Tests

- **Air vs vacuum:** Does effect persist in vacuum chamber? (If you have access)
- **Polarity reversal:** Does thrust direction reverse with polarity?
- **Dielectric variation:** Try different dielectrics between electrodes (barium titanate predicted to show κ³ scaling)

**Atmospheric result:** Thrust present, likely ion wind.
**Vacuum result:** Thrust present → foam pressure mechanism confirmed.
**Vacuum result:** Thrust absent → ion wind only, foam coupling below detection.

---

## Safety Notes

### Temperature Experiment
- No significant hazards
- Standard care with sharp edges (scissors, foil)

### Weight Experiment
- No significant hazards
- Handle precision scale carefully

### Electrostatic Experiment
- **HIGH VOLTAGE HAZARD**
- Minimum 2 people present
- Current-limited supply only
- Discharge capacitors before touching
- No operation near flammable materials
- Keep hands behind back when circuit is live
- If unsure, don't attempt

---

## Reporting Results

If you conduct these experiments, please document:

1. **Materials:** Exact specifications, suppliers
2. **Procedure:** Step-by-step as performed
3. **Raw data:** All readings, not just averages
4. **Controls:** Results of all control conditions
5. **Analysis:** Statistical treatment, confidence intervals
6. **Photos:** Setup, materials, any anomalies

Share results via:
- Open Science Framework (osf.io)
- Zenodo (zenodo.org)
- Direct email to Luke Martin

Negative results are as valuable as positive results. If you find no effect, that's data too.

---

## What Success Looks Like

**Temperature experiment:**
- ΔT > 0.1°C consistently
- α > 0.7 in power law fit
- Controls show no effect
- Repeatable across multiple trials

**Weight experiment:**
- ΔW > 0.01g for 5-panel stack
- Effect reverses when inverted
- Misaligned control shows reduced effect
- Repeatable

**Electrostatic experiment:**
- Thrust persists in vacuum (if testable)
- Scales with dielectric constant (not just field strength)

Any one of these would be a significant result. All three together would be compelling evidence for coherent foam coupling.

---

*Total cost for temperature experiment: ~$93*
*Total cost for all experiments: ~$250–300*
*Time investment: ~2–4 weeks of weekends*

*You don't need a PhD or a research grant. You need patience, careful measurement, and honest recording of what you observe.*

---

*AI Disclosure: This document was produced with AI assistance for formatting and structure.*
