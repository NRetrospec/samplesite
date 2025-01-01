function adjustEmbedSize() {
  const embedElement = document.getElementById('gameEmbed');
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth <= 767) { // Mobile devices
      embedElement.width = screenWidth; // Set width to screen width
      embedElement.height = screenHeight * 0.7; // Adjust height proportionally
      embedElement.style.margin = '0'; // Remove margin to prevent overflow
  } else if (screenWidth >= 768 && screenWidth <= 1023) { // Tablets
      embedElement.width = screenWidth; // Set width to screen width
      embedElement.height = screenHeight * 0.8; // Adjust height proportionally
      embedElement.style.margin = '0'; // Remove margin to prevent overflow
  } else { // Desktop
      embedElement.width = 720; // Default width
      embedElement.height = 720; // Default height
      embedElement.style.margin = '0'; // Reset margin for desktop
  }
}

// Call the function on page load and window resize
window.addEventListener('load', adjustEmbedSize);
window.addEventListener('resize', adjustEmbedSize);