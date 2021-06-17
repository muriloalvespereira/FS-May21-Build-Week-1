let clicks = 0
   
   function addPlaylist(){
    
        let ul = document.getElementById('add-list')
        clicks ++
        let list = document.createElement('li')
        
        list.textContent = `My Playlist # ${clicks}`
        
        ul.appendChild(list)
       
    }
    addPlaylist()
   

