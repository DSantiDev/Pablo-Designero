const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const quitar = document.querySelector("#quitar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
quitar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
quitar.addEventListener("", () => {
    nav.classList.remove("visible");
})
