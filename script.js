// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones con la clase 'mostrar-mas' utilizando el DOM
    const botonesMostrarMas = document.querySelectorAll('.mostrar-mas');

    // Iterar sobre cada botón y agregar un evento de clic
    botonesMostrarMas.forEach(function(boton) {
        boton.addEventListener('click', function() {
            // Seleccionar el párrafo de información adicional relacionado usando el DOM
            const infoAdicional = this.nextElementSibling;

            // Verificar el estado actual y alternar la visibilidad
            if (infoAdicional.style.display === 'none') {
                infoAdicional.style.display = 'block'; // Mostrar información adicional
                this.textContent = 'Mostrar Menos'; // Cambiar el texto del botón
            } else {
                infoAdicional.style.display = 'none'; // Ocultar información adicional
                this.textContent = 'Mostrar Más'; // Restaurar el texto original del botón
            }
        });
    });
});
