var aboutHeading = document.getElementById("aboutScrollContent");
const desktopContainer = document.getElementById("desktopContainer");
const displayContainer = document.getElementById("mainContentHome");

var aboutText = [
  "Hello! I'm Gabriel.",
  "I'm a computer science student.",
  "I'm also a freelance graphic designer.",
  "At the moment, I work part-time at McDonald's as a Crew Trainer.",
  "I am continously learning new things about the web.",
  "I have a variety of work to showcase in my <a class='about-link' href='https://gabriel-muresan.netlify.app/portfolio/'>portfolio</a>.",
  "Currently, I am looking for internships and learning opportunities.",
  "I am experienced in Vanilla HTML / CSS / JS.",
  "I used Bootstrap 5.1 aswell to be familiar with UI frameworks.",
  "I am learning React.JS in the meantime.",
  "And I am familiarizing myself with other modern web technologies and frameworks.",
];
var counter = 1;

function displayEnd() {
  aboutHeading.innerHTML =
    "Feel free to <a class='about-link' href='https://gabriel-muresan.netlify.app/contact/'>contact</a> me for freelance work.<br>Visit my <a class='about-link' href='https://gabriel-muresan.netlify.app/portfolio/'>portfolio</a> for more.";
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
