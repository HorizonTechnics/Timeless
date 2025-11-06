// Main JavaScript for Timeless Website

//  Complete translation data for all supported languages
const translations = {
    en: {
        home: "Home",
        past: "Past",
        present: "Present",
        future: "Future",
        store: "Store",
        cosmos: "Cosmos",
        explore: "Explore",
        about: "About",
        copyright: "All rights reserved.",
        txtFooter: "Exploring humanity's journey through time - from ancient civilizations to future possibilities.",
        privacy: "Privacy",
        terms: "Terms",
        accessibility: "Accessibility",
        backBtn: "Go Back",
        reverseTime: "Reverse Time",
        aboutUs: "About Us",
        contact: "Contact",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        // Topic translations
        ancientCivilizations: "Ancient Civilizations",
        classicalEra: "Classical Era",
        middleAges: "Middle Ages",
        renaissance: "Renaissance",
        ageOfExploration: "Age of Exploration",
        industrialRevolution: "Industrial Revolution",
        worldWars: "World Wars",
        coldWar: "Cold War",
        worldWonders: "World Wonders",
        technology: "Technology",
        spaceExploration: "Space Exploration",
        climateChange: "Climate Change",
        globalSociety: "Global Society",
        artifactsTime: "Artifacts Through Time",
        continents: "Continents",
        mythical: "Mythical Stories",
        conspiracy: "Conspiracy Theories",
        doomsday: "Doomsday Clock",
        spaceColonization: "Space Colonization",
        ai: "Artificial Intelligence",
        sustainability: "Sustainability",
        biotechnology: "Biotechnology",
        predictions: "Predictions",
        subscription: "Subscription",
        solarSystem: "Solar System"
    },
    nl: {
        home: "Thuis",
        past: "Verleden",
        present: "Heden",
        future: "Toekomst",
        store: "Winkel",
        cosmos: "Kosmos",
        explore: "Verkennen",
        about: "Over",
        copyright: "Alle rechten voorbehouden.",
        txtFooter: "Ontdek de reis van de mensheid door de tijd - van oude beschavingen tot toekomstige mogelijkheden.",
        privacy: "Privacy",
        terms: "Voorwaarden",
        accessibility: "Toegankelijkheid",
        backBtn: "Ga Terug",
        reverseTime: "Draai de tijd terug",
        aboutUs: "Over Ons",
        contact: "Contact",
        privacyPolicy: "Privacybeleid",
        termsOfService: "Servicevoorwaarden",
        ancientCivilizations: "Oude Beschavingen",
        classicalEra: "Klassieke Tijdperk",
        middleAges: "Middeleeuwen",
        renaissance: "Renaissance",
        ageOfExploration: "Tijdperk van Ontdekking",
        industrialRevolution: "Industriële Revolutie",
        worldWars: "Wereldoorlogen",
        coldWar: "Koude Oorlog",
        worldWonders: "Wereldwonderen",
        technology: "Technologie",
        spaceExploration: "Ruimteverkenning",
        climateChange: "Klimaatverandering",
        globalSociety: "Mondiale Samenleving",
        artifactsTime: "Artefacten Door de Tijd",
        continents: "Continenten",
        mythical: "Mythische Verhalen",
        conspiracy: "Samenzweringstheorieën",
        doomsday: "Doomsday Klok",
        spaceColonization: "Ruimtekolonisatie",
        ai: "Kunstmatige Intelligentie",
        sustainability: "Duurzaamheid",
        biotechnology: "Biotechnologie",
        predictions: "Voorspellingen",
        subscription: "Abonnement",
        solarSystem: "Zonnestelsel"
    },
    de: {
        home: "Startseite",
        past: "Vergangenheit",
        present: "Gegenwart",
        future: "Zukunft",
        store: "Geschäft",
        cosmos: "Kosmos",
        explore: "Erkunden",
        about: "Über",
        copyright: "Alle Rechte vorbehalten.",
        txtFooter: "Die Reise der Menschheit durch die Zeit erforschen – von antiken Zivilisationen bis hin zu zukünftigen Möglichkeiten.",
        privacy: "Datenschutz",
        terms: "Bedingungen",
        accessibility: "Barrierefreiheit",
        backBtn: "Geh zurück",
        reverseTime: "Zeit umkehren",
        aboutUs: "Über Uns",
        contact: "Kontakt",
        privacyPolicy: "Datenschutzrichtlinie",
        termsOfService: "Nutzungsbedingungen",
        ancientCivilizations: "Antike Zivilisationen",
        classicalEra: "Klassische Ära",
        middleAges: "Mittelalter",
        renaissance: "Renaissance",
        ageOfExploration: "Zeitalter der Entdeckungen",
        industrialRevolution: "Industrielle Revolution",
        worldWars: "Weltkriege",
        coldWar: "Kalter Krieg",
        worldWonders: "Weltwunder",
        technology: "Technologie",
        spaceExploration: "Weltraumforschung",
        climateChange: "Klimawandel",
        globalSociety: "Globale Gesellschaft",
        artifactsTime: "Artefakte durch die Zeit",
        continents: "Kontinente",
        mythical: "Mythische Geschichten",
        conspiracy: "Verschwörungstheorien",
        doomsday: "Weltuntergangsuhr",
        spaceColonization: "Weltraumkolonisation",
        ai: "Künstliche Intelligenz",
        sustainability: "Nachhaltigkeit",
        biotechnology: "Biotechnologie",
        predictions: "Vorhersagen",
        subscription: "Abonnement",
        solarSystem: "Sonnensystem"
    },
    fr: {
        home: "Accueil",
        past: "Passé",
        present: "Présent",
        future: "Futur",
        store: "Boutique",
        cosmos: "Cosmos",
        explore: "Explorer",
        about: "À propos",
        copyright: "Tous droits réservés.",
        txtFooter: "Explorer le parcours de l'humanité à travers le temps – des civilisations anciennes aux possibilités futures.",
        privacy: "Confidentialité",
        terms: "Conditions",
        accessibility: "Accessibilité",
        backBtn: "Retourner",
        reverseTime: "Inverser le temps",
        aboutUs: "À Propos",
        contact: "Contact",
        privacyPolicy: "Politique de Confidentialité",
        termsOfService: "Conditions d'Utilisation",
        ancientCivilizations: "Civilisations Anciennes",
        classicalEra: "Ère Classique",
        middleAges: "Moyen Âge",
        renaissance: "Renaissance",
        ageOfExploration: "Âge des Découvertes",
        industrialRevolution: "Révolution Industrielle",
        worldWars: "Guerres Mondiales",
        coldWar: "Guerre Froide",
        worldWonders: "Merveilles du Monde",
        technology: "Technologie",
        spaceExploration: "Exploration Spatiale",
        climateChange: "Changement Climatique",
        globalSociety: "Société Mondiale",
        artifactsTime: "Artefacts à Travers le Temps",
        continents: "Continents",
        mythical: "Histoires Mythiques",
        conspiracy: "Théories du Complot",
        doomsday: "Horloge de l'Apocalypse",
        spaceColonization: "Colonisation Spatiale",
        ai: "Intelligence Artificielle",
        sustainability: "Durabilité",
        biotechnology: "Biotechnologie",
        predictions: "Prédictions",
        subscription: "Abonnement",
        solarSystem: "Système Solaire"
    }
};

