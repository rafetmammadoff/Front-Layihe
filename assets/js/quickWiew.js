let quickBtns=document.querySelectorAll(".btn-quickview");
let quickSection=document.querySelector(".quickview-section")
let closeBtnQW=document.querySelector(".quickview-section .close")
let closeIcon=document.querySelector(".quickview-section .close .close-icon")
let qvArea=document.querySelector(".view-area")
let qvImg=document.querySelector(".quickview-img")
let qvTitle=document.querySelector(".product-title")
console.log(qvTitle);
let qvBrand=document.querySelector(".qv-brand")
let qvId=document.querySelector(".qv-id")
let qvPrice=document.querySelector(".qv-price")
let qvTaxi=document.querySelector(".qv-taxi")
quickBtns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        let imgs=this.parentElement.parentElement.querySelector(".main").getAttribute("src").split("/");
        let img=imgs[imgs.length-1]
        let id=this.parentElement.parentElement.parentElement.getAttribute("data-id")
        let name=this.parentElement.parentElement.querySelector(".name").innerText
        console.log(name);
        let price=this.parentElement.parentElement.querySelector(".price").innerText
        let brand=this.parentElement.parentElement.parentElement.getAttribute("brand")
        qvImg.src=`./assets/images/${img}`
        qvTitle.innerText=name;
        qvBrand.innerText=brand
        qvId.innerText=`Product ${id}`
        qvPrice.innerText=`${price} AZN`
        qvTaxi.innerText=`${Math.floor(price/100)*100} AZN`
        document.body.style.overflow="hidden"
        quickSection.style.display="flex"
    })
})

closeBtnQW.addEventListener("click",function(e){
    quickSection.style.display="none"
})
quickSection.addEventListener("click",function(e){
    console.log(e.target.offsetParent);
    e.stopPropagation()
    if (e.target.offsetParent != qvArea) {
        quickSection.style.display="none"
        document.body.style.overflow="auto"
    }
})