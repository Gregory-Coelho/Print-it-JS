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
// Initialize index variable to "moove" into the array
let index = 0;

// Initialize dots variable (multiple dot)
let dots = document.getElementsByClassName("dot");

// Function addDots : add a number of dot equal to element in the array "slides"
const addDots = () => {
  const dots = document.querySelector(".dots");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dots.appendChild(dot);
    dot.classList.add("dot");
    dot.setAttribute("id", `slide${i}`);

    if (i == 0) {
      dots.children[i].classList.add("dot_selected");
    }
  }
};

// Function changeDot : change the background color of the current dot
const changeDot = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_selected");
  }
  dots[index].classList.add("dot_selected");
};

// Function changeTagLine : change the tagLine with the current index
const changeTagLine = () => {
  document.getElementById("tagLine").innerHTML = slides[index].tagLine;
};

// Function changeCarouselImage : change the image of the carousel
const changeCarouselImage = (dir) => {
  index = index + dir;
  if (index > slides.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = slides.length - 1;
  }
  document.getElementById(
    "bannerImg"
  ).src = `./assets/images/slideshow/${slides[index].image}`;
  changeDot();
  changeTagLine();
};

// Change the current index, use when you click on the right arrow
document.getElementById("rightArrow").addEventListener("click", () => {
  changeCarouselImage(+1);
});

// Change the current index, use when you click on the left arrow
document.getElementById("leftArrow").addEventListener("click", () => {
  changeCarouselImage(-1);
});

// You can click on a none selected dot to change the current dot (with images and tagline)
document.querySelectorAll(".dots").forEach((selectedDot) => {
  selectedDot.addEventListener("click", (event) => {
    document
      .querySelector(".dot.dot_selected")
      .classList.remove("dot_selected");
    event.target.classList.add("dot_selected");
    for (let i = 0; i < dots.length; i++) {
      if (event.target.id === `slide${i}`) {
        document.getElementById(
          "bannerImg"
        ).src = `./assets/images/slideshow/${slides[i].image}`;
        document.getElementById("tagLine").innerHTML = slides[i].tagLine;
        return (index = i);
      }
    }
  });
  // Add a mouseover to never have the pointer when a dot is selected
  selectedDot.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("dot_selected")) {
      event.target.style.cursor = "default";
    } else {
      event.target.style.cursor = "pointer";
    }
  });
});

addDots();
