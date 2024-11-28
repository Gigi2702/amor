// Abrir la carta
function openLetter() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

// Ruleta del amor
const options = ["Un beso", "Un abrazo", "Una carta", "Un chocolate", "Una salida", "Una comida"];
function spinRoulette() {
    const result = options[Math.floor(Math.random() * options.length)];
    const rouletteResult = document.getElementById('roulette-result');
    rouletteResult.textContent = result;

    // Efecto de confeti de corazones
    createConfetti();
}

// Crear el confeti de corazones
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);

    // Efecto visual del confeti
    setTimeout(() => confetti.remove(), 2000); // Eliminar el confeti después de 2 segundos
}

// Función para iniciar la galería automática
function startSlideshow() {
    const images = document.querySelectorAll('.slideshow img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].style.display = 'none'; // Oculta la imagen actual
        currentIndex = (currentIndex + 1) % images.length; // Ciclo a la siguiente imagen
        images[currentIndex].style.display = 'block'; // Muestra la siguiente imagen
    }, 3000); // Cambia cada 3 segundos
}

// Iniciar la galería cuando la página cargue
window.onload = startSlideshow;
