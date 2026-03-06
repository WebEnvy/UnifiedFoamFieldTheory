// UFFT Cosmology - Dark Energy Visualization
(function() {
    const canvas = document.getElementById('cosmology-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let time = 0;
    
    function draw() {
        ctx.fillStyle = '#0a0e14';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        
        // Draw expanding universe circles
        const baseRadius = 80;
        const expansion = Math.sin(time * 0.02) * 20;
        
        // Outer universe boundary
        ctx.strokeStyle = 'rgba(46, 116, 181, 0.3)';
        ctx.lineWidth = 2;
        for (let i = 3; i >= 0; i--) {
            const r = baseRadius + 40 * i + expansion * (i + 1) / 4;
            const alpha = 0.15 + i * 0.05;
            ctx.strokeStyle = `rgba(46, 116, 181, ${alpha})`;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Planck scale indicator at center
        const planckPulse = 5 + Math.sin(time * 0.1) * 2;
        ctx.fillStyle = '#D4A84B';
        ctx.beginPath();
        ctx.arc(cx, cy, planckPulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Labels
        ctx.fillStyle = '#D4A84B';
        ctx.font = '11px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('l_P', cx, cy + 25);
        
        ctx.fillStyle = '#2E74B5';
        ctx.fillText('R_U', cx, cy - baseRadius - 80 - expansion);
        
        // Arrow indicating ratio
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(cx, cy + 15);
        ctx.lineTo(cx, cy - baseRadius - 60);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Formula display
        ctx.fillStyle = '#e0e6ed';
        ctx.font = '14px "Courier New", monospace';
        ctx.textAlign = 'left';
        ctx.fillText('ρ_Λ = ρ₀ × (l_P / R_U)²', 40, 50);
        
        ctx.fillStyle = '#8a9bb0';
        ctx.font = '12px Georgia';
        ctx.fillText('Planck density × geometric ratio²', 40, 75);
        
        // Results
        ctx.fillStyle = '#00C896';
        ctx.font = '13px Georgia';
        ctx.textAlign = 'right';
        ctx.fillText('Predicted: 5.8 × 10⁻¹⁰ J/m³', canvas.width - 40, 50);
        ctx.fillStyle = '#8a9bb0';
        ctx.fillText('Observed: 6.9 × 10⁻¹⁰ J/m³', canvas.width - 40, 75);
        ctx.fillStyle = '#D4A84B';
        ctx.fillText('Agreement: 18% (zero free parameters)', canvas.width - 40, 100);
        
        // Bottom note
        ctx.fillStyle = '#8a9bb0';
        ctx.font = '11px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('The "cosmological constant problem" dissolves: ρ_Λ is not fine-tuned, it is geometrically determined', cx, canvas.height - 20);
        
        time++;
        requestAnimationFrame(draw);
    }
    
    draw();
})();
