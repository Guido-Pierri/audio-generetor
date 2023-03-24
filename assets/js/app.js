"use strict";
fetch('http://localhost:8080/whitenoise')
    .then(response => response.blob())
    .then(blob => {
        const audio = new Audio(URL.createObjectURL(blob));
        // audio.addEventListener("canplaythrough", (event) => {
        //     /* the audio is now playable; play it if permissions allow */
            audio.play();
        // });
    })
    .catch(error => console.error(error));
// const whiteNoisePlayer = document.getElementById('white-noise-player');
// whiteNoisePlayer.pause();
