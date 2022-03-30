let aboutHeading = document.getElementById("aboutScrollContent");
const desktopContainer = document.getElementById("desktopContainer");
const displayContainer = document.getElementById("mainContentHome");

let aboutText = [
  "<a class='about-link' href='https://devlibproject.netlify.app/' target='_blank'>dev.lib</a> - Open Source Assets Platform",
  "<a class='about-link' href='https://www.instagram.com/p/CEUm6NNllag/' target='_blank'>Șincai Centenary</a> - High School 100th Anniversary Logo",
];
let counter = 1;

function change() {
  aboutHeading.classList.add("hidden");
  setTimeout(function () {
    aboutHeading.innerHTML = aboutText[counter];
    aboutHeading.classList.remove("hidden");
    counter++;
    desktopContainer.addEventListener("wheel", change, { once: true });
    if (counter > aboutText.length - 1) {
      counter = 0;
    }
  }, 500);
}

desktopContainer.addEventListener("wheel", change, { once: true });
