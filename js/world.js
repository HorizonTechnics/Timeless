// Explanation: Planet data with complete statistics and descriptions
const planetsData = [
    {
        name: "Sun", size: 8, color: 0xfdb813, emissive: 0xff6600,
        distance: 0, orbitSpeed: 0, rotationSpeed: 0.001, moons: [],
        desc: "The star at the center of our solar system, providing light and heat to all planets.",
        stats: { 
            diameter: "1,392,684 km", 
            mass: "333,000 * Earth", 
            temp: "5,800 K (surface)", 
            age: "4.6 Billion Years" 
        }
    },
    {
        name: "Mercury", size: 0.8, color: 0x8c7853, emissive: 0x2a1c18,
        distance: 15, orbitSpeed: 0.04, rotationSpeed: 0.002, moons: [],
        desc: "The smallest planet and closest to the Sun, with extreme temperature variations.",
        stats: { 
            diameter: "4,879 km", 
            distance: "57.9M km", 
            distanceE: "77M km (from Earth)", 
            day: "176 days", 
            moons: "0", 
            mass: "0.330 * 10²⁴ kg", 
            temp: "167°C (avg)" 
        }
    },
    {
        name: "Venus", size: 1.5, color: 0xe8cda2, emissive: 0x4a3520,
        distance: 22, orbitSpeed: 0.015, rotationSpeed: -0.001, moons: [],
        desc: "The hottest planet with a thick toxic atmosphere and surface temperatures of 462°C.",
        stats: { 
            diameter: "12,104 km", 
            distance: "108.2M km", 
            distanceE: "40-42M km (from Earth)", 
            day: "243 days", 
            moons: "0", 
            temp: "464°C (avg)", 
            mass: "4.868 * 10²⁴ kg" 
        }
    },
    {
        name: "Earth", size: 1.6, color: 0x2b5f8f, emissive: 0x0a1f3f,
        distance: 30, orbitSpeed: 0.01, rotationSpeed: 0.01,
        moons: [{name: "Moon", size: 0.4, distance: 3, orbitSpeed: 0.02, color: 0xaaaaaa}],
        desc: "Our home planet, the only known world with liquid water and life.",
        stats: { 
            diameter: "12,742 km", 
            distance: "149.6M km", 
            day: "24 hours", 
            moons: "1", 
            mass: "5.972 * 10²⁴ kg", 
            temp: "15°C (avg)" 
        }
    },
    {
        name: "Mars", size: 1.2, color: 0xe27b58, emissive: 0x3a1510,
        distance: 40, orbitSpeed: 0.008, rotationSpeed: 0.009,
        moons: [
            {name: "Phobos", size: 0.2, distance: 2, orbitSpeed: 0.03, color: 0x6b6b6b},
            {name: "Deimos", size: 0.15, distance: 2.8, orbitSpeed: 0.02, color: 0x8b8b8b}
        ],
        desc: "The red planet with the largest volcano and canyon in the solar system.",
        stats: { 
            diameter: "6,779 km", 
            distance: "227.9M km", 
            distanceE: "225M km (from Earth)", 
            day: "24.6 hours", 
            moons: "2", 
            mass: "6.417 * 10²³ kg", 
            temp: "-63°C (avg)" 
        }
    },
    {
        name: "Jupiter", size: 4, color: 0xc88b3a, emissive: 0x3a2510,
        distance: 60, orbitSpeed: 0.004, rotationSpeed: 0.015,
        moons: [
            {name: "Io", size: 0.45, distance: 6, orbitSpeed: 0.025, color: 0xffeb3b},
            {name: "Europa", size: 0.4, distance: 7.5, orbitSpeed: 0.02, color: 0xd4e7f5},
            {name: "Ganymede", size: 0.5, distance: 9, orbitSpeed: 0.015, color: 0x9e9e9e},
            {name: "Callisto", size: 0.45, distance: 10.5, orbitSpeed: 0.012, color: 0x7d5a3a}
        ],
        desc: "The largest planet in our solar system, a gas giant with the Great Red Spot.",
        stats: { 
            diameter: "139,820 km", 
            distance: "778.5M km", 
            distanceE: "628M km (from Earth)", 
            day: "10 hours", 
            moons: "95 known", 
            mass: "318 * Earth", 
            temp: "-110°C (avg)" 
        }
    },
    {
        name: "Saturn", size: 3.5, color: 0xfad5a5, emissive: 0x3a2815,
        distance: 85, orbitSpeed: 0.003, rotationSpeed: 0.013, hasRings: true,
        moons: [
            {name: "Titan", size: 0.5, distance: 7, orbitSpeed: 0.01, color: 0xffa726},
            {name: "Rhea", size: 0.25, distance: 5.5, orbitSpeed: 0.015, color: 0xbdbdbd},
            {name: "Iapetus", size: 0.22, distance: 9, orbitSpeed: 0.008, color: 0x757575}
        ],
        desc: "Known for its spectacular ring system, the second largest gas giant.",
        stats: { 
            diameter: "116,460 km", 
            distance: "1.43B km", 
            distanceE: "1.4B km (from Earth)", 
            day: "10.7 hours", 
            moons: "146 known", 
            mass: "95 * Earth", 
            temp: "-140°C (avg)" 
        }
    },
    {
        name: "Uranus", size: 2.5, color: 0x4fd0e7, emissive: 0x1a3f4f,
        distance: 110, orbitSpeed: 0.002, rotationSpeed: 0.008,
        moons: [
            {name: "Titania", size: 0.3, distance: 5, orbitSpeed: 0.012, color: 0x9e9e9e},
            {name: "Oberon", size: 0.28, distance: 6.5, orbitSpeed: 0.01, color: 0x8d6e63}
        ],
        desc: "An ice giant that rotates on its side, with faint rings and 27 known moons.",
        stats: { 
            diameter: "50,724 km", 
            distance: "2.87B km", 
            distanceE: "2.9B km (from Earth)", 
            day: "17.2 hours", 
            moons: "27 known", 
            mass: "14.5 * Earth", 
            temp: "-195°C (avg)" 
        }
    },
    {
        name: "Neptune", size: 2.4, color: 0x4166f5, emissive: 0x1a2055,
        distance: 135, orbitSpeed: 0.001, rotationSpeed: 0.007,
        moons: [{name: "Triton", size: 0.35, distance: 5, orbitSpeed: 0.015, color: 0xe1f5fe}],
        desc: "The windiest planet with speeds up to 2,100 km/h and a deep blue color from methane.",
        stats: { 
            diameter: "49,244 km", 
            distance: "4.5B km", 
            distanceE: "4.3B km (from Earth)", 
            day: "16 hours", 
            moons: "14 known", 
            mass: "17 * Earth", 
            temp: "-200°C (avg)" 
        }
    }
];

