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


