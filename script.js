/* ============== Don't Touch These Lines ================= */

// ? the display
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const copyAll = document.querySelector(".input-box span");

// ? the sliders
const lengthSlider = document.querySelector(".pass-length input");
const displayLength = document.querySelector(".pass-length span");

// ? the options
const options = document.querySelectorAll(".option input")
const generateButton = document.querySelector(".generate-btn");

/* ============== Start Coding Here, Beuonda! ================= */

// ? let
// ? const

// symbols
const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~?_",
}

function hoalhb() {
    const lgov = lengthSlider.value;
    console.log(lgov);
}

function updateSlider() {
    displayLength.innerText = lengthSlider.value;
    hoalhb();
}

updateSlider();

lengthSlider.addEventListener("input", updateSlider);