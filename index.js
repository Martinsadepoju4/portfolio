const about = document.querySelector(".dark-section");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".nav-li");
const logo = document.querySelector(".logo");
const button = document.querySelector(".nav-button");
const workbox = document.querySelector(".skills");
const skillbox = document.querySelectorAll(".skillbox-hover-content");
const tool = document.querySelectorAll(".tool");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerMenu = document.querySelector(".fa-bars-staggered");
const initialContent = document.querySelector(".original-page-content");
const loader = document.querySelector(".lds-hourglass");
let isImageReady = false;
let options = {
  root: null,
  threshold: 0.3,
  rootMargin: "-100px",
};
let intervalID;
intervalID = setInterval(() => {
  if (isImageReady) {
    initialContent.style.display = "block";
    loader.style.display = "none";
    clearInterval(intervalID);
  }
}, 1000);

const loadImage = (image) => {
  return new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = image;
    // wait 2 seconds to simulate loading time
    loadImg.onload = () =>
      setTimeout(() => {
        resolve(image);
      }, 100);

    loadImg.onerror = (err) => reject(err);
  });
};

loadImage(
  "https://plus.unsplash.com/premium_photo-1683309567673-1a16c6364057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
)
  .then(() => (isImageReady = true))
  .catch((err) => console.log("Failed to load images", err));

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("intercepting");
    skillbox.forEach((element) => element.classList.add("skillbox-animation"));
    tool.forEach((element) => element.classList.add("tool-animation"));
  }
}, options);
observer.observe(workbox);
// const isElementInTopViewport = (element) => {
//   const threshold = about.getBoundingClientRect().top;
//   const bottomThreshold = about.getBoundingClientRect().bottom;
//   const scrollPosition = window.scrollY || window.pageYOffset;
//   console.log("bottomThreshold", bottomThreshold);
//   console.log("scroll position", scrollPosition);
//   if (threshold <= 0) {
//     nav.classList.add("nav-in-dark-area");
//     links.forEach((element) => element.classList.add("nav-li-in-dark-area"));
//     console.log("Target div is at the top of the viewport");
//     logo.classList.add("logo-in-dark-area");
//   }
//   if (bottomThreshold <= 0) {
//     nav.classList.remove("nav-in-dark-area");
//     links.forEach((element) => element.classList.remove("nav-li-in-dark-area"));
//     logo.classList.remove("logo-in-dark-area");
//     console.log("Target div is totally above the viewport");
//   }
// };
const openMenu = () => {
  console.log("active");
  mobileNav.classList.remove("exit-anim");
  mobileNav.classList.add("show");
  mobileNav.classList.add("entrance-anim");
};
const closeMenu = () => {
  console.log("closed");
  mobileNav.classList.remove("entrance-anim");
  mobileNav.classList.add("exit-anim");
  // mobileNav.classList.remove("show");
};
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    nav.classList.add("nav-on-scroll");
    links.forEach((element) => element.classList.add("nav-li-on-scroll"));
    logo.classList.add("logo-on-scroll");
    button.classList.add("nav-button-on-scroll");
    hamburgerMenu.classList.add("white");
  }
  if (window.scrollY < 1) {
    nav.classList.remove("nav-on-scroll");
    links.forEach((element) => element.classList.remove("nav-li-on-scroll"));
    logo.classList.remove("logo-on-scroll");
    button.classList.remove("nav-button-on-scroll");
    hamburgerMenu.classList.remove("white");
  }
});
const jumpLinks = document.querySelectorAll('a[href^="#"]');

jumpLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
