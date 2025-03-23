const lightbox = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('visible');
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.classList.remove('visible');
    }
});