const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const dataLength = Number(input.dataset.length);
  let inputLength = input.value.length;
  if (inputLength === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
