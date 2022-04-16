var aboutHeading = document.getElementById("aboutScrollContent");
const desktopContainer = document.getElementById("desktopContainer");
const displayContainer = document.getElementById("mainContentHome");

var aboutText = [
  "Hello! I'm Gabriel.",
  "I'm a computer science student.",
  "I'm also a self-taught graphic designer.",
  "My goal is to craft fantastic web experiences.",
  "I am experienced in UI/UX, graphic design and front-end development.",
  "I have a variety of work to showcase in my <a class='about-link' href='https://gabriel-muresan.netlify.app/portfolio/'>portfolio</a>.",
  "Currently, I am looking for internships, learning opportunities and fantastic projects to work on.",
];
var counter = 1;

function displayEnd() {
  aboutHeading.innerHTML =
    "Got a great project in mind? <br>Let's get in <a class='about-link' href='https://gabriel-muresan.netlify.app/contact/'>contact</a>.<br>Visit my <a class='about-link' href='https://gabriel-muresan.netlify.app/portfolio/'>portfolio</a> for more.";
}

function change() {
  aboutHeading.classList.add("hidden");
  setTimeout(function () {
    aboutHeading.innerHTML = aboutText[counter];
    aboutHeading.classList.remove("hidden");
    counter++;
    if (counter > aboutText.length) {
      displayEnd();
    } else desktopContainer.addEventListener("wheel", change, { once: true });
  }, 500);
}

desktopContainer.addEventListener("wheel", change, { once: true });
