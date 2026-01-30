// Update Date and Location
function updateDateAndLocation() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Initialize date on load
updateDateAndLocation();
setInterval(updateDateAndLocation, 60000); // Update every minute

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
});

// Function to create floating particles
function createParticles(containerId, count = 100) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.boxShadow = `0 0 ${size * 2}px #0066ff`;
        container.appendChild(particle);
    }
}

// Create particles for all sections
createParticles('particles'); // Hero
createParticles('services-particles'); // Services
createParticles('mission-particles'); // Mission
createParticles('team-particles'); // Team
createParticles('portfolio-particles'); // Portfolio
createParticles('principles-particles'); // Principles
createParticles('about-particles'); // About
createParticles('contact-particles'); // Contact

// Intersection Observer for scroll animations with stagger
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 80);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.section-title, .section-subtitle, .service-card, .feature-card, .about-content, .team-card');
animateElements.forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = navbar?.classList.contains('scrolled') ? 130 : 140;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced parallax effect for hero section
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
    
    // Advanced parallax for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
            const offset = (windowHeight - rect.top) / windowHeight;
            const translateY = (offset - 0.5) * 40;
            const scale = 1 + (offset - 0.5) * 0.05;
            if (!card.matches(':hover')) {
                card.style.transform = `translateY(${translateY}px) scale(${scale})`;
            }
        }
    });
    
    lastScroll = scrolled;
});

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const textOnly = heroTitle.textContent || heroTitle.innerText;
    const highlightStart = textOnly.indexOf('Us');
    
    heroTitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i <= textOnly.length) {
            if (i <= highlightStart) {
                heroTitle.innerHTML = textOnly.substring(0, i);
            } else if (i <= highlightStart + 'Us'.length) {
                const before = textOnly.substring(0, highlightStart);
                const highlight = textOnly.substring(highlightStart, i);
                heroTitle.innerHTML = before + '<span class="highlight">' + highlight + '</span>';
            } else {
                const before = textOnly.substring(0, highlightStart);
                const highlight = textOnly.substring(highlightStart, highlightStart + 'Us'.length);
                const after = textOnly.substring(highlightStart + 'Us'.length, i);
                heroTitle.innerHTML = before + '<span class="highlight">' + highlight + '</span>' + after;
            }
            i++;
            setTimeout(typeWriter, 40);
        }
    };
    
    setTimeout(() => {
        heroTitle.innerHTML = '';
        typeWriter();
    }, 1000);
}

// Service cards 3D tilt effect with enhanced animations
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    
    // 3D tilt effect on mouse move
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });

    // Add glow effect on hover
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Feature cards stagger animation with hover effects
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Add subtle pulse animation
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'cardPulse 2s ease-in-out infinite';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animation = '';
    });
});

// Team cards 3D tilt effect with enhanced animations
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    
    // 3D tilt effect on mouse move
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });

    // Add glow effect on hover
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Add card pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes cardPulse {
        0%, 100% { 
            box-shadow: 0 15px 50px rgba(0, 102, 255, 0.4);
        }
        50% { 
            box-shadow: 0 20px 60px rgba(0, 102, 255, 0.6);
        }
    }
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// AI Chatbot Functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

// Quick questions
const quickQuestions = [
    "What services do you offer?",
    "How much does it cost?",
    "Do you work with startups?",
    "What's your development process?",
    "How long does a project take?"
];

// Chatbot responses database
const chatbotResponses = {
    greeting: ["Hello! How can I help you today?", "Hi there! What would you like to know?", "Hey! I'm here to assist you."],
    services: "We offer Web Development, Mobile Applications (iOS & Android), UX/UI Design, and 24/7 Support & Maintenance. All services are tailored to your needs.",
    cost: "Our pricing is flexible and depends on your project requirements. We offer affordable solutions for both startups and enterprises. Would you like to discuss your specific needs?",
    startups: "Absolutely! We work with startups and enterprises alike. We offer affordable, high-quality solutions perfect for growing businesses.",
    process: "Our process: 1) Discovery & Planning 2) Design & Prototyping 3) Development 4) Testing & Quality Assurance 5) Launch & Support. We keep you involved every step of the way.",
    timeline: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex mobile app could take 2-6 months. We'll provide a detailed timeline after discussing your requirements.",
    default: "I'm here to help! You can ask me about our services, pricing, process, or anything else about Nexxus Lab. Try asking: 'What services do you offer?' or 'How much does it cost?'"
};

