// https://dog.ceo/api/breeds/image/random
async function getDogs() {
    const imageBox = document.querySelector(".images");
    const image = await fetch("https://dog.ceo/api/breeds/image/random");
    const imageJson = await image.json();
    imageBox.src = imageJson.message
    
}

const img = document.querySelector(".images")
img.addEventListener("click", () => getDogs())
