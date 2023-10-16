document.querySelector("button").addEventListener("click",function() {
let soz=document.getElementById("text").value
let ters=""
    for(let i=soz.length-1;i>=0;i--){
        ters+=soz[i]
    }
console.log(ters)
})































