document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('videoModal');
  const btn = document.querySelector('.button');
  const closeBtn = document.querySelector('.close');
  const videoFrame = document.getElementById('videoFrame');

  // Open the modal when the button is clicked
  btn.addEventListener('click', function() {
      modal.style.display = 'block';
      videoFrame.src = 'https://www.youtube.com/embed/EbopCFSV3-g'; // Replace with your YouTube video ID
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      videoFrame.src = ''; // Stop the video when the modal is closed
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          videoFrame.src = ''; // Stop the video when the modal is closed
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const allGamesModal = document.getElementById('allGamesModal');
  const btn2 = document.querySelector('.button2');
  const closeBtn2 = document.querySelector('#allGamesModal .close');
  const allGamesList = document.getElementById('allGamesList');

  // List of all games (including additional ones)
  const allGames = [
      { title: "Icy Tower", src: "https://phreshhhhh.github.io/icytower/icy_tower.swf" },
      { title: "Camp Laz", src: "https://phreshhhhh.github.io/Camp-laz/game.swf" },
      { title: "Age of War", src: "https://phreshhhhh.github.io/Ageofwar/age-of-war-6165ed4.swf" },
      { title: "Power Puff (Fight)", src: "https://phreshhhhh.github.io/PP-G/301661_ppg_newgrounds202c.swf" },
      { title: "Epic Battle Fantasy", src: "https://phreshhhhh.github.io/epicfinalbattle1/493714_RPGx6.swf" },
      { title: "Super Smash Flash", src: "https://phreshhhhh.github.io/EPICBATTLE3/333995_supersmashng202c.swf" },
      { title: "Zap To It", src: "https://phreshhhhh.github.io/zaptoit/game.swf" },
      { title: "Sonny", src: "https://phreshhhhh.github.io/SONNY/sonny-505817f.swf" },
      { title: "Sonny 2", src: "https://phreshhhhh.github.io/Sonny2/sonny-2-2900.swf" },
      { title: "Sword Souls", src: "https://phreshhhhh.github.io/SWORDSSOUL/swordssouls-17817.swf" },
      { title: "Swords and Sandals 2", src: "https://phreshhhhh.github.io/swordsSANDAL/Swords%20and%20Sandals%202.swf" },
      // Add more games here as needed
  ];

  // Open the modal when Button 2 is clicked
  btn2.addEventListener('click', function() {
      allGamesModal.style.display = 'block';
      populateAllGamesList();
  });

  // Close the modal when the close button is clicked
  closeBtn2.addEventListener('click', function() {
      allGamesModal.style.display = 'none';
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', function(event) {
      if (event.target === allGamesModal) {
          allGamesModal.style.display = 'none';
      }
  });

  // Function to populate the all games list
function populateAllGamesList() {
  allGamesList.innerHTML = ''; // Clear the list
  allGames.forEach(game => {
      const listItem = document.createElement('li');
      const gameLink = document.createElement('a');
      gameLink.href = '#'; // Prevent default link behavior
      gameLink.textContent = game.title; // Game title

      // Add click event to update the game embed
      gameLink.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior
          updateGameEmbed(game.src, game.title); // Update the game embed
          allGamesModal.style.display = 'none'; // Close the modal
      });

      listItem.appendChild(gameLink);
      allGamesList.appendChild(listItem);
  });
}

// Function to update the game embed
function updateGameEmbed(src, title) {
  const gameEmbedElement = document.getElementById('gameEmbed');
  const gameTitleElement = document.querySelector('.gametitle');

  // Update the game embed source
  gameEmbedElement.setAttribute('src', src);

  // Update the game title
  gameTitleElement.textContent = title;
}
});