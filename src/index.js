console.log('%c HI', 'color: firebrick')

function getDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => renderDogImages(json))    
}

function renderDogImages(json) {
    let imgSrcArray = json["message"]
    imgSrcArray.map(imgSrc => addDogImage(imgSrc))
}

function addDogImage(src) {
    let imageContainer = document.getElementById('dog-image-container')
    let image = document.createElement('img')
    image.src = src
    imageContainer.
}

document.addEventListener('DOMContentLoaded', ()=>{
    getDogImages()
})