// Explanation: Global variables for Three.js scene and interaction
let scene, camera, renderer, raycaster, mouse;
let planetObjects = [];
let isRotating = true;
let isDragging = false;
let showOrbits = true;
let selectedPlanet = null;
let previousMousePosition = {x: 0, y: 0};
let cameraAngle = {horizontal: 0, vertical: 0.5};
let cameraDistance = 20;
// Explanation: Speed multiplier for orbital rotation (1x, 2x, 4x, 6x)
let speedMultiplier = 1;

// Explanation: Initialize Three.js scene and setup
function init() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 180, 300);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    createStars();
    createLights();
    createSolarSystem();
    createPlanetButtons();

    // Explanation: Event listeners for user interaction
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('click', onClick);
    renderer.domElement.addEventListener('wheel', onWheel);
    
    window.addEventListener('resize', onResize);
    
    animate();
}

// Explanation: Create starfield background
function createStars() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    
    for(let i = 0; i < 10000; i++) {
        vertices.push(
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000
        );
        const brightness = Math.random();
        colors.push(brightness, brightness, brightness);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true
    });
    
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);
}

// Explanation: Create realistic lighting from the Sun
function createLights() {
    // Dim ambient light for space atmosphere
    const ambient = new THREE.AmbientLight(0x111111, 0.3);
    scene.add(ambient);

    // Bright point light from Sun with realistic falloff
    const sunLight = new THREE.PointLight(0xffffff, 3, 800);
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;
    scene.add(sunLight);
}

