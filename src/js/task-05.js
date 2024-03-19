const input = document.getElementById("name-input");
console.dir(input);

const output = document.getElementById("name-output");
console.dir(output);

input.addEventListener("input", (e) => {
  if(e.currentTarget.value === ''){
 output.textContent = "Anonymous";
  }else{
    output.textContent = e.currentTarget.value;
  }
});
