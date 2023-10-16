let inp = document.querySelector(".kredit")
let qiymt=document.getElementById("cost").innerText
console.log(qiymt)
inp.value = inp.min
inp.addEventListener("click", function () {
    if (this.value == inp.min) {
        this.value = inp.min
    } 
    else if (inp.value <= 9 && inp.value >= 6) {
        this.value = 9
    }
    else if (inp.value <= 12 && inp.value >= 9) {
        this.value = 12
    }
    else if (inp.value <= 15 && inp.value >= 12) {
        this.value = 15
    }
    else if (inp.value <= 18 && inp.value >= 15) {
        this.value = 18
    }
    console.log(inp.value);

let cavab=qiymt/inp.value
console.log(cavab)
document.querySelector(".ilk2 .end span").innerText=cavab.toFixed(2)

    let k = document.querySelectorAll(".ulli li")
    k.forEach(item => {
        console.log(item.getAttribute("test"));
        if (item.getAttribute("test").includes(inp.value)) {
            //inputa yazdgm soz itemda varsa
            k.forEach(y => {
                y.classList.remove("active")
            })
            item.classList.add("active")
        }
    })
})
