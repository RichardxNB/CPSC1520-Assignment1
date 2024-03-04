const albumCreator = document.querySelector('#album-form');
const albumTitle = document.querySelector('#album-title');
const albumDescription = document.querySelector('#album-description');
const albumArt = document.querySelector('#album-art');

album-title.addEventListener('input', onInputAlbumTitle);

function onInputAlbumTitle(e) {
      e.preventDefault();
        console.log(e.currentTarget.elements[]);
        
}

album-description.addEventListener('input', onInputAlbumDescription);

function onInputAlbumDescription(e) {
      e.preventDefault();
        
}

album-art.addEventListener('input', onSelectAlbumArt);

function onSelectAlbumArt(e) {
      e.preventDefault();
        
}
