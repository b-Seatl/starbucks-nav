// navegation
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    document.querySelector("body").classList.toggle("btn-scroll"); //oculta el scroll
});
