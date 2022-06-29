'use strict';
function menuOpen() {
    const navbar = document.querySelector(".navbar");
    const loginbtn = document.querySelector("#login-btn");
    const menubtn = document.querySelector("#menu-icon");
    const menuIcon = document.querySelector("#menu-icon");
    if (menuIcon.classList.contains("fa-ellipsis-vertical")) {

        menubtn.classList.replace("fa-ellipsis-vertical", "fa-xmark");
        navbar.classList.add("small-navbar");
        loginbtn.classList.add("display-block");

    } else {

        navbar.classList.remove("small-navbar");
        loginbtn.classList.remove("display-block");
        menubtn.classList.replace("fa-xmark", "fa-ellipsis-vertical");
    }
}