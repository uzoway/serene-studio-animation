"use strict";

// Register GSAP customeease and flip plugin
gsap.registerPlugin(CustomEase, Flip);
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");

// Animation for the works page
// function initializeAnimation() {}

// Run animation when dom is ready
// window.addEventListener("DOMContentLoaded", initializeAnimation);

// Toggle the grid visualizer
document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key.toLowerCase() === "g") {
    document.querySelector(".overlay").classList.toggle("active");
  }
});

// Lenis smooth scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
