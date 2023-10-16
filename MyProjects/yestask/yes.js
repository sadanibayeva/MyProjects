let icon=document.querySelectorAll(".part i")
let content=document.querySelectorAll(".content")

icon.forEach(x=>{
    x.addEventListener("click",function(){
        if(x.classList.value.includes("rotate")){
            x.classList.remove("rotate")
            x.classList.remove("active")
            x.nextElementSibling.classList.remove("active")
            x.parentElement.nextElementSibling.style.display="none"
            
        }
        else{
            content.forEach(y=>{
                y.style.display="none";
            })
            icon.forEach(z=>{
                z.classList.remove('active');
                z.classList.remove("rotate")
            z.nextElementSibling.classList.remove("active")
            })
            x.classList.add("rotate")
            x.classList.add("active")
            x.nextElementSibling.classList.add("active")
            x.parentElement.nextElementSibling.style.display="block"
        }
    })
})

//ferqli kliklerde yazmaq olar,one gore qizarir





