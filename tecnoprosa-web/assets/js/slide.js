const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showSlide(index) {
  // Oculta todas las imágenes
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  // Muestra la imagen actual
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mostrar la primera imagen
showSlide(currentSlide);
// Cambiar a la siguiente imagen cada 5 segundos
setInterval(nextSlide, 5000);
