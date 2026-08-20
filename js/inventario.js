// Selecciona todos los botones con esa clase
const botonesToggle = document.querySelectorAll('.btn-toggle');
const navLateral = document.getElementById('nav-lateral');

// Recorre cada botón y le asigna la función de abrir/cerrar
botonesToggle.forEach(boton => {
    boton.addEventListener('click', () => {
        navLateral.classList.toggle('oculto');
    });
});