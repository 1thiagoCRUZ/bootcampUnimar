const product = [
    {
        id: 0,
        image: 'book-names/book-name1.webp',
        title: 'Livro 1',
    },

    {
        id: 1,
        image: 'book-names/book-name1.webp',
        title: 'Livro 2',
    },

    {
        id: 2,
        image: 'book-names/book-name1.webp',
        title: 'Livro 3',
    },

    {
        id: 3,
        image: 'book-names/book-name1.webp',
        title: 'Livro 4',
    },
];

const categorias = [...new Set(product.map((item) =>
    {return item}))]

    let i=0;

    document.getElementById('root').innerHTML = categorias.map((item)=>
    {
        var {image, title} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            
            <div class='bottom'>
            <p>${title}</p>`+
            "<button onclick='addtocart("+(i++)+")'>Adicionar ao carrinho</button>"+
            `</div>
            </div>`

        )
    }).join('');

var cart = [];



// var container = document.querySelector('.container-dois');

// // Crie os elementos HTML dinamicamente
// var welcomeText = document.createElement('div');
// welcomeText.classList.add('welcome-text');
// var h1 = document.createElement('h1');
// h1.textContent = 'Universitários e Acadêmicos';
// welcomeText.appendChild(h1);

// var swiperContainer = document.createElement('div');
// swiperContainer.classList.add('swiper', 'mySwiper');
// var swiperWrapper = document.createElement('div');
// swiperWrapper.classList.add('swiper-wrapper');

// // Crie 10 slides com botões
// for (var i = 0; i < 10; i++) {
//   var swiperSlide = document.createElement('div');
//   swiperSlide.classList.add('swiper-slide');

//   // Crie um botão para cada slide
//   var button = document.createElement('button');
//   button.textContent = 'Adicionar ao Carrinho';
//   button.classList.add('add-to-cart-button'); // Adicione uma classe para estilização

//   // Adicione um evento de clique ao botão
//   button.addEventListener('click', function() {
//     // Lógica para adicionar o item ao carrinho aqui
//     alert('Item adicionado ao carrinho!');
//   });

//   swiperSlide.appendChild(button);
//   swiperWrapper.appendChild(swiperSlide);
// }

// var swiperNavNext = document.createElement('div');
// swiperNavNext.classList.add('swiper-button-next', 'swiper-navBtn');

// var swiperNavPrev = document.createElement('div');
// swiperNavPrev.classList.add('swiper-button-prev', 'swiper-navBtn');

// var swiperPagination = document.createElement('div');
// swiperPagination.classList.add('swiper-pagination');

// // Adicione os elementos criados ao DOM
// swiperContainer.appendChild(swiperWrapper);
// swiperContainer.appendChild(swiperNavNext);
// swiperContainer.appendChild(swiperNavPrev);
// swiperContainer.appendChild(swiperPagination);

// container.appendChild(welcomeText);
// container.appendChild(swiperContainer);
// var swiperNavNext = document.createElement('div');
// swiperNavNext.classList.add('swiper-button-next', 'swiper-navBtn');

// var swiperNavPrev = document.createElement('div');
// swiperNavPrev.classList.add('swiper-button-prev', 'swiper-navBtn');

// var swiperPagination = document.createElement('div');
// swiperPagination.classList.add('swiper-pagination');

// // Adicione os elementos criados ao DOM
// swiperContainer.appendChild(swiperWrapper);
// swiperContainer.appendChild(swiperNavNext);
// swiperContainer.appendChild(swiperNavPrev);
// swiperContainer.appendChild(swiperPagination);

// container.appendChild(welcomeText);
// container.appendChild(swiperContainer);

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     centeredSlides: true,
//     spaceBetween: 30,
//     grabCursor: "true",
//     fade: "true",
//     loop: "true",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       520: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1000: {
//         slidesPerView: 4,
//       },
//     }
//   });