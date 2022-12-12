const input = document.querySelector('#validation-input');

const symbols = (evt) => {
    let number = evt.currentTarget.value;
        if (number.length < 6){
            input.classList.add('invalid');
            input.classList.remove('valid');
        }else{
            input.classList.add('valid');
            input.classList.remove('invalid');
        }
};

input.addEventListener('blur', symbols);

