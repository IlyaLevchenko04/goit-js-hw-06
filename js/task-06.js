const input = document.querySelector('input[data-length = "6"]');

const symbols = (evt) => {
    let number = evt.currentTarget.value;
        if (number.length != Number(input.dataset.length)){
            input.classList.add('invalid');
            input.classList.remove('valid');
        }else{
            input.classList.add('valid');
            input.classList.remove('invalid');
        }
};

input.addEventListener('blur', symbols);

