let klik=document.querySelectorAll(".part i")
klik.forEach(x=>{
    x.addEventListener("click",function(){
        x.classList.toggle("rotate")
        x.classList.toggle("active")
        x.nextElementSibling.classList.toggle("active")
        x.parentElement.nextElementSibling.classList.toggle("h")
        
    })
})
