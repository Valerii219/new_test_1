const refs = {
  inputEl: document.getElementById("font-size-control"),
  spanEl: document.getElementById("text"),
};

let inputValue = refs.inputEl.value;
refs.spanEl.style.fontSize = inputValue + "px";
refs.inputEl.addEventListener("input", (e) => {
    console.log(refs.spanEl.style.fontSize);

  refs.spanEl.style.fontSize = `${e.currentTarget.value}px`;
});
