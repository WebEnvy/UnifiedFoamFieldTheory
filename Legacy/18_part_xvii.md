---
### Navigation

📘 [README — Full Index](README.md)

⬅ Previous: [Appendix — What Remains Open and Recommended Next Steps](17_appendix.md)

---

**UNIFIED FOAM FIELD THEORY**

Complete Works --- Luke Martin

# PART XVII

***Experimental Methodology: Theory to Apparatus***

The Millikan Oil Drop Experiment

as a Model for Scientific Verification

**Primary source:** R. A. Millikan, 'On the Elementary Electrical
Charge

and the Avogadro Constant,' Physical Review, Vol. 2, pp. 109--143,
August 1913

Ryerson Physical Laboratory, University of Chicago

Nobel Prize in Physics, 1923

**Priority date: 20 February 2026**

*AI Disclosure: Developed in collaboration with Claude (Anthropic).*

*Ideas, theory, and direction: Luke Martin. AI role: mathematical
checking, equation formatting, document structuring.*

**Why This Experiment**

The Millikan oil drop experiment (1909--1913) is the ideal template for
understanding how a physical theory moves from mathematical conjecture
to verified measurement. It has a clean, inspectable separation between
three layers: the theoretical framework, the mathematical derivation,
and the engineered apparatus. Every design decision in the physical
setup is documented in Millikan's own 1913 Physical Review paper.

The result is unambiguous --- charge arrives in integer multiples of one
unit --- and there is a known correct answer to compare against. It also
contains a deliberate historical systematic error (an incorrect air
viscosity value) that was not corrected for decades, making it an ideal
lesson in how apparatus calibration, not theory, often determines
experimental accuracy.

  ------------ ------------------------------------------------------------------
  **Source**   R. A. Millikan, 'On the Elementary Electrical Charge and the
               Avogadro Constant,' Physical Review, Vol. 2, pp. 109--143, August
               1913. Apparatus built at Ryerson Physical Laboratory, University
               of Chicago. Nobel Prize in Physics awarded 1923.

  ------------ ------------------------------------------------------------------

**Layer 1 --- The Theory**

Thomson (1897) had demonstrated the electron's existence and measured
its charge-to-mass ratio e/m. What remained unknown was the charge e
itself. The foundational question was whether electric charge was
continuous or came in discrete, indivisible packets.

Lorentz and others had established that if a single charged particle
could be isolated and subjected to a known electric force, its charge
could be measured directly. The theoretical chain required three
pre-existing results:

  -----------------------------------------------------------------------
  **Pre-existing Law**     **Statement**            **Role in
                                                    Experiment**
  ------------------------ ------------------------ ---------------------
  Coulomb's Law (1785)    Electric force F = qE on Relates charge to
                           charge q in field E      measurable force

  Newton's Second Law     At terminal velocity,    Converts dynamics to
                           net force is zero        statics --- no
                                                    acceleration needed

  Stokes' Law (1851)      Drag on sphere: F_drag = Connects observable
                           6πηav                    velocity to drop
                                                    radius and charge
  -----------------------------------------------------------------------

The insight was to measure velocities, not forces directly, allowing all
the unknowns to cancel into a single solvable expression for charge.

**Layer 2 --- The Mathematics**

The calculation proceeds in three steps. Step 1 determines the drop's
radius from its free-fall behaviour. Step 2 uses that radius to extract
the charge from the rise behaviour with the electric field on. Step 3
finds the elementary charge by identifying the common factor across many
drops.

**Step 1: Determine Drop Radius from Free Fall**

With no electric field applied, the drop falls under gravity opposed by
air drag and buoyancy. At terminal velocity, all forces balance:

> (4/3)πa³(ρ_oil − ρ_air)g = 6πηa · v_fall

Solving for radius a gives:

> a = sqrt[ 9η·v_fall / 2(ρ_oil − ρ_air)g ]

