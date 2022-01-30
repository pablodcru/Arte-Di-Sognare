//IDs PARA MOSTRAR LA IMAGEN GRANDE
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');

//CLASES PARA MOSTRAR LAS CAPTION CORRESPONDIENTES
const unoC = document.querySelector('.uno');
const dosC = document.querySelector('.dos');
const tresC = document.querySelector('.tres');
const cuatroC = document.querySelector('.cuatro');

//AND MORE
const displayed = document.querySelector('.displayed');
const gallery = document.querySelector('.gallery');
const menu = document.querySelector('.menu');
const closingButton = document.querySelector('.button');
const title = document.querySelector('.title');
const moveButtons = document.querySelector('.moveButtons');
const myDiv = document.getElementsByTagName("div");
const loader = document.querySelector('.loader');


let id;
let classy;
let classNum;



function getBigger(event) {

    //Para que el resto de elementos no aparezcan y se vea solo la foto, título y demás
    menu.classList.add('hidden');
    gallery.classList.add('hidden');


    //Cambiar de color el BG, OBJETIVO, personalizarlo para cada foto
    let bg = getComputedStyle(document.documentElement).getPropertyValue(`--${id}`);
    document.body.classList.add('animation');
    document.body.style.background = bg;

    //Loader
    loader.classList.remove('hidden');
    
    
    //Para hacer display en la foto
    const img = document.createElement('img');
    function displayPhoto() {
        img.setAttribute('src', `./fotos/${id}.png`);
        img.setAttribute('class', 'proving');
        displayed.appendChild(img);
    }


    //Creación del título en donde tenemos que clonar el html interno de figcap para poder posteriormente añadirlo y eliminarlo a nuestra merced
    const addTitle = document.querySelector(`.${id}`);
    const cloneTitle = addTitle.cloneNode(true);
    function displayTitle() {
        title.classList.remove('hidden');
        title.classList.add('flexing');
        Array.prototype.forEach.call(cloneTitle.children, element => {
            title.appendChild(element);
        });
    }
    

    //Crear boton de ir atrás y funcion de boton hacia atras
    const button = document.createElement('button');
    function displayBackButton () {
        button.classList.add('fas', 'fa-times');
        closingButton.appendChild(button);

    }
    

    //Crear botones de ir dcha/izq y funcion para mostrar los botones de movimiento
    const moveLeft = document.createElement('button');
    const moveRight = document.createElement('button');
    const iMoveLeft = document.createElement('i');
    const iMoveRight = document.createElement('i');
    function displayMoveButton() {
        moveLeft.appendChild(iMoveLeft);
        moveRight.appendChild(iMoveRight);
        moveButtons.appendChild(moveLeft);
        moveButtons.appendChild(moveRight);
    
        if ( id === 'uno' ) {
            iMoveRight.classList.add('fas', 'fa-caret-right');
        } else if ( id === 'veinte') {
            iMoveLeft.classList.add('fas', 'fa-caret-left');
        }else {
            iMoveRight.classList.add('fas', 'fa-caret-right');
            iMoveLeft.classList.add('fas', 'fa-caret-left');
        }
    }


    //Realizamos una llamada al timeout para que la transicion y la aparicion de los elementos sea pareja, antes se ponia muy de golpe los elementos y apenas se apreciaba la transicion
    setTimeout(function() {
        displayBackButton();
        displayPhoto();
        displayTitle();
        displayMoveButton();
        loader.classList.add('hidden');
    }, Math.floor(Math.random() * (500-100)+100));


    //Boton para ir a la foto previa. Lo hacemos restando uno a la clase actual, y localizamos el id del div que tiene esa clase, y cerramos la foto actual y llamamos a la foto anterior con el nuevo id
    function previousPhoto() {
        if ( classNum > 1 ){
            classNum = classNum - 1;
            for ( let i = 0; i < myDiv.length; i++){
                if( myDiv[i].classList.contains(classNum) ){
                    closePhoto();
                    id= myDiv[i].id;
                    getBigger();
                }
            }        
        }
    }


    //Boton para ir a la foto siguiente
    function nextPhoto() {
        if( classNum < 20 ){
            classNum = classNum + 1;
            for ( let i = 0; i < myDiv.length; i++){
                if( myDiv[i].classList.contains(classNum) ){
                    closePhoto();
                    id= myDiv[i].id;
                    getBigger();
                }
            }
        }
    }


    //Darle interactividad al boton de ir al menu
    function closePhoto() {
        /* for ( let i = titulaso.length - 1; i >= 0; i--) {
            title.removeChild(titulaso[i]); 
        };     
        console.log(titulaso); */
        title.innerHTML='';
        document.body.classList.remove('animation');
        document.body.style.background = "#202020";
        displayed.removeChild(img);
        //title.innerHTML = '';
        title.classList.add('hidden');
        closingButton.removeChild(button);
        moveButtons.removeChild(moveLeft);
        moveButtons.removeChild(moveRight);
        menu.classList.remove('hidden');
        gallery.classList.remove('hidden');
    }


    //Eventos
    closingButton.addEventListener('click', closePhoto);
    moveLeft.addEventListener('click', previousPhoto);
    moveRight.addEventListener('click', nextPhoto);

    //HAY QUE VERLO: MOVERLOS CON LAS FLECHAS
    /* document.addEventListener('keydown', (e) => {
        console.log('pressed!!');
        e = e || window.event;
        switch( e.key) {
            case 'ArrowLeft':
                previousPhoto();
                break;
            case 'ArrowRight':
                nextPhoto();
                break;
        };
        
    }); */
    
};







