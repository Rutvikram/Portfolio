const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 500)

})

function toggleClass() {
    var element = document.getElementById("tog");
    element.classList.toggle("open");
}

// const scrollTop = (click)=>{
//     window.scrollX 0;
//      click, smoothScrollX 
// } 