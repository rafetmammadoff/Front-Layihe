var prevScrollpos = window.pageYOffset;
var ul=document.querySelectorAll(".header .main-ul .nav-li")
var icons=document.querySelectorAll(".header .icons i")
console.log(icons);
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
   let minus= currentScrollPos - prevScrollpos
   console.log(minus,currentScrollPos);
    if (minus<0) {
        currentScrollPos=0
        prevScrollpos=0
    }
  if (minus>45) {
     document.querySelector('.header').style.position = 'sticky';
     document.querySelector('.header').style.backgroundColor = 'white';
     ul.forEach((li)=>{
        li.style.color="black"
     })
     icons.forEach((i)=>{
        i.style.color="black"
     })
  } else if(minus===0){
    document.querySelector('.header').style.position = 'absolute';
    document.querySelector('.header').style.backgroundColor = 'transparent';
    ul.forEach((li)=>{
        li.style.color="white"
     })
     icons.forEach((i)=>{
        i.style.color="white"
     })
  }

  
};