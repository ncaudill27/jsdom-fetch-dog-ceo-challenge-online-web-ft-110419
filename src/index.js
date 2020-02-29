console.log('%c HI', 'color: firebrick')

function getDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => renderDogImages(json))    
}

function renderDogImages(json) {
    let imgSrcArray = json.message
    imgSrcArray.map(imgSrc => addDogImage(imgSrc))
}

function addDogImage(src) {
    let imageContainer = document.getElementById('dog-image-container')
    let image = document.createElement('img')
    image.src = src
    imageContainer.appendChild(image)
}

function getDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => renderDogBreeds(json.message))
}

function renderDogBreeds(breeds) {
    for (breed in breeds) {
        addDogBreed(breed)
    }
    // breeds.map(breed => addDogBreed(breed))
}

function addDogBreed(breed) {
    let breedContainer = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
}

document.addEventListener('DOMContentLoaded', ()=>{
    getDogImages()
    getDogBreeds()
})