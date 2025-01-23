  // Array de imágenes del tutorial
const imagenesHiato = [
    '/img/tutorialHiato/1.jpg',
    '/img/tutorialHiato/2.jpg',
    '/img/tutorialHiato/3.jpg',
    '/img/tutorialHiato/4.jpg',
    '/img/tutorialHiato/5.jpg',
    '/img/tutorialHiato/6.jpg',
    '/img/tutorialHiato/7.jpg'
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

handleSlider(imagenesHiato,'image','next-button','skip-button','/juegoHiato');

});



