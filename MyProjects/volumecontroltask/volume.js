document.querySelector(".div").addEventListener("click",function(e){
  console.log(e.offsetX);
  var a;
  if(e.offsetX%2==1){
    a=e.offsetX+1;
  }
  else{
    a=e.offsetX;
  }
    document.querySelector(".div1").style.width=a+"px"
    document.querySelector(".faiz").innerText=Math.floor(a/2)
    //200pxdi diye 100faizi elde etmek ucun 2te bol,400px olsaydi 4e bol.1faiz artmasi ucun 2px artir
    console.log(a);
})
document.querySelector(".three").addEventListener("click",function(){
    let k=Number(div1.style.width.split("px")[0])
    let p=Number(div.style.width.split("px")[0])
    if(k<p){
      let eded=div1.style.width.split("px")[0]
      div1.style.width=(Number(eded)+2)+"px"
      faiz.innerText= Number(faiz.innerText)+1
    }
})
document.querySelector(".one").addEventListener("click",function(){
    let k=Number(div1.style.width.split("px")[0])
    let p=Number(div.style.width.split("px")[0])
    if(k>0){
      let eded=div1.style.width.split("px")[0]
      div1.style.width=(Number(eded)-2)+"px"
      faiz.innerText= Number(faiz.innerText)-1;
    }    
})
// birde izah anlamrame