let sections = document.querySelectorAll(".section");
let inputs = document.querySelectorAll(".input");
function moveLeft() {
  if (inputs[0].checkValidity()) {
    document.querySelector(".wrapper").style.transform =
      "translateX(-548px)";
    sections[0].classList.toggle("hidden");
    sections[1].classList.toggle("hidden");
    inputs[0].className = "input";
  } else {
    inputs[0].className = "input alert";
  }
}
function moveRight() {
  document.querySelector(".wrapper").style.transform = "translateX(0px)";
  sections[0].classList.toggle("hidden");
  sections[1].classList.toggle("hidden");
}