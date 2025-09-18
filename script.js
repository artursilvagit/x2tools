const h2 = document.querySelector("h2")
const linhaH2 = document.querySelector("#linhaH2")
h2.addEventListener("mouseenter", () => {
    linhaH2.style.backgroundColor = "red"
})
h2.addEventListener("mouseout", () => {
    linhaH2.style.backgroundColor = "black"
})