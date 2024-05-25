const header = document.querySelector("header");
let element = document.getElementById("tog");

window.addEventListener("scroll", async function () {
    await header.classList.toggle("sticky", window.scrollY > 500)
    element.classList.remove("open");
})

function toggleClass() {
    element.classList.toggle("open");
}
const btn = document.getElementById('smoothScroll');
btn.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));

