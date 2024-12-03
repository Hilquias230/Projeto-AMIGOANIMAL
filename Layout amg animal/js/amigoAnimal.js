//Segunda versão do menu(atual)
const menu = document.querySelector('.nav-links');
const button = document.querySelector('.menu-toggle'); // Se você tiver um botão para alternar o menu

button.addEventListener('click', () => {
    menu.classList.toggle('active');
    button.classList.toggle('active');
});

//Primeira versão do menu
// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menu-toggle');

//     if (menuToggle) { //Verifica se o elemento existe na página atual
//         menuToggle.addEventListener('click', () => {
//             const navLinks = document.querySelector('.nav-links');
//             if (navLinks) {
//                 navLinks.classList.toggle('active');
//             }
//         });
//     }
// });



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


