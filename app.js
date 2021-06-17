function addPlaylist(){
    let ul = document.getElementById('add-list')
    let list = document.createElement('li')
    list.textContent = 'My Playlist'
    
    ul.appendChild(list)
   
}