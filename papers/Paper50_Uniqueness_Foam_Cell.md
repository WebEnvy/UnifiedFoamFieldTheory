# UFFT Paper #50 — The Uniqueness of the Foam Cell

**Unified Foam Field Theory**

| Field | Value |
|-------|-------|
| Author | Luke Martin |
| Affiliation | Independent Researcher |
| Location | Newcastle, New South Wales, Australia |
| Email | luke@webenvy.com.au |
| ORCID | 0009-0006-3716-5951 |
| Date | April 2026 |
| Series | Unified Foam Field Theory |
| Paper | #50 of 63 |
| Framework | v10 |
| Status | Complete |
| Tier | 1 |
| DOI | 10.5281/zenodo.19447996 |
| GitHub | https://github.com/WebEnvy/UnifiedFoamFieldTheory |

**Keywords:** face Laplacian, truncated octahedron, Fedorov parallelohedra, space-filling polyhedra, spectral graph theory, uniqueness

## Abstract

We compute the face adjacency Laplacian for all five Fedorov parallelohedra — the complete list of convex polyhedra that tile three-dimensional Euclidean space by translation. The truncated octahedron is the unique member whose face Laplacian has (a) a prime discriminant (Δ = 17), (b) irrational eigenvalue products equal to Δ−1 (r₁r₂ = 16), and (c) eigenvalue sum equal to a perfect square (r₁+r₂ = 9 = 3²). It is also the only member with two distinct types of regular faces. This exhaustive computation requires no physical assumptions — it is a theorem of combinatorial geometry.

**Keywords:** face Laplacian, truncated octahedron, Fedorov parallelohedra, space-filling polyhedra, spectral graph theory, uniqueness

---

## 1. Background

The Unified Foam Field Theory (UFFT) derives the Standard Model of particle physics from the face adjacency Laplacian of the truncated octahedron. A natural objection: why this polyhedron? Could a different space-filling shape produce the same or similar physics?

This paper answers the question exhaustively.

## 2. The Fedorov Classification

Fedorov (1885) proved that there are exactly five combinatorial types of convex polyhedra that tile R³ by translation alone (parallelohedra):

1. **Cube** (parallelepiped): F = 6, all square faces
2. **Hexagonal prism**: F = 8, two hexagonal + six rectangular faces
3. **Rhombic dodecahedron**: F = 12, all rhombic faces
4. **Elongated dodecahedron**: F = 12, eight rhombic + four rectangular faces
5. **Truncated octahedron**: F = 14, six square + eight hexagonal faces

No other convex polyhedra tile R³ monohedrally by translation. This list is complete.

## 3. Face Adjacency Laplacians

For each polyhedron, we construct the face adjacency graph G = (V_F, E_F) where vertices represent faces and edges connect faces sharing an edge. The face Laplacian is L = D − A where D is the degree matrix and A the adjacency matrix.

### 3.1 Cube (F = 6)

Each face is adjacent to four others (all except its opposite). The face graph is the octahedron graph.

Spectrum: **{0¹, 4³, 6²}**

All eigenvalues are integers. No quadratic structure. Discriminant: 0.

### 3.2 Hexagonal prism (F = 8)

Two hexagonal end-caps, each adjacent to all six rectangular sides. Each rectangular side adjacent to two hexagons and two neighbouring rectangles (degree 4). Hexagons have degree 6.

Spectrum: **{0¹, 3², 5², 6², 8¹}**

All eigenvalues are integers. No quadratic structure. Discriminant: 0.

### 3.3 Rhombic dodecahedron (F = 12)

Twelve rhombic faces, each adjacent to four others. The face adjacency graph is the cuboctahedral graph (regular, degree 4).

Spectrum: **{0¹, 2³, 4³, 6⁵}**

All eigenvalues are integers. No quadratic structure. Discriminant: 0.

### 3.4 Elongated dodecahedron (F = 12)

Eight rhombic faces and four rectangular faces. Rectangles have degree 6; rhombi have degree 4.

Spectrum: **{0¹, 2¹, ((10−√20)/2)², 4², 6³, ((10+√20)/2)², 8¹}**

This polyhedron DOES have irrational eigenvalues from the quadratic λ²−10λ+20 = 0.

- Discriminant: Δ = 100 − 80 = **20**
- 20 = 4 × 5. **Not prime.** ✗
- Product: r₁r₂ = 20. Is 20 = Δ−1 = 19? **No.** ✗
- Sum: r₁+r₂ = 10. Is 10 a perfect square? **No.** ✗

All three conditions fail.

### 3.5 Truncated octahedron (F = 14)

Six square faces (degree 4) and eight hexagonal faces (degree 6). Face adjacency: 24 square-hexagon edges + 12 hexagon-hexagon edges = 36 edges total.

Spectrum: **{0¹, ((9−√17)/2)³, 4², ((9+√17)/2)³, 7⁴, 9¹}**

Quadratic: λ²−9λ+16 = 0.

- Discriminant: Δ = 81 − 64 = **17**
- 17 is **prime**. ✓
- Product: r₁r₂ = **16** = 17 − 1 = Δ − 1. ✓
- Sum: r₁+r₂ = **9** = 3² (perfect square). ✓

All three conditions hold. **Unique among all five Fedorov parallelohedra.**

## 4. Summary

| Polyhedron | F | Δ | Prime? | r₁r₂ = Δ−1? | Sum = □? | Regular faces? |
|-----------|---|---|--------|-------------|----------|----------------|
| Cube | 6 | 0 | ✗ | — | — | 1 type |
| Hex. prism | 8 | 0 | ✗ | — | — | mixed |
| Rhombic dodec. | 12 | 0 | ✗ | — | — | 1 type |
| Elongated dodec. | 12 | 20 | ✗ | ✗ | ✗ | mixed |
| **Trunc. octahedron** | **14** | **17** | **✓** | **✓** | **✓** | **2 types (sq+hex)** |

## 5. Theorem

**The truncated octahedron is the unique convex parallelohedron in R³ whose face adjacency Laplacian has:**
1. **A prime discriminant**
2. **Irrational eigenvalue product equal to Δ−1**
3. **Irrational eigenvalue sum equal to a perfect square**

**It is also the unique convex parallelohedron with exactly two types of regular faces.**

The proof is exhaustive: all five cases checked. □

## 6. Implications

If the fundamental structure of spacetime is a foam of space-filling cells, and if the physics of the Standard Model derives from the face Laplacian of that cell, then the cell geometry is not a choice — it is the only possibility. The truncated octahedron is forced by the requirement that the face spectrum generate a prime discriminant, integer coupling products, and a colour number that is a perfect square root.

No alternative exists.

---

## References

[1] Fedorov, E. S. (1885). Nachala Ucheniya o Figurakh. [The beginnings of the study of figures.]
[2] Martin, L. (2026). The Laplacian Spectrum of the Truncated Octahedron. Zenodo. DOI: 10.5281/zenodo.19030062.
[3] Kelvin, Lord (1887). On the division of space with minimum partitional area. Phil. Mag. 24, 503.

---

## AI Disclosure

This paper was developed in collaboration with Claude (Anthropic). The exhaustive computation of all five face Laplacians was performed by Claude. Ideas, direction, and framework: Luke Martin.

---

*UFFT Core Framework: github.com/WebEnvy/UnifiedFoamFieldTheory*

*Unified Foam Field Theory · Paper #50 · DOI: 10.5281/zenodo.19447996 · Priority Date: 20 February 2026*

*B + V = D*
