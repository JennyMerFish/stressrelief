
async function getCats() {
    const catPicturesBox = document.querySelector(".cat-pictures");
    const catPictures = await fetch("https://cataas.com/cat?json=true");
    const catPicturesJson = await catPictures.json();
    const catPicture = document.createElement("img");
    catPicturesBox.innerHTML ="";
    catPicture.src = ("https://cataas.com" + catPicturesJson.url);
    catPicturesBox.append(catPicture);
    
}


const catButton = document.querySelector(".button");
catButton.addEventListener("click", () => getCats())