// Explanation: Create all planets, moons, and orbital paths
function createSolarSystem() {
    planetsData.forEach((planetData) => {
        // Create orbit ring for planets (not for Sun)
        if(planetData.distance > 0) {
            const orbitGeometry = new THREE.RingGeometry(
                planetData.distance - 0.2,
                planetData.distance + 0.2,
                128
            );
            const orbitMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.15
            });
            const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial);
            orbitMesh.rotation.x = Math.PI / 2;
            scene.add(orbitMesh);
            planetData.orbitMesh = orbitMesh;
        }

        // Create planet sphere with realistic materials
        const geometry = new THREE.SphereGeometry(planetData.size, 64, 64);
        const material = new THREE.MeshPhongMaterial({
            emissive: planetData.emissive,
            emissiveIntensity: planetData.name === 'Sun' ? 1 : 0.05,
            shininess: planetData.name === 'Sun' ? 100 : 30,
            specular: planetData.name === 'Sun' ? 0xffffff : 0x333333
        });

        applyPlanetTexture(geometry, material, planetData.name);

        const planet = new THREE.Mesh(geometry, material);
        planet.castShadow = planetData.name !== 'Sun';
        planet.receiveShadow = planetData.name !== 'Sun';
        
        // Apply realistic axial tilts
        if (planetData.name === 'Earth') planet.rotation.z = 0.41;
        if (planetData.name === 'Mars') planet.rotation.z = 0.44;
        if (planetData.name === 'Saturn') planet.rotation.z = 0.47;
        if (planetData.name === 'Uranus') planet.rotation.z = 1.71;
        if (planetData.name === 'Neptune') planet.rotation.z = 0.49;

        const planetOrbit = new THREE.Group();
        planet.position.x = planetData.distance;
        planetOrbit.add(planet);
        
        // Add special effects for Sun
        if(planetData.name === 'Sun') {
            const coronaGeo = new THREE.SphereGeometry(planetData.size * 1.4, 32, 32);
            const coronaMat = new THREE.MeshBasicMaterial({
                color: 0xff9933,
                transparent: true,
                opacity: 0.2,
                side: THREE.BackSide
            });
            const corona = new THREE.Mesh(coronaGeo, coronaMat);
            planet.add(corona);
            
            const glowGeo = new THREE.SphereGeometry(planetData.size * 1.15, 32, 32);
            const glowMat = new THREE.MeshBasicMaterial({
                color: 0xffdd33,
                transparent: true,
                opacity: 0.4,
                side: THREE.BackSide
            });
            const glow = new THREE.Mesh(glowGeo, glowMat);
            planet.add(glow);
        }
        
        // Add atmospheres to planets
        if(planetData.name !== 'Sun' && planetData.name !== 'Mercury') {
            const atmosGeo = new THREE.SphereGeometry(planetData.size * 1.08, 32, 32);
            const atmosMat = new THREE.MeshBasicMaterial({
                color: planetData.color,
                transparent: true,
                opacity: 0.1,
                side: THREE.BackSide
            });
            const atmos = new THREE.Mesh(atmosGeo, atmosMat);
            planet.add(atmos);
        }

        // Add rings for Saturn
        if(planetData.hasRings) {
            const ringGeo = new THREE.RingGeometry(
                planetData.size * 1.5,
                planetData.size * 2.5,
                128
            );
            const ringMat = new THREE.MeshPhongMaterial({
                color: 0xfad5a5,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.7,
                shininess: 5
            });
            const rings = new THREE.Mesh(ringGeo, ringMat);
            rings.rotation.x = Math.PI / 2;
            rings.rotation.y = Math.PI / 6;
            rings.castShadow = true;
            rings.receiveShadow = true;
            planet.add(rings);
        }

        // Create moons for each planet
        const moonGroups = [];
        planetData.moons.forEach(moonData => {
            const moonGeo = new THREE.SphereGeometry(moonData.size, 32, 32);
            const moonMat = new THREE.MeshPhongMaterial({
                color: moonData.color,
                shininess: 5
            });
            const moon = new THREE.Mesh(moonGeo, moonMat);
            moon.castShadow = true;
            moon.receiveShadow = true;

            const moonOrbit = new THREE.Group();
            moon.position.x = moonData.distance;
            moonOrbit.add(moon);
            
            if (planetData.hasRings) {
                moonOrbit.rotation.x = Math.PI / 8;
            }
            
            planet.add(moonOrbit);
            
            // Moon orbit ring
            const moonOrbitRing = new THREE.RingGeometry(
                moonData.distance - 0.05,
                moonData.distance + 0.05,
                64
            );
            const moonOrbitMat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.1
            });
            const moonOrbitMesh = new THREE.Mesh(moonOrbitRing, moonOrbitMat);
            moonOrbitMesh.rotation.x = Math.PI / 2;
            
            if (planetData.hasRings) {
                moonOrbitMesh.rotation.z = Math.PI / 8;
            }
            
            planet.add(moonOrbitMesh);

            moonGroups.push({
                group: moonOrbit,
                speed: moonData.orbitSpeed
            });
        });

        scene.add(planetOrbit);
        
        planetObjects.push({
            orbit: planetOrbit,
            planet: planet,
            data: planetData,
            moons: moonGroups
        });
    });
}

