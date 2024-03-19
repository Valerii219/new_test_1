const value = document.getElementById('value');

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrement.addEventListener("click", ()=> {
value.textContent = counterValue-=1;
})

increment.addEventListener("click", ()=> {
    value.textContent = counterValue+=1;
    })
    