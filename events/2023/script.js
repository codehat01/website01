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

    // Navbar dropdown on load
    window.onload = function() {
        var nav = document.getElementById("myNav");
        nav.classList.add("nav-dropdown"); // Add a class to trigger dropdown
    };

    // Navbar scroll effect
    var navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
                navbar.classList.remove("scrolledup");
            } else {
                navbar.classList.add("scrolledup");
                navbar.classList.remove("scrolled");
            }
        });
    }

    // Moving text
    var textSlide = document.querySelector(".text-slide").cloneNode(true);
    document.querySelector(".moving-text").appendChild(textSlide);

    // Loading screen functionality
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    if (loadingScreen && mainContent) {
        setTimeout(function() {
            // Hide the loading screen
            loadingScreen.style.display = "none";
            
            // Show the main content
            mainContent.style.display = "block";
        }, 3000); // 3000 milliseconds = 3 seconds
    } else {
        console.error("Loading screen or main content element not found");
    }
});

// Function to show text
function showText(text) {
    document.getElementById('card-text1').innerText = text;
}
