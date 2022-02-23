console.log("Devs always Inspect the code ;)\n\nHehe")

document.addEventListener('contextmenu', event => event.preventDefault());

window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });

  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});



  