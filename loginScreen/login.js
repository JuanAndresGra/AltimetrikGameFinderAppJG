const form = document.getElementById('form--login')

const email = document.getElementById('email--login')
const emailMesagge = document.getElementById("email--login--mesagge")

const pass = document.getElementById('password--login')
const passMesagge = document.getElementById("password--login--mesagge")

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const patternPass = /^.{6,15}$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();


    checkInputs();
})

function checkInputs() {
    //get the values form the inputs
    const emailValue = email.value
    const passValue = pass.value
    

    if(emailValue === '') {
        //show error 
        //add error class

        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");
    }else {
        //add success class
        setSuccessFor(email);
    }
    
    if(passValue === '') {
        setErrorFor(pass, "Password cannot be blank");
    }
    else if(!passwordLength(passValue)){
        setErrorFor(pass, "Password must contain 6 to 15 digits");
    }
    else{
        setSuccessFor(pass);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return pattern.test(email);
}

function passwordLength(pass) {
    return patternPass.test(pass);
}