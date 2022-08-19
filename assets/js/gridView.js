let viewButtons=document.querySelectorAll(".product-list button")
let viewOptions=document.querySelectorAll(".items")

viewButtons.forEach(function(link) {
    link.addEventListener("click", function(){
        viewButtons.forEach(function(item){
            item.classList.remove("active")
        });
        link.classList.add("active")

        var view= link.getAttribute("data-view")

        viewOptions.forEach(function(view){
            view.style.display="none"
        });

        if(view=="list-view"){
            document.querySelector("." + view).style.display="block"
        }
        else{
            document.querySelector("." + view).style.display="flex"
        }
    });
});