const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++

    // to make currentActive not exceed excess
    if(currentActive > circles.length){
        currentActive = circles.length; 
    }

    update();
})

prev.addEventListener('click', ()=>{
    currentActive--

    // to make currentActive not exceed less
    if(currentActive < 1){
        currentActive = 1; 
    }

    update();
})

function update(){

    circles.forEach((circle,idx)=>{
        // if index of the circle is less than current active then we add the active class to it.
        // that means current active is starting from 1 and idx starts from 0
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
        
    })
    // to make the progress bar move
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length- 1) /(circles.length - 1) * 100 + '%';

    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
    
}
