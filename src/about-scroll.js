var aboutHeading = document.getElementById("aboutScrollContent");
const desktopContainer = document.getElementById("desktopContainer");
const displayContainer = document.getElementById("mainContentHome");

var aboutText = [
  "Hello! I'm Gabriel.",
  "I'm a computer science student.",
  "I'm also a graphic designer.",
  "I am continously learning new things about the web.",
  "I am passionate and hard-working.",
  "Currently, I am looking for internships and learning opportunities.",
];
var counter = 1;

function displayEnd() {
  aboutHeading.innerHTML =
    "Love what you're seeing?<br>Let's get in <a class='about-link' href='https://gabriel-muresan.netlify.app/contact/'>contact</a>.";
}

function change() {
  aboutHeading.classList.add("hidden");
  setTimeout(function () {
    aboutHeading.innerHTML = aboutText[counter];
    aboutHeading.classList.remove("hidden");
    counter++;
    if (counter >= aboutText.length + 1) {
      displayEnd();
    }
  }, 500);
}

if (counter <= aboutText.length + 1) {
  desktopContainer.addEventListener("wheel", change);
} else {
  displayEnd();
}
