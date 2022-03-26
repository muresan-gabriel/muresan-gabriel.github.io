var aboutHeading = document.getElementById("aboutScrollContent");
const desktopContainer = document.getElementById("desktopContainer");
const displayContainer = document.getElementById("mainContentHome");

var aboutText = [
  "<a class='about-link' href='https://devlibproject.netlify.app/' target='_blank'>dev.lib</a> - Open Source Assets Platform",
  "<a class='about-link' href='https://www.instagram.com/p/CEUm6NNllag/' target='_blank'>Șincai Centenary</a> - High School 100th Anniversary Logo",
];
var counter = 1;

function change() {
  aboutHeading.classList.add("hidden");
  setTimeout(function () {
    aboutHeading.innerHTML = aboutText[counter];
    aboutHeading.classList.remove("hidden");
    counter++;
    if (counter > aboutText.length - 1) counter = 0;
  }, 500);
}

desktopContainer.addEventListener("wheel", change);
