
function playSong() {
    let playSong = document.querySelector("audio");
    if (playSong.paused){
      playSong.play()
    }else{
     playSong.currentTime = 0
    }
};

