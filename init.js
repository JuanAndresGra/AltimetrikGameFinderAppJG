const auth = new Auth();

document.querySelector(".header__logOut").addEventListener("click", e =>{
    auth.logOut();
})