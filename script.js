document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links").
        classList.toggle("nav-links-responsive")})

//carrusel
var images = [
        "imagenes/yo1.jpg",
        "imagenes/yo2.jpg",
        "imagenes/yo3.jpg",
        "imagenes/yo4.jpg"
];

// Obtiene la referencia a los elementos del carrusel
var carouselImage = document.getElementById("carousel-image");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

// Configura un índice inicial
var currentIndex = 0;

// Función para cambiar la imagen del carrusel
function changeImage() {
        // Actualiza la ruta de la imagen
        carouselImage.src = images[currentIndex];
}
// Función para ir a la imagen anterior
function goToPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage();
}

// Función para ir a la imagen siguiente
function goToNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage();
}

// Asigna los manejadores de eventos a los botones
prevButton.addEventListener("click", goToPreviousImage);
nextButton.addEventListener("click", goToNextImage);

// Inicia el carrusel con la primera imagen
changeImage();

//fin carrusel