let array1 = [
    {
        item: 1
    },
    {
        item: 2
    },
    {
        item: 3
    },
    {
        item: 4
    },
    {
        item: 5
    },
    {
        item: 6
    },
    {
        item: 7
    },
    {
        item: 8
    },
    {
        item: 9
    },
    {
        item: 10
    },
    {
        item: 11
    },
    {
        item: 12
    },
    {
        item: 13
    },
    {
        item: 14
    },
    {
        item: 15
    },
    {
        item: 16
    }
]


for (let i = 0; i < 6; i++) {
    umumi.innerHTML += `
    <div class="div">
            <div class="part">
                <p>${array1[i].item}</p>
            </div>
        </div>
    `
}

let say = Math.ceil(array1.length / 6)
// console.log(say);
//3dovr edrse say qeder, 3denede button yaratmalidi
for (let i = 0; i < say; i++) {
    document.querySelector(".btnlar").innerHTML +=
     `<button>${i + 1}</button>`
}
//button yaranir
let z=1;
let btn1 = document.querySelectorAll(".btnlar button")
btn1.forEach(item => {
    item.addEventListener("click", function () {
        z = Number(item.innerText);
        console.log(z,item.innerText);
        // item.innertextini consola verende 3 cxarir sebeb?
        Data()
    })
})

function Data(){
    umumi.innerHTML=''
    for (let i = (z - 1) * 6; i < z * 6; i++) {
        // inin ne oldgnu z teyin edr
        umumi.innerHTML += 
            `
                <div class="div">
                    <div class="part">
                        <p>${array1[i].item}</p>
                    </div>
                </div>
            `
    }
}

document.querySelector(".fa-chevron-right").addEventListener("click",function(){
    if(z==say){
        z=say
    }else{
        z++
    }
    Data()
    console.log(z);
})
 
document.querySelector(".fa-chevron-left").addEventListener("click",function(){
    if(z==1){
        z=1
    }else{
        z--
    }
    Data()
    console.log(z);
})
 

//data icinde umumiinnerhtml+= olani yuxardada yazmsq ikisine ne gerek var?