// UFFT Propulsion Visualization - Three Cone Geometry
(function() {
    const canvas = document.getElementById('propulsion-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    let time = 0;
    
    function draw() {
        ctx.fillStyle = '#0a0e14';
        ctx.fillRect(0, 0, width, height);
        
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = 120;
        
        // Draw disc outline
        ctx.strokeStyle = '#2E74B5';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + 20, radius * 1.3, radius * 0.4, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw three emitters at 120° separation
        const emitterAngles = [0, 120, 240].map(a => (a + time * 30) * Math.PI / 180);
        
        emitterAngles.forEach((angle, i) => {
            const ex = centerX + Math.cos(angle) * radius * 0.8;
            const ey = centerY + 20 + Math.sin(angle) * radius * 0.25;
            
            // Draw emitter
            ctx.fillStyle = '#00C896';
            ctx.beginPath();
            ctx.arc(ex, ey, 8, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw cone beam
            ctx.strokeStyle = `rgba(212, 168, 75, ${0.3 + 0.2 * Math.sin(time * 5 + i)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(ex, ey);
            ctx.lineTo(centerX, centerY - 60);
            ctx.stroke();
        });
        
        // Draw central null point
        const nullPulse = 10 + 3 * Math.sin(time * 4);
        ctx.fillStyle = `rgba(0, 200, 150, ${0.5 + 0.3 * Math.sin(time * 4)})`;
        ctx.beginPath();
        ctx.arc(centerX, centerY - 60, nullPulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw foam pressure gradient arrows
        const arrowCount = 8;
        for (let i = 0; i < arrowCount; i++) {
            const angle = (i / arrowCount) * Math.PI * 2;
            const startR = 160;
            const endR = 100;
            const ax = centerX + Math.cos(angle) * startR;
            const ay = centerY + Math.sin(angle) * startR * 0.4;
            const bx = centerX + Math.cos(angle) * endR;
            const by = centerY + Math.sin(angle) * endR * 0.4;
            
            ctx.strokeStyle = 'rgba(46, 116, 181, 0.4)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
            
            // Arrow head
            const headAngle = Math.atan2(by - ay, bx - ax);
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.lineTo(bx - 8 * Math.cos(headAngle - 0.4), by - 8 * Math.sin(headAngle - 0.4));
            ctx.moveTo(bx, by);
            ctx.lineTo(bx - 8 * Math.cos(headAngle + 0.4), by - 8 * Math.sin(headAngle + 0.4));
            ctx.stroke();
        }
        
        // Labels
        ctx.fillStyle = '#D4A84B';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Foam Null', centerX, centerY - 80);
        ctx.fillText('(Low Pressure)', centerX, centerY - 68);
        
        ctx.fillStyle = '#7a8a9d';
        ctx.font = '11px Arial';
        ctx.fillText('High Pressure Foam', centerX, centerY + 90);
        ctx.fillText('pushes upward', centerX, centerY + 102);
        
        time += 0.016;
        requestAnimationFrame(draw);
    }
    
    draw();
})();
