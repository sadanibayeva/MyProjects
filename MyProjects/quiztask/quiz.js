//18sualvar,2fenne her birine 9sual dusur, 
//asan orta cetin her birinede 3 sual payi, yeni 3pagination buttonu lazmdi
let array = [
    {
        id: 1,
        sual: " elifbada nece herf var?",
        a: " A)4",
        b: " B)7",
        c: " C)9",
        d: " D)5",
        duzguncavab: "C)9",
        fenn: "Az/dili",
        level: "Asan"
    },
    {
        id: 2,
        sual: " elifbada sait sayi ne qederdi?",
        a: " A)10",
        b: " B)7",
        c: " C)5",
        d: " D)9",
        duzguncavab: "D)9",
        fenn: "Az/dili",
        level: "Asan"
    },
    {
        id: 3,
        sual: " elifbada nece samit var ?",
        a: " A)3",
        b: " B)12",
        c: " C)2",
        d: " D)7",
        duzguncavab: "B)12",
        fenn: "Az/dili",
        level: "Asan"
    },
    {
        id: 4,
        sual: " nece frazeoloji birleshme var?",
        a: " A)14",
        b: " B)7",
        c: " C)19",
        d: " D)5",
        duzguncavab: "D)5",
        fenn: "Az/dili",
        level: "Orta"
    },
    {
        id: 5,
        sual: " zerfin nece novu var?",
        a: " A)15",
        b: " B)4",
        c: " C)9",
        d: " D)20",
        duzguncavab: " D)20",
        fenn: "Az/dili",
        level: "Orta"
    },
    {
        id: 6,
        sual: " sifetin derecesinin sayi necedir?",
        a: " A)4",
        b: " B)17",
        c: " C)29",
        d: " D)5",
        duzguncavab: " A)4",
        fenn: "Az/dili",
        level: "Orta"
    },
    {
        id: 7,
        sual: "isimin nece novu var?",
        a: " A)2",
        b: " B)7",
        c: " C)9",
        d: " D)10",
        duzguncavab: " A)2",
        fenn: "Az/dili",
        level: "Cetin"
    },
    {
        id: 8,
        sual: " sayin nece mena novleri var?",
        a: " A)18",
        b: " B)27",
        c: " C)9",
        d: " D)6",
        duzguncavab: " A)18",
        fenn: "Az/dili",
        level: "Cetin"
    },
    {
        id: 9,
        sual: " say ve sifetin nece dene oxsar ceheti var?",
        a: " A)4",
        b: " B)37",
        c: " C)9",
        d: " D)15",
        duzguncavab: "C)9",
        fenn: "Az/dili",
        level: "Cetin"
    },
    {
        id: 10,
        sual: " iki ededin cemi 6,ferqi 2-dur.Bu ededlerin hasilini tapin?",
        a: " A)10",
        b: " B)7",
        c: " C)9",
        d: " D)4",
        duzguncavab: " D)4",
        fenn: "Riyaziyyat",
        level: "Asan"
    },
    {
        id: 11,
        sual: " x+y=5,x-y=1 olduguna gore, x2-y2+3x+3y ifadesinin qiymetini tapin?",
        a: " A)4",
        b: " B)21",
        c: " C)9",
        d: " D)13",
        duzguncavab: " C)9",
        fenn: "Riyaziyyat",
        level: "Asan"
    },
    {
        id: 12,
        sual: " iki ededin cemi 15,hasili 50-dir.Bu ededlerin hasilini tapin?",
        a: " A)15",
        b: " B)7",
        c: " C)9",
        d: " D)50",
        duzguncavab: " D)50",
        fenn: "Riyaziyyat",
        level: "Asan"
    },
    {
        id: 13,
        sual: " iki ededin ferqi 9,nisbeti 2-dir.Bu ededlerin cemi tapin?",
        a: " A)4",
        b: " B)27",
        c: " C)9",
        d: " D)55",
        duzguncavab: "B)27",
        fenn: "Riyaziyyat",
        level: "Orta"
    },
    {
        id: 14,
        sual: " iki ededin cemi 30,ferqi 10-dur.Bu ededlerin hasilini tapin?",
        a: " A)84",
        b: " B)47",
        c: " C)9",
        d: " D)200",
        duzguncavab: " D)200",
        fenn: "Riyaziyyat",
        level: "Orta"
    },
    {
        id: 15,
        sual: " iki ededin ferqi 15,nisbeti 4-dur.Bu ededlerin hasilini tapin?",
        a: " A)14",
        b: " B)100",
        c: " C)4/9",
        d: " D)25",
        duzguncavab: " B)100",
        fenn: "Riyaziyyat",
        level: "Orta"
    },
    {
        id: 16,
        sual: " iki ededin hasili 5,ferqi 5-dir.Bu ededlerin hasilini tapin?",
        a: " A)16",
        b: " B)7",
        c: " C)9/2",
        d: " D)5",
        duzguncavab: " D)5",
        fenn: "Riyaziyyat",
        level: "Cetin"
    },
    {
        id: 17,
        sual: " iki ededin nisbeti 5,ferqi 16-dur.Bu ededlerin hasilini tapin?",
        a: " A)4",
        b: " B)70",
        c: " C)40",
        d: " D)5",
        duzguncavab: "C)40",
        fenn: "Riyaziyyat",
        level: "Cetin"
    },
    {
        id: 18,
        sual: " iki ededin cemi 18,ferqi 2-dir.Bu ededlerin hasilini tapin?",
        a: " A)42",
        b: " B)7",
        c: " C)20",
        d: " D)51",
        duzguncavab: "C)20",
        fenn: "Riyaziyyat",
        level: "Cetin"
    }
]
document.querySelector(".exam2").style.display = "none"
document.querySelector(".mavi").style.display = "none"
document.querySelector(".netice").style.display = "none"
    let btns = document.querySelectorAll(".flex button")
    let fenler;
    btns.forEach(item => {
    item.addEventListener("click", function () {
        fenler = array.filter(x => x.fenn == item.innerText)
//klikdeyin x ya azdili ya riy eger arrayin itemleri arasnda azdli ya riy varsa
//o fennin butun id sual adni filan qaytarir includes kimi
        document.querySelector(".exam2").style.display = "block"
        document.querySelector(".exam1").style.display = "none"
    })
})

