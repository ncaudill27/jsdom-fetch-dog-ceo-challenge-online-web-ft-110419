function getDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => renderDogImages(json))    
}

function renderDogImages(json) {
    const imgSrcArray = json.message
    imgSrcArray.map(imgSrc => addDogImage(imgSrc))
}

function addDogImage(src) {
    const imageContainer = document.getElementById('dog-image-container')
    const image = document.createElement('img')
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
}

function addDogBreed(breed) {
    const breedContainer = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.innerText = breed
    breedContainer.appendChild(li)
}

function arrayOfBreeds() {
    const dogList = document.querySelectorAll('ul > li')
    const dogArray = Array.from(dogList)
    const dogBreeds = dogArray.map(dog => {return dog.innerText})
    return dogBreeds
}

function matchFirstLetter(word, letter) {
    return word.charAt(0) === letter
}

function clearDogBreeds() {
    const breedContainer = document.getElementById('dog-breeds')
    while( breedContainer.firstChild ){
        breedContainer.removeChild( breedContainer.firstChild );
    }
}

function filter() {
    const dogs = arrayOfBreeds()
    const letter = document.getElementById('breed-dropdown').value
    const filtered = dogs.filter(function(dog) {
        return dog.charAt(0) === letter
    })
    clearDogBreeds()
    filtered.map(breed => addDogBreed(breed))
}

function handleFilterEvent() {
    const select = document.getElementById('breed-dropdown')
    select.addEventListener('change', ()=> {
        const restoreButton = document.createElement('button')
        restoreButton.innerHTML = "Restore"
        filter()
        select.insertAdjacentElement('afterend', restoreButton)
        restoreButton.addEventListener('click', ()=> {
            clearDogBreeds()
            getDogBreeds()
            restoreButton.remove()
            select.value = ''
        })
    })
}

function addEventListeners() {
    // Change Dog breed color on click event
    const breedContainer = document.getElementById('dog-breeds')
    breedContainer.addEventListener('click', function(evt) {
        if (evt.target && evt.target.matches('li')) {
            evt.target.style.color = 'lightblue'
        }
    })
    handleFilterEvent()
}

document.addEventListener('DOMContentLoaded', ()=>{
    getDogImages()
    getDogBreeds()
    addEventListeners()
})