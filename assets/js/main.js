$('.sponsor-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2,
            nav:true,
            dots:false
        },
        600:{
            items:3,
            nav:true,
            dots:false
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
})
$('.customer-slide').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        600:{
            items:1,
            nav:true,
            dots:false
        },
        1000:{
            items:2,
            nav:true,
            dots:false,
            loop:false
        }
    }
})

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

var acc = document.getElementsByClassName("accordion");
var i;
var icon=document.querySelector(".icon-a")
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    var panel = this.nextElementSibling;
    
    if (panel.style.height === "" || panel.style.height==="0px") {
      panel.style.height = "70px";
      this.querySelector(".icon-a").style.transform="rotateX(180deg)"
    } else {
        console.log(panel.style.height);
      panel.style.height = "0px";
      this.querySelector(".icon-a").style.transform="rotateX(1800deg)"

    }
  })};
