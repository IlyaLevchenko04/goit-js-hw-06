let counterValue = 0;
const decrement = document.querySelector('button[data-action = "decrement"]');
const increment = document.querySelector('button[data-action = "increment"]');
const span = document.querySelector('#value');



const minus = () => {
    counterValue -= 1;
    span.innerHTML = `${counterValue}`;
    console.log(counterValue);
};

const plus = () => {
    counterValue += 1;
    span.innerHTML = `${counterValue}`;
    console.log(counterValue);
};

decrement.addEventListener('click', minus);
increment.addEventListener('click', plus);

