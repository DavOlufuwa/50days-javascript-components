const boxes = document.querySelectorAll('.box')

// firing off an event when we scroll

window.addEventListener('scroll', checkBoxes)

checkBoxes();
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box =>{
        // getBoundingClientRect() returns DomRect describing the size of and element and shows its position relative to the viewport
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}