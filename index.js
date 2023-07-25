const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 500)
    
})

var element = document.getElementById("tog");
function toggleClass() {
    element.classList.toggle("open");
}
const btn = document.getElementById('smoothScroll');
btn.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));


// var lastScrollTop; // This Varibale will store the top position

// navbar = document.querySelector('.navlist'); // Get The NavBar

// window.addEventListener('scroll',function(){
//  //on every scroll this funtion will be called
  
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   //This line will get the location on scroll
  
//   if(scrollTop > lastScrollTop){ //if it will be greater than the previous
//     navbar.style.left='1000px';
//     // navbar.style.left='0px';
//     // navbar.style.classList(".navlist");
//     //set the value to the negetive of height of navbar 
// }else{
//       element.classList.toggle("open");
//   }
  
  
//   lastScrollTop = scrollTop; //New Position Stored
// });


// window.addEventListener('scroll', function () {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         navbar.style.left = '1000px';
//     }
//     else {
//         navbar.style.top = '0';
//     }
//     lastScrollTop = scrollTop;
// });