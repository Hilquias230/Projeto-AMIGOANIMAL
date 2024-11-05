let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel-container img');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
