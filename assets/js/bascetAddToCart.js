let buttons=document.querySelectorAll(".two-component .btn-card button")
let countArea=document.querySelector(".basket-count")
let bascetBtn=document.querySelector(".bascet")
let bascetDDMenu=document.querySelector(".bascet-dropdown-menu")


let tBody=document.querySelector(".tbody")
let priceArea=document.querySelector(".total-value")

let subTotalNav=document.querySelector(".sub-total-nav")
let taxiNav=document.querySelector(".taxi-nav")
let amountNav=document.querySelector(".amount-nav")
let secondNav=document.querySelector(".second")
let emptyCartText=document.querySelector(".emptyCartText")

bascetBtn.addEventListener("click",function(e){
    bascetDDMenu.classList.toggle("open-menu")
    let children=Array.from(bascetDDMenu.children)
    let total=0;
    children.forEach((child)=>{
        total+=child.clientHeight
    })
    if (bascetDDMenu.classList.contains("open-menu")) {
        bascetDDMenu.style.height=total+"px"
    }
    else{
        bascetDDMenu.style.height="0px"
    }
    
})





let basket;
let result=localStorage.getItem("basket");
if (!result) {
    localStorage.setItem("basket",JSON.stringify([]))
}


buttons.forEach((btn)=>{
    btn.addEventListener("click",function(){
        basket=JSON.parse(localStorage.getItem("basket")) || [];
        
        let imgs=this.parentElement.parentElement.querySelector(".main").getAttribute("src").split("/");
        let img=imgs[imgs.length-1]
        let id=this.parentElement.parentElement.parentElement.getAttribute("data-id")
        let name=this.parentElement.parentElement.querySelector(".name").innerText
        let price=this.parentElement.parentElement.querySelector(".price").innerText
        let existed=basket.find((item)=>{
            return item.id == id
        })
             
        if(!existed){
            let item={id,img,name,price,count:1}
            basket.push(item)
        }
        else{
            existed.count++;
        }
        localStorage.setItem("basket",JSON.stringify(basket))
        GetCount()
        GetPrice();
        AddToCard()
    })
})

GetCount()
GetPrice()
function GetCount() {
    let CountBasket=JSON.parse(localStorage.getItem("basket")) || []
    let count=CountBasket.length
    countArea.innerText=count
}
function GetPrice() {
    let Basket=JSON.parse(localStorage.getItem("basket")) || []
    let totalPrice=Basket.reduce((total,val)=>{
        return total+=val.count * val.price;
     },0)
     priceArea.innerText=totalPrice +"$";
     let count=Math.floor(totalPrice/100)
     amountNav.innerText=Math.floor((totalPrice-(count*100))/10)*10
     subTotalNav.innerText=count*100
     taxiNav.innerText=(totalPrice-(count*100))-Math.floor((totalPrice-(count*100))/10)*10
}

function AddToCard(e) {
    let basket=JSON.parse(localStorage.getItem("basket"))
    let trs=tBody.querySelectorAll("tr")
    if (trs.length>0) {
        trs.forEach((tr)=>{
            tr.remove();
        })
    }
    basket.forEach((obj)=>{
            let tr=document.createElement("tr")
            let td1=document.createElement("td")
            td1.className="img-area";
            let image=document.createElement("img")
            image.src=`./assets/images/${obj.img}`
            td1.append(image)

            let td2=document.createElement("td")
            td2.className="detail";
            let name=document.createElement("p")
            let price=document.createElement("p")
            let ld=obj.id
            name.className="name"
            price.className="price"
            name.innerText=obj.name
            price.innerText=obj.price
            td2.append(name,price)
            let td3=document.createElement("td")
            let btn=document.createElement("button")
            btn.className="btn btn-danger"
            btn.innerText="X"
            btn.setAttribute("data-id",obj.id)
            td3.append(btn)
            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
            tBody.append(tr)
            
            /////delete
            btn.addEventListener("click",function(e){
                let basket=JSON.parse(localStorage.getItem("basket"))

                let res=basket.find((obj)=>{
                    return obj.id==e.target.getAttribute("data-id")
                })
                
                
                let map=basket.map((obj)=>{
                    if (obj.id != res.id) {
                        return obj
                    }
                     
                })
                let filtered=map.filter((val)=>{
                    return val
                })
                localStorage.setItem("basket",JSON.stringify(filtered))

                e.target.closest("tr").remove();
                e.stopPropagation()
                GetCount();
                GetPrice()
                let children=Array.from(bascetDDMenu.children)
                let total=0;
                children.forEach((child)=>{
                    total+=child.clientHeight
                })
                bascetDDMenu.style.height=total+"px"
                
                
                if (bascetDDMenu.querySelector(".tbody").firstElementChild==null) {
                    secondNav.style.display="none"
                    emptyCartText.style.display="flex"
                    bascetDDMenu.style.height=total-150+"px"
                }
                else{
                    emptyCartText.style.display="none"
                    secondNav.style.display="block"
                }
            })

            if (bascetDDMenu.querySelector(".tbody").firstElementChild==null) {
                secondNav.style.display="none"
                emptyCartText.style.display="flex"
            }
            else{
                emptyCartText.style.display="none"
                secondNav.style.display="block"
            }

            

    })

}
if (bascetDDMenu.querySelector(".tbody").firstElementChild==null) {
    secondNav.style.display="none"
    emptyCartText.style.display="flex"
}
else{
    emptyCartText.style.display="none"
    secondNav.style.display="block"
}
AddToCard();