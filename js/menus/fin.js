var minutes = 0
var secondes = 0	
var verifpieces = []	
	
let d1 = document.getElementById("d1");
d1.style.display = "block";
let d2 = document.getElementById("d2");
d2.style.display = "none";




function togg() {
	d1.style.display = "none";
	d2.style.display = "block";
	
};
	
	
	
	
	var piecescheckbase = [" 1 "," 2 "," 2-2 "," 3 "," 4 "," 5 "," 5-2 "," 6 "," 6-2 "," 6-4 "," 7 "," 8 "," 8-2 "," 8-3 "," 9 "]
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	var flag = 0;
	
	
	
	for (var i = 0; i < piecescheckbase.length; i++) {
	
		if (piecescheck.indexOf(piecescheckbase[i]) === -1) {
			flag = 1;
			verifpieces.push(piecescheckbase[i]);
		}
	}
	
	if(flag == 0){
		verifpieces = 'RAS'
	}
	
	
	
	
	
	// Fonction pour afficher et mettre à jour le minuteur
    function afficherMinuteur() {
      // Récupération de la durée depuis le stockage local
      var duree = (5*60) - localStorage.getItem("dureeMinuteur");
      piecescheck = localStorage.getItem("check");
		
      // Vérification si la durée existe
      if (duree) {
        minutes = Math.floor(duree / 60);
        secondes = duree % 60;

        // Affichage du minuteur dans un élément HTML avec l'ID "minuteur"
        document.getElementById("minuteur").textContent = minutes + "m " + secondes + "s";

        

      }
    }

	afficherMinuteur()


var konami = localStorage.getItem("konami");
var explosions = localStorage.getItem("explosions");
var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));


document.getElementById("explosions").textContent = "Vous avez fait boom "+explosions+" fois";


function sendMail(params){
	var tempParams={
		nom:document.getElementById("Nom").value,
		classe:document.getElementById("classe").value,
		minutes:minutes,
		secondes:secondes,
		verifpieces:verifpieces,
		konami:konami,
		explosions:explosions,
		explosionslieux:explosionslieux
	};
	
	togg();	
	emailjs.send('service_uupuqkv',"template_wlp35gn",tempParams)
    .then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
		document.location.href="../index.html"; 
    }, function(error) {
       console.log('FAILED...', error);
    });
	
}