// Function to add message to chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = text;
    chatbotMessages?.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to get bot response
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
    } else if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
        return chatbotResponses.services;
    } else if (message.includes('cost') || message.includes('price') || message.includes('how much')) {
        return chatbotResponses.cost;
    } else if (message.includes('startup') || message.includes('small business')) {
        return chatbotResponses.startups;
    } else if (message.includes('process') || message.includes('how do you work') || message.includes('method')) {
        return chatbotResponses.process;
    } else if (message.includes('time') || message.includes('how long') || message.includes('duration') || message.includes('timeline')) {
        return chatbotResponses.timeline;
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
        return "You can reach us through our website contact form or email. We're available 24/7 for support!";
    } else if (message.includes('location') || message.includes('where')) {
        return "We're a worldwide digital partner! We work remotely with clients from around the globe.";
    } else {
        return chatbotResponses.default;
    }
}

// Toggle chatbot window
chatbotToggle?.addEventListener('click', () => {
    chatbotWindow?.classList.toggle('active');
    if (chatbotWindow?.classList.contains('active')) {
        chatbotInput?.focus();
    }
});

chatbotClose?.addEventListener('click', () => {
    chatbotWindow?.classList.remove('active');
});

// Send message function
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        // Simulate typing delay
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, false);
        }, 600);
    }
}

// Send button click
chatbotSend?.addEventListener('click', sendMessage);

// Enter key to send
chatbotInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Add quick questions on first load
setTimeout(() => {
    if (chatbotMessages?.children.length === 1) {
        const quickQuestionsDiv = document.createElement('div');
        quickQuestionsDiv.className = 'quick-questions';
        quickQuestions.forEach(question => {
            const btn = document.createElement('button');
            btn.className = 'quick-question';
            btn.textContent = question;
            btn.addEventListener('click', () => {
                chatbotInput.value = question;
                sendMessage();
            });
            quickQuestionsDiv.appendChild(btn);
        });
        chatbotMessages.appendChild(quickQuestionsDiv);
    }
}, 1000);

// Enhanced mouse cursor trail effect
let mouseTrail = [];
const maxTrailLength = 15;

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.6) { // Create trail more often
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        const size = Math.random() * 6 + 2;
        trail.style.width = size + 'px';
        trail.style.height = size + 'px';
        trail.style.background = '#0066ff';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.zIndex = '9998';
        trail.style.opacity = '0.7';
        trail.style.boxShadow = `0 0 ${size * 3}px #0066ff`;
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            trail.style.opacity = '0';
            trail.style.transform = 'scale(2)';
            setTimeout(() => trail.remove(), 600);
        }, 150);
    }
});

// Animated gradient background for service cards on scroll (fixed)
window.addEventListener('scroll', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
            const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
            const opacity = Math.min(scrollProgress * 2, 1);
            if (!card.classList.contains('animate')) {
                card.style.opacity = opacity;
            }
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.8s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    });
});

