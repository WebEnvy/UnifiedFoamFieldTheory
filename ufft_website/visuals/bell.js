// UFFT Bell Correlations - Void Pair Visualization
(function() {
    const canvas = document.getElementById('bell-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let time = 0;
    
    function draw() {
        ctx.fillStyle = '#0a0e14';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        
        // Separation oscillates
        const separation = 150 + Math.sin(time * 0.02) * 80;
        
        // Draw connection (the topological link)
        const gradient = ctx.createLinearGradient(cx - separation, cy, cx + separation, cy);
        gradient.addColorStop(0, 'rgba(0, 200, 150, 0.6)');
        gradient.addColorStop(0.5, 'rgba(212, 168, 75, 0.4)');
        gradient.addColorStop(1, 'rgba(232, 84, 84, 0.6)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 4]);
        ctx.beginPath();
        ctx.moveTo(cx - separation, cy);
        ctx.lineTo(cx + separation, cy);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Bubble (B)
        const bPulse = 1 + Math.sin(time * 0.05) * 0.1;
        ctx.fillStyle = 'rgba(0, 200, 150, 0.3)';
        ctx.beginPath();
        ctx.arc(cx + separation, cy, 35 * bPulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#00C896';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.fillStyle = '#00C896';
        ctx.font = 'bold 24px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('B', cx + separation, cy + 8);
        
        // Void (V)
        const vPulse = 1 + Math.sin(time * 0.05 + Math.PI) * 0.1;
        ctx.fillStyle = 'rgba(232, 84, 84, 0.3)';
        ctx.beginPath();
        ctx.arc(cx - separation, cy, 35 * vPulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#E85454';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.fillStyle = '#E85454';
        ctx.fillText('V', cx - separation, cy + 8);
        
        // D label in middle
        ctx.fillStyle = '#D4A84B';
        ctx.font = 'bold 20px Georgia';
        ctx.fillText('D', cx, cy - 30);
        
        // Labels
        ctx.fillStyle = '#8a9bb0';
        ctx.font = '13px Georgia';
        ctx.fillText('Particle', cx + separation, cy + 60);
        ctx.fillText('Anti-particle', cx - separation, cy + 60);
        
        // Equation
        ctx.fillStyle = '#D4A84B';
        ctx.font = '16px "Courier New", monospace';
        ctx.fillText('B + V = D', cx, canvas.height - 30);
        
        // Info text
        ctx.fillStyle = '#8a9bb0';
        ctx.font = '11px Georgia';
        ctx.textAlign = 'left';
        ctx.fillText('Distance between B and V: ' + Math.round(separation * 2) + ' (arbitrary units)', 20, 25);
        ctx.fillText('Topological connection: preserved', 20, 45);
        
        time++;
        requestAnimationFrame(draw);
    }
    
    draw();
})();
