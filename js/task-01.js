const list = document.querySelector('#categories');
console.log('Number of categories: ' + list.children.length);

const items = document.querySelectorAll('.item');

for (let item of items){
console.log('Category: ' + item.querySelector('h2').textContent);
console.log("Elements: " + item.querySelector('ul').children.length);
}
