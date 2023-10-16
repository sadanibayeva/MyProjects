// birinci yol
function topla() {
let test=Number(document.getElementById("txt").value)
let test2=Number(document.getElementById("txt1").value)
let cem=test+test2
    alert(cem)
}
function ferq() {
let test=Number(document.getElementById("txt").value)
let test2=Number(document.getElementById("txt1").value)
let ferq=test-test2
    alert(ferq)
}
function vurma() {
let test=Number(document.getElementById("txt").value)
let test2=Number(document.getElementById("txt1").value)
let hasil=test*test2
    alert(hasil)
}
function bolme() {
let test=Number(document.getElementById("txt").value)
let test2=Number(document.getElementById("txt1").value)
let bolme=test/test2
    alert(bolme)
}

// ikinci yol
// function hesabla(x){
//     let test=Number(document.getElementById("txt").value)
//     let test2=Number(document.getElementById("txt1").value)
//     let res;
//     if(x.innerText=="+")
//     {
//         res=test+test2
//     }
//     else if(x.innerText=="-")
//     {
//         res=test-test2
//     }
//     else if(x.innerText=="*")
//     {
//         res=test*test2
//     }
//     else if(x.innerText=="/")
//     {
//         res=test/test2
//     }
// alert(res)
// }