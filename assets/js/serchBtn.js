let searchBtn=document.querySelector(".search-btn")
let searchDDMenu=document.querySelector(".search-dropdown-menu")
searchBtn.addEventListener("click",function(e){
    searchDDMenu.classList.toggle("open-menu")
    let children=Array.from(searchDDMenu.children)
    let total=0;
    children.forEach((child)=>{
        total+=child.clientHeight
    })
    if (searchDDMenu.classList.contains("open-menu")) {
        searchDDMenu.style.height=total+"px"
    }
    else{
        searchDDMenu.style.height="0px"
    }
    
})



let userBtn=document.querySelector(".user-btn")
let userDDMenu=document.querySelector(".user-dropdown-menu")
userBtn.addEventListener("click",function(e){
    userDDMenu.classList.toggle("open-menu")
    let children=Array.from(userDDMenu.children)
    let total=0;
    children.forEach((child)=>{
        total+=child.clientHeight
    })
    if (userDDMenu.classList.contains("open-menu")) {
        userDDMenu.style.height=total+"px"
    }
    else{
        userDDMenu.style.height="0px"
    }
    
})
