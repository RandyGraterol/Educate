const imagenesSeparacion = [
    '/img/tutorialSeparacion/1.jpeg',
    '/img/tutorialSeparacion/2.jpeg',
    '/img/tutorialSeparacion/3.jpeg',
    '/img/tutorialSeparacion/4.jpeg',
    '/img/tutorialSeparacion/5.jpeg',
    '/img/tutorialSeparacion/6.jpeg'
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