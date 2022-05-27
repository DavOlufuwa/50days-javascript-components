// Json api "we will get our data from any api or your own backend api through a fetch api"
// it uses two ".then" 
// 1. .then(response => response.json())
// 2. .then(data=> console.log(data))


const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', dropJoke);

// generateJoke()

// // .then
// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept': 'Application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config
//         ).then(response => response.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }
// .then ends


// Async Await 

dropJoke();

async function dropJoke(){
    const config = {
        headers:{
            'Accept': 'Application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json();

    jokeEl.innerHTML = data.joke
}
// Async Await ends