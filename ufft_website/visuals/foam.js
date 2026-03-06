// UFFT Foam Visualization - Three.js Truncated Octahedron
(function() {
    const canvas = document.getElementById('foam-canvas');
    if (!canvas) return;
    
    // Load Three.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = initVisualization;
    document.head.appendChild(script);
    
    function initVisualization() {
        const width = canvas.width;
        const height = canvas.height;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        camera.position.z = 5;
        
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x0a0e14, 1);
        
        // Create truncated octahedron
        const geometry = createTruncatedOctahedron(1.2);
        
        // Main mesh with transparent fill
        const material = new THREE.MeshPhongMaterial({
            color: 0x2E74B5,
            transparent: true,
            opacity: 0.35,
            side: THREE.DoubleSide
        });
        const cell = new THREE.Mesh(geometry, material);
        scene.add(cell);
        
        // Wireframe edges
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x00C896,
            linewidth: 2
        });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        cell.add(wireframe);
        
        // Vertex spheres
        const vertexPositions = getVertexPositions(1.2 * 0.4);
        vertexPositions.forEach(pos => {
            const sphereGeom = new THREE.SphereGeometry(0.06, 16, 16);
            const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00C896 });
            const sphere = new THREE.Mesh(sphereGeom, sphereMat);
            sphere.position.set(pos[0], pos[1], pos[2]);
            cell.add(sphere);
        });
        
        // Lighting
        const light1 = new THREE.DirectionalLight(0xffffff, 0.7);
        light1.position.set(5, 5, 5);
        scene.add(light1);
        
        const light2 = new THREE.DirectionalLight(0x2E74B5, 0.4);
        light2.position.set(-5, -5, 5);
        scene.add(light2);
        
        scene.add(new THREE.AmbientLight(0x404040));
        
        function animate() {
            requestAnimationFrame(animate);
            cell.rotation.y += 0.004;
            cell.rotation.x += 0.002;
            renderer.render(scene, camera);
        }
        
        animate();
    }
    
    function getVertexPositions(s) {
        return [
            [ 0,  1,  2], [ 0,  1, -2], [ 0, -1,  2], [ 0, -1, -2],
            [ 0,  2,  1], [ 0,  2, -1], [ 0, -2,  1], [ 0, -2, -1],
            [ 1,  0,  2], [ 1,  0, -2], [-1,  0,  2], [-1,  0, -2],
            [ 2,  0,  1], [ 2,  0, -1], [-2,  0,  1], [-2,  0, -1],
            [ 1,  2,  0], [ 1, -2,  0], [-1,  2,  0], [-1, -2,  0],
            [ 2,  1,  0], [ 2, -1,  0], [-2,  1,  0], [-2, -1,  0]
        ].map(v => [v[0]*s, v[1]*s, v[2]*s]);
    }
    
    function createTruncatedOctahedron(size) {
        const s = size * 0.4;
        
        const V = [
            [ 0,  1,  2], [ 0,  1, -2], [ 0, -1,  2], [ 0, -1, -2],
            [ 0,  2,  1], [ 0,  2, -1], [ 0, -2,  1], [ 0, -2, -1],
            [ 1,  0,  2], [ 1,  0, -2], [-1,  0,  2], [-1,  0, -2],
            [ 2,  0,  1], [ 2,  0, -1], [-2,  0,  1], [-2,  0, -1],
            [ 1,  2,  0], [ 1, -2,  0], [-1,  2,  0], [-1, -2,  0],
            [ 2,  1,  0], [ 2, -1,  0], [-2,  1,  0], [-2, -1,  0]
        ];
        
        const positions = [];
        V.forEach(v => positions.push(v[0]*s, v[1]*s, v[2]*s));
        
        // 6 square faces
        const squares = [
            [12, 20, 13, 21],
            [14, 23, 15, 22],
            [4, 16, 5, 18],
            [6, 19, 7, 17],
            [0, 8, 2, 10],
            [1, 11, 3, 9]
        ];
        
        // 8 hexagonal faces
        const hexagons = [
            [0, 4, 16, 20, 12, 8],
            [1, 9, 13, 20, 16, 5],
            [2, 8, 12, 21, 17, 6],
            [3, 7, 17, 21, 13, 9],
            [0, 10, 14, 22, 18, 4],
            [1, 5, 18, 22, 15, 11],
            [2, 6, 19, 23, 14, 10],
            [3, 11, 15, 23, 19, 7]
        ];
        
        const indices = [];
        
        squares.forEach(sq => {
            indices.push(sq[0], sq[1], sq[2]);
            indices.push(sq[0], sq[2], sq[3]);
        });
        
        hexagons.forEach(hex => {
            for (let i = 1; i < 5; i++) {
                indices.push(hex[0], hex[i], hex[i+1]);
            }
        });
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();
        
        return geometry;
    }
})();