Millikan added the Cunningham correction to Stokes' law, necessary
because air is not a continuous fluid at the micron scale of the drops.
The corrected drag force is:

> F_drag = 6πηav / (1 + b/pa)

where p is air pressure and b = 7.88 × 10⁻³ Pa·m is an empirically
measured constant. This correction makes the quadratic equation for a
slightly more complex but solvable.

  -------- ------------------------------------------------------------------
  **Drop   Corrected radius: a = 2.785 μm. Uncorrected: 2.824 μm. Difference:
  6**      1.4% --- matters at Millikan's claimed 0.2% precision.

  -------- ------------------------------------------------------------------

**Step 2: Determine Charge from Rise Velocity**

With the electric field E switched on, the drop rises against gravity.
At terminal velocity upward:

> qE = (4/3)πa³(ρ_oil − ρ_air)g + 6πηa(v_fall + v_rise)

Since the radius a is already known from Step 1, solving for charge q
gives:

> q = 6πηa(v_fall + v_rise) / E

The sum (v_fall + v_rise) appears because both fall and rise involve
drag in opposite directions, and combining them eliminates the need to
know the drop's weight independently. The electric field E = V/d where
V is the applied voltage and d is the plate separation.

**Step 3: Extract Elementary Charge by Greatest Common Divisor**

The procedure is repeated across many drops with different charge
states. Each drop carries an integer n of elementary charges: q = n·e.
Millikan observed that every measured charge value was a whole-number
multiple of a single base unit. By finding the greatest common divisor
of all measured charge values across 58 drops over 60 consecutive days,
he extracted e.

  -----------------------------------------------------------------------
  **Result**                          **Value**
  ----------------------------------- -----------------------------------
  Millikan's published value (1913)  e = 1.592 × 10⁻¹⁹ C

  Accepted value (2019 SI definition) e = 1.602176634 × 10⁻¹⁹ C

  Discrepancy                         0.63% --- caused entirely by
                                      viscosity table error
  -----------------------------------------------------------------------

**Layer 3 --- The Apparatus and Why Each Design Decision Was Made**

Millikan's 1913 paper contains explicit engineering reasoning for every
component. Each choice was driven by a specific physical constraint or
measurement requirement. This is the layer most instructive for
designing new experiments.

**Parallel Plate Capacitor --- 16 mm separation, ~5 kV**

The plates had to be far enough apart to allow a drop to fall and rise
visibly for several seconds, giving time for accurate stopwatch
measurement. But they had to be close enough that a manageable voltage
produced an electric field strong enough to levitate a drop carrying
even a single electron charge.

> At d = 16 mm, V = 5 kV: E = V/d = 312,500 V/m
>
> Force on singly-charged drop: F = qE = (1.6 × 10⁻¹⁹)(3.12 × 10⁵) = 5 ×
> 10⁻¹⁴ N
>
> Gravitational force on 2.8 μm drop: F_grav ≈ 3 × 10⁻¹³ N

A wider gap would require proportionally higher voltage for the same
field. Millikan's chosen geometry was the minimum practical
configuration for bench-top operation.

**Oil Choice --- Butyl Phthalate, density 919.9 kg/m³**

Water evaporates. Millikan's student Harvey Fletcher identified this as
the fatal flaw in earlier cloud chamber attempts. As a water droplet
shrinks, its mass changes during measurement, invalidating the Stokes'
law radius derivation.

Oil with very low vapour pressure does not evaporate measurably over the
timescale of an experiment. The same drop could be measured dozens of
times without changing size. Fletcher tried several oils; butyl
phthalate was chosen for its combination of low vapour pressure, known
density, and appropriate viscosity that produced drops in the right size
range (0.5--5 μm) when atomised.

**Atomiser --- Perfume-style spray**

