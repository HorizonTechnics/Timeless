// Data for continents with detailed information
const continentData = {
    'North America': {
        population: '592 million',
        religion: 'Christianity (77%)',
        language: 'English',
        history: 'Home to ancient civilizations like the Maya and Aztec. European colonization began in the 15th century, dramatically changing the continent. The United States declared independence in 1776, becoming a major world power.',
        achievements: 'Birthplace of modern democracy, space exploration leadership (NASA), technological innovation hub (Silicon Valley), and significant contributions to entertainment, music, and popular culture.'
    },
    'South America': {
        population: '434 million',
        religion: 'Christianity (90%)',
        language: 'Spanish/Portuguese',
        history: 'Once home to the Inca Empire, one of the largest pre-Columbian civilizations. Spanish and Portuguese colonization in the 16th century shaped modern culture. Most countries gained independence in the early 19th century.',
        achievements: 'Amazon Rainforest (largest tropical rainforest), rich biodiversity, vibrant cultural traditions, football excellence, and unique architectural wonders like Machu Picchu.'
    },
    'Europe': {
        population: '748 million',
        religion: 'Christianity (75%)',
        language: 'Multiple (English, Spanish, French)',
        history: 'Cradle of Western civilization, Renaissance, and Industrial Revolution. Two World Wars originated here. Formation of European Union in 1993 promoted peace and economic cooperation.',
        achievements: 'Classical art and architecture, scientific revolution, democracy and human rights advancement, technological innovations, and cultural contributions to literature, music, and philosophy.'
    },
    'Africa': {
        population: '1.4 billion',
        religion: 'Christianity (49%) / Islam (42%)',
        language: 'Arabic/Swahili/French/English',
        history: 'Birthplace of humanity and ancient Egyptian civilization. European colonization (19th-20th century) and subsequent independence movements shaped modern Africa. Rich in natural resources and cultural diversity.',
        achievements: 'Cradle of human civilization, ancient Egyptian pyramids and engineering, diverse ecosystems and wildlife, rich oral traditions and music, rapid technological adoption and mobile banking innovation.'
    },
    'Asia': {
        population: '4.7 billion',
        religion: 'Islam (25%) / Hinduism (25%) / Buddhism (12%)',
        language: 'Mandarin Chinese',
        history: 'Home to oldest continuous civilizations (China, India). Silk Road facilitated trade and cultural exchange. Colonial period followed by rapid industrialization and economic growth in the 20th-21st centuries.',
        achievements: 'Invention of paper, printing, gunpowder, and compass. Buddhist and Hindu philosophical traditions, technological manufacturing powerhouse, rapid economic development, and architectural marvels like the Great Wall and Taj Mahal.'
    },
    'Australia': {
        population: '43 million',
        religion: 'Christianity (52%)',
        language: 'English',
        history: 'Indigenous Aboriginal peoples lived here for over 65,000 years. British colonization began in 1788. Federation in 1901 created modern Australia. Multicultural immigration shaped contemporary society.',
        achievements: 'Unique biodiversity (marsupials, Great Barrier Reef), Indigenous cultural heritage, high quality of life, medical research contributions, and mining industry leadership.'
    },
    'Antarctica': {
        population: '1,000-5,000 (researchers)',
        religion: 'N/A',
        language: 'Various (research stations)',
        history: 'Last continent discovered (1820). No indigenous population. Antarctic Treaty (1959) dedicated it to peaceful scientific research. International cooperation governs the continent.',
        achievements: 'Scientific research hub for climate, astronomy, and biology. Preservation of pristine environment. International cooperation model. Ice core samples provide climate history spanning 800,000 years.'
    }
};

