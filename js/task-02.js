const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = [];

const list = document.querySelector('#ingredients');

const liEl = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  arr.push(li);
  return list;
 });


list.append(...arr);
console.log(liEl);