let levl;
document.querySelectorAll(".flex1 button").forEach(x => {
    x.addEventListener("click", function () {
        levl = fenler.filter(y => y.level == x.innerText)
        console.log(levl);
        document.querySelector(".mavi").style.display = "block"
        document.querySelector(".exam2").style.display = "none"
        Data()
    })
})

let index = 0
function Data() {
    document.querySelector(".mavi").innerHTML = ''
    document.querySelector(".mavi").innerHTML +=
//tilda icndeki levlda 3dene object qaytarir onlarn 0cisi mes asanin sualini qaytaracaq,
//indexi artiririqki, sual sayin artsin index+1 yazisi yeni
        `
    <div class="ilk">
    <h1>${(index + 1) + ")" + levl[index].sual}</h1>
</div>
<div class="dordlu">
    <button onclick="cavab(this)"><h2>${levl[index].a}</h2></button>
    <button onclick="cavab(this)"><h2>${levl[index].b}</h2></button>
    <button onclick="cavab(this)"><h2>${levl[index].c}</h2></button>
    <button onclick="cavab(this)"><h2>${levl[index].d}</h2></button>
</div>

<div class="pagination">
    <i class="fa-solid fa-chevron-left"></i>
    <div class="btnlar"></div>
    <i class="fa-solid fa-chevron-right"></i>
</div>
</div> 
    `
    elave()
    
    document.querySelector(".fa-chevron-right").addEventListener("click", function () {
//sag butona klikleyende deyriyki 3cu buttonda uje dayansin, yeni indexi2 olanda sualinda indexi 2 olur
        if (index == levl.length-1) {
//index 0dan basklayir, 0 1 2 3 sualimiz oldgu ucun 2de dayanmalidi,gelib 2cide button3de olur
setTimeout(netice,1000)
        }
        else {
            index++
        }
        Data()
    })
    document.querySelector(".fa-chevron-left").addEventListener("click", function () {
        if (index == 0) {
            index = 0
        } else {
            index--
        }
        Data()
    })



    let z = document.querySelectorAll(".btnlar button")
    z.forEach(elem => {
        elem.addEventListener("click", function () {
            index = Number(elem.innerText) - 1
            Data()
        })
    })
}


function elave() {
    let bt = document.querySelector(".btnlar")
    for (let i = 0; i < levl.length; i++) {
        bt.innerHTML += `<button>${i + 1}</button>`
        
    }
}

let correct = 0;
let wrong = 0;
function cavab(k) {
    if (k.innerText.trim()==levl[index].duzguncavab.trim()) {
        k.classList.add("yasil")
        correct++
    }
    else {
        k.classList.add("qirmizi")
        wrong++
    }
    document.querySelectorAll(".dordlu button").forEach(x=>{
        x.classList.add("deyismez")
    })


    //cavabin klikinden soram
    setTimeout(() => {
         if (index == levl.length-1) {
            netice()
         }
    }, 1000);
    
}

function netice(){
    document.querySelector(".mavi").style.display = "none"
    document.querySelector(".netice").style.display = "block"
    let son=document.querySelector(".netice")
        son.children[1].children[0].innerText=correct
        son.children[2].children[0].innerText=wrong
        son.children[3].children[0].innerText=levl.length-(correct+wrong)
        son.children[4].children[0].innerText=levl.length
// }
}
//burda bir sorun vare men 1ci buttona basb suali secdimse tezzden 1e qayida bilmerem
// axi, yada 3 cu sualda secdimse bitmelidi avtomartik aclmalidi ama 
//3e basanda tezden yene yene basb cvb secek oliur)