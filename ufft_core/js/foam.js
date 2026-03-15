// Animated foam background for hero section
(function() {
    const canvas = document.getElementById('foam-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const cells = [];
    const count = 60;
    
    for (let i = 0; i < count; i++) {
        cells.push({
            x: Math.random() * 2000,
            y: Math.random() * 1200,
            r: 20 + Math.random() * 40,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            phase: Math.random() * Math.PI * 2,
            sides: Math.random() > 0.4 ? 6 : 4 // hex or square faces
        });
    }

    function drawCell(cell, t) {
        const sides = cell.sides;
        const r = cell.r + Math.sin(t * 0.001 + cell.phase) * 3;
        const alpha = 0.06 + Math.sin(t * 0.0008 + cell.phase) * 0.03;
        
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
            const px = cell.x + Math.cos(angle) * r;
            const py = cell.y + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(61,139,253,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    function drawConnections(t) {
        for (let i = 0; i < cells.length; i++) {
            for (let j = i + 1; j < cells.length; j++) {
                const dx = cells[i].x - cells[j].x;
                const dy = cells[i].y - cells[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 120) {
                    const alpha = (1 - dist / 120) * 0.04;
                    ctx.beginPath();
                    ctx.moveTo(cells[i].x, cells[i].y);
                    ctx.lineTo(cells[j].x, cells[j].y);
                    ctx.strokeStyle = `rgba(232,184,75,${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate(t) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        cells.forEach(cell => {
            cell.x += cell.vx;
            cell.y += cell.vy;
            if (cell.x < -50) cell.x = canvas.width + 50;
            if (cell.x > canvas.width + 50) cell.x = -50;
            if (cell.y < -50) cell.y = canvas.height + 50;
            if (cell.y > canvas.height + 50) cell.y = -50;
        });

        drawConnections(t);
        cells.forEach(cell => drawCell(cell, t));
        
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
})();
