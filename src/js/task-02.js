const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients')


const ingredientsEl = 
ingredients.map((ingredient)=>{
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li; 
  
})

 list.append(...ingredientsEl);
console.log(list);