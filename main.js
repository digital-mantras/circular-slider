import "./style.css";
import $ from "jquery";
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { gsap } from "gsap";

// // Enable Swiper and modules

// // Calculate the angle between each image

// // Set the radius of the circle

let elements = [...document.querySelectorAll(".swiper-slide")];
// let circle = document.getElementsByClassName("circular-background")[0];
// var container = document.querySelector(".circular-background");
// var angleStep = (2 * Math.PI) / elements.length;
// circle.style.width = `60vw`;
// circle.style.height = `60vw`;
// var containerWidth = container.offsetWidth;
// var containerHeight = container.offsetHeight;
// var centerX = containerWidth / 2;
// var centerY = containerHeight / 2;
// let radius = centerX * 2;

window.onresize = function () {
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var centerX = containerWidth / 2;
  var centerY = containerHeight / 2;
  let radius = centerX * 2;
  let newElements = [...document.querySelectorAll(".circular-background img")];
  // newElements.forEach((e, i) => {
  //   var angle = i * angleStep;
  //   var x = centerX + Math.cos(angle) * radius;
  //   var y = centerY + Math.sin(angle) * radius;
  //   // Set the position of the image
  //   e.style.position = "absolute";
  //   e.style.left = x + "px";
  //   e.style.top = y + "px";
  //   e.style.width = "30%";
  //   e.style.transform = "translate(-50%,-50%)";
  // });
};
elements.forEach((e, i) => {
  let d_e = e.cloneNode(true).querySelector("img");
  let price = e.cloneNode(true).querySelector(".price");
  let name = e.cloneNode(true).querySelector("h3");
  // console.log();
  $("#rotatingContainer").append(`<div class="slide__container">
        <div class="slide">
          <img src="${d_e.src}" />
          <div class="details">
            <div class="title">${name.innerHTML}</div>
            <div class="price">${price.innerHTML}</div>
          </div>
        </div>
      </div>`);
  // circle.appendChild(d_e);
  // var angle = i * angleStep;
  // var x = centerX + Math.cos(angle) * radius;
  // var y = centerY + Math.sin(angle) * radius;
  // // Set the position of the image
  // d_e.style.position = "absolute";
  // d_e.style.left = x + "px";
  // d_e.style.top = y + "px";
  // d_e.style.width = "30%";
  // d_e.style.transform = "translate(-50%,-50%)";
});

Swiper.use([Navigation, Pagination]);

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  simulateTouch: false,
  speed: 100,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// let tl = gsap.timeline({ paused: true, ease: "none", repeat: -1 });
// tl.to(".circular-background", {
//   rotate: 360,
//   ease: "none",
// }).to(
//   ".circular-background img",
//   {
//     rotate: -360,
//     ease: "none",
//   },
//   "<"
// );
// Add event listeners to the navigation buttons
var nextButton = document.querySelector(".swiper-button-next");
var prevButton = document.querySelector(".swiper-button-prev");

nextButton.addEventListener("click", handleNextButtonClick);
prevButton.addEventListener("click", handlePrevButtonClick);
// let global = 1;
// let init = true;
// let t = gsap.timeline();
// Event handler for next button click
function handleNextButtonClick() {
  updateSlider("next");
  // Perform your desired actions here
  // var rotateValue;
  // if (!init) {
  //   rotateValue = (++global / elements.length) * 360;
  // } else {
  //   rotateValue = (global / elements.length) * 360;
  //   init = false;
  // }
  // console.log(rotateValue);
  // // gsap.to(tl, { progress: global++ / elements.length });
  // // console.log(tl.progress());
  // t.to(".circular-background", {
  //   rotate: -rotateValue,
  //   ease: "none",
  // }).to(
  //   ".circular-background img",
  //   {
  //     rotate: rotateValue,
  //     ease: "none",
  //   },
  //   "<"
  // );
  // Trigger other events or execute additional code
}