// Explanation: Sample country data (expand this with more countries)
const countryData = {
    'United States': {
        population: '331 million',
        religion: 'Christianity (65%)',
        language: 'English',
        fact: 'Home to Silicon Valley, Hollywood, and has landed 12 astronauts on the Moon.'
    },
    'Brazil': {
        population: '214 million',
        religion: 'Christianity (87%)',
        language: 'Portuguese',
        fact: 'Contains 60% of the Amazon Rainforest and has won the FIFA World Cup 5 times.'
    },
    'Germany': {
        population: '83 million',
        religion: 'Christianity (55%)',
        language: 'German',
        fact: 'Birthplace of the printing press, automobile, and home to over 25,000 castles.'
    },
    'Nigeria': {
        population: '211 million',
        religion: 'Islam (50%) / Christianity (48%)',
        language: 'English',
        fact: 'Most populous country in Africa and a major center of African film industry (Nollywood).'
    },
    'China': {
        population: '1.4 billion',
        religion: 'Buddhism / Taoism / No religion',
        language: 'Mandarin',
        fact: 'Home to the Great Wall, invented paper and gunpowder, and is the world\'s largest economy by PPP.'
    },
    'Australia': {
        population: '26 million',
        religion: 'Christianity (52%)',
        language: 'English',
        fact: 'Home to the Great Barrier Reef, has more than 10,000 beaches, and 21 of the 25 most venomous snakes live here.'
    },
    'India': {
        population: '1.4 billion',
        religion: 'Hinduism (80%)',
        language: 'Hindi/English',
        fact: 'Birthplace of yoga, chess, and home to the Taj Mahal. World\'s largest democracy.'
    },
    'France': {
        population: '67 million',
        religion: 'Christianity (58%)',
        language: 'French',
        fact: 'Most visited country in the world, invented cinema, and home to the Louvre Museum.'
    },
    'Japan': {
        population: '125 million',
        religion: 'Shintoism / Buddhism',
        language: 'Japanese',
        fact: 'Land of the Rising Sun, invented karaoke and instant ramen, has the most Michelin-starred restaurants.'
    },
    'Canada': {
        population: '38 million',
        religion: 'Christianity (67%)',
        language: 'English/French',
        fact: 'Second-largest country by area, invented basketball and the telephone, has the longest coastline in the world.'
    }
    // Add more countries as needed
};

let scene, camera, renderer, earth, raycaster, mouse;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let selectedContinent = null;

// Explanation: Initialize Three.js scene
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('earth-container').appendChild(renderer.domElement);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Explanation: Create Earth sphere with realistic texture
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    
    // Using a procedural texture since we can't load external images
    const material = new THREE.MeshPhongMaterial({
        color: 0x2233ff,
        emissive: 0x112244,
        specular: 0x333333,
        shininess: 25
    });
    
    earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add realistic Earth texture with continents
    applyEarthTexture(geometry, material);

    // Explanation: Add atmospheric glow
    const atmosGeometry = new THREE.SphereGeometry(1.05, 32, 32);
    const atmosMaterial = new THREE.MeshBasicMaterial({
        color: 0x4488ff,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosGeometry, atmosMaterial);
    earth.add(atmosphere);

    // Explanation: Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Explanation: Event listeners for mouse interaction
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel);
    renderer.domElement.addEventListener('click', onClick);

    window.addEventListener('resize', onResize);

    animate();
}

// Explanation: Apply realistic Earth texture with continents
function applyEarthTexture(geometry, material) {
    const pos = geometry.attributes.position;
    const colors = [];

    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);

        const lat = Math.asin(y);
        const lon = Math.atan2(z, x);

        // Simple continent approximation
        const landMask = 
            (lon > -2.5 && lon < -0.5 && lat > -0.5 && lat < 0.8) || // Europe/Africa
            (lon > 0.5 && lon < 2.8 && lat > -0.3 && lat < 1.2) || // Asia
            (lon > -3.0 && lon < -1.5 && lat > 0.0 && lat < 1.3) || // North America
            (lon > -1.8 && lon < -1.0 && lat > -1.2 && lat < -0.1) || // South America
            (lon > 2.3 && lon < 3.0 && lat > -0.8 && lat < -0.2); // Australia

        let r, g, b;
        if (landMask) {
            // Land colors (green/brown)
            r = 0.2 + Math.random() * 0.15;
            g = 0.4 + Math.random() * 0.1;
            b = 0.1;
        } else {
            // Ocean colors (blue)
            const depth = Math.sin(lon * 10) * Math.cos(lat * 10) * 0.1;
            r = 0.1 + depth;
            g = 0.2 + depth;
            b = 0.5 + depth;
        }

        colors.push(r, g, b);
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    material.vertexColors = true;
}

// Explanation: Mouse interaction handlers
function onMouseDown(e) {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
}

function onMouseMove(e) {
    if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        earth.rotation.y += deltaX * 0.005;
        earth.rotation.x += deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
    }

    // Update mouse position for raycasting
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Check for country hover
    checkCountryHover();
}

function onMouseUp() {
    isDragging = false;
}

function onWheel(e) {
    camera.position.z += e.deltaY * 0.001;
    camera.position.z = Math.max(1.5, Math.min(5, camera.position.z));
}

