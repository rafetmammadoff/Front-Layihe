let buttons=document.querySelectorAll(".two-component .btn-card button")
let countArea=document.querySelector(".basket-count")
let bascetBtn=document.querySelector(".bascet")
let bascetDDMenu=document.querySelector(".bascet-dropdown-menu")
let tBody=document.querySelector(".tbody")
let priceArea=document.querySelector(".total-value")
let shopTbody=document.querySelector(".shop-tbody")
let shopTable=document.querySelector(".shopping-table")
let emptyCart=document.querySelector(".empty-cart")
let totalPriceBascet=document.querySelector(".totalPrice")
let subTotal=document.querySelector(".sub-total")

let subTotalNav=document.querySelector(".sub-total-nav")
let taxiNav=document.querySelector(".taxi-nav")
let amountNav=document.querySelector(".amount-nav")

let totalAmount=document.querySelector(".percent20")
let secondNav=document.querySelector(".second")
let emptyCartText=document.querySelector(".emptyCartText")
let taxi=document.querySelector(".taxi")


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
        AddToCard2()
    })
})

GetCount()
GetPrice()
function GetCount() {
    let CountBasket=JSON.parse(localStorage.getItem("basket")) || []
    // let count=CountBasket.reduce((total,val)=>{
    //    return total+=val.count;
    // },0)
    let count=CountBasket.length
    countArea.innerText=count
}
function GetPrice() {
    let Basket=JSON.parse(localStorage.getItem("basket")) || []
    let totalPrice=Basket.reduce((total,val)=>{
        return total+=val.count * val.price;
     },0)
     priceArea.innerText=totalPrice +"$";
     totalPriceBascet.innerText=totalPrice +" $"
   
     let count=Math.floor(totalPrice/100)
     subTotal.innerText=count*100
     totalAmount.innerText=Math.floor((totalPrice-subTotal.innerText)/10)*10
     amountNav.innerText=Math.floor((totalPrice-subTotal.innerText)/10)*10
     taxi.innerText=(totalPrice-subTotal.innerText)-totalAmount.innerText

     subTotalNav.innerText=count*100
     taxiNav.innerText=(totalPrice-subTotal.innerText)-totalAmount.innerText

     

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
            image.src=`../assets/images/${obj.img}`
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
            btn.innerHTML='<i class="fa-solid fa-xmark"></i>'
            btn.setAttribute("data-id",obj.id)
            td3.append(btn)
            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
            tBody.append(tr)

            /////delete
            btn.addEventListener("click",function(e){
                
                let res=basket.find((obj)=>{
                    return obj.id==this.getAttribute("data-id")
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

                this.closest("tr").remove();
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
                window.location.reload()
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


function AddToCard2(){
    let basket=JSON.parse(localStorage.getItem("basket"))
    
    let trs=tBody.querySelectorAll("tr")
    if (trs.length>0) {
        trs.forEach((tr)=>{
            tr.remove();
        })
    }

    basket.forEach((obj)=>{
        let tr=document.createElement("tr") //////////////////////
        let td1=document.createElement("td")/////////////////////
        td1.className="img-area";///////////////////////////////
        let image=document.createElement("img")////////////////
        image.src=`./assets/images/${obj.img}`///////////////
        td1.append(image)////////////////////////////////////

        let td2=document.createElement("td")///////////////
        td2.className="name";/////////////////////////////
        td2.innerText=obj.name
        let td3=document.createElement("td")////////////
        td3.className="id"
        td3.innerText=obj.id
        let td4=document.createElement("td")///////////
        let btns=document.createElement("div")////////
        btns.className="btns"////////////////////////
        let input=document.createElement("input")///
        input.type="text"//////////////////////////
        input.value=obj.count
        input.className="my-input"
        input.addEventListener("oninput",function(){
            
        })
        let btn1=document.createElement("button")////
        btn1.className="btn btn-dark"///////////////
        btn1.innerHTML='<i class="fa-solid fa-rotate"></i>'
        let btn2=document.createElement("button")//
        btn2.innerHTML='<i class="fa-solid fa-circle-minus"></i>'
        btn2.className="btn btn-danger"///////////
        btns.append(input,btn1,btn2)///////////////////
        td4.append(btns)////////////////////////
        td4.className="quantity"
        let td5=document.createElement("td")///
        td5.className="until-price"
        td5.innerText=obj.price///////////////
        let td6=document.createElement("td")//
        td6.className="total-price"
        td6.innerText=obj.price * obj.count//

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tr.append(td5)
        tr.append(td6)
        
        shopTbody.append(tr)

        btn2.addEventListener("click",function(e){
            let basket=JSON.parse(localStorage.getItem("basket"))
            
            let path=e.target.closest('tr')
            
            let res=basket.find((val)=>{
                return  val.id==path.querySelector(".id").innerText
            })
            let map=basket.map((val)=>{
                if (val.id!=res.id) {
                    return val
                }
            })
            
            
            let filtered= map.filter((val)=>{
                return val;
            })
            localStorage.setItem("basket",JSON.stringify(filtered))
            path.remove();
            GetCount()
            GetPrice()
            AddToCard()

            if (!shopTbody.firstElementChild) {
                shopTable.style.display="none"
                emptyCart.style.display="flex"
            }
            else{
                emptyCart.style.display="none"
            }

            if (bascetDDMenu.querySelector(".tbody").firstElementChild==null) {
                secondNav.style.display="none"
                emptyCartText.style.display="flex"
            }
            else{
                emptyCartText.style.display="none"
                secondNav.style.display="block"
            }
            
        })

})

}
window.addEventListener("DOMContentLoaded",function(){
    if (!shopTbody.firstElementChild) {
        shopTable.style.display="none"
        emptyCart.style.display="flex"
    }
    else{
        emptyCart.style.display="none"
    }

    AddToCard();
    
})


AddToCard2();

let inputs=document.querySelectorAll(".my-input")

inputs.forEach((inp)=>{
    inp.addEventListener("input",function(){
        let total=inp.parentElement.parentElement.parentElement.querySelector(".total-price")
        let until=inp.parentElement.parentElement.parentElement.querySelector(".until-price")
        
        if (isNaN(inp.value * until.innerText)) {
            total.innerText=until.innerText * 1
            
            
        }
        else{
            total.innerText=inp.value * until.innerText

            
        }

        function raf(e){
            let basket=JSON.parse(localStorage.getItem("basket"))
        
            let path=inp.closest('tr')
            
            let res=basket.find((val)=>{
                return  val.id==path.querySelector(".id").innerText
            })
            if (isNaN(inp.value * until.innerText)) {
                res.count=1
            }
            else{
                res.count=inp.value
            }
            localStorage.setItem("basket",JSON.stringify(basket))
            GetPrice()
            
            
            
            
            
        }
        raf()
        
    })
})