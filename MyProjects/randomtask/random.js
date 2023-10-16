let array=[
    {
        soz:"Be kind",
        sair:"Dostoyevski"
    },
    {
        soz:"Season of your soul needs to change too!",
        sair:"Dr.Seuss"
    },
    {
        soz:"Trust your uniqueness",
        sair:"Mae West"
    },
    {
        soz:"Be true always!",
        sair:"Mahatma"
    }
]
document.querySelector("button").addEventListener("click",function(){
   let index=Math.floor(Math.random()*array.length)
   document.querySelector("p").innerText=array[index].soz
   document.querySelector("h1").innerText=array[index].sair
})
//math.random 0ve1 arasi reqem verir onu array uzunluguna vurb tama ceviririk ki random bir indexden secsn deye