'use strict'

// Tranças
const btTranca = document.querySelector("#btTranca");
const fecharTranca = document.querySelector("#fecharTranca");
const tranca = document.querySelector("#trancas");

btTranca.addEventListener("click", () => tranca.showModal());
fecharTranca.addEventListener("click", () => tranca.close());

// Lace
const btLace = document.querySelector("#btLace");
const fecharLace = document.querySelector("#fecharLace");
const lace = document.querySelector("#lace");

btLace.addEventListener("click", () => lace.showModal());
fecharLace.addEventListener("click", () => lace.close());

// Aplique
const btAplique = document.querySelector("#btAplique");
const fecharAplique = document.querySelector("#fecharAplique");
const aplique = document.querySelector("#aplique");

btAplique.addEventListener("click", () => aplique.showModal());
fecharAplique.addEventListener("click", () => aplique.close());

// Manutenção
const btManutencao = document.querySelector("#btManutencao");
const fecharManutencao = document.querySelector("#fecharManutencao");
const manutencao = document.querySelector("#manutencao");

btManutencao.addEventListener("click", () => manutencao.showModal());
fecharManutencao.addEventListener("click", () => manutencao.close());

// Hidronutrição
const btHidro = document.querySelector("#btHidro");
const fecharHidro = document.querySelector("#fecharHidro");
const hidro = document.querySelector("#hidro");

btHidro.addEventListener("click", () => hidro.showModal());
fecharHidro.addEventListener("click", () => hidro.close());

// Cuidados
const btCuidados = document.querySelector("#btCuidados");
const fecharCuidados = document.querySelector("#fecharCuidados");
const cuidados = document.querySelector("#cuidados");

btCuidados.addEventListener("click", () => cuidados.showModal());
fecharCuidados.addEventListener("click", () => cuidados.close());
