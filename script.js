const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const copyAll = document.querySelector(".input-box span");
const lengthSlider = document.querySelector(".pass-length input");
const displayLength = document.querySelector(".pass-length span");
const options = document.querySelectorAll(".option input")
const generateButton = document.querySelector(".generate-btn");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
  const passLength = lengthSlider.value;
  let staticPassword = "";
  let randomPassword = "";

  options.forEach(option => {
    if (option.checked) {
      if (option.id !== "exc-duplicate") {
        staticPassword += characters[option.id];
      } else {
        staticPassword += `  ${staticPassword}  `
      }
    }
  })

  for (let i = 0; i < passLength; i++) {
    randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)]
  }

  passwordInput.value = randomPassword
}

const updatePassIndicator = () => {
  passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 24 ? "medium" : "strong";
}

const updateSlider = (event) => {
  displayLength.innerText = event ? lengthSlider.value : 16
  if (!event) {
    lengthSlider.value = 16
  }
  generatePassword()
  updatePassIndicator()
}
updateSlider();

const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyAll.innerText = "check";
  setTimeout(() => {
    copyAll.innerText = "copy_all";
  }, 1500);
}

generateButton.addEventListener("click", generatePassword);
copyAll.addEventListener('click', copyPassword)
lengthSlider.addEventListener("input", updateSlider);