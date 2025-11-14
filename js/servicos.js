'use strict'

const btTranca = document.querySelector("#btTranca");
const tranca = document.querySelector("#trancas");
const btLace = document.querySelector("#btLace");
const lace = document.querySelector("#lace");
const btApliqeu = document.querySelector("#btApliqeu");
const aplique = document.querySelector("#aplique");
const btManutencao = document.querySelector("#btManutencao");
const manutencao = document.querySelector("#manutencao");
const btHidro = document.querySelector("#btHidro");
const hidro = document.querySelector("#hidro");
const btCuidados = document.querySelector("#btCuidados");
const cuidados = document.querySelector("#cuidados");

btTranca.addEventListener("click", function(){
    tranca.showModal();
});

btLace.addEventListener("click", function(){
    lace.showModal();
});

btAplique.addEventListener("click", function(){
    aplique.showModal();
});

btManutencao.addEventListener("click", function(){
    manutencao.showModal();
});

btHidro.addEventListener("click", function(){
    hidro.showModal();
});

btCuidados.addEventListener("click", function(){
    cuidados.showModal();
});