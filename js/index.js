'use strict'

const campoUsuario = document.querySelector("#usuario");
const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");
const botaoEntrar = document.querySelector("#entrar");

botaoMostrar.addEventListener("pointerdown", function(){
    campoSenha.type = "text";
    botaoMostrar.style.color = "white";
});

botaoMostrar.addEventListener("pointerup", function(){
    campoSenha.type = "password";
    botaoMostrar.style.color = "var(--cor_secundaria)";
});

botaoMostrar.addEventListener("pointerout", function(){
    campoSenha.type = "password";
    botaoMostrar.style.color = "var(--cor_secundaria)";
});

botaoEntrar.addEventListener("click", function validarLogin(){

    const campoUsuario = document.querySelector("#usuario");
    const campoSenha = document.querySelector("#senha");

    if ( campoUsuario.value === "emerson" && campoSenha.value === "1234" ) {

        window.location.href = "galeria.html";

    } else if ( campoUsuario.value === "" && campoSenha.value === "" ) {

        return;

    } else {

        alert("Usuário ou senha incorreta!");

    };

});