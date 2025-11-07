// Perfected Full-Screen Star Wars-Style Hyperspace Jump Effect
document.addEventListener('DOMContentLoaded', function() {
    // === CREATE HYPERSPACE OVERLAY ===
    const hyperspaceOverlay = document.createElement('div');
    hyperspaceOverlay.id = 'hyperspace-overlay';
    hyperspaceOverlay.style.opacity = '0';
    hyperspaceOverlay.style.transition = 'opacity 0.2s ease';
    document.body.appendChild(hyperspaceOverlay);

    // === CANVAS FOR FULL SCREEN STARS ===
    const canvas = document.createElement('canvas');
    canvas.id = 'hyperspace-canvas';
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `;
    hyperspaceOverlay.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // === JUMP TEXT ===
    const jumpText = document.createElement('div');
    jumpText.className = 'jump-text';
    jumpText.textContent = 'JUMPING THROUGH TIME...';
    document.body.appendChild(jumpText);

    // === HYPERSPACE WARP SOUND (Web Audio API) ===
    let audioContext;
    let isJumping = false; // Prevent multiple simultaneous jumps

    function playHyperspaceSound() {
        try {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }

            const duration = 1.5;
            const now = audioContext.currentTime;

            // Create oscillator for the "warp" sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            const filter = audioContext.createBiquadFilter();

            // Warp effect: sweeping frequency
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.exponentialRampToValueAtTime(50, now + duration);

            // Filter for that classic sci-fi sound
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(2000, now);
            filter.frequency.exponentialRampToValueAtTime(100, now + duration);
            filter.Q.value = 1;

            // Volume envelope
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.15, now + 0.05);
            gainNode.gain.linearRampToValueAtTime(0.1, now + 0.5);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

            // Connect nodes
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Play
            oscillator.start(now);
            oscillator.stop(now + duration);

            // Add noise for more texture
            const bufferSize = audioContext.sampleRate * duration;
            const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            
            for (let i = 0; i < bufferSize; i++) {
                output[i] = (Math.random() * 2 - 1) * 0.05;
            }

            const noiseSource = audioContext.createBufferSource();
            const noiseGain = audioContext.createGain();
            const noiseFilter = audioContext.createBiquadFilter();

            noiseSource.buffer = noiseBuffer;
            noiseFilter.type = 'bandpass';
            noiseFilter.frequency.value = 400;
            
            noiseGain.gain.setValueAtTime(0.2, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.01, now + duration);

            noiseSource.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(audioContext.destination);

            noiseSource.start(now);
            noiseSource.stop(now + duration);

        } catch (e) {
            console.log('Audio not available:', e);
        }
    }

    // Star class with more realistic motion
    class Star {
        constructor() {
            this.reset();
        }

        reset() {
            // Start from exact center
            this.centerX = canvas.width / 2;
            this.centerY = canvas.height / 2;
            
            // Random direction
            this.angle = Math.random() * Math.PI * 2;
            
            // Start very close to center
            this.z = 2000; // Depth (higher = farther away)
            
            // Random position in 3D space
            this.x3d = (Math.random() - 0.5) * 2000;
            this.y3d = (Math.random() - 0.5) * 2000;
            
            // Speed varies
            this.speed = Math.random() * 15 + 25;
            
            // Size and brightness
            this.baseSize = Math.random() * 1.5 + 0.5;
            this.brightness = Math.random() * 0.4 + 0.6;
        }

        update() {
            // Move star toward viewer (decrease z)
            this.z -= this.speed;
            
            // Accelerate as it gets closer
            this.speed *= 1.015;
            
            // Reset if too close
            if (this.z < 1) {
                this.reset();
            }
        }

        draw() {
            // 3D to 2D projection
            const scale = 1000 / this.z;
            const x2d = this.centerX + this.x3d * scale;
            const y2d = this.centerY + this.y3d * scale;
            
            // Previous position for trail
            const prevZ = this.z + this.speed;
            const prevScale = 1000 / prevZ;
            const prevX = this.centerX + this.x3d * prevScale;
            const prevY = this.centerY + this.y3d * prevScale;
            
            // Calculate size based on distance (closer = bigger)
            const size = this.baseSize * scale;
            
            // Don't draw if off screen
            if (x2d < -100 || x2d > canvas.width + 100 || 
                y2d < -100 || y2d > canvas.height + 100) {
                return;
            }
            
            // Draw long trail
            const trailLength = Math.min(scale * 80, 300);
            const dx = x2d - prevX;
            const dy = y2d - prevY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 0.5) {
                // Gradient trail
                const gradient = ctx.createLinearGradient(prevX, prevY, x2d, y2d);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
                gradient.addColorStop(0.3, `rgba(255, 255, 255, ${this.brightness * 0.3})`);
                gradient.addColorStop(0.7, `rgba(255, 255, 255, ${this.brightness * 0.8})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, ${this.brightness})`);
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = Math.max(size * 0.8, 0.5);
                ctx.lineCap = 'round';
                
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(x2d, y2d);
                ctx.stroke();
            }
            
            // Bright star head with glow
            const alpha = Math.min(this.brightness, 1);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowBlur = size * 4;
            ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
            
            ctx.beginPath();
            ctx.arc(x2d, y2d, Math.max(size, 1), 0, Math.PI * 2);
            ctx.fill();
            
            ctx.shadowBlur = 0;
        }
    }

    // Create stars array
    let stars = [];
    let animationId = null;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        const starCount = window.innerWidth < 768 ? 400 : 600;
        for (let i = 0; i < starCount; i++) {
            const star = new Star();
            // Stagger initial z positions for continuous effect
            star.z = 2000 - (i / starCount) * 1500;
            stars.push(star);
        }
    }

    function animate() {
        // Create motion blur by fading previous frame
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw all stars
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }

    function stopAnimation() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    // === HYPERSPACE JUMP FUNCTION ===
    function hyperspaceJump(targetSection, sectionName) {
        // Prevent multiple simultaneous jumps
        if (isJumping) {
            console.log('Jump already in progress');
            return;
        }
        
        isJumping = true;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Show overlay and effects
        hyperspaceOverlay.classList.add('active');
        hyperspaceOverlay.style.opacity = '1';
        jumpText.classList.add('active');
        jumpText.textContent = `JUMPING TO ${sectionName.toUpperCase()}...`;
        
        // Setup canvas and stars
        resizeCanvas();
        createStars();
        
        // Start animation
        animate();
        
        // Play warp sound
        playHyperspaceSound();

        // Navigate after delay
        setTimeout(() => {
            const target = document.getElementById(targetSection);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }

            // Fade out overlay
            setTimeout(() => {
                hyperspaceOverlay.style.opacity = '0';
                jumpText.classList.remove('active');
                
                // Stop animation and cleanup
                setTimeout(() => {
                    stopAnimation();
                    hyperspaceOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    isJumping = false; // Allow next jump
                }, 300);
            }, 1200);
        }, 100);
    }

    // === CREATE NAVIGATION BUTTONS ===
    const timelineNav = document.querySelector('.timeline-nav');
    
    const sections = [
        { id: 'near-future', name: '2025-2030', label: 'Near Future' },
        { id: 'mid-future', name: '2030-2050', label: 'Mid Future' },
        { id: 'far-future', name: '2050-2100', label: 'Far Future' },
        { id: 'deep-future', name: 'Beyond 2100', label: 'Deep Future' }
    ];

    sections.forEach((section, index) => {
        const button = document.createElement('button');
        button.className = 'timeline-btn';
        if (index === 0) button.classList.add('active');
        button.setAttribute('data-target', section.id);
        button.textContent = section.label;
        
        button.addEventListener('click', function() {
            // Prevent click if jumping
            if (isJumping) return;
            
            // Remove active from all buttons
            document.querySelectorAll('.timeline-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active to clicked button
            this.classList.add('active');
            
            // Initiate hyperspace jump
            hyperspaceJump(section.id, section.name);
        });
        
        timelineNav.appendChild(button);
    });

    // === ADD IDS TO SECTIONS ===
    const predictionSections = document.querySelectorAll('.prediction-section');
    const sectionIds = ['near-future', 'mid-future', 'far-future', 'deep-future'];
    
    predictionSections.forEach((section, index) => {
        if (sectionIds[index]) {
            section.id = sectionIds[index];
        }
    });

    // === INTERSECTION OBSERVER FOR AUTO-HIGHLIGHTING ===
    const observerOptions = {
        root: null,
        rootMargin: '-150px 0px -50% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isJumping) {
                const sectionId = entry.target.id;
                const correspondingButton = document.querySelector(`.timeline-btn[data-target="${sectionId}"]`);
                
                if (correspondingButton) {
                    document.querySelectorAll('.timeline-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    correspondingButton.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    predictionSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (hyperspaceOverlay.classList.contains('active')) {
            resizeCanvas();
        }
    });
});