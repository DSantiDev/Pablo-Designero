const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('nav');
const quitar = document.getElementById('quitar');


abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
 });

quitar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        nav.classList.remove('visible');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 550) {
        nav.classList.remove('visible');
} });