// Explanation: Apply procedural textures to planets for realistic appearance
function applyPlanetTexture(geometry, material, planetName) {
    const pos = geometry.attributes.position;
    const colors = [];

    for(let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);

        let r, g, b;

        switch(planetName) {
            case 'Sun':
                const sunNoise = Math.sin(x*0.3)*Math.cos(y*0.3)*Math.sin(z*0.3);
                const sunSpots = Math.sin(x*5)*Math.cos(y*5) > 0.8 ? 0.2 : 0;
                r = 0.98 + sunNoise*0.1 - sunSpots;
                g = 0.72 + sunNoise*0.15 - sunSpots*0.5;
                b = 0.08 - sunSpots*0.5;
                break;

            case 'Mercury':
                const crater = Math.sin(x*2)*Math.cos(z*2)*Math.sin(y*1.5);
                const base = 0.55 + crater*0.15;
                r = base*0.95; 
                g = base*0.85; 
                b = base*0.7;
                break;

            case 'Venus':
                const swirl = Math.sin(x*0.5+y*0.8)*Math.cos(z*0.7);
                const vBase = 0.91 + swirl*0.08;
                r = vBase; 
                g = vBase*0.8; 
                b = vBase*0.64;
                break;

            case 'Earth':
                const lat = Math.asin(y/1.6);
                const lon = Math.atan2(z,x);
                const continent = Math.sin(lon*4)*Math.cos(lat*3) + Math.sin(lon*7+1)*Math.cos(lat*5+2)*0.5;
                
                if(continent > 0.2) {
                    r = 0.13; g = 0.4; b = 0.13;
                } else if(continent > 0.15) {
                    r = 0.76; g = 0.7; b = 0.5;
                } else {
                    const depth = -continent*2;
                    r = 0.05+depth*0.1; 
                    g = 0.15+depth*0.2; 
                    b = 0.4+depth*0.3;
                }
                break;

            case 'Mars':
                const terrain = Math.sin(x*0.5)*Math.cos(z*0.5)*Math.sin(y*0.3);
                r = 0.89 + terrain*0.1;
                g = 0.48 + terrain*0.08;
                b = 0.35;
                break;

            case 'Jupiter':
                const jLat = Math.asin(y/4);
                const jLon = Math.atan2(z,x);
                const band = Math.sin(jLat*8)*0.5+0.5;
                const jSwirl = Math.sin(jLon*10+jLat*5)*0.2;
                
                r = 0.78 + band*0.15 + jSwirl;
                g = 0.55 + band*0.2 + jSwirl;
                b = 0.23 + band*0.1;
                break;

            case 'Saturn':
                const sBand = Math.sin(y*0.6)*0.3+0.7;
                r = sBand*0.98; 
                g = sBand*0.84; 
                b = sBand*0.65;
                break;

            case 'Uranus':
                const uVar = Math.sin(y*0.3)*0.15;
                r = 0.31+uVar; 
                g = 0.82+uVar; 
                b = 0.91+uVar;
                break;

            case 'Neptune':
                const storm = Math.sin(x*0.8)*Math.cos(z*0.8);
                const nBase = storm > 0.3 ? 0.5 : 0.25;
                r = nBase*0.5; 
                g = nBase*0.7; 
                b = nBase*1.0;
                break;

            default:
                r = g = b = 0.5;
        }

        colors.push(r, g, b);
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    material.vertexColors = true;
}

