const inputValorInicial = document.querySelector("#inputValorInicial")
const inputPorcentagem = document.querySelector("#inputPorcentagem")
const botaoEnviar = document.querySelector("form > input[type=button]")
const paragrafoResultado = document.querySelector("section#resultado p#resultado")
const sectionResultado = document.querySelector("section#resultado")
botaoEnviar.addEventListener("click", () => {
    paragrafoResultado.textContent = `${Number(inputPorcentagem.value)}% de ${Number(inputValorInicial.value)} é igual a ${((Number(inputPorcentagem.value) / 100) * Number(inputValorInicial.value)).toFixed(2)}`
    sectionResultado.style.display = "block"
})