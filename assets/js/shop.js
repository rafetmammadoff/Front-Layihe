let buttons=document.querySelectorAll(".two-component .btn-card button")
let countArea=document.querySelector(".basket-count")
let bascetBtn=document.querySelector(".bascet")
let bascetDDMenu=document.querySelector(".bascet-dropdown-menu")
let tBody=document.querySelector(".tbody")
let priceArea=document.querySelector(".total-value")
let shopTbody=document.querySelector(".shop-tbody")
let shopTable=document.querySelector(".shopping-table")
let emptyCart=document.querySelector(".empty-cart")
bascetBtn.addEventListener("click",function(e){
    bascetDDMenu.classList.toggle("open-menu")
    
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
    let count=CountBasket.reduce((total,val)=>{
       return total+=val.count;
    },0)
    countArea.innerText=count
}
function GetPrice() {
    let Basket=JSON.parse(localStorage.getItem("basket")) || []
    let totalPrice=Basket.reduce((total,val)=>{
        return total+=val.count * val.price;
     },0)
     priceArea.innerText=totalPrice +"$";
}

function AddToCard(e) {
    let basket=JSON.parse(localStorage.getItem("basket"))
    let trs=tBody.querySelectorAll("tr")
    if (trs.length>0) {
        trs.forEach((tr)=>{
            tr.remove();
        })
    }
    console.log(trs.length);
    console.log(trs);
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
            btn.innerText="X"
            td3.append(btn)
            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
            
            tBody.append(tr)

    })

}


function AddToCard2(){
    let basket=JSON.parse(localStorage.getItem("basket"))
    console.log(basket);
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
        image.src=`../assets/images/${obj.img}`///////////////
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
            console.log("aaaaaaaa");
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
            console.log();
            let path=e.target.closest('tr')
            console.log(path);
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

            if (!shopTbody.firstElementChild) {
                shopTable.style.display="none"
                emptyCart.style.display="block"
            }
            else{
                emptyCart.style.display="none"
            }
            
        })

})

}
window.addEventListener("DOMContentLoaded",function(){
    if (!shopTbody.firstElementChild) {
        shopTable.style.display="none"
        emptyCart.style.display="block"
    }
    else{
        emptyCart.style.display="none"
    }
    
})

AddToCard();
AddToCard2();

let inputs=document.querySelectorAll(".my-input")
console.log(inputs);
inputs.forEach((inp)=>{
    inp.addEventListener("input",function(){
        let total=inp.parentElement.parentElement.parentElement.querySelector(".total-price")
        let until=inp.parentElement.parentElement.parentElement.querySelector(".until-price")
        total.innerText=inp.value * until.innerText
    })
})