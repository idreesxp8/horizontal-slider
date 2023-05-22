gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let sections = document.querySelectorAll(".hr-slider-item");
let scrollContainer = document.querySelector("#horizontal-slider");

//horizontal scroll
let scrollTween = gsap.to(scrollContainer, {
  x: () => -(scrollContainer.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: scrollContainer,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => "+=" + scrollContainer.scrollWidth,
  },
});
