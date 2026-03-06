import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  {
    id: "axiom",
    title: "The One Rule",
    subtitle: "Everything starts here",
  },
  {
    id: "foam",
    title: "The Foam",
    subtitle: "Space isn't empty",
  },
  {
    id: "gravity",
    title: "Gravity",
    subtitle: "A push, not a pull",
  },
  {
    id: "shape",
    title: "The Shape",
    subtitle: "Nature's perfect bubble",
  },
  {
    id: "darkmatter",
    title: "Dark Matter",
    subtitle: "Skin vs filling",
  },
  {
    id: "alpha",
    title: "The Number",
    subtitle: "137 from geometry",
  },
  {
    id: "predictions",
    title: "Prove It",
    subtitle: "5 ways to test this",
  },
];

// ---- ANIMATED CANVAS COMPONENTS ----

function BubbleVoidCanvas({ width = 400, height = 300 }) {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      t += 0.02;

      // Background foam dots
      ctx.fillStyle = "rgba(180, 200, 220, 0.15)";
      for (let i = 0; i < 80; i++) {
        const x = ((i * 37 + Math.sin(t + i * 0.3) * 8) % width + width) % width;
        const y = ((i * 23 + Math.cos(t + i * 0.5) * 6) % height + height) % height;
        ctx.beginPath();
        ctx.arc(x, y, 2 + Math.sin(t + i) * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      const cx = width / 2;
      const cy = height / 2;

      if (!triggered) {
        // Pre-trigger: calm foam
        ctx.fillStyle = "rgba(100, 160, 220, 0.08)";
        for (let i = 0; i < 30; i++) {
          const angle = (i / 30) * Math.PI * 2 + t * 0.3;
          const r = 40 + Math.sin(t * 2 + i) * 5;
          ctx.beginPath();
          ctx.arc(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // "Tap to displace" hint
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.font = "14px Georgia";
        ctx.textAlign = "center";
        ctx.fillText("tap to displace", cx, height - 20);
      } else {
        // Post-trigger: B + V = D animation
        const progress = Math.min((t - frameRef.current) * 1.5, 1);
        const spread = progress * 80;

        // Bubble (blue, goes left)
        const bx = cx - spread;
        const bSize = 18 + Math.sin(t * 3) * 2;
        const grad1 = ctx.createRadialGradient(bx, cy, 0, bx, cy, bSize);
        grad1.addColorStop(0, "rgba(80, 160, 255, 0.9)");
        grad1.addColorStop(1, "rgba(80, 160, 255, 0.1)");
        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.arc(bx, cy, bSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px Georgia";
        ctx.textAlign = "center";
        ctx.fillText("B", bx, cy + 7);

        // Void (dark, goes right)
        const vx = cx + spread;
        const vSize = 18 + Math.sin(t * 3 + 1) * 2;
        const grad2 = ctx.createRadialGradient(vx, cy, 0, vx, cy, vSize);
        grad2.addColorStop(0, "rgba(20, 20, 40, 0.9)");
        grad2.addColorStop(1, "rgba(20, 20, 40, 0.1)");
        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.arc(vx, cy, vSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#aaa";
        ctx.font = "bold 20px Georgia";
        ctx.fillText("V", vx, cy + 7);

        // D label in center
        if (progress > 0.3) {
          const alpha = Math.min((progress - 0.3) * 2, 1);
          ctx.fillStyle = `rgba(255, 200, 100, ${alpha})`;
          ctx.font = "bold 24px Georgia";
          ctx.fillText("D", cx, cy + 8);

          // Connection line
          ctx.strokeStyle = `rgba(255, 200, 100, ${alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(bx + bSize, cy);
          ctx.lineTo(vx - vSize, cy);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Equation
        if (progress > 0.6) {
          const alpha = Math.min((progress - 0.6) * 2.5, 1);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.font = "italic 16px Georgia";
          ctx.fillText("B + V = D", cx, cy + 55);
          ctx.font = "12px Georgia";
          ctx.fillStyle = `rgba(200, 200, 200, ${alpha * 0.7})`;
          ctx.fillText("bubble + void = displacement", cx, cy + 75);
        }

        // Ripple rings
        for (let ring = 0; ring < 3; ring++) {
          const ringProgress = Math.max(0, progress - ring * 0.15);
          if (ringProgress > 0) {
            const r = ringProgress * 120;
            const alpha = Math.max(0, 0.3 - ringProgress * 0.3);
            ctx.strokeStyle = `rgba(255, 200, 100, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Reset after animation completes
        if (progress >= 1 && t - frameRef.current > 3) {
          setTriggered(false);
        }
      }

      animFrame = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animFrame);
  }, [triggered, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onClick={() => {
        if (!triggered) {
          setTriggered(true);
          frameRef.current = 0;
          // Reset t tracking
          const canvas = canvasRef.current;
          if (canvas) frameRef.current = performance.now() / 1000 * 0.02; // approximate
        }
      }}
      style={{ cursor: triggered ? "default" : "pointer", borderRadius: 12, display: "block", margin: "0 auto" }}
    />
  );
}

function FoamCanvas({ width = 400, height = 260 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;

    const cells = [];
    for (let i = 0; i < 60; i++) {
      cells.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 12 + Math.random() * 14,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.7,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      t += 0.015;

      // Draw foam cells
      cells.forEach((c, i) => {
        const pulse = Math.sin(t * c.speed + c.phase) * 2;
        const r = c.r + pulse;
        const brightness = 140 + Math.sin(t + c.phase) * 30;

        // Cell body
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, r);
        grad.addColorStop(0, `rgba(${brightness}, ${brightness + 40}, ${brightness + 80}, 0.15)`);
        grad.addColorStop(0.7, `rgba(${brightness}, ${brightness + 40}, ${brightness + 80}, 0.06)`);
        grad.addColorStop(1, `rgba(${brightness}, ${brightness + 40}, ${brightness + 80}, 0.01)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Cell wall
        ctx.strokeStyle = `rgba(180, 210, 240, ${0.15 + Math.sin(t * 0.5 + i) * 0.05})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx.stroke();

        // Draw connections to nearby cells
        cells.forEach((c2, j) => {
          if (j <= i) return;
          const dx = c.x - c2.x;
          const dy = c.y - c2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < c.r + c2.r + 8) {
            ctx.strokeStyle = `rgba(180, 210, 240, ${0.08})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(c.x, c.y);
            ctx.lineTo(c2.x, c2.y);
            ctx.stroke();
          }
        });
      });

      // Labels
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "12px Georgia";
      ctx.textAlign = "center";
      ctx.fillText("every bubble is one Planck length across", width / 2, height - 12);

      animFrame = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ borderRadius: 12, display: "block", margin: "0 auto" }} />;
}

function TruncatedOctahedronCanvas({ width = 360, height = 300 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;

    // Truncated octahedron vertices (simplified 2D projection with rotation)
    function project(x, y, z, angle) {
      const ca = Math.cos(angle);
      const sa = Math.sin(angle);
      const cb = Math.cos(angle * 0.7);
      const sb = Math.sin(angle * 0.7);
      // Rotate around Y then X
      const x1 = x * ca - z * sa;
      const z1 = x * sa + z * ca;
      const y1 = y * cb - z1 * sb;
      const z2 = y * sb + z1 * cb;
      const scale = 80 / (3 + z2 * 0.3);
      return { px: width / 2 + x1 * scale, py: height / 2 + y1 * scale, depth: z2 };
    }

    // TO vertices (approximate)
    const verts = [
      [0, 1, 2], [0, 2, 1], [0, 1, -2], [0, 2, -1], [0, -1, 2], [0, -2, 1],
      [0, -1, -2], [0, -2, -1], [1, 0, 2], [2, 0, 1], [1, 0, -2], [2, 0, -1],
      [-1, 0, 2], [-2, 0, 1], [-1, 0, -2], [-2, 0, -1], [1, 2, 0], [2, 1, 0],
      [1, -2, 0], [2, -1, 0], [-1, 2, 0], [-2, 1, 0], [-1, -2, 0], [-2, -1, 0],
    ];

    // Edges (connect vertices within distance ~sqrt(2))
    const edges = [];
    for (let i = 0; i < verts.length; i++) {
      for (let j = i + 1; j < verts.length; j++) {
        const dx = verts[i][0] - verts[j][0];
        const dy = verts[i][1] - verts[j][1];
        const dz = verts[i][2] - verts[j][2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < 1.5 && d > 0.9) edges.push([i, j]);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      t += 0.008;

      const angle = t;
      const projected = verts.map(v => project(v[0], v[1], v[2], angle));

      // Draw edges
      edges.forEach(([i, j]) => {
        const a = projected[i];
        const b = projected[j];
        const avgDepth = (a.depth + b.depth) / 2;
        const alpha = 0.15 + (avgDepth + 2) * 0.08;
        ctx.strokeStyle = `rgba(140, 200, 255, ${Math.max(0.05, Math.min(alpha, 0.5))})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.stroke();
      });

      // Draw vertices
      projected.forEach((p, i) => {
        const alpha = 0.3 + (p.depth + 2) * 0.12;
        const size = 2 + (p.depth + 2) * 0.4;
        ctx.fillStyle = `rgba(180, 220, 255, ${Math.max(0.1, Math.min(alpha, 0.9))})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Labels
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = "bold 14px Georgia";
      ctx.textAlign = "center";
      ctx.fillText("truncated octahedron", width / 2, height - 35);
      ctx.font = "11px Georgia";
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.fillText("14 faces · 24 vertices · 36 edges · 48 symmetries", width / 2, height - 16);

      animFrame = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ borderRadius: 12, display: "block", margin: "0 auto" }} />;
}

// ---- SECTION CONTENT ----

function SectionAxiom() {
  return (
    <div>
      <p style={{ fontSize: 18, lineHeight: 1.8, color: "#c8d8e8", marginBottom: 24 }}>
        Imagine you push your finger into a mattress. The spot where your finger goes <em>in</em> creates a dip — and the foam around it bulges <em>up</em>. You can't make the dip without the bulge. They're born together.
      </p>
      <BubbleVoidCanvas width={380} height={260} />
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 20 }}>
        That's the entire theory in one sentence. Every time something moves in the universe, it creates a <strong style={{ color: "#5aadff" }}>bubble</strong> (where it went) and a <strong style={{ color: "#8890a0" }}>void</strong> (where it left). Always paired. Always balanced. Always together.
      </p>
      <div style={{ background: "rgba(255, 200, 100, 0.06)", border: "1px solid rgba(255, 200, 100, 0.15)", borderRadius: 10, padding: "16px 20px", marginTop: 20 }}>
        <p style={{ color: "#ffc864", fontSize: 15, margin: 0, fontStyle: "italic" }}>
          "B + V = D — Bubble plus Void equals Displacement. That's it. One rule. Everything else — gravity, light, atoms, dark matter, the number 137 — comes from this."
        </p>
      </div>
    </div>
  );
}

function SectionFoam() {
  return (
    <div>
      <p style={{ fontSize: 18, lineHeight: 1.8, color: "#c8d8e8", marginBottom: 20 }}>
        Space isn't empty. It's full of bubbles — packed together like a bath foam that fills the entire universe. Each bubble is unimaginably small: one Planck length, which is about 0.000000000000000000000000000000000016 metres.
      </p>
      <FoamCanvas width={380} height={240} />
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 20 }}>
        This foam is under incredible pressure — 10¹¹³ Pascals. That's a 1 followed by 113 zeros. The entire ocean presses down at about 10⁸ Pascals. This foam pressure is a hundred thousand billion billion billion billion billion billion billion billion billion billion billion billion times stronger.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 12 }}>
        Everything you've ever seen — every atom, every star, every thought — is a pattern in this foam. Like how a wave isn't a separate thing from the ocean. <strong style={{ color: "#88ccff" }}>You</strong> are a pattern in the foam.
      </p>
    </div>
  );
}

function SectionGravity() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;
    const W = 380, H = 200;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.02;

      const cx = W / 2, cy = H / 2;

      // Draw density gradient
      for (let x = 0; x < W; x += 6) {
        for (let y = 0; y < H; y += 6) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const density = Math.max(0.02, 1 - 1 / (1 + dist * 0.008));
          const pulse = Math.sin(t + dist * 0.03) * 0.02;
          ctx.fillStyle = `rgba(100, 170, 240, ${(density + pulse) * 0.15})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Mass at center
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 25);
      grad.addColorStop(0, "rgba(255, 180, 80, 0.9)");
      grad.addColorStop(1, "rgba(255, 100, 40, 0.2)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 20 + Math.sin(t * 2) * 1, 0, Math.PI * 2);
      ctx.fill();

      // Arrows showing push
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
        const r = 70 + Math.sin(t * 2 + angle * 3) * 5;
        const ax = cx + Math.cos(angle) * r;
        const ay = cy + Math.sin(angle) * r;
        const tipx = cx + Math.cos(angle) * (r - 20);
        const tipy = cy + Math.sin(angle) * (r - 20);

        ctx.strokeStyle = "rgba(255, 200, 100, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(tipx, tipy);
        ctx.stroke();

        // Arrowhead
        const headLen = 6;
        const ha = Math.atan2(tipy - ay, tipx - ax);
        ctx.beginPath();
        ctx.moveTo(tipx, tipy);
        ctx.lineTo(tipx - headLen * Math.cos(ha - 0.4), tipy - headLen * Math.sin(ha - 0.4));
        ctx.moveTo(tipx, tipy);
        ctx.lineTo(tipx - headLen * Math.cos(ha + 0.4), tipy - headLen * Math.sin(ha + 0.4));
        ctx.stroke();
      }

      // Labels
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "11px Georgia";
      ctx.textAlign = "left";
      ctx.fillText("dense foam", 10, 20);
      ctx.fillText("(high pressure)", 10, 34);
      ctx.textAlign = "center";
      ctx.fillText("less foam", cx, cy + 45);
      ctx.fillText("(low pressure near mass)", cx, cy + 58);

      animFrame = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div>
      <p style={{ fontSize: 18, lineHeight: 1.8, color: "#c8d8e8", marginBottom: 20 }}>
        Newton said gravity <em>pulls</em>. But in the foam? <strong style={{ color: "#ffcc66" }}>Gravity pushes.</strong>
      </p>
      <canvas ref={canvasRef} width={380} height={200} style={{ borderRadius: 12, display: "block", margin: "0 auto" }} />
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 20 }}>
        A massive object — a planet, a star — displaces foam. Like a bowling ball on a trampoline. There's less foam near the object. More foam far away. The denser foam <em>pushes toward</em> the thinner region. That push is gravity.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0" }}>
        You don't fall toward the Earth because the Earth pulls you. You get <em>pushed</em> toward the Earth by the denser foam behind you. Same equation. Same numbers. Different picture.
      </p>
    </div>
  );
}

function SectionShape() {
  return (
    <div>
      <p style={{ fontSize: 18, lineHeight: 1.8, color: "#c8d8e8", marginBottom: 20 }}>
        If you blow identical bubbles and pack them together as tightly as possible, what shape do they make? Lord Kelvin solved this in 1887. The answer is a 14-sided shape called the <strong style={{ color: "#88ccff" }}>truncated octahedron</strong>.
      </p>
      <TruncatedOctahedronCanvas width={360} height={280} />
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 20 }}>
        This shape is <em>everything</em> in the theory. It has exactly <strong style={{ color: "#88ccff" }}>48 symmetries</strong> — 48 ways you can rotate and reflect it and it looks the same. That number 48 is the key that unlocks gravity, dark matter, and the fine structure constant.
      </p>
      <div style={{ background: "rgba(100, 180, 255, 0.06)", border: "1px solid rgba(100, 180, 255, 0.15)", borderRadius: 10, padding: "16px 20px", marginTop: 16 }}>
        <p style={{ color: "#88ccff", fontSize: 14, margin: 0 }}>
          Terrence Howard talked about the Flower of Life — circles packed together. This is the 3D version. When you pack bubbles in three dimensions as tightly as possible, this shape is what you get. It's not a choice. It's mathematics.
        </p>
      </div>
    </div>
  );
}

function SectionDarkMatter() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let t = 0;
    const W = 380, H = 220;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.015;

      // Left side: volume (baryonic matter)
      const lx = W * 0.28, ly = H / 2;
      const r = 50;

      // Filled interior
      const grad1 = ctx.createRadialGradient(lx, ly, 0, lx, ly, r);
      grad1.addColorStop(0, "rgba(80, 160, 255, 0.3)");
      grad1.addColorStop(0.8, "rgba(80, 160, 255, 0.08)");
      grad1.addColorStop(1, "rgba(80, 160, 255, 0.02)");
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(lx, ly, r + Math.sin(t) * 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.font = "bold 13px Georgia";
      ctx.textAlign = "center";
      ctx.fillText("VOLUME", lx, ly - 6);
      ctx.font = "11px Georgia";
      ctx.fillStyle = "#8ab8e0";
      ctx.fillText("(the filling)", lx, ly + 10);
      ctx.fillText("= regular matter", lx, ly + 24);

      // Right side: surface (dark matter)
      const rx = W * 0.72, ry = H / 2;

      // Only the shell
      ctx.strokeStyle = "rgba(200, 140, 255, 0.5)";
      ctx.lineWidth = 6 + Math.sin(t * 2) * 1;
      ctx.beginPath();
      ctx.arc(rx, ry, r + Math.sin(t) * 2, 0, Math.PI * 2);
      ctx.stroke();

      // Hollow interior
      ctx.fillStyle = "rgba(10, 10, 30, 0.3)";
      ctx.beginPath();
      ctx.arc(rx, ry, r - 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.font = "bold 13px Georgia";
      ctx.fillText("SURFACE", rx, ry - 6);
      ctx.font = "11px Georgia";
      ctx.fillStyle = "#c8a0e8";
      ctx.fillText("(the skin)", rx, ry + 10);
      ctx.fillText("= dark matter", rx, ry + 24);

      // Ratio at bottom
      const alpha = 0.5 + Math.sin(t) * 0.15;
      ctx.fillStyle = `rgba(255, 220, 150, ${alpha})`;
      ctx.font = "bold 14px Georgia";
      ctx.fillText("surface ÷ volume = 5.315", W / 2, H - 28);
      ctx.font = "12px Georgia";
      ctx.fillStyle = `rgba(255, 220, 150, ${alpha * 0.7})`;
      ctx.fillText("observed: 5.364 — off by 0.92%", W / 2, H - 10);

      animFrame = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div>
      <p style={{ fontSize: 18, lineHeight: 1.8, color: "#c8d8e8", marginBottom: 20 }}>
        Every bubble has two types of energy: the stuff inside (volume), and the skin holding it together (surface). These are different things. And here's the kicker — <strong style={{ color: "#c8a0e8" }}>only the inside can interact with light</strong>. The skin is invisible.
      </p>
      <canvas ref={canvasRef} width={380} height={220} style={{ borderRadius: 12, display: "block", margin: "0 auto" }} />
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 20 }}>
        <strong style={{ color: "#5aadff" }}>Volume energy</strong> = regular matter. It makes stars, atoms, you and me.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0" }}>
        <strong style={{ color: "#c8a0e8" }}>Surface energy</strong> = dark matter. It has gravity but it's invisible. It can't glow, can't be touched, can't interact with anything except through gravity. Exactly what astronomers observe.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0" }}>
        The ratio of skin to filling in the truncated octahedron is <strong style={{ color: "#ffcc66" }}>5.315</strong>. Astronomers measure the dark matter ratio at <strong style={{ color: "#ffcc66" }}>5.364</strong>. That's off by less than 1%. From pure geometry. No adjustable numbers. Nothing tuned to fit. Just the shape of a bubble.
      </p>
    </div>
  );
}

function SectionAlpha() {
  return (
    <div>
      <p style={{ fontSize: 18, lineHeight: 1.8, color: "#c8d8e8", marginBottom: 20 }}>
        The number <strong style={{ color: "#ffcc66" }}>137</strong> haunted physicists for a century. It measures how strongly light interacts with matter. Feynman called it "one of the greatest damn mysteries in all of physics." Nobody could explain where it comes from.
      </p>
      <div style={{
        background: "rgba(255, 200, 100, 0.04)",
        border: "1px solid rgba(255, 200, 100, 0.12)",
        borderRadius: 12,
        padding: "24px 20px",
        textAlign: "center",
        margin: "20px 0",
      }}>
        <p style={{ color: "#a0b8d0", fontSize: 13, margin: "0 0 12px 0" }}>THE FORMULA</p>
        <p style={{ color: "#ffcc66", fontSize: 22, fontFamily: "Georgia", margin: "0 0 4px 0", fontWeight: "bold" }}>
          α⁻¹ = 8π<sup>5/2</sup> × (47/48 + 10/331,776)
        </p>
        <p style={{ color: "#ffc864", fontSize: 28, fontFamily: "Georgia", margin: "12px 0 4px", fontWeight: "bold" }}>
          = 137.035995
        </p>
        <p style={{ color: "#a0b8d0", fontSize: 13, margin: "4px 0 0" }}>measured: 137.035999 — matches to 8 digits</p>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 16 }}>
        Every number in that formula comes from the bubble shape:
      </p>
      <div style={{ paddingLeft: 12, borderLeft: "2px solid rgba(255, 200, 100, 0.2)", marginLeft: 8, marginTop: 12 }}>
        <p style={{ color: "#c8d8e8", fontSize: 15, lineHeight: 1.8 }}>
          <strong style={{ color: "#ffcc66" }}>8π<sup>5/2</sup></strong> — the three phases (bubble, void, displacement) each going around a full circle. Three circles = (2π)³. Divided by the probability of connecting back: √π.
        </p>
        <p style={{ color: "#c8d8e8", fontSize: 15, lineHeight: 1.8 }}>
          <strong style={{ color: "#ffcc66" }}>47/48</strong> — the bubble has 48 symmetries. But one of them is "do nothing" — staying exactly where you started. That's not a real displacement. So 47 out of 48 actually count.
        </p>
        <p style={{ color: "#c8d8e8", fontSize: 15, lineHeight: 1.8 }}>
          <strong style={{ color: "#ffcc66" }}>10/331,776</strong> — the tiny correction from the shape's boundary. 24 corners reflect energy back. 14 faces let it through. 24 − 14 = 10. The bottom number is 3 × 48³ — three dimensions times the cube of the symmetry number.
        </p>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.8, color: "#a0b8d0", marginTop: 16 }}>
        No guessing. No fitting to data. Just the geometry of the most efficient bubble in the universe.
      </p>
    </div>
  );
}