// Event handler for previous button click
function handlePrevButtonClick() {
  updateSlider("prev");
  // Perform your desired actions here
  // var rotateValue;
  // if (!init) {
  //   rotateValue = (--global / elements.length) * 360;
  // } else {
  //   global = -global;
  //   rotateValue = (global / elements.length) * 360;
  //   init = false;
  // }
  // console.log(rotateValue);
  // // gsap.to(tl, { progress: global++ / elements.length });
  // // console.log(tl.progress());
  // t.to(".circular-background", {
  //   rotate: -rotateValue,
  //   ease: "none",
  // }).to(
  //   ".circular-background img",
  //   {
  //     rotate: rotateValue,
  //     ease: "none",
  //   },
  //   "<"
  // );
  // Trigger other events or execute additional code
}

const slides = $(".slide__container");
var activeSlideIndex = 1;

for (let i = 0; i < slides.length; i++) {
  gsap.set(".slide__container", {
    opacity: 0,
  });
}

updateSlider(activeSlideIndex);

function updateSlider(way) {
  var slideOnLeft,
    slideOnRight,
    slideOnCenter,
    slideToLoad,
    SlideToLoadRotation,
    SlideToUnLoad,
    SlideToUnLoadRotation;

  if (way == "next") {
    activeSlideIndex++;
  } else if (way == "prev") {
    activeSlideIndex--;
  }
  updateIndex();

  slideOnCenter = slides[activeSlideIndex];

  if (activeSlideIndex === slides.length - 1) {
    slideOnRight = slides[0];
  } else {
    slideOnRight = slides[activeSlideIndex + 1];
  }

  if (activeSlideIndex === 0) {
    slideOnLeft = slides[slides.length - 1];
  } else {
    slideOnLeft = slides[activeSlideIndex - 1];
  }

  if (way == "next") {
    slideToLoad = slideOnRight;
    SlideToLoadRotation = -90;
    SlideToUnLoad = slides[activeSlideIndex - 2];
    SlideToUnLoadRotation = 90;
  } else if (way == "prev") {
    slideToLoad = slideOnLeft;
    SlideToLoadRotation = 90;
    SlideToUnLoad = slides[activeSlideIndex + 2];
    SlideToUnLoadRotation = -90;
  }

  if (activeSlideIndex === 0 && way == "next") {
    SlideToUnLoad = slides[slides.length - 2];
  }
  if (activeSlideIndex === 1 && way == "next") {
    SlideToUnLoad = slides[slides.length - 1];
  }
  if (activeSlideIndex === 0 && way == "prev") {
    SlideToUnLoad = slides[2];
  }
  if (activeSlideIndex === 1 && way == "prev") {
    SlideToUnLoad = slides[3];
  }
  if (activeSlideIndex === slides.length - 1 && way == "prev") {
    SlideToUnLoad = slides[1];
  }
  if (activeSlideIndex === slides.length - 2 && way == "prev") {
    SlideToUnLoad = slides[0];
  }

  $(".slide--active").removeClass("slide--active");
  $(slideOnCenter).addClass("slide--active");

  gsap
    .timeline()
    .to(SlideToUnLoad, {
      rotate: SlideToUnLoadRotation,
      opacity: 0,
    })
    .set(
      slideToLoad,
      {
        rotate: SlideToLoadRotation,
        opacity: 0,
      },
      "<"
    )
    .to(
      slideOnCenter,

      {
        opacity: 1,
        rotate: 0,
      },
      "<"
    )
    .to(
      slideOnLeft,

      {
        opacity: 1,
        rotate: 45,
      },
      "<"
    )
    .to(
      slideOnRight,

      {
        opacity: 1,
        rotate: -45,
      },
      "<"
    );
}

function updateIndex() {
  if (activeSlideIndex < 0) {
    activeSlideIndex = slides.length - 1;
  } else if (activeSlideIndex > slides.length - 1) {
    activeSlideIndex = 0;
  }
}

// $(".prev").click(function () {
//   updateSlider("prev");
// });
// $(".next").click(function () {
//   updateSlider("next");
// });
