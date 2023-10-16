let array = [
    {
        id: 1,
        ad: "Ilham Eliyev"
    },
    {
        id: 2,
        ad: "Ilham Eliyev"
    },
    {
        id: 3,
        ad: "Ilham Eliyev"
    },
    {
        id: 4,
        ad: "Ilham Eliyev"
    },
    {
        id: 5,
        ad: "Ilham Eliyev"
    }
]

function klik() {
document.querySelector("table").style.display = "table"
    thead.innerHTML = ''
    let tr1 = document.createElement("tr")
    let th1 = document.createElement("th")
    tr1.appendChild(th1)
    let th1soz = document.createTextNode("№")
    th1.appendChild(th1soz)
    let th2 = document.createElement("th")
    tr1.appendChild(th2)
    let th2soz = document.createTextNode("S.A.A")
    th2.appendChild(th2soz)
    console.log(tr1);
    for (i = 0; i < Number(say.value); i++) {
        let elem = document.createElement("th")
        let word = document.createTextNode("Is №" + (i + 1))
        elem.appendChild(word)
        tr1.appendChild(elem)
    }
    let son = document.createElement("th")
    let sonsoz = document.createTextNode("Netice")
    son.appendChild(sonsoz)
    tr1.appendChild(son)
    thead.appendChild(tr1)

    tbody.innerHTML = ''
    array.forEach(x => {
        let tr2 = document.createElement("tr")
        let td1 = document.createElement("td")
        let td1soz = document.createTextNode(x.id)
        td1.appendChild(td1soz)
        tr2.appendChild(td1)
        let td2 = document.createElement("td")
        let td2soz = document.createTextNode(x.ad)
        td2.appendChild(td2soz)
        tr2.appendChild(td2)
        for (i = 0; i < Number(say.value); i++) {
            let btn = document.createElement("button")
            let td3 = document.createElement("td")
            let td3soz = document.createTextNode("d/e")
            td3.appendChild(btn)
            btn.appendChild(td3soz)
            tr2.appendChild(td3)
        }
        tdson = document.createElement("td")
        tdsonsoz = document.createTextNode("0.0")
        tdson.appendChild(tdsonsoz)
        tr2.appendChild(tdson)
        tbody.appendChild(tr2)
    })
    let reng;
    let maxbal = 10;
    let tamm = Number((maxbal / Number(say.value)).toFixed(2))
    let natamamm = Number(tamm / 2)
    document.querySelectorAll("tbody button").forEach(t => {
        t.addEventListener("click", function () {
           t.classList.add("deyishmez")
            document.querySelector(".modal").style.display = "block"
            reng = t
        })

    })
    document.querySelectorAll(".modal button").forEach(y => {
        y.addEventListener("click", function () {
            reng.classList.add(y.classList)
            reng.innerText = y.innerText
            document.querySelector(".modal").style.display = "none"
            if(y.innerText=='tam'){
                reng.parentElement.parentElement.lastChild.innerText=Number(reng.parentElement.parentElement.lastChild.innerText)+tamm
 //reng tdi bodybuttonlar yeni, onlarn parenti tbody, onlarnda parenti theaddi, lastchildi neticedi         
            }else if(y.innerText=='natamam'){
                reng.parentElement.parentElement.lastChild.innerText=Number(reng.parentElement.parentElement.lastChild.innerText)+natamamm
            }
        })
    })
}
//reng deyisenini yaratmagmza sebeb diger foreach icnde ist ede bilek deyedi
