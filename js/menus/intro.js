	
	
var compteur = 1
	
let d1 = document.getElementById("d1");
d1.style.display = "block";

let d2 = document.getElementById("d2");
d2.style.display = "none";

let d3 = document.getElementById("d3");
d3.style.display = "none";

let d4 = document.getElementById("d4");
d4.style.display = "none";

let d5 = document.getElementById("d5");
d5.style.display = "none";

let d6 = document.getElementById("d6");
d6.style.display = "none";

let d7 = document.getElementById("d7");
d7.style.display = "none";

let d8 = document.getElementById("d8");
d8.style.display = "none";


function resetd(){
	d1.style.display = "none";
	d2.style.display = "none";
	d3.style.display = "none";
	d4.style.display = "none";
	d5.style.display = "none";
	d6.style.display = "none";
	d7.style.display = "none";
	d8.style.display = "none";
	
}
function demarrerMinuteur() {
	  // Durée du minuteur en secondes
	  var duree = 60*5;

	  // Enregistrement de la durée dans le stockage local
	  localStorage.setItem("dureeMinuteur", duree);
	  
	  var explosions = 0
	localStorage.setItem("explosions", explosions);
	
	
	
	var explosionslieux = []
	localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
	
	

	  // Redirection vers la page 2
	  window.location.href = "../pieces/piece1.html";
	}

function togg() {
	
	compteur = compteur + 1
	
	if(compteur > 8){
		demarrerMinuteur();		
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
	if(compteur==5){
		d5.style.display = "block";
		console.log('dialogue 5')
	}
	if(compteur==6){
		d6.style.display = "block";
		console.log('dialogue 6')
	}
	if(compteur==7){
		d7.style.display = "block";
		console.log('dialogue 7')
	}
	if(compteur==8){
		d8.style.display = "block";
		console.log('dialogue 8')
	}
	console.log(compteur)
	
};
