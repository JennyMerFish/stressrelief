const body = document.querySelector(".clearingbox")


async function getJokes(){
    body.innerHTML = "";

    const jokesBox = document.createElement("div");
    jokesBox.className = "jokesBox"
    
    const joke = document.createElement("h3")
    joke.className = "joke"
    
    const punchline = document.createElement("h3");
    punchline.className = "punchline"
    
    const jokeFetch = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const jokeFetchJson = await jokeFetch.json()

    joke.innerHTML = jokeFetchJson.setup
    punchline.innerHTML = jokeFetchJson.punchline

    jokesBox.append(joke, punchline)
    body.append(jokesBox)

}


const button = document.querySelector("button");
button.addEventListener("click", () => getJokes())
