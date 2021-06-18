
function togglePlay() {
    let MyAudio = document.querySelector("audio");

  MyAudio.paused ? MyAudio.play() : MyAudio.pause();
};
togglePlay()