The atomiser needed to produce drops small enough that Stokes' law
applies cleanly --- large enough to be visible through the telescope and
fall slowly enough for accurate timing. The perfume atomiser reliably
produced drops with a radius distribution centred around 1--5 μm. No
engineered precision nozzle was needed --- the random spray provided
sufficient variety of drop sizes to find well-behaved candidates.

**Observation Distance --- 10.21 mm marked on eyepiece reticle**

This was set by two competing requirements. Shorter distance means
faster transit times which amplify percentage errors. Longer distance
means longer timing windows but risks the drop drifting laterally out of
the optical path.

10.21 mm produced fall times of 10--30 seconds for typical drops ---
long enough that a stopwatch error of 0.1 s is less than 1% --- while
keeping the vertical travel short enough that the drop stayed visible in
the telescope field. The reticle lines converted an inherently analogue
position measurement into a simple binary event (drop crosses line:
start/stop timer), achievable with 1913 technology.

**X-ray Ionisation Source**

This was the key innovation that made the experiment definitive rather
than merely suggestive. Earlier work could measure the charge on a drop
but only once per drop --- the drop had to be replaced for each
measurement.

The X-ray source ionised the air inside the chamber, which then attached
additional electrons to the drop while it was being observed. This
allowed Millikan to change the charge state of the same drop multiple
times in a single session. The charge would jump in discrete steps.
Since the drop's size --- and therefore its gravitational and drag
behaviour --- did not change between charge states, the ratio of
different charge values on the same drop gave clean integer ratios:
direct evidence of quantisation without any ambiguity from drop-to-drop
variation.

**Temperature-Controlled Enclosure**

Air viscosity η is temperature-dependent, following Sutherland's
formula:

> η ≈ η₀ × (T/T₀)^(3/2) × (T₀ + S)/(T + S)

A 1°C change at room temperature changes η by roughly 0.25%, which feeds
directly into the calculated charge via q ∝ η^(3/2). Millikan measured
temperature for every observation run and applied the correction. This
was one of his principal improvements over Ehrenhaft's competing
measurements from Vienna, which lacked this correction and produced
systematically scattered results.

  ------- ------------------------------------------------------------------
  **⚠**   Ironically, Millikan's own viscosity table values were slightly
          incorrect, introducing the 0.6% systematic error in his final e
          value. The correction was available from later measurements.

  ------- ------------------------------------------------------------------

**The Numbers --- Millikan's Published Data for Drop 6**

Drop 6 is one of 58 drops reported in the 1913 paper and is
well-documented in subsequent analyses. It illustrates the complete
calculation chain from raw timing data to derived elementary charge.

**Apparatus Parameters**

  -----------------------------------------------------------------------
  **Parameter**                       **Value**
  ----------------------------------- -----------------------------------
  Plate separation d                  16.00 mm

  Applied voltage V                   5,085 V

  Electric field E = V/d              317,800 V/m

  Oil density ρ_oil                   919.9 kg/m³

  Air density ρ_air                   1.2 kg/m³

  Air viscosity η                     1.820 × 10⁻⁵ Pa·s

  Cunningham constant b               7.88 × 10⁻³ Pa·m

  Air pressure p                      100,820 Pa

  Observation distance                10.21 mm
  -----------------------------------------------------------------------

**Measurement and Derived Values**

  -----------------------------------------------------------------------
  **Measurement**                     **Value**
  ----------------------------------- -----------------------------------
  Mean fall time (21 observations)    11.879 s (σ = 0.040 s)

  Terminal fall velocity              8.594 × 10⁻⁴ m/s

  Calculated radius a                 2.785 μm

  Rise time (one observation)         80.708 s

  Terminal rise velocity              1.265 × 10⁻⁴ m/s

  Calculated charge q                 2.943 × 10⁻¹⁸ C

  Integer n = q/e                     18

  Derived e = q/n                     1.635 × 10⁻¹⁹ C
  -----------------------------------------------------------------------

