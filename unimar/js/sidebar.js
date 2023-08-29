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


function moveSlider() {
  let index = this.dataset.value;
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach(img => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach(bull => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach(bullet => {
  bullet.addEventListener("click", moveSlider);
})
