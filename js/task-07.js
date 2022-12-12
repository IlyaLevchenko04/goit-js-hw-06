const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


const font = (evt) => {
    let number = Number(evt.currentTarget.value);
    console.log(number);
    text.style.fontSize = `${number}px`;
};

input.addEventListener('input', font);

