let conteiner=document.getElementsByClassName("conteiner");
let auto =document.getElementsByClassName("auto");
let pro=document.getElementById("proses");
let kreiss=document.getElementById("punkte").getElementsByTagName("div");

let zuruck=document.getElementById("zuruck");
let aktuell=0;
let punkte=aktuell;





function nav(n) {

 


    if(aktuell==auto.length-1 && n==1)
    return
    if(aktuell==0 && n==-1)
    return

  

auto[aktuell].style.display="none";
kreiss[punkte].style.backgroundColor="rgb(251, 207, 154)";
aktuell+=n;
punkte+=n;
auto[aktuell].style.display="block";
kreiss[punkte].style.backgroundColor="orange";
zuruck.style.opacity="1";

if (aktuell==0) {
    pro.style.width="5%";
    zuruck.style.opacity="0";
   
}

else if(aktuell==1){
    pro.style.width="25%";
   
}

else if(aktuell==2){
    pro.style.width="50%";
  
}

else if(aktuell==3){
    pro.style.width="75%";
    
}








    
}