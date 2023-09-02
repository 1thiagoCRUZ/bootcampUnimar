var container = document.querySelector('.container-dois');

var welcomeText = document.createElement('div');
welcomeText.classList.add('welcome-text');
var h1 = document.createElement('h1');
h1.textContent = 'Lançados Recentemente';
welcomeText.appendChild(h1);

var swiperContainer = document.createElement('div');
swiperContainer.classList.add('swiper', 'mySwiper');
var swiperWrapper = document.createElement('div');
swiperWrapper.classList.add('swiper-wrapper');

var livros = [
    {
        nome: 'O Sussurro nas trevas',
        imagem: 'img/books-names/book-name5.jpg',
    },

    {
        nome: 'O Encantador de Livros',
        imagem: 'img/books-names/book-name6.jpg',
    },

    {
        nome: 'Quarto de Despejo',
        imagem: 'img/books-names/book-name1.webp',
    },
    {
        nome: 'Rangers',
        imagem: 'img/books-names/book-name2.jfif',
    },
    {
        nome: 'A Menina que Roubava...',
        imagem: 'img/books-names/book-name3.jpg',
    },

    {
        nome: 'Harry Potter',
        imagem: 'img/books-names/book-name4.jfif',
    },

    {
        nome: 'O Caminho para...',
        imagem: 'img/books-names/book-name7.jpg',
    },

    {
        nome: 'A Espada de Shannara',
        imagem: 'img/books-names/book-name8.jpg',
    },

    {
        nome: 'O Príncipe dos Canalhas',
        imagem: 'img/books-names/book-name9.jfif',
    },

    {
        nome: 'O Casarão da rua sete',
        imagem: 'img/books-names/book-name9.png',
    },
];

for (var i = 0; i < livros.length; i++) {
  var livro = livros[i];

  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide', 'book-imagem');

  var img = document.createElement('img');
  img.src = livro.imagem;
  img.alt = livro.nome;
  img.classList.add('book-image');

  var estiloImagem = document.createElement('style');
  estiloImagem.textContent = '.book-image { width: 100%; height: 85%; object-fit: cover; F}';

  swiperSlide.appendChild(estiloImagem)
  swiperSlide.appendChild(img);

  var nomeLivro = document.createElement('p');
  nomeLivro.textContent = livro.nome;

  var button = document.createElement('button');
  button.textContent = 'Adicionar ao carrinho';
  button.classList.add('add-to-cart-button');

  button.addEventListener('click', function () {
    alert('Item adicionado ao carrinho!');
  });

  button.style.marginLeft = '8px';
  button.style.cursor = 'pointer';
  button.style.color = 'white'
  button.style.border = 'none';
  button.style.backgroundColor = '#0072bc'
  button.style.padding = '3px';
  button.style.borderRadius = '3px'

  button.style.zIndex = '1';

  swiperSlide.appendChild(button);

  swiperWrapper.appendChild(swiperSlide);
}

var swiperNavNext = document.createElement('div');
swiperNavNext.classList.add('swiper-button-next', 'swiper-navBtn');

var swiperNavPrev = document.createElement('div');
swiperNavPrev.classList.add('swiper-button-prev', 'swiper-navBtn');

var swiperPagination = document.createElement('div');
swiperPagination.classList.add('swiper-pagination');

swiperContainer.appendChild(swiperWrapper);
swiperContainer.appendChild(swiperNavNext);
swiperContainer.appendChild(swiperNavPrev);
swiperContainer.appendChild(swiperPagination);

container.appendChild(welcomeText);
container.appendChild(swiperContainer);

///////////////////

var container = document.querySelector('.container-quatro');

var welcomeText = document.createElement('div');
welcomeText.classList.add('welcome-text');
var h1 = document.createElement('h1');
h1.textContent = 'Livros Acadêmicos';
welcomeText.appendChild(h1);

var swiperContainer = document.createElement('div');
swiperContainer.classList.add('swiper', 'mySwiper');
var swiperWrapper = document.createElement('div');
swiperWrapper.classList.add('swiper-wrapper');

