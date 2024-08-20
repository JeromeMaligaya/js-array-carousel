//Check link
console.log('JS OK')

/*scaletta
1.recupero elemento dal dom
2.creo array sources
3.creo stringa images
4.
*/

// 1.recupero l'elemento dal Dom
const galleryIndex = document.getElementById('gallery');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');      
console.log(prevButton, nextButton)


//2.raccolta dati
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
    
// 3.lavorazione dati
// tramite template literal inizio a costruire la stringa per le immagini
let images = '';

for (let i=0; i < sources.length; i++){
    image = sources[i];
    images += `<img src="${image}" alt="picture-${i + 1}"> `;
}
console.log('stringa img', images);

// stampo in #gallery le stringhe create
galleryIndex.innerHTML += images;

// richiamo tutte le img presenti dentro #gallery
const imagesIndex = document.querySelectorAll('#gallery img');
console.log('imagesIndex' , imagesIndex);

// creo una variabile da concatenare, che farà apparire la img desiderata tramite una classe presente nel css (active)
let currentActive = 0;
imagesIndex[currentActive].classList.add('active');
console.log('imagesIndex[currentActive]',imagesIndex[currentActive],'currentActive', currentActive);
console.log('imagesIndex.length',imagesIndex.length);

// creo evento al click di nextButton
nextButton.addEventListener('click', function(){
    // rimuovo la classe active alla img corrente
    imagesIndex[currentActive].classList.remove('active');
    console.log('img remove active at nextBtn',imagesIndex[currentActive],'currentActive', currentActive);

    // incremento indice
    currentActive++;

    // creo una condizione per controllare se sono uscito dall'array con nextButton e per creare un loop
    if(currentActive === imagesIndex.length){
        currentActive = 0;
    }

    // aggiungo la classe active alla img successiva
    imagesIndex[currentActive].classList.add('active');
    console.log('img re-add active at nextBtn',imagesIndex[currentActive],'currentActive', currentActive);

})

// creo evento al click di prevButton
prevButton.addEventListener('click', function(){
    // rimuovo la classe active alla img corrente
    imagesIndex[currentActive].classList.remove('active');
    console.log('img remove active at prevBtn',imagesIndex[currentActive],'currentActive', currentActive);

    // decremento indice
    currentActive--;

    // creo una condizione per controllare se sono uscito dall'array con prevButton e per creare un loop inverso
    if(currentActive < 0){
        currentActive = imagesIndex.length - 1;
    }

    // aggiungo la classe active alla img successiva
    imagesIndex[currentActive].classList.add('active');
    console.log('img re-add active at prevBtn',imagesIndex[currentActive],'currentActive', currentActive);

})




    

// 4.generazione output
