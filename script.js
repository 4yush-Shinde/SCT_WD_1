

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const videoBackground = document.getElementById("video-background");
    const backgroundVideo = document.getElementById("background-video");
    const body = document.body;

    toggleButton.addEventListener("click", function() {
        if (videoBackground.style.display === "none") {
            videoBackground.style.display = "block";
            backgroundVideo.play();
            body.classList.remove("show-image");
        } else {
            videoBackground.style.display = "none";
            backgroundVideo.pause();
            body.classList.add("show-image");
        }
    });
});

