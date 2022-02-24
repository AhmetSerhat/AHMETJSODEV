document.getElementById("listeUlke").addEventListener("change",yer)
let sonuc = document.getElementById("sonucBaslık")

function yer(){
    sonuc.classList.remove("CA","USA","TRY","normal",)
    let ulke=document.getElementById("listeUlke").selectedIndex
   
    
    
    if(ulke==1){
    document.body.style.backgroundColor="yellowgreen"
    sonuc.innerHTML="Nüfus: 38,01 milyon "
    sonuc.classList.add("CA");
    document.getElementById("logo").setAttribute("src","canada.png")
   }
    
   else if(ulke==2){
    document.body.style.backgroundColor="burlywood"
    sonuc.innerHTML="Nüfus: 329,5 milyon"
    sonuc.classList.add("USA");
    document.getElementById("logo").setAttribute("src","amerika.png")
   }
   
   else if(ulke==3){
    document.body.style.backgroundColor="lightcoral"
    sonucBaslık.innerHTML="Nüfus: 84,34 milyon"
    sonuc.classList.add("TRY");
    document.getElementById("logo").setAttribute("src","Turkey.png")
   }
   console.log(ulke)
}
function merhaba(){
    let ad

    ad=document.getElementById("txtAd").value 
}