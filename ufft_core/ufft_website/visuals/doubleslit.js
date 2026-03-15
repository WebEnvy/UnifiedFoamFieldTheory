// UFFT Double Slit - Wake Mechanism Visualization
(function() {
    const canvas = document.getElementById('doubleslit-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let observerOn = false;
    let particles = [];
    let screenHits = new Array(400).fill(0);
    let time = 0;
    
    const barrierX = 250;
    const screenX = 600;
    const centerY = 200;
    const slitSep = 80;
    const slitWidth = 20;
    
    window.toggleObserver = function() {
        observerOn = !observerOn;
    };
    
    window.clearScreen = function() {
        screenHits = new Array(400).fill(0);
        particles = [];
    };
    
    function spawnParticle() {
        const slit1Y = centerY - slitSep / 2;
        const slit2Y = centerY + slitSep / 2;
        const targetSlit = Math.random() < 0.5 ? slit1Y : slit2Y;
        const startY = centerY + (Math.random() - 0.5) * slitSep;
        const dx = barrierX - 40;
        const dy = targetSlit - startY;
        const speed = 2.5;
        const travelTime = dx / speed;
        
        particles.push({
            x: 40,
            y: startY,
            vx: speed,
            vy: dy / travelTime,
            passedBarrier: false,
            whichSlit: null,
            wake: []
        });
    }
    
    function calculateInterference(y) {
        const slit1Y = centerY - slitSep / 2;
        const slit2Y = centerY + slitSep / 2;
        const wavelength = 30;
        
        const d1 = Math.sqrt(Math.pow(screenX - barrierX, 2) + Math.pow(y - slit1Y, 2));
        const d2 = Math.sqrt(Math.pow(screenX - barrierX, 2) + Math.pow(y - slit2Y, 2));
        const pathDiff = d2 - d1;
        const phase = (pathDiff / wavelength) * 2 * Math.PI;
        return Math.pow(Math.cos(phase / 2), 2);
    }
    
    function update() {
        if (Math.random() < 0.05) spawnParticle();
        
        particles = particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < barrierX - 10) {
                p.wake.push({ x: p.x, y: p.y, age: 0, type: 'pre' });
            }
            
            if (!p.passedBarrier && p.x >= barrierX - 5) {
                p.passedBarrier = true;
                const slit1Y = centerY - slitSep / 2;
                const slit2Y = centerY + slitSep / 2;
                const dist1 = Math.abs(p.y - slit1Y);
                const dist2 = Math.abs(p.y - slit2Y);
                
                if (dist1 < slitWidth) {
                    p.whichSlit = 1;
                    p.y = slit1Y;
                } else if (dist2 < slitWidth) {
                    p.whichSlit = 2;
                    p.y = slit2Y;
                } else {
                    return false;
                }
                p.vy = 0;
            }
            
            if (p.passedBarrier && p.x < screenX) {
                p.wake.push({ x: p.x, y: p.y, age: 0, type: 'post' });
                
                if (!observerOn) {
                    const intensity = calculateInterference(p.y);
                    const intensityUp = calculateInterference(p.y - 3);
                    const intensityDown = calculateInterference(p.y + 3);
                    if (intensityUp > intensity) p.vy -= 0.12;
                    if (intensityDown > intensity) p.vy += 0.12;
                    p.vy *= 0.92;
                    p.y += p.vy;
                    p.y = Math.max(50, Math.min(350, p.y));
                } else {
                    p.vy += (Math.random() - 0.5) * 0.05;
                    p.vy *= 0.98;
                    p.y += p.vy;
                }
            }
            
            if (p.x >= screenX) {
                const screenY = Math.floor(p.y);
                if (screenY >= 0 && screenY < 400) screenHits[screenY]++;
                return false;
            }
            
            p.wake.forEach(w => w.age++);
            p.wake = p.wake.filter(w => w.age < 40);
            return true;
        });
        
        time++;
    }
    
    function draw() {
        ctx.fillStyle = '#0a0e14';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Interference pattern guide
        if (!observerOn) {
            for (let y = 0; y < 400; y++) {
                const intensity = calculateInterference(y);
                ctx.fillStyle = `rgba(46, 116, 181, ${intensity * 0.08})`;
                ctx.fillRect(barrierX + 10, y, screenX - barrierX - 20, 1);
            }
        }
        
        // Barrier
        ctx.fillStyle = '#2E74B5';
        ctx.fillRect(barrierX - 4, 0, 8, centerY - slitSep / 2 - slitWidth);
        ctx.fillRect(barrierX - 4, centerY - slitSep / 2 + slitWidth, 8, slitSep - 2 * slitWidth);
        ctx.fillRect(barrierX - 4, centerY + slitSep / 2 + slitWidth, 8, 400 - centerY - slitSep / 2 - slitWidth);
        
        // Slit glow
        ctx.fillStyle = 'rgba(0, 200, 150, 0.2)';
        ctx.fillRect(barrierX - 2, centerY - slitSep / 2 - slitWidth, 4, slitWidth * 2);
        ctx.fillRect(barrierX - 2, centerY + slitSep / 2 - slitWidth, 4, slitWidth * 2);
        
        // Observer
        if (observerOn) {
            ctx.fillStyle = '#E85454';
            ctx.font = '12px Georgia';
            ctx.fillText('👁 OBSERVING', barrierX - 35, 25);
        }
        
        // Screen
        ctx.fillStyle = '#1a2230';
        ctx.fillRect(screenX, 0, 10, 400);
        
        // Screen hits
        const maxHits = Math.max(...screenHits, 1);
        for (let y = 0; y < 400; y++) {
            const intensity = screenHits[y] / maxHits;
            ctx.fillStyle = `rgba(0, 200, 150, ${intensity})`;
            ctx.fillRect(screenX + 15, y, 60 * intensity + 2, 1);
        }
        
        // Particles and wakes
        particles.forEach(p => {
            const slit1Y = centerY - slitSep / 2;
            const slit2Y = centerY + slitSep / 2;
            
            // Pre-barrier wake
            p.wake.forEach(w => {
                if (w.type === 'pre') {
                    const alpha = 1 - w.age / 40;
                    ctx.fillStyle = `rgba(46, 116, 181, ${alpha * 0.3})`;
                    ctx.beginPath();
                    ctx.arc(w.x, w.y, 2 + w.age * 0.08, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
            
            // Post-barrier wake circles from BOTH slits
            if (p.passedBarrier && !observerOn) {
                const timeSinceBarrier = (p.x - barrierX) / p.vx;
                const wakeRadius = timeSinceBarrier * 2.5;
                
                if (wakeRadius > 0 && wakeRadius < 250) {
                    const alpha = Math.max(0, 0.12 - wakeRadius / 2000);
                    ctx.strokeStyle = `rgba(46, 116, 181, ${alpha})`;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(barrierX, slit1Y, wakeRadius, -Math.PI/2, Math.PI/2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(barrierX, slit2Y, wakeRadius, -Math.PI/2, Math.PI/2);
                    ctx.stroke();
                }
            }
            
            // Post wake trail
            p.wake.forEach(w => {
                if (w.type === 'post') {
                    const alpha = 1 - w.age / 40;
                    ctx.fillStyle = `rgba(0, 200, 150, ${alpha * 0.25})`;
                    ctx.beginPath();
                    ctx.arc(w.x, w.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
            
            // Particle
            ctx.fillStyle = '#00C896';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.stroke();
        });
        
        // Stats
        const totalHits = screenHits.reduce((a, b) => a + b, 0);
        ctx.fillStyle = '#8a9bb0';
        ctx.font = '12px Georgia';
        ctx.textAlign = 'left';
        ctx.fillText(`Particles: ${totalHits}`, 20, 25);
        ctx.fillText(`Mode: ${observerOn ? 'Observed (no interference)' : 'Unobserved (interference)'}`, 20, 45);
        
        update();
        requestAnimationFrame(draw);
    }
    
    draw();
})();