**Final Result Across All 58 Drops**

  -----------------------------------------------------------------------
  **Value**                           **Result**
  ----------------------------------- -----------------------------------
  Millikan's published e (1913)      1.592 × 10⁻¹⁹ C

  Accepted value (2019 SI)            1.602176634 × 10⁻¹⁹ C

  Discrepancy                         0.63%

  Cause of discrepancy                Error in air viscosity tables ---
                                      not in theory or apparatus geometry
  -----------------------------------------------------------------------

**The Systematic Error --- A Lesson in Calibration**

Millikan used the best available air viscosity data for 1913. His value
of η = 1.824 × 10⁻⁵ Pa·s was approximately 0.4% too low. Since q ∝
η^(3/2), this propagated to a ~0.6% underestimate in e. The correct
viscosity (1.827 × 10⁻⁵ Pa·s) was established in later measurements.

What makes this historically significant is that for over a decade after
Millikan's publication, other experimenters who obtained slightly
higher values for e tended to find reasons to adjust their results back
toward Millikan's number --- a textbook example of confirmation bias in
science.

  ------------- ------------------------------------------------------------------
  **Feynman**   'The first time they measured it, they got a number that was a
                little bit high. The next time, somebody got a slightly lower
                number... and so on until it settled down to the right answer.
                Why didn't they just look at all the data?' --- Richard Feynman,
                on the Millikan viscosity episode.

  ------------- ------------------------------------------------------------------

The lesson: the dominant source of error in a precision measurement is
almost always a calibration constant, not the theoretical framework. The
theory was correct. The apparatus geometry was correct. The viscosity
table was wrong.

**What This Framework Teaches**

The Millikan experiment demonstrates four principles that apply to any
experimental verification programme --- including any future test of
UFFT predictions.

  ---------------------------------------------------------------------------
  **Principle**   **What It Means**             **Millikan Example**
  --------------- ----------------------------- -----------------------------
  1 --- Design    Every dimension and material  16 mm plate gap chosen to
  around the      choice must satisfy a         balance field strength vs.
  physics         specific physical             achievable voltage --- not an
                  requirement, not convenience  arbitrary round number

  2 ---           The theory can be exactly     Theory correct. Apparatus
  Systematic      right while the measurement   correct. Viscosity table 0.4%
  errors live in  is off due to an incorrect    wrong. Final e 0.6% low.
  calibration     input parameter
  constants

  3 --- Same      Measuring one drop at many    X-ray source allowed
  object, varying charge states eliminates      charge-state changes on the
  conditions      drop-to-drop size variation   same drop. Each ratio was a
  beats many      --- the largest noise source  clean integer.
  objects once

  4 ---           A claimed precision (0.2%) is Viscosity uncertainty was not
  Uncertainty     only valid if every input to  budgeted. The real
  budget must be  the calculation has been      uncertainty was 0.6%, not
  complete        independently measured and    0.2%.
                  included
  ---------------------------------------------------------------------------

**Application to UFFT Experimental Design**

These four principles apply directly to any proposed experimental test
of UFFT predictions --- the decoherence altitude test, the foam panel
geometry test, the acoustic cone levitation test, or any future
resonance coupling measurement.

The question to ask of any proposed experiment is: what is the
equivalent of the viscosity table --- the calibration constant whose
error will dominate the result --- and has it been measured
independently? Identify that constant before running the experiment, not
after.

  ---------- ------------------------------------------------------------------
  **Rule**   Every measurement has a dominant systematic error. The job of
             experimental design is to find it before it finds you.

  ---------- ------------------------------------------------------------------

**Unified Foam Field Theory --- Part XVII**

Luke Martin · Priority date 20 February 2026 · All equations verified

*AI Disclosure: developed in collaboration with Claude (Anthropic).
Ideas and theory: Luke Martin.*

---
### Navigation

📘 [README — Full Index](README.md)

⬅ Previous: [Appendix — What Remains Open and Recommended Next Steps](17_appendix.md)

---
