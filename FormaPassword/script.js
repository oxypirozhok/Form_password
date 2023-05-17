"use strict";

let showBtn = document.querySelector(".password_button");
let showBtnImg = showBtn.querySelector("img");
let passwordInput = document.querySelector(".password_input");

showBtn.onclick = () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  showBtnImg.src = showBtnImg.src.includes("off")
    ? "images/eye.svg"
    : "images/eye-off.svg";
};
