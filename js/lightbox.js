const lightbox = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src; // Define a imagem clicada
        lightbox.classList.add('visible'); // Torna o Lightbox visível
        lightbox.classList.remove('hidden'); // Remove a classe "hidden"
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden'); // Esconde o Lightbox
    lightbox.classList.remove('visible'); // Remove a classe "visible"
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.classList.add('hidden'); // Esconde o Lightbox se clicar fora
        lightbox.classList.remove('visible');
    }
});