//  Get current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to translate page content dynamically
function translatePage(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'nl' ? 'nl' : lang === 'de' ? 'de' : lang === 'fr' ? 'fr' : 'en';
}

// Function to change website language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Translate the page
    translatePage(lang);
}

// Add this to your existing DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Explanation: Language switcher event listeners
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    // Set initial language on page load
    changeLanguage(currentLang);
    
    // ... rest of existing code ...
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon transformation
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        //  Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    //  Dropdown Menu functionality for Desktop
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const content = dropdown.querySelector('.dropdown-content');
        
        // On mobile, toggle dropdown on click
        if (window.innerWidth <= 768) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const isOpen = content.style.display === 'grid';
                
                // Close all dropdowns
                document.querySelectorAll('.dropdown-content').forEach(dc => {
                    dc.style.display = 'none';
                });
                
                // Open this dropdown if it was closed
                if (!isOpen) {
                    content.style.display = 'grid';
                }
            });
        }
    });
    
    //  Language switcher event listeners
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    //  Set initial language on page load
    changeLanguage(currentLang);
    
    // Explanation: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    //  Intersection Observer for scroll animations
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
    
    //  Observe topic cards for animation on scroll
    document.querySelectorAll('.topic-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe timeline cards for animation
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    //  Add active state to current page in navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPath.includes(href.replace('.html', '')) || 
            (currentPath === '/' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });
});

//  Handle window resize events
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Reset mobile menu on resize
        const navMenu = document.getElementById('navMenu');
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            if (mobileMenuToggle) {
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }, 250);
});

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    
    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Ensure menu can scroll
            if (navMenu.classList.contains('active')) {
                navMenu.scrollTop = 0; // Reset scroll position
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // Close all dropdowns
            navDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Prevent clicks inside menu from closing it
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Handle dropdown clicks on mobile
    navDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Close other dropdowns
                navDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                // Reset mobile menu state on desktop
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                // Close all dropdowns
                navDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }, 250);
    });
    
    // Close menu when clicking on a link (optional, for better UX)
    const navLinks = navMenu.querySelectorAll('a:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                // Close all dropdowns
                navDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });
});

// Add parallax effect to hero image
if (document.querySelector('.hero-image')) {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

console.log('Timeless website loaded successfully!');

