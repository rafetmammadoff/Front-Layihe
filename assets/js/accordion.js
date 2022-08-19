var acc = document.getElementsByClassName("accordion");
var i;
var icon=document.querySelector(".icon-a")
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    var panel = this.nextElementSibling;
    var elems=Array.from(panel.children)
    console.log(elems);
    var total=0;
    elems.forEach((elem)=>{
       total+=elem.clientHeight
    })
    console.log(total);
    if (panel.style.height === "" || panel.style.height==="0px") {
      panel.style.height = total +"px";
      this.querySelector(".icon-a").style.transform="rotateX(180deg)"
    } else {
        console.log(panel.style.height);
      panel.style.height = "0px";
      this.querySelector(".icon-a").style.transform="rotateX(1800deg)"

    }
  })};