const form = document.querySelector('.login-form');


function click (event){
    event.preventDefault();
    let info = {};
    const {
        elements : {email, password}
    } = event.currentTarget;
    if (email.value === '' || password.value === ''){
        alert('Fill all fields!');
    }else{
        info.email = email.value;
        info.password = password.value;
        console.log(info);
    }
    event.currentTarget.reset();
}

form.addEventListener('submit', click)