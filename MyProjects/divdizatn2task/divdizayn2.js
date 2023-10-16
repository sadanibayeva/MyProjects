
document.querySelector("button").addEventListener("click",function(){
    let prev=Number(document.querySelector(".p").style.width.split('p')[0])
    //evvelkine menimsed 200px den 200u sec
    document.querySelector(".p").style.width=(prev+Number(en.value))+"px"
    document.querySelector(".p").style.height=(prev+Number(uzun.value))+"px"
    document.querySelector(".p").style.borderWidth=Number(qalinliq.value)+"px"
})
     