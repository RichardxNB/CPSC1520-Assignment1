const albumCreator = document.querySelector('#album-form');
const albumTitle = document.querySelector('#album-title');
const albumDescription = document.querySelector('#album-description');
const albumArt = document.querySelector('#album-art');


albumTitle.addEventListener('input', onInputAlbumTitle);

function onInputAlbumTitle(e) {
    e.preventDefault();
    const letterCount = e.currentTarget.value.length;
    if (letterCount > 15) {
        albumTitle.classList.add("is-invalid");
    }
    else {
        albumTitle.classList.remove("is-invalid");
    }
}
albumDescription.addEventListener('input', onInputAlbumDescription);

function onInputAlbumDescription(e) {
    e.preventDefault();
    const letterCount = e.currentTarget.value.length;
    if (letterCount > 30) {
        albumDescription.classList.add("is-invalid");
    }
    else {
        albumDescription.classList.remove("is-invalid");
    }

}

albumArt.addEventListener('change', onSelectAlbumArt);

function onSelectAlbumArt(e) {
    e.preventDefault();
    const value = e.currentTarget.value;
    if (value === ''){
        albumArt.classList.add("is-invalid");
    }
    else {
        albumArt.classList.remove("is-invalid");
    }
}