// Explanation: Create clickable planet buttons in the selector
function createPlanetButtons() {
    const container = document.getElementById('planetButtons');
    planetsData.forEach(planet => {
        const btn = document.createElement('div');
        btn.className = 'planet-btn';
        btn.onclick = () => selectPlanet(planet);
        
        const color = document.createElement('div');
        color.className = 'planet-btn-color';
        color.style.background = '#' + planet.color.toString(16).padStart(6, '0');
        
        const name = document.createElement('div');
        name.className = 'planet-btn-name';
        name.textContent = planet.name;
        
        btn.appendChild(color);
        btn.appendChild(name);
        container.appendChild(btn);
    });
}

// Explanation: Select a planet and follow it with the camera
function selectPlanet(planet) {
    selectedPlanet = planet;
    cameraAngle = {horizontal: 0, vertical: 0.5};
    cameraDistance = planet.size * 5;
    document.getElementById('infoPanel').classList.add('hidden');
    updatePlanetDetails();
    updatePlanetButtons();
}

// Explanation: Deselect planet and return to free camera
function deselectPlanet() {
    selectedPlanet = null;
    cameraAngle = {horizontal: 0, vertical: 0.5};
    document.getElementById('infoPanel').classList.remove('hidden');
    document.getElementById('planetDetails').classList.remove('active');
    updatePlanetButtons();
}

// Explanation: Update planet details panel with stats (only show existing stats)
function updatePlanetDetails() {
    if (!selectedPlanet) return;
    
    const panel = document.getElementById('planetDetails');
    document.getElementById('detailColor').style.background = '#' + selectedPlanet.color.toString(16).padStart(6, '0');
    document.getElementById('detailName').textContent = selectedPlanet.name;
    document.getElementById('detailDesc').textContent = selectedPlanet.desc;
    
    const stats = selectedPlanet.stats;
    const html = Object.keys(stats).map(key => 
        `<div class="stat-row">
            <span class="stat-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
            <span class="stat-value">${stats[key]}</span>
        </div>`
    ).join('');
    document.getElementById('detailStats').innerHTML = html;
    
    panel.classList.add('active');
}

