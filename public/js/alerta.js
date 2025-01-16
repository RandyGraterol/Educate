function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // Modo vertical
        document.body.classList.add('portrait');
        alert("Por favor, gira tu dispositivo a modo horizontal para una mejor experiencia.");
    } else {
        // Modo horizontal
        document.body.classList.remove('portrait');
    }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
checkOrientation(); // Llama a la función al cargar la página