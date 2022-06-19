class Auth {
    constructor(){
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("auth");
        const user = JSON.stringify(localStorage.getItem("user"))
        this.validateAuth(auth, user);
    }

    validateAuth(auth) {
        if(auth != 1) {
            window.location.replace("/");
        }

        /** Mi pan era usar esto para verificar que este registrado **/
        /*if(user) {
            window.location.replace("/");
        }*/
        
        else{
            document.querySelector("body").style.display = "block";
        }
    }

    logOut(){
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
}