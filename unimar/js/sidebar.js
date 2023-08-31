const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

//Carousel
const bullets = document.querySelectorAll(".bullets-carousel span");
const images = document.querySelectorAll(".image");
////////

      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
      });

      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else {
            modeText.innerText = "Dark Mode"
        }
      });


function moveSlider(index) {
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach(img => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach(bull => bull.classList.remove("active"));
  bullets[index - 1].classList.add("active");
}

let currentIndex = 1;

function autoMoveSlider() {
  if (currentIndex >= bullets.length) {
    currentIndex = 1; // Inicia tudo dnv após o ultimo
  } else {
    currentIndex++;
  }
  moveSlider(currentIndex);
}

let sliderInterval = setInterval(autoMoveSlider, 5000); // Move a imagem a cada 5s


bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    currentIndex = index + 1;
    moveSlider(currentIndex);
  });
});



