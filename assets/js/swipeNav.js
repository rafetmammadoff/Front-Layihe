let closeBtn=document.querySelector(".close")
let openBtn=document.querySelector(".open")
let swipeNav=document.querySelector(".swipe-nav")
closeBtn.addEventListener("click",function(){
    swipeNav.classList.toggle("opCl")
})
openBtn.addEventListener("click",function(){
    swipeNav.classList.toggle("opCl")
})