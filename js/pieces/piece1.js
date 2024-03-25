

$(document).ready(function()	{
   var objets_a_avoir = ['roue'];
   var objets_trousse = [];
   var objets_obtenus = [];
   var sortir = false;
   var flag = 0;
   var imagejavascript = document.createElement("img");
   
   //pour le developpeur passer debug = vrai
   var debug = true;

	imageMapResize();
   //action effectuee au chargement de la page en mode debug
   if(debug){
	    console.log('debut programme')
   }
 
   $(".objets").on("click",function(){
		JeClique($(this));
	});
	
   function JeClique(objet){
	//console.log(objet.data);
	//console.log(objets_trousse);
	
	
	DansListe(objet.data("nom"));
	
	//pour l'affichage à droite on utilise jquery
	texte = "<h2>Contenu de la trousse</h2>";
	texte += "<ul>";
	for (var i = 0; i< objets_trousse.length; i++)
	texte +="<li>"+objets_trousse[i]+"</li>";
	texte +="</ul>";
	$("#trousse").html(texte);
	
	
   	
	AddTrousse(objet.data("nom"));
	console.log(objet.data("nom"))
	if(objet.data("nom")== 'voiture' && verif()=='true'){
			
			togg()
		}
	}
   
	function verif() {
		var check = 0;
			for(var i=0;i<objets_a_avoir.length;i++){
				for(var u=0;u<objets_trousse.length;u++){
					
					
					
					if(objets_a_avoir[i] == objets_trousse[u]){
																
						check = check + 1;
						
					}
					
				}
				
			}
			
			console.log(check)
			if(check == objets_a_avoir.length){
				return 'true';
				console.log('true')				
			}		
				
			else{
				return 'false';
				console.log('false')			
			}
			
		
	}
	
	
		
	
	
	function DansListe(element) {
		
		var flag = 0;
		
		if(element == 'voiture'){
			flag = 1;
		}
		
		if(element == 'horloge'){
			var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));
			explosionslieux.push(" "+element+" (p1) ")
			localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
			setTimeout(perdu, 1500);	
			
			
		}
		
		for(var i=0; i<objets_trousse.length;i++){
			if(element === objets_trousse[i]){
				flag = 1;
			}
			
		}
		
		if(flag == 0){
			objets_trousse.push(element);
		}
		
		
	}

	function perdu(){
		document.location.href="../pieces/perdu.html";			
	}

   
   function AddTrousse(objet){
	   
	   var flag = 0;
	   
	   
	   for(var i=0; i<objets_obtenus.length;i++){
			if(objet === objets_obtenus[i]){
				flag = 1;
			}
			
		}
	   
	   
		
		if(objet == 'voiture' && verif()=='false'){
			$("#trousse").html($("#trousse").html()+'<br />'+"IL MANQUE UNE ROUE"); 
		}
		else if(objet == 'voiture' && verif()=='true'){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEMARRAGE"); 
		}
		else if(objet == 'horloge'){
			$("#trousse").html($("#trousse").html()+'<br />'+"C'est l'heure de péter !");			
		}
		else if(flag == 1){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEJA OBTENU"); 			
		}
		else if(objet != 'voiture'){
			$("#trousse").html($("#trousse").html()+'<br />'+objet); 
		}
		
		
		for(var u=0; u<objets_obtenus.length;u++){
			if(objet === objets_obtenus[u]){
				flag = 2;
				return flag
			}
			
		}
		
		if(flag == 0){
			objets_obtenus.push(objet);
		}
	   
	   
   }

	function ParIciLaSortief(){
		sortir = true;	
		konamicheck = 'Non'
		localStorage.setItem("konami", konamicheck);
		document.location.href="../pieces/piece2.html"; 
	}
	
	let d1 = document.getElementById("d1");
	d1.style.display = "none";
	
	
	
	
	function togg() {
			d1.style.display = "block";
		
	};
	
	
	
	var piecescheck = []
	if (piecescheck.indexOf(" 1 ") === -1) {
		piecescheck.push(" 1 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));
	

});