//Para conseguir localizar a que foto se pincha, y posteriormente utilizar el nombre de ese id para buscar la foto que se mostrara. Tambien localizamos la clase y la pasamos a number, de modo que podemos utilizar esto para jugar con la interactividad de las flechas.
function cmon(element) {
    id = element.id;
    classy = element.className;
    classNum = parseFloat(classy);

};


//Para llamar a la función una vez se ha definido el id; nose pq necesito meter el getBigger dentro de la arrow function, de otra manera, no funciona
gallery.addEventListener('click', () => {
    getBigger();
});




//tengo que poner las funciones closePhoto dentro de getBigger porque si la saco, el scope no alcanza y me dice que no reconoce img, por ejemplo.






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


//BORRADOR 2: chequeando el tipo para hacer la interactividad de las flechas
/*     if ( typeof classy === "string") {
        console.log('classy is a string');
    }else if( typeof classy === "number"){
        console.log('classy is a number and i appreciate it');
    } */
    //es un string

/*     if ( typeof reality === "string") {
        console.log('reality is a string');
    }else if( typeof reality === "number"){
        console.log('reality is a number and i appreciate it');
    }
    //ahora es un number*/


//BORRADOR 3: el título que me ha vuelto loco, cuando se itera con length es una propiedad dinámica y esta se deja algun children por ahí sin mostrar, no lo he conseguido resolver y se come la raya que aparece en la foto al hover, pero bueno, queda guay aun asi
/* title.classList.add("figcaption");
    title.append(oneC.textContent); */
    /*     let figCapId = `${id}C`;
        const prueba
        console.log(id); */


    /* for( let i = 0 ; i < jugamos.children.length; i++){
        j = jugamos.children[i];
        title.classList.add('flexing');
        title.appendChild(j);
    } */
    
    /* for ( let i = hijitos.length - 1; i >= 0; i--) {
        title.appendChild(hijitos[i]); 
    };
    console.log(title); */
    //titulaso = title.children;
    
    /* console.log(typeof(figCap), figCap.length); */
    /* let mod = figCap.map(function(element) {
        return title.appendChild(element);
    }); */


    /* for ( let i = 0; i <= figCap.length; i++) {
        console.log(i);
        title.appendChild(figCap[i]);   
        title.appendChild(figCap[i++]);
    }; */

     //console.log(prueba, tresC);
    //let figCap = prueba.children;     //poner el titulo para cada obre, signo dolar
    // is not a function title.append.innerHTML(jugamos);