// Initialize animations on page load
window.addEventListener('load', () => {
    // Add entrance animations
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll-triggered animations for icons
const iconObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const icon = entry.target.querySelector('svg');
            if (icon) {
                icon.style.animation = 'iconPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.service-icon, .feature-icon').forEach(icon => {
    iconObserver.observe(icon);
});

// Add icon pop animation
const iconStyle = document.createElement('style');
iconStyle.textContent = `
    @keyframes iconPop {
        0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.2) rotate(10deg);
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(iconStyle);

// Smooth number counter animation (for future stats)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Add floating animation to top bar items
document.querySelectorAll('.top-bar-item').forEach((item, index) => {
    item.style.animation = `fadeInDown 0.6s ease ${index * 0.1}s both`;
});

const topBarStyle = document.createElement('style');
topBarStyle.textContent = `
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(topBarStyle);

// Portfolio Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.portfolio-slide');
const totalSlides = slides.length;

function initPortfolioSlider() {
    // Create dots
    const dotsContainer = document.getElementById('portfolioDots');
    if (dotsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'portfolio-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Auto-play slideshow
    setInterval(() => {
        nextSlide();
    }, 5000);
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.portfolio-dot')[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.portfolio-dot')[currentSlide].classList.add('active');
}

function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
}

// Portfolio navigation buttons
const portfolioNext = document.getElementById('portfolioNext');
const portfolioPrev = document.getElementById('portfolioPrev');

portfolioNext?.addEventListener('click', nextSlide);
portfolioPrev?.addEventListener('click', prevSlide);

// Initialize portfolio slider
if (slides.length > 0) initPortfolioSlider();

// Observe AI feature cards for animation
const aiFeatureCards = document.querySelectorAll('.ai-feature-card');
aiFeatureCards.forEach((card, index) => {
    observer.observe(card);
    card.style.animationDelay = `${index * 0.15}s`;
});

// AI Features Functions
function generateATheme() {
    const themes = [
        { primary: '#0066ff', secondary: '#00aaff', accent: '#ff0066' },
        { primary: '#00ff88', secondary: '#00ccff', accent: '#ffaa00' },
        { primary: '#aa00ff', secondary: '#ff00aa', accent: '#00ffaa' },
        { primary: '#ff6600', secondary: '#ffaa00', accent: '#0066ff' }
    ];
    
    const theme = themes[Math.floor(Math.random() * themes.length)];
    
    // Show notification
    showAINotification(`🎨 Generated Theme: Primary ${theme.primary}, Secondary ${theme.secondary}`);
    
    // Apply theme preview
    document.documentElement.style.setProperty('--theme-primary', theme.primary);
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
}

function optimizeContent() {
    const suggestions = [
        "✨ Improve readability by using shorter paragraphs",
        "📊 Add more visual elements to break up text",
        "🔍 Include relevant keywords for better SEO",
        "💡 Use bullet points for better scanning",
        "📝 Add a call-to-action to increase engagement"
    ];
    
    const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    showAINotification(`💡 AI Suggestion: ${suggestion}`);
}

function suggestLayout() {
    const layouts = [
        "📐 Recommended: Use a 3-column grid for better content organization",
        "🎯 Suggested: Add a hero section with clear value proposition",
        "📱 Optimize: Implement mobile-first responsive design",
        "⚡ Performance: Reduce image sizes for faster loading",
        "🎨 Design: Use white space more effectively for better readability"
    ];
    
    const layout = layouts[Math.floor(Math.random() * layouts.length)];
    showAINotification(`🎯 Layout Suggestion: ${layout}`);
}

function viewAnalytics() {
    const analytics = {
        visitors: Math.floor(Math.random() * 10000) + 5000,
        bounceRate: (Math.random() * 20 + 30).toFixed(1),
        avgTime: Math.floor(Math.random() * 5 + 2),
        conversion: (Math.random() * 5 + 2).toFixed(2)
    };
    
    showAINotification(`📊 Analytics: ${analytics.visitors} visitors | ${analytics.bounceRate}% bounce rate | ${analytics.avgTime}min avg time | ${analytics.conversion}% conversion`);
}

// AI Notification System
function showAINotification(message) {
    const existing = document.querySelector('.ai-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'ai-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: linear-gradient(135deg, rgba(0, 102, 255, 0.95), rgba(0, 170, 255, 0.95));
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 102, 255, 0.5);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 4.5s forwards;
        font-weight: 500;
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Portfolio Modal Functionality
const portfolioModal = document.getElementById('portfolioModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

// Case study data
const caseStudies = {
    aidefendbot: {
        title: "Internal Case Study: Philippine Financial & Inter-Industry Pride (PFIP)",
        content: `
            <div class="case-study-section">
                <h3>Snapshot</h3>
                <p>A non-profit community driving LGBTQ+ workplace inclusion across the Philippines, connecting over 100 member companies from multiple industries.</p>
            </div>
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>LGBTQ+ professionals face challenges in workplace acceptance, equal opportunities, and career advancement.</p>
            </div>
            <div class="case-study-section">
                <h3>Strategy</h3>
                <p>Promote inclusivity through education, advocacy, certification, and recognition programs while building a supportive network of organizations and allies.</p>
            </div>
            <div class="case-study-section">
                <h3>Execution</h3>
                <p>Launched initiatives such as the Rainbow Youth Academy scholarship program, PFIP Pride Summit, Bahaghari Awards, Allyship 101 training, corporate playbooks, and workplace inclusion surveys.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Enhanced LGBTQ+ workplace awareness, empowered young professionals, increased corporate member engagement, and strengthened industry-wide adoption of inclusive policies.</p>
            </div>
            <div class="case-study-section">
                <h3>Visuals</h3>
                <p>Event highlights, Rainbow Youth Academy scholars, PFIP Playbook, impact reports, and Bahaghari Awards ceremonies.</p>
            </div>
        `
    },
    top100ai: {
        title: "Internal Case Study: Mavers Corporation",
        content: `
            <div class="case-study-section">
                <h3>Snapshot</h3>
                <p>A family-owned wholesaler of Filipino and Asian groceries, serving over 100 stores, restaurants, and food trucks across the U.S. since 2007.</p>
            </div>
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>Filipino communities and other customers in the U.S. face limited access to authentic Filipino products and reliable suppliers.</p>
            </div>
            <div class="case-study-section">
                <h3>Strategy</h3>
                <p>Provide high-quality, authentic Filipino products with personalized service and competitive pricing, while building trust and community connections.</p>
            </div>
            <div class="case-study-section">
                <h3>Execution</h3>
                <p>Curated a diverse selection of reputable brands, maintained strict quality standards, and offered personalized customer support to wholesalers and retailers.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Established a strong reputation as a reliable supplier, expanded customer base across multiple states, and strengthened brand recognition within the Filipino-American community.</p>
            </div>
            <div class="case-study-section">
                <h3>Visuals</h3>
                <p>Product selection displays, brand logos, warehouse operations, and customer interactions..</p>
            </div>
        `
    },
    bamboospa: {
        title: "Internal Case Study: Bamboo Spa",
        content: `
            <div class="case-study-section">
                <h3>Snapshot</h3>
                <p>A Filipino-owned day spa chain in New Zealand offering traditional Hilot massage and professional relaxation services across 16 branches.</p>
            </div>
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>Customers seek high-quality, affordable, and culturally authentic spa experiences in a competitive wellness market.</p>
            </div>
            <div class="case-study-section">
                <h3>Strategy</h3>
                <p>Deliver traditional Filipino massage techniques with consistent service quality while expanding branch locations to increase accessibility.</p>
            </div>
            <div class="case-study-section">
                <h3>Execution</h3>
                <p>Established multiple spa locations, implemented online booking and map integration, promoted gift vouchers, and leveraged social media and testimonials to build trust.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Expanded to 16 branches nationwide, high customer satisfaction through glowing reviews, increased bookings, and strengthened brand recognition in the wellness industry.</p>
            </div>
            <div class="case-study-section">
                <h3>Visuals</h3>
                <p>Branch interiors, massage sessions, online booking interface, gift voucher promos, and customer testimonials.</p>
            </div>
        `
    },
    scale: {
        title: "Internal Case Study: SCALE",
        content: `
            <div class="case-study-section">
                <h3>Snapshot</h3>
                <p>A diversity and inclusion platform promoting LGBTQ+ awareness through SOGIE certification, training, and community engagement.</p>
            </div>
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>Many businesses lack proper knowledge and sensitivity when interacting with LGBTQ+ individuals, leading to unintentional exclusion.</p>
            </div>
            <div class="case-study-section">
                <h3>Strategy</h3>
                <p>Educate, certify, and connect businesses and individuals through accessible SOGIE training and a trusted certification system.</p>
            </div>
            <div class="case-study-section">
                <h3>Execution</h3>
                <p>Launched the SOGIE 101 web-based training and certification, built the SCALE Community for updates and advocacy, and introduced Premium features for extended benefits.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Improved inclusivity awareness, increased participation in SOGIE certification, and stronger trust between LGBTQ+ communities and certified businesses.</p>
            </div>
            <div class="case-study-section">
                <h3>Visuals</h3>
                <p>Training modules, certification badges, community feed, and business listings.</p>
            </div>
        `
    },
    mychapters: {
        title: "Internal Case Study: MyChapters",
        content: `
            <div class="case-study-section">
                <h3>Snapshot</h3>
                <p>An AI-assisted storytelling platform that helps users turn life experiences into beautifully printed books, one chapter at a time.</p>
            </div>
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>People want to preserve meaningful stories but struggle with writing, organization, and publishing.</p>
            </div>
            <div class="case-study-section">
                <h3>Strategy</h3>
                <p>Simplify storytelling through AI guidance, flexible formats, and seamless publishing and monetization options.</p>
            </div>
            <div class="case-study-section">
                <h3>Execution</h3>
                <p>Built an intuitive writing platform with AI prompts, customizable layouts, photo integration, print-on-demand books, and a public library for sharing and selling stories.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Higher writing completion rates, increased user engagement, and new revenue opportunities for storytellers.</p>
            </div>
            <div class="case-study-section">
                <h3>Visuals</h3>
                <p>Writing dashboard, chapter editor, book layouts, and printed book previews.</p>
            </div>
        `
    },
    fundraising: {
        title: "Internal Case Study: Jedd Medical Support Campaign",
        content: `
            <div class="case-study-section">
                <h3>Snapshot</h3>
                <p>A community-driven support campaign created to help Jedd during his open-heart surgery and medical treatment journey.</p>
            </div>
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>Unexpected medical expenses created a significant financial and emotional burden for Jedd and his family.</p>
            </div>
            <div class="case-study-section">
                <h3>Strategy</h3>
                <p>Unite friends, colleagues, and communities through awareness, fundraising activities, and transparent updates.</p>
            </div>
            <div class="case-study-section">
                <h3>Execution</h3>
                <p>Launched a dedicated support page featuring merch sales, benefit gigs, direct deposits, and a newsletter to keep supporters informed.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Increased community participation, raised medical funds, and strengthened collective support around Jedd's recovery.</p>
            </div>
            <div class="case-study-section">
                <h3>Visuals</h3>
                <p>Campaign landing page, merchandise previews, benefit event highlights, and update sections.</p>
            </div>
        `
    },
    mancave: {
        title: "Internal Case Study: Mancave Supplies PH",
        content: `
            <div class="case-study-section">
                <h3>Snapshot</h3>
                <p>A custom furniture brand specializing in rustic and industrial steel pipe designs for modern mancaves and commercial spaces.</p>
            </div>
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>Customers seek durable, stylish, and unique furniture pieces that stand out from mass-produced designs.</p>
            </div>
            <div class="case-study-section">
                <h3>Strategy</h3>
                <p>Showcase handcrafted craftsmanship and industrial aesthetics while building trust through project history and social proof.</p>
            </div>
            <div class="case-study-section">
                <h3>Execution</h3>
                <p>Developed a portfolio-driven website highlighting custom projects, brand story, key metrics, and clear contact channels.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Stronger brand credibility, increased customer inquiries, and improved visibility for custom furniture services.</p>
            </div>
            <div class="case-study-section">
                <h3>Visuals</h3>
                <p>Project gallery, product close-ups, workshop shots, and brand metrics highlights.</p>
            </div>
        `
    }
};

// Modal event listeners
document.querySelectorAll('.portfolio-cta').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const project = button.getAttribute('data-project');
        const caseStudy = caseStudies[project];
        
        if (caseStudy) {
            modalTitle.textContent = caseStudy.title;
            modalContent.innerHTML = caseStudy.content;
            portfolioModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

modalClose.addEventListener('click', () => {
    portfolioModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === portfolioModal) {
        portfolioModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && portfolioModal.style.display === 'block') {
        portfolioModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
`;
document.head.appendChild(notificationStyle);

// ============================================
// CONTACT FORM HANDLER
// ============================================

const contactForm = document.getElementById('contact-form');
// Always use relative URL - nginx will proxy to backend
const API_URL = '/api';

// Show notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${type === 'success' 
                ? '<path d="M20 6L9 17l-5-5"/>' 
                : '<path d="M18 6L6 18M6 6l12 12"/>'}
        </svg>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00ff87, #0066ff)' : 'linear-gradient(135deg, #ff4444, #cc0000)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        backdrop-filter: blur(10px);
    `;
    
    notification.querySelector('svg').style.cssText = `
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.4s ease-out forwards';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification(data.message || 'Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            showNotification('Network error. Please check your connection and try again.', 'error');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
        }
    });
}

// ============================================
// CALENDLY INTEGRATION - API-Based
// ============================================

const calendlyBtn = document.getElementById('calendly-book-btn');

if (calendlyBtn) {
    calendlyBtn.addEventListener('click', async () => {
        try {
            // Add loading state
            calendlyBtn.classList.add('loading');
            calendlyBtn.disabled = true;
            
            // Fetch Calendly URL from API
            const response = await fetch(`${API_URL}/calendly`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch Calendly URL');
            }
            
            const data = await response.json();
            
            if (data.success && data.url) {
                // Open Calendly booking page
                window.open(data.url, '_blank');
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            console.error('Calendly booking error:', error);
            showNotification('Unable to open booking page. Please try again later.', 'error');
        } finally {
            // Remove loading state
            calendlyBtn.classList.remove('loading');
            calendlyBtn.disabled = false;
        }
    });
}

