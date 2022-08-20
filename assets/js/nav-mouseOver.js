let hoverli=document.querySelectorAll(".hoverli")

hoverli.forEach((li)=>{
    li.addEventListener("mouseover",function(){
        let ddM=li.querySelector(".dropdown-menu")
        let childs=Array.from(ddM.children)
        let total=0;
        childs.forEach((chld)=>{
            total+=chld.clientHeight
        })
        ddM.style.height=total + "px"
    })
    li.addEventListener("mouseout",function(){
        let ddM=li.querySelector(".dropdown-menu")
        
        ddM.style.height="0px"
    })
})