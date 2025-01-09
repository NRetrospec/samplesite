document.addEventListener('DOMContentLoaded', function() {
    const gameList = document.getElementById('gameList');
    const gameTitleElement = document.querySelector('.gametitle');
    const gameEmbedElement = document.getElementById('gameEmbed');

    gameList.addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target;

        if (target.tagName === 'A') {
            const gameSrc = target.getAttribute('data-src');
            const gameTitle = target.getAttribute('data-title');

            // Update the game title
            gameTitleElement.textContent = gameTitle;

            // Update the game embed source
            gameEmbedElement.setAttribute('src', gameSrc);

            // Optionally, you can reload the embed to ensure it updates
           // gameEmbedElement.src = gameSrc;
        }
    });
});