var livros = [
    {
        nome: 'O Sussurro nas trevas',
        imagem: 'img/books-names/book-name5.jpg',
    },

    {
        nome: 'O Encantador de Livros',
        imagem: 'img/books-names/book-name6.jpg',
    },

    {
        nome: 'Quarto de Despejo',
        imagem: 'img/books-names/book-name1.webp',
    },
    {
        nome: 'Rangers',
        imagem: 'img/books-names/book-name2.jfif',
    },
    {
        nome: 'A Menina que Roubava...',
        imagem: 'img/books-names/book-name3.jpg',
    },

    {
        nome: 'Harry Potter',
        imagem: 'img/books-names/book-name4.jfif',
    },

    {
        nome: 'O Caminho para...',
        imagem: 'img/books-names/book-name7.jpg',
    },

    {
        nome: 'A Espada de Shannara',
        imagem: 'img/books-names/book-name8.jpg',
    },

    {
        nome: 'O Príncipe dos Canalhas',
        imagem: 'img/books-names/book-name9.jfif',
    },

    {
        nome: 'O Casarão da rua sete',
        imagem: 'img/books-names/book-name9.png',
    },
];

for (var i = 0; i < livros.length; i++) {
  var livro = livros[i];

  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide', 'book-imagem');

  var img = document.createElement('img');
  img.src = livro.imagem;
  img.alt = livro.nome;
  img.classList.add('book-image');

  var estiloImagem = document.createElement('style');
  estiloImagem.textContent = '.book-image { width: 100%; height: 85%; object-fit: cover; F}';

  swiperSlide.appendChild(estiloImagem)
  swiperSlide.appendChild(img);

  var nomeLivro = document.createElement('p');
  nomeLivro.textContent = livro.nome;

  var button = document.createElement('button');
  button.textContent = 'Adicionar ao carrinho';
  button.classList.add('add-to-cart-button');

  button.addEventListener('click', function () {
    alert('Item adicionado ao carrinho!');
  });

  button.style.marginLeft = '8px';
  button.style.cursor = 'pointer';
  button.style.color = 'white'
  button.style.border = 'none';
  button.style.backgroundColor = '#0072bc'
  button.style.padding = '3px';
  button.style.borderRadius = '3px'

  button.style.zIndex = '1';

  swiperSlide.appendChild(button);

  swiperWrapper.appendChild(swiperSlide);
}

var swiperNavNext = document.createElement('div');
swiperNavNext.classList.add('swiper-button-next', 'swiper-navBtn');

var swiperNavPrev = document.createElement('div');
swiperNavPrev.classList.add('swiper-button-prev', 'swiper-navBtn');

var swiperPagination = document.createElement('div');
swiperPagination.classList.add('swiper-pagination');

swiperContainer.appendChild(swiperWrapper);
swiperContainer.appendChild(swiperNavNext);
swiperContainer.appendChild(swiperNavPrev);
swiperContainer.appendChild(swiperPagination);

container.appendChild(welcomeText);
container.appendChild(swiperContainer);




var carrinho = {
    itens: [],
};



function adicionarItemAoCarrinho(livro) {
    carrinho.itens.push(livro);


    var cartContent = document.getElementById('cartContent');


    var cartItemContainer = document.createElement('div');
    cartItemContainer.classList.add('cart-item');


    var img = document.createElement('img');
    img.src = livro.imagem;
    img.alt = 'Imagem do Livro';
    img.classList.add('cart-item-image');


    var itemName = document.createElement('p');
    itemName.textContent = livro.nome;
    itemName.classList.add('cart-item-name');

    var trashIcon = document.createElement('i');
    trashIcon.classList.add('bx', 'bx-trash', 'cart-item-trash-icon');


    trashIcon.addEventListener('click', function () {

        var index = carrinho.itens.indexOf(livro);
        if (index !== -1) {
            carrinho.itens.splice(index, 1);
            cartItemContainer.remove();
        }
    });


    cartItemContainer.appendChild(img);
    cartItemContainer.appendChild(itemName);
    cartItemContainer.appendChild(trashIcon);

    cartContent.appendChild(cartItemContainer);
}


var addToCartButtons = document.querySelectorAll('.add-to-cart-button');

addToCartButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        adicionarItemAoCarrinho(livros[index]);
    });
});





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: "true",
    fade: "true",
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    }
});