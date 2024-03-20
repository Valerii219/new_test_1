const btn = document.querySelector(".widget button");
const span = document.querySelector(".widget span");
const body = document.querySelector("body");

// getRandomHexColor()
btn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = ` - ${color}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
