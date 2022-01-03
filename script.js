const img1 = document.querySelector('.img1');
const container = document.querySelector('.clickcontainer');

function getBigger(event) {
    document.querySelector('body').style.opacity = "0.1";
    document.body.style.background = "#4e2f1b";
    container.children[0].classList.add('.img1click')
}

img1.addEventListener('click', getBigger)






/*BORRADOR 1: al pasar el raton por la imagen, que esta desaparezca y aparezca el fondo sólido de un color; hecho finalmente con hover

const modeOn = document.querySelector('img1on');
const modeOff = document.querySelector('img1off');
const img1 = document.querySelector('.img1');

function hideImage(event) {
    img1.children[0].classList.add('hidden');
}

function appearImage(event) {
    console.log(container.children)
    img1.children[0].classList.remove('hidden');
}


img1.addEventListener('mouseenter', hideImage)
img1.addEventListener('mouseleave', appearImage)*/
