gsap.to(".loading-page-1 ",{
    top:0,
    delay:0.5,
    duration:0.5,
    ease:"expo.out",
})
gsap.to(".loading-page-2 ",{
    top:0,
    delay:0.8,
    duration:1,
    ease:"expo.out",
})
gsap.to(".loading-page-3",{
    top:0,
    delay:0.9,
    duration:1.5,
    ease:"expo.out",
})

// Navbar click 
var nav = document.querySelector("nav");
var menuNav = document.querySelector(".ri-menu-line");
var closeNav = document.querySelector(".ri-close-fill");

menuNav.addEventListener("click", function(){
    nav.style.top = "0%";
    menuNav.style.display = "none";
    closeNav.style.display = "initial";
})

closeNav.addEventListener("click", function(){
    nav.style.top = "-51.5%"
    menuNav.style.display = "initial";
    closeNav.style.display = "none";
})