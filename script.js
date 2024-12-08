// script.js
document.addEventListener("DOMContentLoaded", function() {
    const verMasBtn = document.getElementById("verMas");
    const texto = document.getElementById("texto");
    const mostrarImagenBtn = document.getElementById("mostrarImagenBtn");
    const miImagen = document.getElementById("miImagen");

    verMasBtn.addEventListener("click", function() {
        texto.classList.toggle("expandido");
        if (texto.classList.contains("expandido")) {
            verMasBtn.textContent = "Ver menos";
        } else {
            verMasBtn.textContent = "Ver más";
        }
    });

    mostrarImagenBtn.addEventListener("click", function() {
        if (miImagen.style.display === "none" || miImagen.style.display === "") {
            miImagen.style.display = "block";
            mostrarImagenBtn.textContent = "Ocultar Imagen";
        } else {
            miImagen.style.display = "none";
            mostrarImagenBtn.textContent = "Mostrar Imagen";
        }
    });
});
// script.js
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carouselImages = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");

    let index = 0;

    function showImage(index) {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", function() {
        index = (index > 0) ? index - 1 : images.length - 1;
        showImage(index);
    });

    nextButton.addEventListener("click", function() {
        index = (index < images.length - 1) ? index + 1 : 0;
        showImage(index);
    });

    // Desplazamiento automático
    setInterval(function() {
        index = (index < images.length - 1) ? index + 1 : 0;
        showImage(index);
    }, 3000); // Cambia de imagen cada 3 segundos
});


