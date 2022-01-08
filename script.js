//IDs PARA MOSTRAR LA IMAGEN GRANDE
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');

//CLASES PARA MOSTRAR LAS CAPTION CORRESPONDIENTES
const oneC = document.querySelector('.uno');
const dosC = document.querySelector('.dos');
const tresC = document.querySelector('.tres');
const cuatroC = document.querySelector('.cuatro');

//AND MORE
const displayed = document.querySelector('.displayed');
const gallery = document.querySelector('.gallery');
const menu = document.querySelector('.menu');
const closingButton = document.querySelector('.button');
const title = document.querySelector('.title');



let id;


function getBigger(event) {

    //Cambiar de color el BG, OBJETIVO, personalizarlo para cada foto
    let bg = getComputedStyle(document.documentElement).getPropertyValue(`--${id}`);
    document.body.style.background = bg;

   //Para hacer display en la foto
    let img = document.createElement('img');
    img.setAttribute('src', `../fotos/${id}.png`);
    img.setAttribute('class', 'proving');
    displayed.appendChild(img);

    //Título
    /* title.classList.add("figcaption");
    title.append(oneC.textContent); */
    title.classList.remove('hidden');
    let figCapId = `${id}C`;
    let figCap = tresC.children;     //poner el titulo para cada obre, signo dolar
    console.log(figCapId, figCap, figCapId.children);
    for ( let i = figCap.length - 1; i >= 0; i--) {
        title.appendChild(figCap[i]);
    }

    /* for ( let i = 0; i <= figcap.length; i++) {
        console.log(figcap.length);
        console.log(i, figcap[i]);
        title.appendChild(figcap[i]);
    } */

    //Crear boton de ir atrás
    const button = document.createElement('button');
    button.textContent = 'X';
    closingButton.appendChild(button);
    
    //Para que el resto de elementos no aparezcan y se vea solo la foto, título y demás
    menu.classList.add('hidden');
    gallery.classList.add('hidden');


    //Darle interactividad al boton de ir atrás
    closingButton.addEventListener('click', () => {
        document.body.style.background = "#202020";
        displayed.removeChild(img);
        title.classList.add('hidden');
        closingButton.removeChild(button);
        menu.classList.remove('hidden');
        gallery.classList.remove('hidden');
    })
};



//Para conseguir localizar a que foto se pincha, y posteriormente utilizar el nombre de ese id para buscar la foto que se mostrara.
function cmon(element) {
    id = element.id;
}

//Para llamar a la función una vez se ha definido el id; nose pq necesito meter el getBigger dentro de la arrow function, de otra manera, no funciona
gallery.addEventListener('click', () => {
    getBigger();
})











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
