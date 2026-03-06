// UFFT Decoherence Comparison Visualization
(function() {
    const canvas = document.getElementById('decoherence-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const select = document.getElementById('planet-select');
    
    const G = 6.674e-11;
    const c = 3e8;
    const M_earth = 5.972e24;
    const M_sun = 1.989e30;
    
    const planets = {
        earth: { M: M_earth, R: 6.371e6, name: 'Earth', maxAlt: 1000e3 },
        jupiter: { M: 318 * M_earth, R: 6.99e7, name: 'Jupiter', maxAlt: 5000e3 },
        sun: { M: M_sun, R: 6.96e8, name: 'Sun', maxAlt: 1e9 },
        neutron: { M: 1.4 * M_sun, R: 10e3, name: 'Neutron Star', maxAlt: 100e3 }
    };
    
    function draw() {
        const planet = planets[select.value];
        const { M, R, name, maxAlt } = planet;
        
        const width = canvas.width;
        const height = canvas.height;
        const padding = 60;
        const chartWidth = width - 2 * padding;
        const chartHeight = height - 2 * padding;
        
        ctx.fillStyle = '#0a0e14';
        ctx.fillRect(0, 0, width, height);
        
        // Calculate range
        const step = maxAlt / 100;
        let minDev = 0, maxDev = 0;
        
        for (let alt = 0; alt <= maxAlt; alt += step) {
            const r = R + alt;
            const phi = G * M / (r * c * c);
            const ufftDev = (1 / (1 - 2 * phi) - 1) * 1e10;
            const dpDev = (1 / (1 + phi) - 1) * 1e10;
            minDev = Math.min(minDev, ufftDev, dpDev);
            maxDev = Math.max(maxDev, ufftDev, dpDev);
        }
        
        const range = maxDev - minDev;
        minDev -= range * 0.1;
        maxDev += range * 0.1;
        
        // Grid
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding + (chartHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }
        
        // Axes
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();
        
        // Zero line
        if (0 >= minDev && 0 <= maxDev) {
            const zeroY = padding + ((maxDev - 0) / (maxDev - minDev)) * chartHeight;
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(padding, zeroY);
            ctx.lineTo(width - padding, zeroY);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        
        // UFFT curve (green)
        ctx.strokeStyle = '#00C896';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let alt = 0; alt <= maxAlt; alt += step) {
            const r = R + alt;
            const phi = G * M / (r * c * c);
            const val = (1 / (1 - 2 * phi) - 1) * 1e10;
            const x = padding + (alt / maxAlt) * chartWidth;
            const y = padding + ((maxDev - val) / (maxDev - minDev)) * chartHeight;
            if (alt === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // DP curve (red)
        ctx.strokeStyle = '#E85454';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let alt = 0; alt <= maxAlt; alt += step) {
            const r = R + alt;
            const phi = G * M / (r * c * c);
            const val = (1 / (1 + phi) - 1) * 1e10;
            const x = padding + (alt / maxAlt) * chartWidth;
            const y = padding + ((maxDev - val) / (maxDev - minDev)) * chartHeight;
            if (alt === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#8a9bb0';
        ctx.font = '12px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('Altitude', width / 2, height - 15);
        
        ctx.save();
        ctx.translate(18, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Deviation from baseline (×10⁻¹⁰)', 0, 0);
        ctx.restore();
        
        // Legend
        ctx.fillStyle = '#00C896';
        ctx.fillRect(width - 140, 25, 20, 3);
        ctx.fillStyle = '#e0e6ed';
        ctx.textAlign = 'left';
        ctx.fillText('UFFT', width - 115, 30);
        
        ctx.fillStyle = '#E85454';
        ctx.fillRect(width - 140, 45, 20, 3);
        ctx.fillStyle = '#e0e6ed';
        ctx.fillText('Diosi-Penrose', width - 115, 50);
        
        // Planet name
        ctx.fillStyle = '#D4A84B';
        ctx.font = 'bold 14px Georgia';
        ctx.fillText(name, padding + 10, padding + 20);
    }
    
    if (select) {
        select.addEventListener('change', draw);
    }
    draw();
})();
