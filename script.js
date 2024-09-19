// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// Optional: Sync Locomotive Scroll with GSAP's ScrollTrigger
scroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform
    ? 'transform'
    : 'fixed'
});

// Refresh Locomotive and ScrollTrigger after window update
ScrollTrigger.addEventListener('refresh', () => scroll.update());
ScrollTrigger.refresh();

// Add a "scrolled" class to the header when scrolling past 50px
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Function to change the header background color on scroll
function handleScroll() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(23, 21, 41, 0.7"; // Adjust the background color
  } else {
    header.style.backgroundColor = "transparent"; // Or the initial background color
  }
}

// Listen for the scroll event
window.addEventListener("scroll", handleScroll);

// Toggle Navigation Links on Menu Icon Click
const hamburgerIcon = document.getElementById("hamburger-icon");
const crossIcon = document.getElementById("cross-icon");
const navLinks = document.getElementById("nav-links");

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggleMenuIcons();
});

crossIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggleMenuIcons();
});

function toggleMenuIcons() {
  if (navLinks.classList.contains("show")) {
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "block";
  } else {
    hamburgerIcon.style.display = "block";
    crossIcon.style.display = "none";
  }
}

// Close the navbar when clicking anywhere outside
document.addEventListener("click", (e) => {
  if (!hamburgerIcon.contains(e.target) && !crossIcon.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("show");
    hamburgerIcon.style.display = "block";
    crossIcon.style.display = "none";
  }
});


// GSAP Animations
const tl = gsap.timeline();

tl.to("#hello", { opacity: 1, x: 0, duration: 0.6 })
  .to("#name", { opacity: 1, x: 0, duration: 0.2 }, "+=0.3")
  .to("#vishal", { opacity: 1, x: 0, duration: 0.2 }, "+=0.3")
  .to("#varotariya", { opacity: 1, x: 0, duration: 0.2 }, "+=0.3")
  .to("#web", { opacity: 1, x: 0, duration: 0.2 }, "+=0.3")
  .to("#developer", { opacity: 1, x: 0, duration: 0.2 }, "+=0.3");

// Refresh ScrollTrigger after page load
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

// Form Submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw5i3fLmsP5bFh_xCbAY6uuYpu8WLFKgLgIW4k2OYOhZXxnpM1TkCuO4A8ltmUX2uUa/exec";
const form = document.forms["submit-to-google-sheet"];
const notification = document.getElementById("notification");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      showNotification();
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

function showNotification() {
  notification.classList.add("active");
  setTimeout(function () {
    notification.classList.remove("active");
  }, 3000);
}

// cursor

document.addEventListener('mousemove', (e) => {
  const star = document.createElement('div');
  star.classList.add('star');
  document.body.appendChild(star);

  // Position the star at the mouse coordinates
  star.style.left = e.pageX + 'px';
  star.style.top = e.pageY + 'px';

  // Remove the star after the animation is done (1 second)
  setTimeout(() => {
      star.remove();
  }, 1000);
});
