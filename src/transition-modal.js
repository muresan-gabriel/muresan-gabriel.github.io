"use strict";

const loadingScreen = document.getElementById("loading");

setTimeout(function () {
  loadingScreen.style.opacity = "0";
  loadingScreen.addEventListener("transitionend", function (e) {
    loadingScreen.style.display = "none";
  });
}, Math.floor(Math.random() * 1500) + 1000);
