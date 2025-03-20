
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
        // Create an <img> element for the background image
        const img = document.createElement('img');
        img.src = button.getAttribute('data-image'); // Get image path from data attribute
        button.appendChild(img);

        // On hover, show the image
        button.addEventListener('mouseenter', function() {
            button.classList.add('show-image');
        });

        // On mouse leave, hide the image
        button.addEventListener('mouseleave', function() {
            button.classList.remove('show-image');
        });
    });

    // Add redirect for button 3
    document.getElementById("nRetrospec").addEventListener("click", function() {
        window.location.href = "index.html"; // Redirects to index.html
    });
});