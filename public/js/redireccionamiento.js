document.addEventListener('DOMContentLoaded', () => {
    const redirect = (selector, ruta) => {
        const boton = document.querySelector(selector);
        if (boton) { // Verifica que el botón no sea null
            boton.addEventListener('click', () => {
                window.location.href = ruta;
            });
        } else {
            console.warn(`No se encontró el elemento con el selector: ${selector}`);
        }
    }

    redirect('.boton', '/menu');
    redirect('.regresar', '/');
    redirect('.boton1', '/tutorialSeparacion');
    redirect('.boton2', '/tutorialSopa');
    redirect('.boton3', '/tutorialHiato');
    redirect('.menu', '/menu');
});