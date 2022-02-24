document.getElementById("listeUlke").addEventListener("change",yer)
let sonuc = document.getElementById("sonucBaslık")

function yer(){
    sonuc.classList.remove("CA","USA","TRY","normal",)
    let ulke=document.getElementById("listeUlke").selectedIndex
   
    
    
    if(ulke==1){
    document.body.style.backgroundColor="yellowgreen"
    sonuc.innerHTML="Kanada, Kuzey Amerika'da bir ülkedir. On eyalet ve üç bölgeden oluşan ülke, Büyük Okyanus'tan Atlas Okyanusu'na ve kuzeyde Arktik Okyanusu'na kadar 9,98 milyon km²'lik bir alanı kaplar. Bu özelliğiyle yüzölçümü bakımından dünyanın Rusya'dan sonra en büyük 2. ülkesidir."
    sonuc.classList.add("CA");
    document.getElementById("logo").setAttribute("src","canada.png")
   }
    
   else if(ulke==2){
    document.body.style.backgroundColor="burlywood"
    sonuc.innerHTML="Amerika Birleşik Devletleri, Birleşik Devletler ya da resmî olmayan ismiyle Amerika, orta Kuzey Amerika'da, Kanada ve Meksika arasında bulunan, elli eyalet ve bir federal bölgeden oluşan, federal anayasal cumhuriyet ile yönetilen bir ülkedir."
    sonuc.classList.add("USA");
    document.getElementById("logo").setAttribute("src","amerika.png")
   }
   
   else if(ulke==3){
    document.body.style.backgroundColor="lightcoral"
    sonucBaslık.innerHTML="Türkiye veya resmî adıyla Türkiye Cumhuriyeti, topraklarının büyük bölümü Anadolu'da, küçük bir bölümü ise Balkan Yarımadası'nın güneydoğu uzantısı olan Trakya'da yer alan bir ülkedir"
    sonuc.classList.add("TRY");
    document.getElementById("logo").setAttribute("src","Turkey.png")
   }
   console.log(ulke)
}
function merhaba(){
    let ad

    ad=document.getElementById("txtAd").value 
}
