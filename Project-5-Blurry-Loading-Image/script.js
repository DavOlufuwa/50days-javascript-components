const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
// 30 milliseconds here
let int = setInterval(blurring , 30)

function blurring(){
    load++
    console.log(load)

    if(load > 99){
        clearInterval(int)
    }
    
    loadText.innerText = `${load}%`

    // To style the opacity within the same amount of time
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}