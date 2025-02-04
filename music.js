document.addEventListener("DOMContentLoaded", function () {
    let audio;

    // Check if audio already exists from previous page
    if (window.localStorage.getItem("musicPlaying")) {
        audio = document.getElementById("background-music");

        if (!audio) {
            audio = new Audio(window.localStorage.getItem("musicSrc"));
            audio.loop = true;
            audio.volume = 0.5;
            document.body.appendChild(audio);
        }
    } else {
        // First-time music setup
        audio = new Audio("music.mp3");
        audio.loop = true;
        audio.volume = 0.5;
        localStorage.setItem("musicPlaying", "true");
        localStorage.setItem("musicSrc", "music.mp3");
        document.body.appendChild(audio);
    }

    // Function to play music
    function playMusic() {
        if (audio.paused) {
            audio.play().catch(err => console.log("Autoplay blocked, waiting for user interaction."));
        }
    }

    // Play music on first interaction
    document.body.addEventListener("click", playMusic);

    // Play automatically if possible
    playMusic();
});
