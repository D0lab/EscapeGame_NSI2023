	
	
var compteur = 1
   
   
   
   
   
   
	
let d1 = document.getElementById("d1");
d1.style.display = "block";

let d2 = document.getElementById("d2");
d2.style.display = "none";

let d3 = document.getElementById("d3");
d3.style.display = "none";

let d4 = document.getElementById("d4");
d4.style.display = "none";



function resetd(){
	d1.style.display = "none";
	d2.style.display = "none";
	d3.style.display = "none";
	d4.style.display = "none";
	
}
	
	
	


function togg() {
	
	compteur = compteur + 1
	
	if(compteur > 4){
		document.location.href="../pieces/piece1.html";		
	}
	
	resetd()
	
	if(compteur==2){
		d2.style.display = "block";
		console.log('dialogue 2')
	}
	if(compteur==3){
		d3.style.display = "block";
		console.log('dialogue 3')
	}
	if(compteur==4){
		d4.style.display = "block";
		console.log('dialogue 4')
	}
	console.log(compteur)
	
};
