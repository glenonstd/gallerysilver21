"use strict";

const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const btntop = document.getElementById("btntop");

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 100);
  navbar.classList.toggle("navbar-scroll", window.scrollY > 100);
  btntop.classList.toggle("scroll", window.scrollY > 500);
});

btntop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

var watombol = bodymovin.loadAnimation({
  container: document.getElementById("watombol"), // required
  path: "https://assets4.lottiefiles.com/packages/lf20_hp7nfwft.json", // required
  renderer: "svg", // required
  loop: true, // optional
  autoplay: true, // optional
});
var ordernow = bodymovin.loadAnimation({
  container: document.getElementById("ordernow"), // required
  path: "https://assets7.lottiefiles.com/packages/lf20_jejpizop.json", // required
  renderer: "svg", // required
  loop: true, // optional
  autoplay: true, // optional
});
