// UFFT Correspondence Principle Visualization
(function() {
    const canvas = document.getElementById('correspondence-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 50;
    
    function draw() {
        ctx.fillStyle = '#0a0e14';
        ctx.fillRect(0, 0, width, height);
        
        const chartWidth = width - 2 * padding;
        const chartHeight = height - 2 * padding;
        
        // Axes
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();
        
        // Three regime zones
        // Linear (green)
        const gradient1 = ctx.createLinearGradient(padding, 0, padding + chartWidth * 0.4, 0);
        gradient1.addColorStop(0, 'rgba(0, 200, 150, 0.15)');
        gradient1.addColorStop(1, 'rgba(0, 200, 150, 0.05)');
        ctx.fillStyle = gradient1;
        ctx.fillRect(padding, padding, chartWidth * 0.4, chartHeight);
        
        // Transitional (yellow)
        const gradient2 = ctx.createLinearGradient(padding + chartWidth * 0.4, 0, padding + chartWidth * 0.75, 0);
        gradient2.addColorStop(0, 'rgba(212, 168, 75, 0.1)');
        gradient2.addColorStop(1, 'rgba(212, 168, 75, 0.15)');
        ctx.fillStyle = gradient2;
        ctx.fillRect(padding + chartWidth * 0.4, padding, chartWidth * 0.35, chartHeight);
        
        // Non-linear (red)
        const gradient3 = ctx.createLinearGradient(padding + chartWidth * 0.75, 0, width - padding, 0);
        gradient3.addColorStop(0, 'rgba(232, 84, 84, 0.1)');
        gradient3.addColorStop(1, 'rgba(232, 84, 84, 0.2)');
        ctx.fillStyle = gradient3;
        ctx.fillRect(padding + chartWidth * 0.75, padding, chartWidth * 0.25, chartHeight);
        
        // Curve showing deviation from linear
        ctx.strokeStyle = '#2E74B5';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            const x = padding + (i / 100) * chartWidth;
            // Exponential growth showing departure from linearity
            const linearY = height - padding - (i / 100) * chartHeight * 0.8;
            const nonlinear = Math.pow(i / 100, 3) * chartHeight * 0.3;
            const y = linearY + nonlinear;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Linear reference line
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(width - padding, padding + chartHeight * 0.2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Zone labels
        ctx.font = 'bold 13px Georgia';
        ctx.textAlign = 'center';
        
        ctx.fillStyle = '#00C896';
        ctx.fillText('LINEAR', padding + chartWidth * 0.2, padding + 25);
        ctx.font = '11px Georgia';
        ctx.fillStyle = '#8a9bb0';
        ctx.fillText('ε → 0', padding + chartWidth * 0.2, padding + 45);
        
        ctx.font = 'bold 13px Georgia';
        ctx.fillStyle = '#D4A84B';
        ctx.fillText('TRANSITIONAL', padding + chartWidth * 0.575, padding + 25);
        ctx.font = '11px Georgia';
        ctx.fillStyle = '#8a9bb0';
        ctx.fillText('ε ~ O(1)', padding + chartWidth * 0.575, padding + 45);
        
        ctx.font = 'bold 13px Georgia';
        ctx.fillStyle = '#E85454';
        ctx.fillText('NON-LINEAR', padding + chartWidth * 0.875, padding + 25);
        ctx.font = '11px Georgia';
        ctx.fillStyle = '#8a9bb0';
        ctx.fillText('ε >> 1', padding + chartWidth * 0.875, padding + 45);
        
        // Axis labels
        ctx.fillStyle = '#8a9bb0';
        ctx.font = '12px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('Energy Scale / Planck Energy', width / 2, height - 12);
        
        ctx.save();
        ctx.translate(15, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Deviation from Linear Prediction', 0, 0);
        ctx.restore();
        
        // Legend
        ctx.textAlign = 'left';
        ctx.fillStyle = '#2E74B5';
        ctx.fillRect(width - 150, height - 55, 15, 3);
        ctx.fillStyle = '#e0e6ed';
        ctx.font = '11px Georgia';
        ctx.fillText('UFFT', width - 130, height - 50);
        
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(width - 150, height - 35);
        ctx.lineTo(width - 135, height - 35);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#8a9bb0';
        ctx.fillText('Linear approx', width - 130, height - 30);
    }
    
    draw();
})();
