document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const btn = document.querySelector('.button');
    const closeBtn = document.querySelector('.close');
    const videoFrame = document.getElementById('videoFrame');
    const apiKey = 'AIzaSyCKnySf-Enz2ptF49n2VJ6Z1wTIUueWcBw'; // Replace with your YouTube API key
    const channelId = 'UCtQqARYRbqj2P0wbTf7w1gw'; // Replace with your YouTube channel ID
  
    // Function to fetch videos from the channel
    async function fetchVideos() {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`;
      const response = await fetch(url);
      const data = await response.json();
      return data.items.filter(item => item.id.kind === 'youtube#video').map(item => item.id.videoId);
    }
  
    // Function to get a random video ID from the list
    function getRandomVideoId(videoIds) {
      const randomIndex = Math.floor(Math.random() * videoIds.length);
      return videoIds[randomIndex];
    }
  
    // Open the modal and play a random video when the button is clicked
    btn.addEventListener('click', async function() {
      const videoIds = await fetchVideos();
      const randomVideoId = getRandomVideoId(videoIds);
      modal.style.display = 'block';
      videoFrame.src = `https://www.youtube.com/embed/${randomVideoId}`;
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
      { title: "Cow & Chicken", src: "https://phreshhhhh.github.io/cowandchicken/game.swf" },
      { title: "Avatar Fortress Fight", src: "https://phreshhhhh.github.io/avatar1/avatar_fortress_fight.swf" },
      { title: "Timmy Turner Yugo Maze", src: "https://phreshhhhh.github.io/timmyturner1/yugopoMaze.swf" },
      { title: "Rocket Power ", src: "https://phreshhhhh.github.io/rOCKETpower/otto.swf" }, 
      { title: "Techno Tennis", src: "https://phreshhhhh.github.io/robotjenny/tr_tennis.swf" },
      { title: "Strike Force Heros", src: "https://phreshhhhh.github.io/sfheros/strike-force-heroes--14775ec92.swf" },
      { title: "Age Of War 2", src: "https://phreshhhhh.github.io/ageofwar2/age-of-war-2-public.swf" },
      { title: "Road Of The Dead", src: "https://phreshhhhh.github.io/RoadOftheDead/road-of-the-dead.swf" },
      { title: "Clone a Doodle", src: "https://phreshhhhh.github.io/dexter1/dl_clone_a_doodle.swf" }, 
      { title: "Dexter Runaway Robot", src: "https://phreshhhhh.github.io/DEXTER3/DEX2" },
      { title: "Code Of The Samurai", src: "https://phreshhhhh.github.io/samuraijack1/codeofthesamurai.swf" },
      { title: "(Operation Zero) Billy & Mandy", src: "https://phreshhhhh.github.io/billymandy1/game.swf" },
      { title: "The Fright Before Christmas ", src: "https://phreshhhhh.github.io/billyandmandy2/Evil_Toys.swf" },
      { title: "(Zom-B-Gone) Power Puff", src: "https://phreshhhhh.github.io/powerpuff1/game.swf" },
      { title: "Doodle God", src: "https://phreshhhhh.github.io/doodlegod/doodle-god.swf" },
      { title: "Bloxorz", src: "https://phreshhhhh.github.io/bloxorz/1843__bloxorz_miniclip.swf" },
      { title: "Choas Faction", src: "https://phreshhhhh.github.io/choasfaction/535370_cf2_ng202c.swf" },
      { title: "Fire Boy & Water Girl", src: "https://phreshhhhh.github.io/fireboywatergirl/fireboyandwatergirl_kong.swf" },
      { title: "Robot Unicorn ", src: "https://phreshhhhh.github.io/unicorngame/unicorngame" },
      { title: "Super Fighters", src: "https://phreshhhhh.github.io/superfighter/575163_superfighters202c.swf" },
      { title: "Metro Siberia", src: "https://phreshhhhh.github.io/metro_siberia/metro_siberia.swf" },
      { title: "Ski Free", src: "https://phreshhhhh.github.io/SkiiFree/skifree.swf" },
      { title: "Lilo & Stitch Speed Chase ", src: "https://phreshhhhh.github.io/stitchspeedchase/stitch%20speed-chase" },
      { title: "Mystic Circle", src: "https://phreshhhhh.github.io/Mystic-Circle-/mystic-circle.swf" },
      { title: "Imperium", src: "https://phreshhhhh.github.io/Imperium/imperium.swf" },
      { title: "Hunted Forever", src: "https://phreshhhhh.github.io/huntedforever/465190_hf_viral.swf" }, 
      { title: "Cute Planet Puzzle", src: "https://phreshhhhh.github.io/Cuteplanet/CutePlanetPuzzle.swf" }, 
      { title: "Bowja The Ninja", src: "https://phreshhhhh.github.io/Bowja-the-Ninja/bowja%20the%20ninja%201%20-%20on%20factory%20island.swf" },
      { title: "Bloon Tower Defense ", src: "https://phreshhhhh.github.io/BTD2/bloonstd2.swf" }, 
      { title: "Modern Tactics ", src: "https://phreshhhhh.github.io/moderntactics/modern-tactics.swf" },
      { title: "Sonic in Mario", src: "https://phreshhhhh.github.io/sonicinmario/sonic-in-mario-world-2_slide.swf" },
      { title: "Chrono Trigger", src: "https://phreshhhhh.github.io/ChronoTrigger/chrono-trigger.swf" },
      { title: "Drakken Lair Kim P.", src: "https://phreshhhhh.github.io/DrakkenLair/drakken%20lair" },
      { title: "Munch N Grind (Goofy)", src: "https://phreshhhhh.github.io/munchngrind/munchngrind" }, 
      { title: "Pacman Platformer ", src: "https://phreshhhhh.github.io/pacmanplatform/pacman%20Platformer" },
      { title: "School Invaders", src: "https://phreshhhhh.github.io/schoolinvaders/399713_schoolinvaders_arcadetown_.swf"},
      { title: "Mardek", src: "https://phreshhhhh.github.io/mardek/MARDEK1.swf" },
      { title: "Spongebob Pizza Toss", src: "https://phreshhhhh.github.io/spongebobpizzatoss/SB_Gold_a.swf" },
      { title: "Tatics Core", src: "https://phreshhhhh.github.io/taticcore/tactics_core.swf" },
      { title: "Mario Star Catcher", src: "https://phreshhhhh.github.io/mariostarcatcher/mario-starcatcher-2.swf" },
      { title: "Full Metal Alc.", src: "https://phreshhhhh.github.io/fullmetalalc/fullmetalall" },


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