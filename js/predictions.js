// Hyperspace Scroll Effect for Predictions Page
document.addEventListener('DOMContentLoaded', function() {
    // === CREATE HYPERSPACE OVERLAY ===
    const hyperspaceOverlay = document.createElement('div');
    hyperspaceOverlay.id = 'hyperspace-overlay';
    hyperspaceOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        background: radial-gradient(ellipse at center, rgba(83, 155, 245, 0.1) 0%, transparent 70%);
    `;
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

    // === STAR GENERATION ===
    function createStars() {
        starContainer.innerHTML = '';
        const starCount = 150;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 0.8 + 0.4;
            const delay = Math.random() * 0.5;

            star.style.cssText = `
                position: absolute;
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size * 25}px;
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 1) 50%,
                    rgba(255, 255, 255, 0) 100%
                );
                opacity: 0;
                transform-origin: top center;
                animation: hyperspace-star ${duration}s ease-in ${delay}s forwards;
            `;

            starContainer.appendChild(star);
        }
    }

    // === HYPERSPACE JUMP FUNCTION ===
    function hyperspaceJump(targetId) {
        hyperspaceOverlay.style.opacity = '1';
        createStars();

        // Optional: play sound (add your own .mp3)
        // const audio = new Audio('sounds/hyperspace.mp3');
        // audio.volume = 0.4;
        // audio.play().catch(() => {});

        setTimeout(() => {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Fade out overlay
            setTimeout(() => {
                hyperspaceOverlay.style.opacity = '0';
            }, 1000);
        }, 500);
    }

    // === BUTTON CLICK HANDLERS ===
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    timelineButtons.forEach((button) => {
        button.addEventListener('click', function() {
            timelineButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const target = this.getAttribute('data-target');
            if (target) hyperspaceJump(target);
        });
    });
});