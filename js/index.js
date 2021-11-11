// Adding Navbar --------------------------------------

import navbar from '../components/navbar.js'

    let navbar_section =  document.getElementById("navbar");
    navbar_section.innerHTML = navbar();

// Adding  Footer --------------------------------------

import footer from '../components/footer.js'

let footer_section = document.getElementById("footer");
footer_section.innerHTML = footer();

// Drop Down ------------------------------------------

let body = document.getElementById("main-one");

let f = document.getElementById("f");
let furniture = document.getElementById("furniture-dropdown");

f.addEventListener("mouseover", ()=>{
    furniture.style.display = "block";
    body.style.backgroundColor = "rgba(0,0,0,0.3)";
})

f.addEventListener("mouseout", ()=>{
    furniture.style.display = "none";
    body.style.backgroundColor = "white";
})

furniture.addEventListener("mouseover", ()=>{
    furniture.style.display = "block";
    body.style.backgroundColor = "rgba(0,0,0,0.3)";
})

furniture.addEventListener("mouseout", ()=>{
    furniture.style.display = "none";
    body.style.backgroundColor = "white";
})

let l = document.getElementById("l");
let living = document.getElementById("living-dropdown");

l.addEventListener("mouseover", ()=>{
    living.style.display = "block";
    body.style.backgroundColor = "rgba(0,0,0,0.3)";
})

l.addEventListener("mouseout", ()=>{
    living.style.display = "none";
    body.style.backgroundColor = "white";
})

living.addEventListener("mouseover", ()=>{
    living.style.display = "block";
    body.style.backgroundColor = "rgba(0,0,0,0.3)";
})

living.addEventListener("mouseout", ()=>{
    living.style.display = "none";
    body.style.backgroundColor = "white";
})

// SignIn/SignUp Modal -----------------------------------------

let profile = document.getElementById("profile");
let signinDiv = document.getElementById("signin-div");
let go_to_login = document.getElementById("go_to_login");
let go_to_register = document.getElementById("go-to-register");

profile.addEventListener("mouseover", () => {
    signinDiv.style.display = "block";
})

profile.addEventListener("mouseout", () => {
    signinDiv.style.display = "none";
})

let signin_div_btn = document.getElementById("signin-div-btn");
let signin_modal = document.getElementById("signin-modal");
let login_modal = document.getElementById("login-modal");
let close = document.getElementById("close");
let close1 = document.getElementById("close1");

signin_div_btn.addEventListener("click", () => {
    signin_modal.style.display = "block";
    body.style.backgroundColor = "rgba(0,0,0,0.13)";
})

close.addEventListener("click", () => {
    signin_modal.style.display = "none";
    body.style.backgroundColor = "white";
})

go_to_login.addEventListener("click", () => {
   login_modal.style.display = "block";
   body.style.backgroundColor = "rgba(0,0,0,0.13)";
})

go_to_register.addEventListener("click", () => {
    login_modal.style.display = "none";
    body.style.backgroundColor = "rgba(0,0,0,0.13)";
 })

close1.addEventListener("click", () => {
    login_modal.style.display = "none";
    signin_modal.style.display = "none";
    body.style.backgroundColor = "white";
})

// SignUp Function ---------------------------------------

function signup() {

    var data = document.getElementById('myform');

    let name = data.UnName.value;
    let mobile = data.UserNum.value;
    let email = data.mail.value;
    let password = data.psswrd.value;

    var info = {
        name,
        mobile,
        email,
        password
    }
    var arr;
    arr = localStorage.getItem('signup');

    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('signup'));
    }
    arr.push(info);

    localStorage.setItem('signup', JSON.stringify(arr));
    alert('You are Successfully Registered');
    window.location.href = "index.html"
}

// Log In Function -------------------------------------------

function login() {
    const data = JSON.parse(localStorage.getItem('signup'));
    let email = document.getElementById("mail1").value;
    let password = document.getElementById("psw1").value;

    for (var i = 0; i < data.length; i++) {
        let EMAIL = data[i].email;
        let PASSWORD = data[i].password;
        if (EMAIL === email && PASSWORD === password) {
            window.location.href = "index.html";
            return alert("LogIn Successful");
        }      
    }
    return alert("Invalid Credential");
}

// Slider ------------------------------------------------------

function slideShow() {

    const slider = ["https://ii2.pepperfry.com/media/wysiwyg/banners/promo_2x_221021_es.jpg",
        "https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_Web_28102021_2x.jpg",
        "https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_28102021_2x.jpg",
        "https://ii2.pepperfry.com/media/wysiwyg/banners/HB03_Web_28102021_2x.jpg",
        "https://ii2.pepperfry.com/media/wysiwyg/banners/HB04_Web_28102021_2x.jpg"];

    if (localStorage.getItem('apollo_slider') == null) localStorage.setItem('apollo_slider', JSON.stringify(slider));

    var slider_1 = document.getElementById('slider');
    var image = document.createElement('img');

    var i = 0;

    setInterval(function () {
        i = i % JSON.parse(localStorage.getItem('apollo_slider')).length;
        image.src = JSON.parse(localStorage.getItem('apollo_slider'))[i];
        slider_1.append(image);
        i++;
    }, 3000);

}

slideShow();
