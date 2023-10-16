let array = [
    {
        id: 1,
        img: "https://dlcdnwebimgs.asus.com/gain/769aaa49-031e-4a90-b03c-3091198e95a1/",
        nov: "ASUS TUF F15",
        pul: 1115
    },
    {
        id: 2,
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
        nov: "Apple iPhone 14 Pro",
        pul: 999
    },
    {
        id: 3,
        img: "https://kontakt.az/wp-content/uploads/2022/07/img_id5426441798137517556_png.webp",
        nov: "Samsung Galaxy S22 Ultra",
        pul: 699
    }
]
array.forEach(x => {
    document.querySelector(".div").innerHTML +=
        `<div class="part">
<img src=${x.img} >
 <div class="mavi">
     <h1>${x.nov}</h1>
     <p>$ ${x.pul} </p>
     <i class="shop fa-solid fa-cart-arrow-down " pid="${x.id}"></i>
 </div>
</div>
`
})

let basket=[]
document.querySelectorAll(".shop").forEach(btn=>{
    btn.addEventListener("click",function(){
        let tap=array.find(x=>x.id==this.getAttribute("pid"))
        let s=basket.filter(x=>x.id==this.getAttribute("pid"))
        // console.log(s);
        if(s.length==0){
            basket.push(
                {
                    id:this.getAttribute("pid"),
                    img:tap.img,
                    cost:tap.pul,
                    title:tap.nov,
                    count:1
                }
            )
        }else{
                s[0].count++
                //arrayin objecti 0cisidi
        }
        Sebet()
        document.querySelector(".div1 h2").innerText=say
        // document.querySelector(".div1 h2").innerText=basket.length

        // console.log(basket);
    })
})


document.querySelector(".sari").addEventListener("click",function(){
    document.querySelector(".modal").style.display="block"
    Sebet()
})
var say=0;
function Sebet(){
    say=0
    document.querySelector(".partlar").innerHTML=''
    basket.forEach(y=>{
        document.querySelector(".partlar").innerHTML+=
        ` <div class="part1"> 
        <img src=${y.img} >
         <div class="goy">
             <h3>${y.title}</h3>
             <pre>${y.cost*y.count}  $</pre>
             <div class="flex">
                <button  sid=${y.id}>+</button>
                <button>${y.count}</button>
                <button  sid=${y.id}>-</button>
                <i class="fa-solid fa-trash" sid=${y.id}></i>
            </div>
        </div> 
     </div> `
     say+=y.count
    })
}






















// let sebet = [];
// let icons = document.querySelectorAll(".shop")
// icons.forEach(y => {
//     y.addEventListener("click", function () {
//         let arr = sebet.filter(item => item.id == Number(y.getAttribute("pid")))
//         //burda yoxlayrq ki, sebetimde arrayimde olan element yoxdusa arrayi push edir,
//         //varsa sayin artirir day push etmir
//         console.log(arr);
//         if (arr.length == 0) {
//             sebet.push({
//                 id: Number(y.getAttribute("pid")),
//                 img: y.parentElement.previousElementSibling.src,
//                 nov: y.parentElement.children[0].innerText,
//                 pul: Number(y.parentElement.children[1].innerText.split("$")[1]),
//                 count: 1
//             })
//         } else {
//             arr[0].count++
//         }
//         document.querySelector(".div1 h2").innerText = sebet.length
//         console.log(sebet);
//         Data()

//     })
// })
// function Data() {
//     let total=0
//     document.querySelector(".partlar").innerHTML = ''
//     sebet.forEach(k => {
//         document.querySelector(".partlar").innerHTML +=
//             ` <div class="part1"> 
//     <img src=${k.img}>
//      <div class="goy">
//          <h3>${k.nov}</h3>
//          <pre>${k.pul * k.count}$</pre>
//          <div class="flex">
//          <button class="minus" bid="${k.id}">-</button>
//          <button>${k.count}</button>
//          <button class="plus" bid="${k.id}">+</button>
//             <i bid="${k.id}" class="fa-solid fa-trash"></i>
//         </div>
//     </div> 
//     </div>  
//     `
//     total+=k.pul*k.count
//     })
//     Totalqiymet.innerText=total

//     document.querySelectorAll(".plus").forEach(y => {
//         y.addEventListener("click", function () {
//             console.log(y.getAttribute("bid"));
//             let sbt = sebet.find(elem => elem.id == Number(y.getAttribute("bid")))
//             sbt.count++
//             Data()
//             console.log(sbt);
//              document.querySelector(".div1 h2").innerText = sebet.length
//         })
//     })

//     document.querySelectorAll(".minus").forEach(m => {
//         m.addEventListener("click", function () {
//             console.log(m.getAttribute("bid"));
//             let sbt = sebet.find(elem => elem.id == Number(m.getAttribute("bid")))
//             if (sbt.count <= 1) {
//                 sebet.splice(sebet.indexOf(sbt),1)
//             }
//             else {
//                 sbt.count--
//             }
//             Data()
//             console.log(sbt);
//              document.querySelector(".div1 h2").innerText = sebet.length
//         })
//     })
//     document.querySelectorAll(".fa-trash").forEach(d=>{
//         d.addEventListener("click",function(){
//             // alert()
//             console.log(d.getAttribute("bid"));
//             let sbt = sebet.find(eleml => eleml.id == Number(d.getAttribute("bid")))
//             sebet.splice(sebet.indexOf(sbt),1)
//             Data()
//             // console.log(sbt);
//         })
//     })
// }


// document.querySelector(".sari").addEventListener("click", function () {
//     document.querySelector(".modal").style.display = "block"
//     Data()

//     // document.querySelectorAll(".plus").forEach(y=>{
//     //     y.addEventListener("click",function(){
//     //         console.log(y.getAttribute("bid"));
//     //        let sbt= sebet.find(elem=>elem.id==Number(y.getAttribute("bid")))
//     //        sbt.count++
//     //        Data()
//     //        console.log(sbt);
//     //     })
//     // })
// })

// document.querySelector(".fa-x").addEventListener("click", function () {
//     document.querySelector(".modal").style.display = "none"
// })