// Explanation: Update selected state of planet buttons
function updatePlanetButtons() {
    const buttons = document.querySelectorAll('.planet-btn');
    buttons.forEach((btn, index) => {
        if (selectedPlanet && planetsData[index].name === selectedPlanet.name) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

// Explanation: Main animation loop with speed multiplier applied
function animate() {
    requestAnimationFrame(animate);

    if(isRotating) {
        planetObjects.forEach(obj => {
            // Apply speed multiplier to orbital rotation
            obj.orbit.rotation.y += obj.data.orbitSpeed * 0.01 * speedMultiplier;
            obj.planet.rotation.y += obj.data.rotationSpeed * speedMultiplier;

            obj.moons.forEach(moon => {
                moon.group.rotation.y += moon.speed * speedMultiplier;
            });
        });
    }

    // Camera follows selected planet with orbital controls
    if (selectedPlanet) {
        const selectedObj = planetObjects.find(obj => obj.data.name === selectedPlanet.name);
        if (selectedObj) {
            const planetWorldPos = new THREE.Vector3();
            selectedObj.planet.getWorldPosition(planetWorldPos);
            
            const offsetX = Math.cos(cameraAngle.horizontal) * Math.cos(cameraAngle.vertical) * cameraDistance;
            const offsetY = Math.sin(cameraAngle.vertical) * cameraDistance;
            const offsetZ = Math.sin(cameraAngle.horizontal) * Math.cos(cameraAngle.vertical) * cameraDistance;
            
            const targetPos = new THREE.Vector3(
                planetWorldPos.x + offsetX,
                planetWorldPos.y + offsetY,
                planetWorldPos.z + offsetZ
            );
            
            camera.position.copy(targetPos);
            camera.lookAt(planetWorldPos);
        }
    }

    renderer.render(scene, camera);
}

// Explanation: Mouse event handlers for interaction
function onMouseDown(e) {
    isDragging = true;
    previousMousePosition = {x: e.clientX, y: e.clientY};
}

function onMouseMove(e) {
    if(isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        if(selectedPlanet) {
            // Orbit camera around selected planet
            cameraAngle.horizontal -= deltaX * 0.005;
            cameraAngle.vertical += deltaY * 0.005;
            cameraAngle.vertical = Math.max(-Math.PI/2 + 0.1, Math.min(Math.PI/2 - 0.1, cameraAngle.vertical));
        } else {
            // Free camera movement
            camera.position.x -= deltaX * 0.5;
            camera.position.y += deltaY * 0.5;
            camera.lookAt(0, 0, 0);
        }

        previousMousePosition = {x: e.clientX, y: e.clientY};
    }
}

function onMouseUp() {
    isDragging = false;
}

// Explanation: Click handler for planet selection
function onClick(e) {
    if (Math.abs(e.clientX - previousMousePosition.x) > 5 || 
        Math.abs(e.clientY - previousMousePosition.y) > 5) {
        return; // Was dragging, not clicking
    }

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    
    const planetsToCheck = planetObjects.map(obj => obj.planet);
    const intersects = raycaster.intersectObjects(planetsToCheck, false);

    if (intersects.length > 0) {
        const clickedPlanet = planetObjects.find(obj => obj.planet === intersects[0].object);
        if (clickedPlanet) {
            selectPlanet(clickedPlanet.data);
        }
    } else {
        deselectPlanet();
    }
}

// Explanation: Zoom in/out with mouse wheel
function onWheel(e) {
    if(selectedPlanet) {
        cameraDistance += e.deltaY * 0.05;
        cameraDistance = Math.max(selectedPlanet.size * 2, Math.min(selectedPlanet.size * 15, cameraDistance));
    } else {
        camera.position.z += e.deltaY * 0.2;
        camera.position.z = Math.max(50, Math.min(600, camera.position.z));
    }
}

// Explanation: Handle window resize
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Explanation: Control functions called from HTML buttons
function toggleRotation() {
    isRotating = !isRotating;
    const btn = document.getElementById('playBtn');
    btn.textContent = isRotating ? 'Pause' : 'Play';
    btn.classList.toggle('active', isRotating);
}

function resetView() {
    deselectPlanet();
    camera.position.set(0, 180, 300);
    camera.lookAt(0, 0, 0);
}

function toggleOrbits() {
    showOrbits = !showOrbits;
    planetObjects.forEach(obj => {
        if(obj.data.orbitMesh) {
            obj.data.orbitMesh.visible = showOrbits;
        }
    });
}

// Explanation: Cycle through speed multipliers (1x, 2x, 4x, 6x)
function cycleSpeed() {
    const speeds = [1, 2, 4, 6];
    const currentIndex = speeds.indexOf(speedMultiplier);
    const nextIndex = (currentIndex + 1) % speeds.length;
    speedMultiplier = speeds[nextIndex];
    
    const btn = document.getElementById('speedBtn');
    btn.textContent = 'Speed: ' + speedMultiplier + 'x';
    btn.classList.add('active');
    if(speedMultiplier === 1) {
        btn.classList.remove('active');
    }
}

// Explanation: Start the application
init();

