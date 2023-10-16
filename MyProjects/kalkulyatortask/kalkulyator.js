let btns=document.querySelectorAll(".btn")
btns.forEach(item=>{
  item.addEventListener("click",function(){
    result.innerText=result.innerText+item.innerText
  })
})
let res=document.querySelector(".netice")
res.addEventListener("click",function(){
  if(result.innerText.includes("*")){
    let num1=result.innerText.split('*')[0]
    let num2=result.innerText.split('*')[1]
    result.innerText=Number(num1)*Number(num2)
  }
  else if(result.innerText.includes("/")){
    let num1=result.innerText.split('/')[0]
    let num2=result.innerText.split('/')[1]
    result.innerText=Number(num1)/Number(num2)
  }
  else if(result.innerText.includes("+")){
    let num1=result.innerText.split('+')[0]
    let num2=result.innerText.split('+')[1]
    result.innerText=Number(num1)+Number(num2)
  }
  else if(result.innerText.includes("-")){
    let num1=result.innerText.split('-')[0]
    let num2=result.innerText.split('-')[1]
    result.innerText=(Number(num1)-Number(num2)).toFixed(2)
  }
})
document.querySelector(".sil").addEventListener("click",function(){
  result.innerHTML=''
})
document.querySelector(".geri").addEventListener("click",function(){
  let currentResult = result.innerText;
  result.innerText = currentResult.substring(0, currentResult.length-1);
})


