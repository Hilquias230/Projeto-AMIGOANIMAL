let currentSlide = 0;

const moveSlide = (direction) => {
    const slides = document.querySelectorAll('.carrossel-container img');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Adiciona os eventos de clique para os botões
document.querySelector('.Ant').addEventListener('click', () => moveSlide(-1));
document.querySelector('.Prox').addEventListener('click', () => moveSlide(1));



// Seleciona o ícone do menu e o contêiner de navegação
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adiciona um evento de clique para alternar a visibilidade do menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
