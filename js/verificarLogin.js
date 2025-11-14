'use strict'

// Usando localStorage para cadastrar senha e manter no pc, sem servidor
let usuarioCadastrado = localStorage.getItem("usuario");   // pega login salvo
let senhaCadastrada = localStorage.getItem("senha");       // pega senha salva

// Seletores
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

// MOSTRAR/OCULTAR SENHA
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

// CADASTRAR NOVO LOGIN
botaoCadastrarlogin.addEventListener("click", function(){

    const regexSenha = /^\d{4}$/;       // senha deve ter 4 números
    const regexUsuario = /^[a-z]+$/;    // usuário só letras minúsculas

    // recebendo os valores
    usuarioCadastrado = campoCriarUsuario.value;
    senhaCadastrada = campoCriarSenha.value;

    // Validar formato dos campos
    if ( regexUsuario.test(usuarioCadastrado) && regexSenha.test(senhaCadastrada )) {

        // SALVAR NO LOCALSTORAGE → persiste no navegador
        localStorage.setItem("usuario", usuarioCadastrado);
        localStorage.setItem("senha", senhaCadastrada);

        alert("Cadastro Realizado com Sucesso!");
        janelaSc.close();

    } else { 

        // se usuário inválido
        if (!regexUsuario.test(usuarioCadastrado)) {
            alert("O login deve conter apenas letras minúsculas, sem caracteres especiais!");
        
        // se senha inválida
        } else if (!regexSenha.test(senhaCadastrada)) {
            alert("A senha deve ter exatamente 4 números!");

        }

        // limpar valores inválidos
        localStorage.removeItem("usuario");
        localStorage.removeItem("senha");

        usuarioCadastrado = null;
        senhaCadastrada = null;
    }

});

// LOGIN
botaoEntrar.addEventListener("click", function validarLogin(){

    // Comparar com o que está salvo (variáveis + localStorage)
    if ( campoUsuario.value === usuarioCadastrado && campoSenha.value === senhaCadastrada ) {

        // Login bem sucedido
        window.location.href = "perfil.html";

    } else if ( campoUsuario.value === "" && campoSenha.value === "" ) {

        // não faz nada se estiver vazio
        return;

    } else {

        // login errado → abre modal
        janelaSe.showModal();
    }

});

// fechar modal de erro
fecharSe.addEventListener("click", function(){
    janelaSe.close();
});

// RECUPERAR SENHA
botaoRecuperar.addEventListener("click", function(){
    janelaSe.close();
    consulSenha.value = "";
    mostrarSenha.textContent = "";
    janelaSr.showModal();
});

// ir para cadastro se não achar usuário
botaoIrCadastrar.addEventListener("click", function(){
    janelaSr.close();
    janelaSc.showModal();
});

// mostrar senha cadastrada
botaoVerSenha.addEventListener("pointerdown", function(){

    mostrarSenha.value = "";

    if ( consulSenha.value == usuarioCadastrado ) {

        // mostra senha salva
        mostrarSenha.textContent = senhaCadastrada;

    } else {

        alert ("Usuário não encontrado, cadastre um novo login!");
    }

});

// fechar janela recuperar senha
fecharSr.addEventListener("click", function(){
    janelaSr.close();
    consulSenha.value = "";
    mostrarSenha.value ="";
});

// ABRIR JANELA DE CADASTRO
botaoCadastrar.addEventListener("click", function(){
    campoCriarUsuario.value = "";
    campoCriarSenha.value = "";
    janelaSc.showModal();
});

// fechar janela de cadastro
fecharSc.addEventListener("click", function(){
    janelaSc.close();
});

// Verificar se está logado
function verificarLoginHeader() {
    const usuario = localStorage.getItem("usuario");
    const senha = localStorage.getItem("senha");

    const menuLogin = document.querySelector("#menu_login");      // div com botões de login/cadastro
    const saudacao = document.querySelector("#saudacao_usuario"); // div onde aparece "Olá, usuário"
    const perfil = document.querySelector("#perfil");      // div com botões de perfil
    const logoutBtn = document.querySelector("#logout");

    if (usuario && senha) {
        // Está logado → esconde menu_login e mostra saudação
        menuLogin.style.display = "none";
        saudacao.style.display = "block";
        perfil.style.display = "block";
        saudacao.textContent = "Olá, " + usuario + "!";

        logoutBtn.style.display = "block";

    } else {
        // Não logado → mostra menu_login e esconde saudação
        menuLogin.style.display = "flex";
        saudacao.style.display = "none";

        logoutBtn.style.display = "none";
    }
}

// Executar assim que a página carregar
window.addEventListener("load", verificarLoginHeader);

// Botão de logout
document.querySelector("#logout").addEventListener("click", function() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("senha");
    window.location.href = "index.html";
});

// Verificar se está logado pra acessar 'usuario'
function verificarLoginProtegido() {

    // Esconde tudo para evitar flash da página
    document.documentElement.style.display = "none";

    const usuario = localStorage.getItem("usuario");
    const senha = localStorage.getItem("senha");

    if (!usuario || !senha) {
        // Não logado → redireciona
        alert("Você não está logado para acessar está página!");
        window.location.href = "index.html";
    } else {
        // Logado → mostra conteúdo
        document.documentElement.style.display = "block";
    }
}
