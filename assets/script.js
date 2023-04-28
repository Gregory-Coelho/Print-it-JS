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
  // {
  //   image: "slide4.png",
  //   tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  // },
  // {
  //   image: "slide4.png",
  //   tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  // },
  // {
  //   image: "slide4.png",
  //   tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  // },
  // {
  //   image: "slide4.png",
  //   tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  // },
];

let indexCarouselImage = 0;

let numberOfDots = slides.length + 1;

let currentImage = slides[indexCarouselImage].image;

let currentTagLine = slides[indexCarouselImage].tagLine;

// let dots = document.getElementsByClassName("dot");
// let currentDots = document.querySelectorAll(".dot");

const rightArrow = document.getElementById("rightArrow");
const lefttArrow = document.getElementById("leftArrow");

rightArrow.addEventListener("click", function () {
  console.log({ clickDroit: "click droit" });
  changeCarouselImage(+1);
});

lefttArrow.addEventListener("click", function () {
  console.log({ clickGauchet: "click gauche" });
  changeCarouselImage(-1);
});

const addDots = () => {
  const dots = document.querySelector(".dots");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dots.appendChild(dot);
    dot.setAttribute("id", `slide${i}`);
    if (i == 0) {
      dots.children[i].classList.add("dot_selected");
    }
  }
};
addDots();

const changeCarouselImage = (changeSlide) => {
  indexCarouselImage = indexCarouselImage + changeSlide;
  if (indexCarouselImage > slides.length - 1) {
    indexCarouselImage = 0;
  }
  if (indexCarouselImage < 0) {
    indexCarouselImage = slides.length - 1;
  }
  document.getElementById("bannerImg").src =
    "./assets/images/slideshow/" + slides[indexCarouselImage].image;
};
