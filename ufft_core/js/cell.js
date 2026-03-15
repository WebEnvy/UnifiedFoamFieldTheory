// 3D truncated octahedron wireframe renderer
(function() {
    const canvas = document.getElementById('cell-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Truncated octahedron vertices: all permutations of (0, ±1, ±2)
    const verts = [];
    const perms = [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
    perms.forEach(p => {
        [1,-1].forEach(s1 => {
            [1,-1].forEach(s2 => {
                const v = [0,0,0];
                v[p[0]] = 0;
                v[p[1]] = s1;
                v[p[2]] = s2 * 2;
                const key = v.join(',');
                if (!verts.some(u => u.join(',') === key)) verts.push(v);
            });
        });
    });

    // Find edges (distance sqrt(2))
    const edges = [];
    for (let i = 0; i < verts.length; i++) {
        for (let j = i+1; j < verts.length; j++) {
            const d = Math.sqrt(
                (verts[i][0]-verts[j][0])**2 +
                (verts[i][1]-verts[j][1])**2 +
                (verts[i][2]-verts[j][2])**2
            );
            if (Math.abs(d - Math.sqrt(2)) < 0.01) edges.push([i,j]);
        }
    }

    // Identify face types by normal
    const sqNormals = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
    const hexNormals = [];
    [1,-1].forEach(a => [1,-1].forEach(b => [1,-1].forEach(c => {
        hexNormals.push([a/Math.sqrt(3), b/Math.sqrt(3), c/Math.sqrt(3)]);
    })));

    function project(v, angleX, angleY) {
        let [x,y,z] = v;
        // Rotate Y
        const cy = Math.cos(angleY), sy = Math.sin(angleY);
        const x1 = x*cy + z*sy, z1 = -x*sy + z*cy;
        // Rotate X
        const cx = Math.cos(angleX), sx = Math.sin(angleX);
        const y1 = y*cx - z1*sx, z2 = y*sx + z1*cx;
        
        const scale = 80;
        const fov = 6;
        const f = fov / (fov + z2/scale);
        return [300 + x1*scale*f, 200 + y1*scale*f, z2];
    }

    let angleX = 0.4, angleY = 0;
    let mouseDown = false, lastMX = 0, lastMY = 0;

    canvas.addEventListener('mousedown', e => { mouseDown = true; lastMX = e.clientX; lastMY = e.clientY; });
    canvas.addEventListener('mousemove', e => {
        if (!mouseDown) return;
        angleY += (e.clientX - lastMX) * 0.008;
        angleX += (e.clientY - lastMY) * 0.008;
        lastMX = e.clientX; lastMY = e.clientY;
    });
    canvas.addEventListener('mouseup', () => mouseDown = false);
    canvas.addEventListener('mouseleave', () => mouseDown = false);

    function draw() {
        if (!mouseDown) angleY += 0.005;

        ctx.clearRect(0, 0, 600, 400);

        const projected = verts.map(v => project(v, angleX, angleY));

        // Draw edges
        edges.forEach(([i,j]) => {
            const [x1,y1,z1] = projected[i];
            const [x2,y2,z2] = projected[j];
            const avgZ = (z1+z2)/2;
            const alpha = 0.2 + 0.3 * (1 + avgZ/200);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(61,139,253,${Math.max(0.05, Math.min(0.8, alpha))})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
        });

        // Draw vertices
        projected.forEach(([x,y,z]) => {
            const alpha = 0.3 + 0.5 * (1 + z/200);
            const r = 2 + (1 + z/200);
            ctx.beginPath();
            ctx.arc(x, y, Math.max(1, r), 0, Math.PI*2);
            ctx.fillStyle = `rgba(232,184,75,${Math.max(0.1, Math.min(1, alpha))})`;
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }
    draw();
})();
