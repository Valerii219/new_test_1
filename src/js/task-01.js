const categories = document.getElementById('categories')
console.log(`Number of categories ${categories.children.length}`);

const categories2 = document.querySelectorAll('.item');

console.dir(categories2.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.dir(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`)
}))