function onClick(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(earth);

    if (intersects.length > 0) {
        const point = intersects[0].point;
        const continent = getContinentFromPoint(point);
        if (continent) {
            showContinentInfo(continent);
        }
    }
}

// Explanation: Determine continent from clicked point
function getContinentFromPoint(point) {
    const lat = Math.asin(point.y);
    const lon = Math.atan2(point.z, point.x);

    // Rough continent boundaries
    if (lon > -2.5 && lon < -0.5 && lat > 0.3 && lat < 0.8) return 'Europe';
    if (lon > -0.5 && lon < 1.0 && lat > -0.5 && lat < 0.5) return 'Africa';
    if (lon > 0.5 && lon < 2.8 && lat > -0.3 && lat < 1.2) return 'Asia';
    if (lon > -3.0 && lon < -1.5 && lat > 0.0 && lat < 1.3) return 'North America';
    if (lon > -1.8 && lon < -1.0 && lat > -1.2 && lat < -0.1) return 'South America';
    if (lon > 2.3 && lon < 3.0 && lat > -0.8 && lat < -0.2) return 'Australia';
    if (lat < -1.3) return 'Antarctica';

    return null;
}

// Explanation: Determine country from point (simplified)
function getCountryFromPoint(point) {
    const lat = Math.asin(point.y);
    const lon = Math.atan2(point.z, point.x);

    // Simplified country detection (expand for more accuracy)
    if (lon > -2.2 && lon < -1.8 && lat > 0.6 && lat < 1.0) return 'United States';
    if (lon > -1.5 && lon < -1.0 && lat > -0.6 && lat < 0.1) return 'Brazil';
    if (lon > -0.3 && lon < 0.3 && lat > 0.6 && lat < 0.8) return 'Germany';
    if (lon > 0.1 && lon < 0.4 && lat > 0.1 && lat < 0.3) return 'Nigeria';
    if (lon > 1.8 && lon < 2.3 && lat > 0.3 && lat < 0.8) return 'China';
    if (lon > 2.5 && lon < 2.9 && lat > -0.6 && lat < -0.2) return 'Australia';
    if (lon > 1.2 && lon < 1.6 && lat > 0.2 && lat < 0.5) return 'India';
    if (lon > -0.1 && lon < 0.2 && lat > 0.65 && lat < 0.75) return 'France';
    if (lon > 2.3 && lon < 2.5 && lat > 0.5 && lat < 0.7) return 'Japan';
    if (lon > -2.0 && lon < -1.6 && lat > 0.8 && lat < 1.1) return 'Canada';

    return null;
}

// Explanation: Check for country hover
function checkCountryHover() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(earth);

    if (intersects.length > 0) {
        const point = intersects[0].point;
        const country = getCountryFromPoint(point);
        
        if (country && countryData[country]) {
            showCountryInfo(country);
        } else {
            hideCountryInfo();
        }
    } else {
        hideCountryInfo();
    }
}

// Explanation: Show continent information panel
function showContinentInfo(continent) {
    selectedContinent = continent;
    const data = continentData[continent];
    
    document.getElementById('continentName').textContent = continent;
    document.getElementById('continentPopulation').textContent = data.population;
    document.getElementById('continentReligion').textContent = data.religion;
    document.getElementById('continentLanguage').textContent = data.language;
    document.getElementById('continentHistory').textContent = data.history;
    document.getElementById('continentAchievements').textContent = data.achievements;
    
    document.getElementById('continentPanel').classList.add('active');
}

// Explanation: Close continent panel
function closeContinentPanel() {
    selectedContinent = null;
    document.getElementById('continentPanel').classList.remove('active');
}

// Explanation: Show country information on hover
function showCountryInfo(country) {
    const data = countryData[country];
    
    document.getElementById('countryName').textContent = country;
    document.getElementById('countryPopulation').textContent = data.population;
    document.getElementById('countryReligion').textContent = data.religion;
    document.getElementById('countryLanguage').textContent = data.language;
    document.getElementById('countryFact').textContent = data.fact;
    
    document.getElementById('countryPanel').classList.add('active');
}

// Explanation: Hide country information
function hideCountryInfo() {
    document.getElementById('countryPanel').classList.remove('active');
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Explanation: Animation loop with auto-rotation
function animate() {
    requestAnimationFrame(animate);

    if (!isDragging && !selectedContinent) {
        earth.rotation.y += 0.001;
    }

    renderer.render(scene, camera);
}

init();