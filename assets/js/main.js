$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})
let closeBtn=document.querySelector(".close")
let openBtn=document.querySelector(".open")
let swipeNav=document.querySelector(".swipe-nav")
closeBtn.addEventListener("click",function(){
    swipeNav.classList.toggle("opCl")
})
openBtn.addEventListener("click",function(){
    swipeNav.classList.toggle("opCl")
})
