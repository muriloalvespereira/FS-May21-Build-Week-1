let audios = {
    file: "",
    cover:"",
    name:"",

}
function playAudio(event){
    
    event.currentTarget.parentNode.querySelector("audio").play();
   audios.file = event.currentTarget.parentNode.querySelector("audio").getAttribute("src")
   audios.cover = event.currentTarget.parentNode.querySelector(".img-thumb").getAttribute("src")
   audios.name = event.currentTarget.parentNode.querySelector(".album-names").innerText
   updateBottomBat();
}
