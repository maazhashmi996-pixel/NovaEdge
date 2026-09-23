const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const contactForm = document.getElementById("contactForm");
const parallaxImg = document.querySelector(".hero-image-parallax img");
const parallaxBox = document.querySelector(".hero-image-parallax");

function updateParallax() {
    if (!parallaxImg || !parallaxBox) return;
    const rect = parallaxBox.getBoundingClientRect();
    const speed = 0.3;
    const offset = rect.top * speed;
    parallaxImg.style.transform = `translateY(calc(-50% + ${offset}px))`;
}

window.addEventListener("scroll", updateParallax);
window.addEventListener("resize", updateParallax);
updateParallax();

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

fileInput.addEventListener("change", () => {
    fileName.value = fileInput.files.length
        ? fileInput.files[0].name
        : "";
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
});