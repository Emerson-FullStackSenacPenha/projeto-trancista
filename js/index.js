'use strict'

const campoUsuario = document.querySelector("#usuario");
const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

botaoMostrar.addEventListener("pointerdown", function(){
    campoSenha.type = "text";
    botaoMostrar.style.backgroundColor = "white";
    botaoMostrar.style.color = "black";
});

botaoMostrar.addEventListener("pointerup", function(){
    campoSenha.type = "password";
    botaoMostrar.style.backgroundColor = "var(--cor_secundaria)"
    botaoMostrar.style.color = "white";
});

botaoMostrar.addEventListener("pointerout", function(){
    campoSenha.type = "password";
    botaoMostrar.style.backgroundColor = "var(--cor_secundaria)";
    botaoMostrar.style.color = "white";
});

function validarLogin(){

    const campoUsuario = document.querySelector("#usuario");
    const campoSenha = document.querySelector("#senha");

    if ( usuario === "emerson" && senha === "1234" ) {

        window.location.href = "galeria.html"

    } else {

        alert("Usuário ou senha incorreta!")

    }

}