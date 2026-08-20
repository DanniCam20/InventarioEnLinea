
const btnToggle = document.getElementById('btn-toggle');
const navLateral = document.getElementById('nav-lateral');

btnToggle.addEventListener('click', () => {
    // "toggle" agrega la clase si no existe, o la quita si ya existe
    navLateral.classList.toggle('oculto');
});

