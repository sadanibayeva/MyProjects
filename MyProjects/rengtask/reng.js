//reng elave edilmesi
// let list=document.querySelectorAll("ul")
// function reng(x){
//     x.classList.add("reng")
// }

// reng elave edende basqasina kecenden sonra silinmesi
let listt=document.querySelector("ul")
for(item of listt.children){
    item.addEventListener("click",function(){
        for(item1 of listt.children){
            item1.classList.remove("reng")
        }
        this.classList.add("reng")
    })
}

