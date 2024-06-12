"use strict";

// Register GSAP customeease and flip plugin
gsap.registerPlugin(CustomEase, Flip);
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");

CustomEase.create("ease-in-quad", "0.55,0.085,0.68,0.53");
CustomEase.create("ease-in-cubic", "0.55,0.055,0.675,0.19");
CustomEase.create("ease-in-quart", "0.895,0.03,0.685,0.22");
CustomEase.create("ease-in-quint", "0.755,0.05,0.855,0.06");
CustomEase.create("ease-in-expo", "0.95,0.05,0.795,0.035");
CustomEase.create("ease-in-circ", "0.6,0.04,0.98,0.335");
CustomEase.create("ease-out-quad", "0.25,0.46,0.45,0.94");
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");
CustomEase.create("ease-out-quart", "0.165,0.84,0.44,1");
CustomEase.create("ease-out-quint", "0.23,1,0.32,1");
CustomEase.create("ease-out-expo", "0.19,1,0.22,1");
CustomEase.create("ease-out-circ", "0.075,0.82,0.165,1");
CustomEase.create("ease-in-out-quad", "0.455,0.03,0.515,0.955");
CustomEase.create("ease-in-out-cubic", "0.645,0.045,0.355,1");
CustomEase.create("ease-in-out-quart", "0.77,0,0.175,1");
CustomEase.create("ease-in-out-quint", "0.86,0,0.07,1");
CustomEase.create("ease-in-out-expo", "1,0,0,1");
CustomEase.create("ease-in-out-circ", "0.785,0.135,0.15,0.86");

window.addEventListener("DOMContentLoaded", initializeAnimation);

function initializeAnimation() {
  const pageloadTl = gsap.timeline();

  pageloadTl
    .to("#js-slide-up", {
      y: 0,
      stagger: 0.14,
      ease: "ease-out-cubic",
      delay: 1.5,
    })
    .to(
      ".wrapper .wrapper__header",
      {
        "--border-bottom-width": "100%",
        duration: 1.45,
        ease: "ease-in-out-cubic",
      },
      "<0.4"
    )
    .to(
      ".content__row",
      {
        y: 0,
        yPercent: 0,
        opacity: 1,
        stagger: {
          amount: 1.5,
        },
        ease: "Power1.out",
      },
      "<0.8"
    );

  return pageloadTl;
}

// Toggle the grid visualizer
document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key.toLowerCase() === "g") {
    document.querySelector(".overlay").classList.toggle("active");
  }
});

// Toggle Header content button navigation color
const headerBtns = document.querySelectorAll(".btns__item");

for (let i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener("click", function () {
    for (let i = 0; i < headerBtns.length; i++) {
      headerBtns[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// Lenis smooth scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
