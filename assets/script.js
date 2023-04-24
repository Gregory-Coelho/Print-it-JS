const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let indexCarouselImage = 0;
let numberOfDots = slides.length + 1;
let currentImage = slides[indexCarouselImage].image;
let currentTagLine = slides[indexCarouselImage].tagLine;
// let dots = document.getElementsByClassName("dot");
// let currentDots = document.querySelectorAll(".dot");

const rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", function () {
  changeCarouselImage(+1);
});

const lefttArrow = document.getElementById("lefttArrow");
lefttArrow.addEventListener("click", function () {
  changeCarouselImage(-1);
});

function changeCarouselImage(changeSlide) {
  currentSlide = currentSlide + changeSlide;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  document.getElementById("bannerImg").src =
    "./assets/images/slideshow/" + slides[currentSlide].image;
}
