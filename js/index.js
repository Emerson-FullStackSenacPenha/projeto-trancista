'use strict'

let usuarioCadastrado = null;
let senhaCadastrada = null;
const campoUsuario = document.querySelector("#usuario");
const campoSenha = document.querySelector("#senha");
const campoCriarUsuario = document.querySelector("#criarUsuario");
const campoCriarSenha = document.querySelector("#criarSenha");
const botaoMostrar = document.querySelector("#mostrar");
const botaoEntrar = document.querySelector("#entrar");
const botaoCadastrar = document.querySelector("#cadastrar");
const janelaSc = document.querySelector("#senhaCadastrar");
const botaoCadastrarlogin = janelaSc.querySelector("#cl");
const fecharSc = janelaSc.querySelector("#sc");
const janelaSe = document.querySelector("#senhaErrada");
const fecharSe = janelaSe.querySelector("#se");
const botaoRecuperar = document.querySelector("#esqueciSenha");
const janelaSr = document.querySelector("#senhaRecuperar");
const botaoIrCadastrar = document.querySelector("#irCadastro");
const fecharSr = document.querySelector("#sairRs");
const botaoVerSenha = document.querySelector("#mostrarSenha");
const mostrarSenha = document.querySelector("#verSenha");
const consulSenha = document.querySelector("#consultarSenha");

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

botaoCadastrarlogin.addEventListener("click", function(){

    usuarioCadastrado = campoCriarUsuario.value
    senhaCadastrada = campoCriarSenha.value

    if ( usuarioCadastrado && senhaCadastrada ) {

        alert("Cadastro Realizado com Sucesso!")
        janelaSc.close();

    } else {

        alert("Preencha usuário e senha!")
        usuarioCadastrado = null;
        senhaCadastrada = null;

    }

});

botaoEntrar.addEventListener("click", function validarLogin(){

    const campoUsuario = document.querySelector("#usuario");
    const campoSenha = document.querySelector("#senha");
    

    if ( campoUsuario.value === usuarioCadastrado && campoSenha.value === senhaCadastrada ) {

        window.location.href = "galeria.html";

    } else if ( campoUsuario.value === "" && campoSenha.value === "" ) {

        return;

    } else {

        janelaSe.showModal();

    };

});

fecharSe.addEventListener("click", function(){

    janelaSe.close();

});

botaoRecuperar.addEventListener("click", function(){

    janelaSe.close();
    janelaSr.showModal();

});

botaoIrCadastrar.addEventListener("click", function(){

    janelaSr.close();
    janelaSc.showModal();

});

botaoVerSenha.addEventListener("pointerdown", function(){

    if ( consulSenha.value == usuarioCadastrado ) {

        mostrarSenha.textContent = senhaCadastrada;

    } else {

        alert ("Usuario não encontrado, cadastre um novo login!");

    }

});

fecharSr.addEventListener("click", function(){
    janelaSr.close();
    consulSenha.value = "";
});

botaoCadastrar.addEventListener("click", function(){
    
    campoCriarUsuario.value = "";
    campoCriarSenha.value = "";
    janelaSc.showModal();
});

fecharSc.addEventListener("click", function(){
    janelaSc.close();


});