// Array oggetti
const arrayItems = [
    {
        immagine: "img/01.jpg",
        titolo: "Svezia",
        testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },

    {
        immagine: "img/02.jpg",
        titolo: "Svizzera",
        testo: "Lorem ipsum",
    },

    {
        immagine: "img/03.jpg",
        titolo: "Gran Bretagna",
        testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },

    {
        immagine: "img/04.jpg",
        titolo: "Germania",
        testo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    },

    {
        immagine: "img/05.jpg",
        titolo: "Paradise",
        testo: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    },
]
console.log(arrayItems);


// Indice corrente immagine 
let imgCurrent = 0;

// Recupero dal dom lo slider_wrapper
const sliderWrapper = document.querySelector(".slider_wrapper");
// console.log(sliderWrapper);

// Recupero dal dom div controls_wrapper
const controlsWrapper = document.querySelector(".controls_wrapper");
// console.log(controlsWrapper);


// Ciclo arrayItems per stampare ad ogni giro le sue proprietà
for (let i = 0; i < arrayItems.length; i++) {

    // Creo il contenitore div item con tutte le propietà dell'arrayItems
    const sliderItem =  
    `<div class="item">
        <img src="${arrayItems[i].immagine}"/>                                                     
        <div class="description">
            <h1 class="title-item">${arrayItems[i].titolo}</h1>
            <p class="testo">${arrayItems[i].testo}</p>
        </div>
    </div>`;
    console.log(sliderItem);

    // Inserisco sliderItem nel dom all'interno del tag div sliderWrapper
    sliderWrapper.innerHTML += sliderItem;

    // Recupero il tag div item
    const itemActive = document.querySelector(".item");

    // Se imgCurrent che è 0 è uguale a i, aggiungo la classe active a itemActive
    if(imgCurrent == i) {
        itemActive.classList.add("active");
    }


    // Creo il contenitore div control_item con tutte le immagini di ogni oggetto presente nell'arrayItems
    const sliderControlItem =  
    `<div class="control_item">
        <img src="${arrayItems[i].immagine}"/>                                                     
    </div>`;
    controlsWrapper.innerHTML += sliderControlItem;

    // Recupero il tag div control_item
    const controlItemActive = document.querySelector(".control_item");

    // Se imgCurrent che è 0 è uguale a i, aggiungo la classe active a itemActive
    if(imgCurrent == i) {
        controlItemActive.classList.add("active-control");
    }

}


// Recupero dal dom il pulsante arrow up 
const imgPrev = document.querySelector(".arrow-up");
// console.log(imgPrev);

// Seleziono tutte le classi control item
const allControlItem = document.querySelectorAll(".control_item");
// console.log(allControlItem);

// Recupero dal dom tutte le classi item dallo sliderWrapper
const allSliderItem = document.querySelectorAll(".item");
// console.log(allSliderItem);

// Al clic del pulsante arrow down passo all'immagine precedente
imgPrev.addEventListener("click", function() {

    if (imgCurrent > 0) {
        allControlItem[imgCurrent].classList.remove("active-control");
        allSliderItem[imgCurrent].classList.remove("active");

        imgCurrent--;

        allControlItem[imgCurrent].classList.add("active-control");
        allSliderItem[imgCurrent].classList.add("active");

    }
    
})


// Recupero dal dom il pulsante arrow down
const imgNext = document.querySelector(".arrow-down");
// console.log(imgNext);

// Al clic del pulsante arrow up passo all'immagine successiva
imgNext.addEventListener("click", function() {

    
    if (imgCurrent < 4) {
        allControlItem[imgCurrent].classList.remove("active-control");
        allSliderItem[imgCurrent].classList.remove("active");

        imgCurrent++;

        allControlItem[imgCurrent].classList.add("active-control");
        allSliderItem[imgCurrent].classList.add("active");
    }

})
