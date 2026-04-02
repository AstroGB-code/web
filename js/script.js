document.addEventListener('DOMContentLoaded', () => {
    // Current Year Update
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Header Blur Effect on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Intersection Observer for Animate On Scroll (fade-in-up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const countUpObserverParams = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        fadeInObserver.observe(element);
    });

    // Animated Counter functionality
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const suffix = entry.target.getAttribute('data-suffix') || '';
                animateCounter(entry.target, target, suffix);
                observer.unobserve(entry.target);
            }
        });
    }, countUpObserverParams);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    function animateCounter(element, target, suffix) {
        let current = 0;
        const duration = 2000; // milliseconds
        const frameRate = 30; // ms per frame
        const increment = target / (duration / frameRate);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.innerText = target + suffix;
                clearInterval(timer);
            } else {
                element.innerText = Math.ceil(current) + suffix;
            }
        }, frameRate);
    }
});
