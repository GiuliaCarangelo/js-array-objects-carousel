const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const container = document.querySelector(".carousel-container");

container.innerHTML = `

<div class="wrapper-left" id="current-img-carousel">
<img src="./img/01.webp" class="spiderman-1" alt="spiderman image">
</div>
<div class="wrapper-right">
<img src="${ images[0].image}" alt="">
<img src="${ images[1].image}" alt="">
<img src="${ images[2].image}" alt="">
<img src="${ images[3].image}" alt="">
<img src="${ images[4].image}" alt="">
</div>

<button><i id="up-btn" class="fa-solid fa-chevron-up"></i></button>
<button><i id="down-btn" class="fa-solid fa-chevron-down"></i></button>
`


const nextButton = document.querySelector('#up-btn');

nextButton.addEventListener('click', function(){
    console.log('Up button has been clicked');

    images[image[0]].classList.remove('active');

    activeIndex = activeIndex + 1;

    images[activeIndex].classList.add('active');
});



const prevButton = document.querySelector('#down-btn');

prevButton.addEventListener('click', function(){
    console.log('Down button has been clicked');

    imageElements[activeIndex].classList.remove('active');

    activeIndex = activeIndex - 1;

    imageElements[activeIndex].classList.add('active');
});