// Mysteries.js - Interactive Story Reveals and Filtering

document.addEventListener('DOMContentLoaded', function() {
    
    // === REVEAL STORY FUNCTIONALITY ===
    const revealButtons = document.querySelectorAll('.reveal-btn');
    
    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.mystery-card');
            const story = card.querySelector('.full-story');
            
            if (story.classList.contains('revealed')) {
                // Hide story
                story.classList.remove('revealed');
                this.textContent = 'Unveil Origin';
                
                // Smooth scroll back to card top
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Show story
                story.classList.add('revealed');
                this.textContent = 'Conceal Origin';
                
                // Smooth scroll to make story visible
                setTimeout(() => {
                    story.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
    
    // === FILTER FUNCTIONALITY ===
    const filterTabs = document.querySelectorAll('.filter-tab');
    const mysteryCards = document.querySelectorAll('.mystery-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards with animation
            mysteryCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = '';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
            
            // Smooth scroll to grid after filtering
            const mysteriesSection = document.querySelector('.mysteries-section');
            if (mysteriesSection) {
                mysteriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // === INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for scroll animation
    mysteryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // === CHARACTER ICON HOVER EFFECTS ===
    const characterIcons = document.querySelectorAll('.character-icon');
    
    characterIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // === KEYBOARD NAVIGATION ===
    document.addEventListener('keydown', function(e) {
        // Press 'R' to reveal/conceal all stories
        if (e.key === 'r' || e.key === 'R') {
            const visibleCards = Array.from(mysteryCards).filter(card => 
                !card.classList.contains('hidden')
            );
            
            const allRevealed = visibleCards.every(card => 
                card.querySelector('.full-story').classList.contains('revealed')
            );
            
            visibleCards.forEach(card => {
                const story = card.querySelector('.full-story');
                const button = card.querySelector('.reveal-btn');
                
                if (allRevealed) {
                    story.classList.remove('revealed');
                    button.textContent = 'Unveil Origin';
                } else {
                    story.classList.add('revealed');
                    button.textContent = 'Conceal Origin';
                }
            });
        }
        
        // Press '1' for All, '2' for Egyptian, '3' for Greek
        if (e.key === '1') {
            document.querySelector('[data-filter="all"]').click();
        } else if (e.key === '2') {
            document.querySelector('[data-filter="egyptian"]').click();
        } else if (e.key === '3') {
            document.querySelector('[data-filter="greek"]').click();
        }
    });
    
    // === SEARCH FUNCTIONALITY (Optional Enhancement) ===
    // Add a search feature to find specific characters
    function addSearchFeature() {
        const filterSection = document.querySelector('.filter-section .container');
        
        // Create search input
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = 'margin-top: 1rem; text-align: center;';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search by name or keyword...';
        searchInput.style.cssText = `
            padding: 0.75rem 1.5rem;
            border: 2px solid var(--primary);
            background: rgba(28, 35, 49, 0.8);
            color: var(--foreground);
            border-radius: var(--radius);
            width: 100%;
            max-width: 400px;
            font-size: 1rem;
            transition: all 0.3s ease;
        `;
        
        searchInput.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 20px rgba(83, 155, 245, 0.3)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            mysteryCards.forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('.short-desc').textContent.toLowerCase();
                const story = card.querySelector('.full-story').textContent.toLowerCase();
                const type = card.querySelector('.origin-type').textContent.toLowerCase();
                
                if (name.includes(searchTerm) || 
                    desc.includes(searchTerm) || 
                    story.includes(searchTerm) ||
                    type.includes(searchTerm)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
            
            // If search is empty, respect current filter
            if (searchTerm === '') {
                const activeFilter = document.querySelector('.filter-tab.active').dataset.filter;
                mysteryCards.forEach(card => {
                    const category = card.dataset.category;
                    if (activeFilter === 'all' || category === activeFilter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            }
        });
        
        searchContainer.appendChild(searchInput);
        filterSection.appendChild(searchContainer);
    }
    
    // Uncomment to enable search feature
    // addSearchFeature();
    
    // === STATS DISPLAY ===
    function updateStats() {
        const visibleCards = Array.from(mysteryCards).filter(card => 
            !card.classList.contains('hidden')
        ).length;
        
        console.log(`Displaying ${visibleCards} of ${mysteryCards.length} origins`);
    }
    
    // Update stats on filter change
    filterTabs.forEach(tab => {
        tab.addEventListener('click', updateStats);
    });
    
    // === SAVE REVEALED STATES TO LOCAL STORAGE ===
    function saveRevealedStates() {
        const revealedStates = {};
        mysteryCards.forEach((card, index) => {
            const story = card.querySelector('.full-story');
            revealedStates[index] = story.classList.contains('revealed');
        });
        localStorage.setItem('mysteriesRevealed', JSON.stringify(revealedStates));
    }
    
    function loadRevealedStates() {
        const saved = localStorage.getItem('mysteriesRevealed');
        if (saved) {
            const revealedStates = JSON.parse(saved);
            mysteryCards.forEach((card, index) => {
                if (revealedStates[index]) {
                    const story = card.querySelector('.full-story');
                    const button = card.querySelector('.reveal-btn');
                    story.classList.add('revealed');
                    button.textContent = 'Conceal Origin';
                }
            });
        }
    }
    
    // Load saved states on page load
    loadRevealedStates();
    
    // Save states when revealing/concealing
    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(saveRevealedStates, 100);
        });
    });
    
    console.log('Mysteries of Origins page loaded successfully!');
    console.log(`${mysteryCards.length} divine beings and heroes await discovery.`);
});