let yeni=document.querySelectorAll(".sekil")
yeni.forEach(y=>{
    y.addEventListener("click",function() {
    document.querySelector(".modal").style.display="block"
    document.querySelector(".bigimg").src=y.children[0].src
    console.log(y.children[0]);
    document.querySelector(".head").innerText=y.nextElementSibling.children[0].innerText
    document.querySelector(".content").innerText=y.nextElementSibling.children[1].innerText
    console.log(y.nextElementSibling)
    })
})
// let klik=document.querySelectorAll(".fa-x")
// klik.forEach(k=>{
//     k.addEventListener("click",function(){
//     document.querySelector(".modal").style.display="none"
//     })
// }) bu oncliksiz versiya
function cl0se(){
    document.querySelector(".modal").style.display="none"
}
