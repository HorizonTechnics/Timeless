// Enhanced Hyperspace Jump Effect for Predictions Page
document.addEventListener('DOMContentLoaded', function() {
    // === CREATE HYPERSPACE OVERLAY ===
    const hyperspaceOverlay = document.createElement('div');
    hyperspaceOverlay.id = 'hyperspace-overlay';
    hyperspaceOverlay.style.opacity = '0';
    hyperspaceOverlay.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(hyperspaceOverlay);

    // === STAR CONTAINER ===
    const starContainer = document.createElement('div');
    starContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    `;
    hyperspaceOverlay.appendChild(starContainer);

    // === JUMP TEXT ===
    const jumpText = document.createElement('div');
    jumpText.className = 'jump-text';
    jumpText.textContent = 'JUMPING THROUGH TIME...';
    document.body.appendChild(jumpText);

    // === STAR GENERATION ===
    function createStars() {
        starContainer.innerHTML = '';
        const starCount = window.innerWidth < 768 ? 100 : 200;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 1.2 + 0.6;
            const delay = Math.random() * 0.3;

            star.style.cssText = `
                position: absolute;
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size * 30}px;
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 1) 40%,
                    rgba(0, 212, 255, 0.8) 60%,
                    rgba(255, 255, 255, 0) 100%
                );
                box-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
                opacity: 0;
                transform-origin: top center;
                animation: hyperspace-star ${duration}s ease-in ${delay}s forwards;
            `;

            starContainer.appendChild(star);
        }
    }

    // === HYPERSPACE JUMP FUNCTION ===
    function hyperspaceJump(targetSection, sectionName) {
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Show overlay and effects
        hyperspaceOverlay.classList.add('active');
        hyperspaceOverlay.style.opacity = '1';
        jumpText.classList.add('active');
        jumpText.textContent = `JUMPING TO ${sectionName.toUpperCase()}...`;
        
        createStars();

        // Optional: Add sound effect (uncomment and add your audio file)
        // const audio = new Audio('sounds/hyperspace-jump.mp3');
        // audio.volume = 0.3;
        // audio.play().catch(() => {});

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
                
                // Remove active class and cleanup
                setTimeout(() => {
                    hyperspaceOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }, 300);
            }, 1500);
        }, 800);
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
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const correspondingButton = document.querySelector(`.timeline-btn[data-target="${sectionId}"]`);
                
                if (correspondingButton && !correspondingButton.classList.contains('manual-active')) {
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

    // === SMOOTH SCROLL POLYFILL FOR OLDER BROWSERS ===
    if (!('scrollBehavior' in document.documentElement.style)) {
        const smoothScrollPolyfill = document.createElement('script');
        smoothScrollPolyfill.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@16/dist/smooth-scroll.polyfills.min.js';
        document.head.appendChild(smoothScrollPolyfill);
    }
});