let bodybtn = document.querySelectorAll("tbody button")
let reng;
bodybtn.forEach((x) => {
    x.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block"
        reng=x;
    document.querySelector(".fa-circle-xmark").addEventListener("click",function(){
    document.querySelector(".modal").style.display = "none"
        })
    })
})

let btn = document.querySelectorAll(".modal button")
btn.forEach((item) => {
    item.addEventListener("click", function () {
        reng.classList.add(item.classList[0])
        reng.innerText=item.innerText
        reng.classList.add("deyishmez")
        document.querySelector(".modal").style.display = "none"
    })
})

document.querySelectorAll(".rengie button").forEach((item,index)=>{
    //i/e lerin icnde firlanrsan deye 0dan bashlayr, d/elerde umumi
    item.addEventListener("click", function () {
       let trs= document.querySelectorAll("tbody tr")
       for(let i=0;i<trs.length;i++){
        if( trs[i].children[index+2].children[0].innerText=="d/e"){
            trs[i].children[index+2].children[0].innerText=item.innerText
            trs[i].children[index+2].children[0].classList.add(item.classList[0])
            trs[i].children[index+2].children[0].classList.add("deyishmez")
        }
       }
    })
})
document.querySelectorAll(".rengqb button").forEach((item,index)=>{
    item.addEventListener("click", function () {
        let trs=document.querySelectorAll("tbody tr")
        for(let i=0;i<trs.length;i++){
            if(trs[i].children[index+2].children[0].innerText=="d/e"){
            trs[i].children[index+2].children[0].innerText=item.innerText
            trs[i].children[index+2].children[0].classList.add(item.classList[0])
            trs[i].children[index+2].children[0].classList.add("deyishmez")

            }
        }
    })
})

//anlamadm neyi children index+2ni bide rengie buttonunda frlanr onun ucnde d/ede frlanr?neidye bu
//i/e=0, 1, 2 
//tr ler ise 0 1 2 setir uzre
