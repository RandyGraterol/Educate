const imagenesSeparacion = [
    '/img/tutorialSeparacion/1.jpg',
    '/img/tutorialSeparacion/2.jpg',
    '/img/tutorialSeparacion/3.jpg',
    '/img/tutorialSeparacion/4.jpg',
    '/img/tutorialSeparacion/5.jpg',
    '/img/tutorialSeparacion/6.jpg',
    '/img/tutorialSeparacion/7.jpg'
];

document.addEventListener('DOMContentLoaded',()=>{

   const handleSlider = (vectorImagenes,image,siguiente,skip,ruta)=>{

let currentIndex = 0;

        // Función para mostrar la imagen actual
function showImage(index) {
    const imageElement = document.getElementById(image);
    imageElement.src = vectorImagenes[index];
}

        // Función para manejar el botón "Siguiente"
document.getElementById(siguiente).addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < vectorImagenes.length) {
        showImage(currentIndex);
    } else {
                // Redirigir al usuario a la plantilla final
                window.location.href = ruta; // Cambia esto a la ruta de tu plantilla
            }
        });

        // Función para manejar el botón "Omitir"
document.getElementById(skip).addEventListener('click', () => {
            // Redirigir al usuario a la plantilla final
            window.location.href = ruta; // Cambia esto a la ruta de tu plantilla
        });

        // Mostrar la primera imagen al cargar
showImage(currentIndex);
    
}

handleSlider(imagenesSeparacion,'imagenSeparacion','botonSiguienteSeparacion','botonSkipSeparacion','/juegoSeparacion');

});