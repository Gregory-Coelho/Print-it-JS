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

const dots = document.getElementsByClassName("dot");
const rightArrow = document.getElementById("rightArrow");
const lefttArrow = document.getElementById("leftArrow");
const selectedDots = document.querySelectorAll(".dot");

let index = 0;

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
  dots[index].classList.add("dot_selected");
};

const changeTagLine = () => {
  const slideText = document.getElementById("tagLine");
  slideText.innerHTML = slides[index].tagLine;
};

const changeCarouselImage = (dir) => {
  index = index + dir;
  if (index > slides.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = slides.length - 1;
  }
  document.getElementById("bannerImg").src =
    "./assets/images/slideshow/" + slides[index].image;
  dotSelected();
  changeTagLine();
};

selectedDots.forEach((selectedDot) => {
  selectedDot.addEventListener("click", (event) => {
    document
      .querySelector(".dot.dot_selected")
      .classList.remove("dot_selected");
    event.target.classList.add("dot_selected");
    for (let i = 0; i < dots.length; i++) {
      if (event.target.id == `slide${i}`) {
        document.getElementById("slide").src =
          "./assets/images/slideshow/" + slides[i].image;
        document.getElementById("tagLine").innerHTML = slides[i].tagLine;
        return (index = i);
      }
    }
  });
});

rightArrow.addEventListener("click", () => {
  changeCarouselImage(+1);
});

lefttArrow.addEventListener("click", () => {
  changeCarouselImage(-1);
});

addDots();
