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

    const regexSenha = /^\d{4}$/;
    const regexUsuario = /^[a-z]+$/;

    /* 
    regex = Uma regra ou padrão que a string precisa obedecer
    /.../ = espaço da regra que vai ser criado pra strig
    ^ = âncora de inicio, a "regra" começa a partir do 1º caractere digitado
    \d = só aceita número
    {4} = e precisa ter exatamente 4 números
    $ = a regra termina no último caractere
    [a-z] = aceita apenas letras de a até z em minusculo
    + = 1 ou mais caracteres, sem limite minimo ou maximo
    */

    usuarioCadastrado = campoCriarUsuario.value
    senhaCadastrada = campoCriarSenha.value

    if ( regexUsuario.test(usuarioCadastrado) && regexSenha.test(senhaCadastrada )) {
        // .test = um dos métodos do regex, ele apenas verifica se é falso ou verdadeiro

        alert("Cadastro Realizado com Sucesso!")
        janelaSc.close();

    } else { 

        if (!regexUsuario.test(usuarioCadastrado)) {

            alert("O login deve conter apenas letras minúsculas, sem caracteres especiais!");

        } else if (!regexSenha.test(senhaCadastrada)) {

            alert("A senha deve ter exatamente 4 números!");

        }

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
    consulSenha.value = "";
    janelaSr.showModal();
    mostrarSenha.textContent = "";

});

botaoIrCadastrar.addEventListener("click", function(){

    janelaSr.close();
    janelaSc.showModal();

});

botaoVerSenha.addEventListener("pointerdown", function(){

    mostrarSenha.value = "";

    if ( consulSenha.value == usuarioCadastrado ) {

        mostrarSenha.textContent = senhaCadastrada;

    } else {

        alert ("Usuario não encontrado, cadastre um novo login!");

    }

});

fecharSr.addEventListener("click", function(){
    janelaSr.close();
    consulSenha.value = "";
    mostrarSenha.value ="";
});

botaoCadastrar.addEventListener("click", function(){
    
    campoCriarUsuario.value = "";
    campoCriarSenha.value = "";
    janelaSc.showModal();
});

fecharSc.addEventListener("click", function(){
    janelaSc.close();


});