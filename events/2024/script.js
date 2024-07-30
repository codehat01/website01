document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Set smooth scroll behavior for container
    const cardsContainer = document.querySelector('.container');
    if (cardsContainer) {
        cardsContainer.style.scrollBehavior = 'smooth';
    }

    // Change navbar style on scroll
    const nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) { 
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });
    }
});