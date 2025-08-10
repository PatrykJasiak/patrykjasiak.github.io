function openLightbox(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("img-lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("img-lightbox").style.display = "none";
}

document.getElementById("img-lightbox").addEventListener("click", (e) => {
    if (e.target.id === "img-lightbox" || e.target.classList.contains("close-btn")) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});