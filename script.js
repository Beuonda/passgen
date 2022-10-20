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

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~?_",
    spaces: "   "
}

const generatePassword = () => {
    const passLength = lengthSlider.value;
    let staticPassword = "";
    let randomPassword = "";

    options.forEach((option) => {
        if (option.checked) {
            staticPassword += characters[option.id]
        }
    })

    for (let i = 0; i < passLength; i++) {
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)]
    }

    passwordInput.value = randomPassword
}

const updateSlider = () => {
    displayLength.innerText = lengthSlider.value;
    generatePassword();
}

updateSlider();

generateButton.addEventListener("click", generatePassword)
lengthSlider.addEventListener("input", updateSlider);