document.addEventListener('contextmenu', event => event.preventDefault());

window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});



  