function SectionPredictions() {
  const predictions = [
    { num: 1, name: "Gravity slows decoherence", desc: "Quantum computers in orbit should stay coherent longer than on Earth, by a specific factor the theory predicts.", cost: "Lab access", color: "#5aadff" },
    { num: 2, name: "Same effect for every qubit type", desc: "Ion traps, superconductors, photons — all should show the same gravitational effect. That's the sharpest test.", cost: "Lab access", color: "#88ccff" },
    { num: 3, name: "Layer-count scaling", desc: "Stack aluminium foil and wool, measure the temperature. Does it scale linearly (coherent foam) or as √N (incoherent)?", cost: "Under $200", color: "#c8a0e8" },
    { num: 4, name: "Three-particle cascade", desc: "A specific quantum correlation pattern in three entangled particles that standard theory doesn't predict.", cost: "Lab access", color: "#ffc864" },
    { num: 5, name: "Speed-of-light variation", desc: "Light should travel very slightly differently at extreme energies. The deviation is tiny but specific.", cost: "Existing data", color: "#ff8888" },
  ];

  return (
    <div>
      <p style={{ fontSize: 18, lineHeight: 1.8, color: "#c8d8e8", marginBottom: 24 }}>
        A theory that can't be proven wrong isn't science. Here are five ways to test this — one of them costs less than dinner for two.
      </p>
      {predictions.map((p) => (
        <div key={p.num} style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${p.color}22`,
          borderLeft: `3px solid ${p.color}`,
          borderRadius: 8,
          padding: "14px 16px",
          marginBottom: 12,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <span style={{ color: p.color, fontWeight: "bold", fontSize: 14 }}>#{p.num} — {p.name}</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 20 }}>{p.cost}</span>
          </div>
          <p style={{ color: "#a0b8d0", fontSize: 13, margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
        </div>
      ))}
      <div style={{ background: "rgba(255, 200, 100, 0.06)", border: "1px solid rgba(255, 200, 100, 0.15)", borderRadius: 10, padding: "16px 20px", marginTop: 20 }}>
        <p style={{ color: "#ffc864", fontSize: 15, margin: 0, fontStyle: "italic" }}>
          "If any of these experiments come back wrong, the theory is dead. That's how you know it's real science."
        </p>
      </div>
    </div>
  );
}

const SECTION_COMPONENTS = {
  axiom: SectionAxiom,
  foam: SectionFoam,
  gravity: SectionGravity,
  shape: SectionShape,
  darkmatter: SectionDarkMatter,
  alpha: SectionAlpha,
  predictions: SectionPredictions,
};

// ---- MAIN APP ----

export default function UFTExplainer() {
  const [activeSection, setActiveSection] = useState(0);
  const ActiveContent = SECTION_COMPONENTS[SECTIONS[activeSection].id];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0e1a 0%, #0d1525 50%, #0a0e1a 100%)",
      color: "#e0e8f0",
      fontFamily: "Georgia, 'Times New Roman', serif",
      padding: 0,
      margin: 0,
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "32px 20px 0" }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: "normal",
          color: "#fff",
          margin: 0,
          letterSpacing: 2,
        }}>
          THE UNIFIED FOAM FIELD THEORY
        </h1>
        <p style={{ color: "rgba(255, 200, 100, 0.7)", fontSize: 13, marginTop: 6, letterSpacing: 3 }}>
          EXPLAINED FOR EVERYONE
        </p>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 4 }}>
          by Luke Martin · 2026
        </p>
      </div>

      {/* Navigation dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "20px 0 12px", flexWrap: "wrap", maxWidth: 420, margin: "0 auto" }}>
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(i)}
            style={{
              background: i === activeSection ? "rgba(255, 200, 100, 0.2)" : "rgba(255,255,255,0.05)",
              border: i === activeSection ? "1px solid rgba(255, 200, 100, 0.4)" : "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "6px 14px",
              color: i === activeSection ? "#ffc864" : "rgba(255,255,255,0.45)",
              fontSize: 11,
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "Georgia",
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Section header */}
      <div style={{ textAlign: "center", padding: "12px 20px 0" }}>
        <h2 style={{ fontSize: 24, color: "#fff", margin: 0, fontWeight: "normal" }}>
          {SECTIONS[activeSection].title}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4 }}>
          {SECTIONS[activeSection].subtitle}
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 420, margin: "16px auto 0", padding: "0 20px 24px" }}>
        <ActiveContent />
      </div>

      {/* Nav arrows */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, padding: "8px 0 32px" }}>
        <button
          onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
          disabled={activeSection === 0}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            padding: "8px 20px",
            color: activeSection === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.6)",
            cursor: activeSection === 0 ? "default" : "pointer",
            fontFamily: "Georgia",
            fontSize: 13,
          }}
        >
          ← previous
        </button>
        <button
          onClick={() => setActiveSection(Math.min(SECTIONS.length - 1, activeSection + 1))}
          disabled={activeSection === SECTIONS.length - 1}
          style={{
            background: activeSection === SECTIONS.length - 1 ? "rgba(255,255,255,0.05)" : "rgba(255, 200, 100, 0.1)",
            border: activeSection === SECTIONS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255, 200, 100, 0.2)",
            borderRadius: 8,
            padding: "8px 20px",
            color: activeSection === SECTIONS.length - 1 ? "rgba(255,255,255,0.15)" : "#ffc864",
            cursor: activeSection === SECTIONS.length - 1 ? "default" : "pointer",
            fontFamily: "Georgia",
            fontSize: 13,
          }}
        >
          next →
        </button>
      </div>
    </div>
  );
}
