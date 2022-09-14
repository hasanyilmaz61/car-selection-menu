let fahrzeug=document.getElementsByClassName("fahrzeug");


let box=[];

for (let i = 0; i< fahrzeug.length; i++) {
 
box[i]=fahrzeug[i].getElementsByClassName("box");



for (let x = 0; x < box[i].length; x++) {
    
    box[i][x].onclick=function(){
        klikt(this);
        
    };
}


    }

    function klikt(element) {
      
  for (let i = 0; i < box[aktuell].length; i++) {
box[aktuell][i].classList.remove("aktiv");
    
  }
element.classList.add("aktiv");
      
    }

   