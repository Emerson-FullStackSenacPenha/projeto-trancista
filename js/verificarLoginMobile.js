'use strict'

const logar = document.querySelector("#offcanvasRightLabel");
const fecharLogar = document.querySelector("#fecharLogar");

logar.addEventListener("click", () => {
    // abrir seu dialog
    document.getElementById("logarMobile").showModal();
});

fecharLogar.addEventListener("click", () => {
    document.getElementById("logarMobile").close();
});