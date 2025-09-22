//Pegando inputs:
const inputA = document.querySelector("#inputA");
const inputB = document.querySelector("#inputB");
const inputC = document.querySelector("#inputC");
const divIncognita = document.querySelector("#incognita")
const botaoEnviar = document.querySelector("input[type=button]");
let resultado = "";

//Adicionando evento quando o botão for clicado e executando a função com arrow function:
botaoEnviar.addEventListener("click", () => {
    resultado = (Number(inputC.value) * Number(inputB.value)) / Number(inputA.value)
    divIncognita.textContent = resultado || "inválido"
});
