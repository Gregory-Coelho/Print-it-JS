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

const dots = document.getElementsByClassName("dot");
const rightArrow = document.getElementById("rightArrow");
const lefttArrow = document.getElementById("leftArrow");

let indexCarouselImage = 0;

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

const dotSelected = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_selected");
  }
  dots[indexCarouselImage].classList.add("dot_selected");
};

const changeTagLine = () => {
  const slideText = document.getElementById("tagLine");
  slideText.innerHTML = slides[indexCarouselImage].tagLine;
};

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
  dotSelected();
  changeTagLine();
};

rightArrow.addEventListener("click", () => {
  console.log({ clickDroit: "click droit" });
  changeCarouselImage(+1);
});

lefttArrow.addEventListener("click", () => {
  console.log({ clickGauchet: "click gauche" });
  changeCarouselImage(-1);
});

addDots();
