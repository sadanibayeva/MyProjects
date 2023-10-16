document.querySelector("button").addEventListener("click",function(){
    let soz=document.getElementsByClassName("yaz")[0].value
    // let soz=document.querySelector(".iki").children[0].value
    let k=document.createElement("div")
    k.classList.add("part")
    let list=document.createElement("h2")
    let txt=document.createTextNode(soz)
    let ico=document.createElement("i")
    list.appendChild(txt)
    k.appendChild(list)
    k.appendChild(ico)
    ico.classList.add('fa-sharp');
    ico.classList.add('fa-solid');
    ico.classList.add('fa-trash');
    ikinci.appendChild(k)
    // console.log(k)
        ico.addEventListener("click", function(){
            console.log(ico.parentNode);
            console.log(ico.parentElement);
            ico.parentNode.remove()
    })
})
