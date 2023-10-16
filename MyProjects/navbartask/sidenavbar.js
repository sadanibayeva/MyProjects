let menu=document.querySelector(".fa-bars")
let icon=document.querySelectorAll("ul li i")
menu.addEventListener("click",function(){
  document.querySelector(".div").style.transform="translateX(0px)" 
  document.querySelector(".umumi1").style.display="flex"
  menu.style.display="none"
  for(let i=0;i<icon.length;i++){
    icon[i].style.display="none"
  }
})
  let menu1=document.querySelector(".fa-x")
  menu1.addEventListener("click",function(){
  document.querySelector(".div").style.transform="translateX(-250px)"
  for(let i=0;i<icon.length;i++){
    icon[i].style.display="block"
  }
  document.querySelector(".umumi1").style.display="none"
  menu.style.display="block"
  })

