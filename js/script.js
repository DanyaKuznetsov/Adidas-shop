new Swiper(".swiper",{
    autoplay:{
        delay: 2000,
        disableOnInteraction:false,
        stopOnLastSlide:false,
    },
    speed: 1500, 
    effect: "flip",
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
        type:"bullets",
        clickable:true,
        dynamicBullets:true,
    },
    loop:true,
});

function menuOpen() {
    let hamburger = document.querySelector("#hamburger");
    let navElements = document.querySelector("#navElements")
    hamburger.onclick = function(){
        hamburger.classList.toggle("hamburger_active");
        navElements.classList.toggle("nav__elements_active")
    }
}
menuOpen();