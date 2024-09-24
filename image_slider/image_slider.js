let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
function nextSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}
function prevSlide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
setInterval(nextSlide, 1000); // Automatically move to the next slide every 3 seconds
