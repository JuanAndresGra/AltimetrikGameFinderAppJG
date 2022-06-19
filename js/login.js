const email = document.getElementById('email--login')
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class Login {
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit(){
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if(self.validateFields(input) == false) {
                    error++;
                }
                
            });
            if(error == 0) {
                var data = {
                    email: document.querySelector(`#email--login`).value,
                    password: document.querySelector(`#password--login`).value,
                };
            
                

                fetch("http://localhost:3000/login", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    },

                })
                

                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        
                        if(data.error){
                        console.error("Error:", data.message);
                        document.querySelector(".error-message-all").style.display = "block";
                        document.querySelector(".error-message-all").innerText = "Your password or email is incorrect, please try again.";
                        
                        }else{
                            localStorage.setItem("user", JSON.stringify(data));
                            localStorage.setItem("auth", 1);
                            this.form.submit();
                        }

                    })
                    .catch((data) => {
                        console.error("Error:", data.message);
                    })
            }
        });
    }

    validateFields(field) {
        if(field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.innerText} This field cannot be blank`,
                "error"
            );
            return false;
        }else{
            if(field.type == "password") {
                if( field.value.length < 6) {
                    this.setStatus(
                        field,
                        `${field.innerText} Min 6 digits`,
                        "error"
                    );
                    return false;
                }
                if( field.value.length > 15 ) {
                    this.setStatus(
                        field,
                        `${field.innerText} Max 15 digits`,
                        "error"
                    );
                    return false;
                } else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            }  
            
            if(field.type == "email") {
                if(!isEmail(email.value)) {
                    this.setStatus(
                        field,
                        `${field.innerText} Email is not valid`,
                        "error"
                    );
                    return false;
                }else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            }  
        }
    }

    setStatus(field, message, status){
        const errorMessage = field.parentElement.querySelector(".error-message");
        
        if(status == "success"){
            if(errorMessage){
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }

        if(status == "error"){
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }
}

const form = document.querySelector('.container--loggin__form');

if(form) {
    const fields = ["email--login", "password--login"];
    const validator = new Login(form, fields);
}

function isEmail(email) {
    return pattern.test(email);
}



/*const form = document.getElementById('form--login')

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
*/