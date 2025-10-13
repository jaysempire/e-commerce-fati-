
document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll('.product-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a delay to each card's animation
                const delay = entry.target.getAttribute('data-delay');
                setTimeout(() => {
                      entry.target.classList.add('is-visible');
                }, delay);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    productCards.forEach((card, index) => {
        // Set a cascading delay for each card
        card.setAttribute('data-delay', index * 100);
        observer.observe(card);
    });
});