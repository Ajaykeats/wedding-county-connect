
// Simple JavaScript for basic interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add click handlers for category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add navigation logic here
            console.log('Category clicked:', this.querySelector('h3').textContent);
            // For now, just add a visual feedback
            this.style.transform = 'translateY(-8px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-4px)';
            }, 150);
        });
    });

    // Add animation on scroll
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

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.category-card, .cta-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle (if you add a mobile menu later)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }
});

// Helper function for smooth transitions
function smoothTransition(element, property, endValue, duration = 300) {
    const startValue = parseFloat(getComputedStyle(element)[property]);
    const difference = endValue - startValue;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = startValue + (difference * progress);
        
        element.style[property] = currentValue + (property.includes('opacity') ? '' : 'px');
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Contact form handler (for future use)
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Add your form submission logic here
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

// Search functionality (for future use)
function handleSearch(query) {
    const searchResults = [];
    const categories = document.querySelectorAll('.category-card h3');
    
    categories.forEach(category => {
        if (category.textContent.toLowerCase().includes(query.toLowerCase())) {
            searchResults.push(category.textContent);
        }
    });
    
    return searchResults;
}
