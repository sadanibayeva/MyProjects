document.querySelector("button").addEventListener("click", function () {
    let soz = document.getElementsByClassName("yazi")[0].value;
    let list = document.createElement("li");
    list.setAttribute("onclick", "sec(this)");
    let txt = document.createTextNode(soz);
    list.appendChild(txt);
    neww.appendChild(list);
    document.getElementsByClassName("yazi")[0].value = "";
});
let a;
function sec(x){
    document.querySelectorAll("ul li").forEach(y=>
        {
            y.style.backgroundColor="transparent"
        })
    x.style.backgroundColor="red"
    a=x
    console.log(a)
}
function sag1(){
   document.querySelector("#second").appendChild(a)
   a.style.backgroundColor="transparent"
}
function sag2(){
    document.querySelector("#third").appendChild(a)
    a.style.backgroundColor="transparent"
}
function sol1(){
    document.querySelector("#neww").appendChild(a)
    a.style.backgroundColor="transparent"
}
function sol2(){
    document.querySelector("#second").appendChild(a)
    a.style.backgroundColor="transparent"
}


