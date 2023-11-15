//Search Bar
const searchBtn = document.getElementById('search-btn');
const searchForm = document.querySelector("header .header-1 .search-form");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");    
})

//Login Form

const loginform = document.querySelector('.login-form-container');
const loginBtn = document.getElementById("login-btn");
const closeLoginForm = document.getElementById('close-login-form');

loginBtn.addEventListener("click", () => {
    loginform.classList.add("active");
});

closeLoginForm.addEventListener("click", () => {
    loginform.classList.remove("active");
})




//Sticky Navbar Code

window.onscroll = () => {

    searchForm.classList.remove("active");
    loginform.classList.remove("active");

    if(window.scrollY > 80){
        document.querySelector("header .header-2").classList.add("active");
    }else{
        document.querySelector("header .header-2").classList.remove("active");
    }

}

window.onload = () => {

    if(window.scrollY > 80){
        document.querySelector("header .header-2").classList.add("active");
    }else{
        document.querySelector("header .header-2").classList.remove("active");
    }

    fadeOut();

}

// Laoder Code

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader, 4500);
}


// Dark Mode Code

let darkMode = localStorage.getItem("darkmode");
const dark = document.getElementById("darkMode");
const body = document.querySelector("body");

const enableDarkMode = () => {
    body.classList.add("dark");
    dark.classList.add("fa-sun");
    dark.classList.remove("fa-moon");
    localStorage.setItem("darkmode", "enabled");
}
const disableDarkMode = () => {
    dark.classList.add("fa-moon");
    dark.classList.remove("fa-sun");
    body.classList.remove("dark");
    localStorage.setItem("darkmode", null);
}
if(darkMode === "enabled"){
    enableDarkMode();
}
dark.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkmode");
    if(darkMode !== "enabled"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});