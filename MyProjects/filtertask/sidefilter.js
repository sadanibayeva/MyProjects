// let klik=document.querySelectorAll(".hisse1 h2")
// klik.forEach(element => {
//     if(element.className!="active"){
//         document.querySelectorAll("."+element.getAttribute("test")).forEach(x=>{
//             x.style.display="none"
//         })
//     }
// })
// klik.forEach(element=>{
//     element.addEventListener("click",function(){
//         klik.forEach(x=>{
//             x.classList.remove("active")
//         })
//         element.classList.add("active")
//         document.querySelectorAll(".hisse2one").forEach(y=>{
//             y.style.display="none"
//             document.querySelectorAll("."+element.getAttribute("test")).forEach(x=>{
//                 x.style.display="flex"
//             })
//         })
//     })
// })


// include

let klik=document.querySelectorAll(".hisse1 h2")
klik.forEach(element => {
    if(element.className!="active"){
        document.querySelectorAll("."+element.getAttribute("test")).forEach(x=>{
            x.style.display="none"
        })
    }
})
klik.forEach(element=>{
    element.addEventListener("click",function(){
        klik.forEach(x=>{
            x.classList.remove("active")
        })
        element.classList.add("active")

        document.querySelectorAll(".hisse2one").forEach(y=>{
            console.log(y.classList.value);
            y.style.display="none";
            if(y.classList.value.includes(element.getAttribute("test")))
                y.style.display="flex"
        })
    })
})

