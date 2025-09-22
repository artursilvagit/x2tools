const inputValorVenda = document.querySelector("#inputValorVenda")
const inputCusto = document.querySelector("#inputCusto")
const botaoEnviar = document.querySelector("form > input[type=button]")
const paragrafoResultado = document.querySelector("section#resultado p#resultado")
const sectionResultado = document.querySelector("section#resultado")
botaoEnviar.addEventListener("click", () => {
    paragrafoResultado.textContent = (Number(inputValorVenda.value) - Number(inputCusto.value) >= 0) ? `Vendas no valor de R$${Number(inputValorVenda.value)} com um custo de R$${Number(inputCusto.value)} geram um lucro de R$${Number(inputValorVenda.value) - Number(inputCusto.value).toFixed(2)}` : ("O custo foi maior que o valor da venda, portanto, não existe lucro.")
    sectionResultado.style.display = "block"
})