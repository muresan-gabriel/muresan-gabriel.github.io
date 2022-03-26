var workImage = document.getElementById("workImage");
var postName = document.getElementById("postName");
var stretchedLink = document.getElementById("stretchedLink");
var postSectionScroll = document.getElementById("postSectionScroll");
const desktopContainer = document.getElementById("desktopContainer");
const displayContainer = document.getElementById("mainContentHome");
var counter = 1;

var portfolioSrc = [
  "src/images/dev-lib-preview.png",
  "src/images/centenary-logo.jpg",
];
var postHrefs = [
  "https://devlibproject.netlify.app/",
  "https://www.instagram.com/p/CEUm6NNllag/",
];
var postDisplayNames = ["dev.lib", "Șincai Centenary"];

function change() {
  postSectionScroll.classList.add("hidden");
  setTimeout(function () {
    workImage.src = portfolioSrc[counter];
    stretchedLink.href = postHrefs[counter];
    postName.innerHTML = postDisplayNames[counter];
    postSectionScroll.classList.remove("hidden");
    counter++;
    if (counter >= portfolioSrc.length) {
      counter = 0;
    }
  }, 1000);
}

desktopContainer.addEventListener("wheel", change);
