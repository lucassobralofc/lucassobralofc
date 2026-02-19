// ===========================
// Translations & i18n
// ===========================
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'Hi, I\'m <span class="gradient-text">Lucas Sobral</span>',
        'hero.subtitle': 'High school student | Technology enthusiast | Backend developer',
        'hero.description': 'Building cool projects with hardware, automation, and code 🚀',
        'hero.viewProjects': 'View Projects',
        'hero.getInTouch': 'Get in Touch',
        'about.title': 'About Me',
        'about.p1': 'I\'m a Brazilian high school student with a passion for technology and building things. I love exploring the intersection of hardware and software—from electronics and automation to Linux servers and APIs.',
        'about.p2': 'Whether it\'s tinkering with microcontrollers, setting up automation bots, or building backend systems, I\'m always excited to learn and create something new. I believe in clean design, minimal UI, and functional projects.',
        'about.electronics': 'Electronics & DIY',
        'about.automation': 'Automation & Bots',
        'about.linux': 'Linux & Servers',
        'about.backend': 'Backend Dev',
        'skills.title': 'Skills & Tech Stack',
        'skills.backend.title': 'Backend Development',
        'skills.backend.desc': 'Python, Node.js, APIs, REST, databases',
        'skills.hardware.title': 'Hardware & Electronics',
        'skills.hardware.desc': 'Arduino, ESP32, Raspberry Pi, sensors',
        'skills.linux.title': 'Linux & Servers',
        'skills.linux.desc': 'Server management, Bash scripting, DevOps',
        'skills.automation.title': 'Automation',
        'skills.automation.desc': 'Bots, task automation, scripting',
        'projects.title': 'Projects',
        'projects.subtitle': 'Some things I\'m building and experimenting with',
        'projects.bots.title': 'Automation Bots',
        'projects.bots.desc': 'Building various automation bots for productivity and task management using Python and APIs.',
        'projects.iot.title': 'IoT Projects',
        'projects.iot.desc': 'Experimenting with microcontrollers, sensors, and DIY electronics for home automation.',
        'projects.services.title': 'Backend Services',
        'projects.services.desc': 'Creating backend services and API integrations for various applications.',
        'projects.home.title': 'Home Automation',
        'projects.home.desc': 'Building smart home solutions with Raspberry Pi and custom automation scripts.',
        'status.inProgress': 'In Progress',
        'status.planned': 'Planned',
        'contact.title': 'Let\'s Connect',
        'contact.subtitle': 'Feel free to reach out for collaborations or just a chat!',
        'footer.text': '© 2026 Lucas Sobral. Built with ☕ and curiosity.',
        'lang.toggle': 'PT',
    },
    pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'hero.title': 'Olá, eu sou <span class="gradient-text">Lucas Sobral</span>',
        'hero.subtitle': 'Estudante do ensino médio | Entusiasta de tecnologia | Desenvolvedor backend',
        'hero.description': 'Construindo projetos incríveis com hardware, automação e código 🚀',
        'hero.viewProjects': 'Ver Projetos',
        'hero.getInTouch': 'Entrar em Contato',
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou um estudante brasileiro do ensino médio apaixonado por tecnologia e por construir coisas. Adoro explorar a interseção entre hardware e software — de eletrônica e automação a servidores Linux e APIs.',
        'about.p2': 'Seja trabalhando com microcontroladores, configurando bots de automação ou construindo sistemas backend, estou sempre animado para aprender e criar algo novo. Acredito em design limpo, UI minimalista e projetos funcionais.',
        'about.electronics': 'Eletrônica & DIY',
        'about.automation': 'Automação & Bots',
        'about.linux': 'Linux & Servidores',
        'about.backend': 'Dev Backend',
        'skills.title': 'Habilidades & Stack',
        'skills.backend.title': 'Desenvolvimento Backend',
        'skills.backend.desc': 'Python, Node.js, APIs, REST, banco de dados',
        'skills.hardware.title': 'Hardware & Eletrônica',
        'skills.hardware.desc': 'Arduino, ESP32, Raspberry Pi, sensores',
        'skills.linux.title': 'Linux & Servidores',
        'skills.linux.desc': 'Gerenciamento de servidores, scripts Bash, DevOps',
        'skills.automation.title': 'Automação',
        'skills.automation.desc': 'Bots, automação de tarefas, scripts',
        'projects.title': 'Projetos',
        'projects.subtitle': 'Algumas coisas que estou construindo e experimentando',
        'projects.bots.title': 'Bots de Automação',
        'projects.bots.desc': 'Desenvolvendo vários bots de automação para produtividade e gerenciamento de tarefas usando Python e APIs.',
        'projects.iot.title': 'Projetos IoT',
        'projects.iot.desc': 'Experimentando com microcontroladores, sensores e eletrônica DIY para automação residencial.',
        'projects.services.title': 'Serviços Backend',
        'projects.services.desc': 'Criando serviços backend e integrações de API para diversas aplicações.',
        'projects.home.title': 'Automação Residencial',
        'projects.home.desc': 'Construindo soluções de casa inteligente com Raspberry Pi e scripts de automação personalizados.',
        'status.inProgress': 'Em Progresso',
        'status.planned': 'Planejado',
        'contact.title': 'Vamos Conectar',
        'contact.subtitle': 'Fique à vontade para entrar em contato para colaborações ou apenas uma conversa!',
        'footer.text': '© 2026 Lucas Sobral. Feito com ☕ e curiosidade.',
        'lang.toggle': 'EN',
    }
};

function detectLanguage() {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'pt') return stored;
    const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return lang.startsWith('pt') ? 'pt' : 'en';
}

function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t[el.dataset.i18n];
    });
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = t['hero.title'];
    }
    const htmlRoot = document.getElementById('htmlRoot');
    if (htmlRoot) {
        htmlRoot.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = t['lang.toggle'];
    }
}

let currentLang = detectLanguage();
applyTranslations(currentLang);

// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Language toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
});

// Throttle function for performance
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Get sections for scroll handling (declare early)
const sections = document.querySelectorAll('section');

// Consolidated scroll handler for better performance
const handleScroll = throttle(() => {
    const scrollY = window.scrollY;
    
    // Add scroll effect to navbar
    if (scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active nav link highlight based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // Add parallax effect to hero section
    const heroContent = document.querySelector('.hero-content');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroContent && scrollY < 1000) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    floatingCards.forEach((card, index) => {
        if (scrollY < 1000) {
            const speed = 0.2 + (index * 0.1);
            card.style.transform = `translateY(${scrollY * speed}px)`;
        }
    });
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Observe skill cards for staggered animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Observe project cards for staggered animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let index = 0;
    const typeSpeed = 50;
    
    function typeWriter() {
        if (index < text.length) {
            // Use textContent to prevent XSS issues
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Add cursor animation to sections
const addCursor = () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
};

// Initialize custom cursor (optional - can be commented out for simpler experience)
// addCursor();

// Console message for curious developers
console.log('%c👋 Hey there, curious developer!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to check out the code on GitHub!', 'color: #7c3aed; font-size: 14px;');
console.log('%chttps://github.com/lucassobralofc', 'color: #7d8590; font-size: 12px;');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website initialized successfully! 🚀');
    
    // Add animation class to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Add easter egg - Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.animation = 'rainbow 2s infinite';
        console.log('%c🎉 Konami Code Activated! You found the easter egg!', 'color: #00d9ff; font-size: 24px; font-weight: bold;');
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});
