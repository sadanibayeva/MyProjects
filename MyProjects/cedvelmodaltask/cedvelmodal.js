document.getElementsByClassName("add")[0].addEventListener("click", function () {
    document.getElementsByClassName("modal")[0].style.display = "block"
    document.getElementsByClassName("modal1")[0].style.display = "none"
})

let array = [
    {
        id: 1,
        ad: "Xedice",
        soyad: "Memmedova",
        yas: 16
    },
    {
        id: 2,
        ad: "Esmer",
        soyad: "Melikzade",
        yas: 20
    },
    {
        id: 3,
        ad: "Sədan",
        soyad: "Ibayeva",
        yas: 18
    },
    {
        id: 4,
        ad: "lidya",
        soyad: "Ehmedova",
        yas: "21"
    }
]
function Data() {
    let nomer = 0
    document.querySelector("tbody").innerHTML = ''
    array.forEach(item => {
        // let nomer = document.querySelectorAll("tbody tr")
        document.querySelector("tbody").innerHTML +=
            `  <tr>
                    <td>${++nomer}</td>
                    <td>${item.ad}</td>
                    <td>${item.soyad}</td>
                    <td>${item.yas}</td>
                    <td><i onclick="edit(${item.id})" class="fa-solid fa-pen-to-square"></i></td>
                    <td><i onclick="sil(${item.id})" class="fa-solid fa-trash"></i></td>
                </tr>
            `
         })
}
Data()
// console.log(document.querySelectorAll("tbody tr").length);

function edit(useid) {
    let arr = array.find(elem => elem.id == useid)
    document.getElementsByClassName("modal1")[0].style.display = "block"
    // document.getElementsByClassName("modal")[0].style.display = "none"
    Name.value = arr.ad
    surname.value = arr.soyad
    Age.value = arr.yas
    //arraydekiler inputa dusr
    console.log(array);
    document.querySelector(".update").addEventListener("click", function () {
        document.getElementsByClassName("modal1")[0].style.display = "none"
        arr.ad = Name.value
        arr.soyad = surname.value
        arr.yas = Age.value
        //arraye doludurur
        console.log(array)
        Data()
    })
}

function sil(useid) {
    let arr = array.find(item => item.id == useid)
    let index = array.indexOf(arr)
    //arr-nin indexi ariyoruz
    array.splice(index, 1)
    console.log(array);
    Data()
}


let dey = document.querySelectorAll(".fa-x")
dey.forEach(item => {
    item.addEventListener("click", function () {
        document.getElementsByClassName("modal1")[0].style.display = "none"
        document.getElementsByClassName("modal")[0].style.display = "none"
    })
})

document.querySelector(".create").addEventListener("click", function () {
    let noomer = 5;
    array.push(
        {
            id: noomer++,
            ad: addname.value,
            soyad: addsurname.value,
            yas: addage.value
        }
    )
    document.getElementsByClassName("modal")[0].style.display = "none"
    console.log(array);
    Data()
})


let inp = document.querySelector(".axtar")
inp.addEventListener("keyup", function () {
    document.getElementsByClassName("modal")[0].style.display = "none"
    document.getElementsByClassName("modal1")[0].style.display = "none"
    let tr = document.querySelectorAll("tbody tr")
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].children[1].innerText.toLowerCase().includes(inp.value.toLowerCase())) {
            tr[i].style.display='table-row'
            // tr[i].style.display=''
            //default goturur her 2sini
        }else{
            document.querySelector("thead tr").style.display='none'
            tr[i].style.display='none'
        }
    }
})


// useid ye istedymizi gondere bklerik
//axtarisda nece ede bileriyki mes ll yoxdusa xettde tam silinsin,cedvel getdi, border1 silinmelidi