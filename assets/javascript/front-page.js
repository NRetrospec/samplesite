const video = document.getElementById('video');
const options = document.getElementById('options');

// Fade in the video
video.style.opacity = 1;

// Show options and hide the video when it ends
video.addEventListener('ended', function() {
    console.log("Video has ended, showing options.");
    video.style.display = 'none'; // Hide the video
    options.style.display = 'flex'; // Show the buttons
});

// Check if video is playing
video.addEventListener('play', function() {
    console.log("Video is playing.");
    options.style.display = 'none'; // Ensure options are hidden while video is playing
});

// Check for errors
video.addEventListener('error', function(e) {
    console.error("Error occurred while playing video:", e);
});
