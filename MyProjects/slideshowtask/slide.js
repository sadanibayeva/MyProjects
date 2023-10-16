let array=["https://images.pexels.com/photos/883630/pexels-photo-883630.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://media.istockphoto.com/id/521697371/photo/brown-pedigree-horse.jpg?s=612x612&w=0&k=20&c=x19W0K7iuQhQn_7l3wRqWq-zsbo0oRA33C3OF4nooL0=",
"https://images.pexels.com/photos/220039/pexels-photo-220039.jpeg?auto=compress&cs=tinysrgb&w=600"]
let sekil=document.getElementById("photo")
let k=array.length-1;
sekil.setAttribute("src",array[k]);
//default olaraq gorunmesi ucun
document.getElementById("sag").addEventListener("click",function(){
    sekil.setAttribute("src",array[k]);
    k=k+1;
    if(k>array.length-1){
        k=0
    }
})
document.getElementById("sol").addEventListener("click",function(){
    sekil.setAttribute("src",array[k]);
    k=k-1;
    if(k<0){
        k=array.length-1;
    }
})
let hamisi=document.querySelectorAll(".second img")
hamisi.forEach(x=>{
    x.addEventListener("click",function(){
        // alert()
        sekil.setAttribute("src",x.src)
        console.log(sekil);
})
})
//sekile hansin clik etsek onu gostersin.