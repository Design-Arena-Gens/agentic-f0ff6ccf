// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Email form submission
const ctaForm = document.querySelector('.cta-form');
const emailInput = ctaForm?.querySelector('.email-input');
const submitBtn = ctaForm?.querySelector('.submit-btn');

if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput?.value;

        if (email && email.includes('@')) {
            // Simple email validation
            alert(`Thank you for signing up! We'll send course information to ${email}`);
            if (emailInput) emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// Get Started buttons
document.querySelectorAll('.primary-btn, .cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const ctaSection = document.querySelector('#contact');
        if (ctaSection) {
            const headerOffset = 80;
            const elementPosition = ctaSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                emailInput?.focus();
            }, 800);
        }
    });
});

// Explore Courses button
document.querySelector('.secondary-btn')?.addEventListener('click', () => {
    const coursesSection = document.querySelector('#courses');
    if (coursesSection) {
        const headerOffset = 80;
        const elementPosition = coursesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});
