const inputValorVenda = document.querySelector("#inputValorVenda")
const inputLucro = document.querySelector("#inputLucro")
const botaoEnviar = document.querySelector("form > input[type=button]")
const paragrafoResultado = document.querySelector("section#resultado p#resultado")
const sectionResultado = document.querySelector("section#resultado")
botaoEnviar.addEventListener("click", () => {
    paragrafoResultado.textContent = `Com base nos dados fornecidos, sua margem de lucro é ${(Number(inputLucro.value) / Number(inputValorVenda.value) * 100) || 0}%`
    sectionResultado.style.display = "block"
})