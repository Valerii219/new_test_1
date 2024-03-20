function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => createBoxes(input.value));
destroy.addEventListener("click", () => {
  boxes.textContent = "";
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  const baseSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width =`${baseSize + i * 10}px`;
    div.style.height = `${baseSize + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}
