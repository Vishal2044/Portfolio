// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});



// Initialize GSAP ScrollTrigger with Locomotive Scroll
gsap.registerPlugin(ScrollTrigger);

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

// Scroll-triggered animations
const sections = [".about", ".skills", ".education", ".projects", ".contact"];
sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      scroller: "[data-scroll-container]",
      start: "top 90%",
      end: "top 40%",
      scrub: true,
    },
    opacity: 0,
    x: 300,
    duration: 1.5,
  });
});

// Scroll-triggered animations for list items
const listItems = [".skills li", ".education li"];
listItems.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      scroller: "[data-scroll-container]",
      start: "top 90%",
      end: "top 40%",
      scrub: true,
    },
    opacity: 0,
    x: 300,
    duration: 3,
  });
});
