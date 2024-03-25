

$(document).ready(function()	{
   var objets_a_avoir = ["carte d'accès"];
   var objets_trousse = ["carte d'accès"];
   var objets_obtenus = ["carte d'accès","tournevis"];
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
	
	

   function AfficherTrousse(){
	//pour l'affichage à droite on utilise jquery
	texte = "<h2>Contenu de la trousse</h2>";
	texte += "<ul>";
	for (var i = 0; i< objets_trousse.length; i++)
	texte +="<li>"+objets_trousse[i]+"</li>";
	texte +="</ul>";
	$("#trousse").html(texte);
	}
	AfficherTrousse()
	
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
	console.log(objet.data("nom"));
	
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
		
		if(element == 'boutonrouge'){
			var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));
			explosionslieux.push(" "+element+" (p6-4) ")
			localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
			document.location.href="../pieces/perdu.html";
		}
		
		if(element == 'porte' || element == 'boutonrouge' || element == 'casier1' || element == 'casier2' || element == 'casier3' || element == 'ventilation'){
			flag = 1;
		}
		
		if(element == 'porte'){
			
			togg()
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

	   

   
   function AddTrousse(objet){
	   
	   var flag = 0;
	   
	   
	   for(var i=0; i<objets_obtenus.length;i++){
			if(objet === objets_obtenus[i]){
				flag = 1;
			}
			
		}
	   
	   
		
		
		
		
		
		if(objet == 'ventilation'){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEJA VISITE"); 
		}
		
		else if(objet == 'casier3'){
			$("#trousse").html($("#trousse").html()+'<br />'+"RIEN ICI"); 
		}
		
		else if(objet == 'porte' && verif()=='false' || objet == 'casier1' || objet == 'casier2'){
			$("#trousse").html($("#trousse").html()+'<br />'+"INACCESSIBLE"); 
		}
		
		else if(objet == 'porte' && verif()=='true'){
			$("#trousse").html($("#trousse").html()+'<br />'+"OUVERTURE"); 
		}
		
		else if(flag == 1){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEJA OBTENU"); 			
		}
		
		else if(objet == 'tournevis'){
			$("#trousse").html($("#trousse").html()+'<br />'+"Pot à crayon");
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
		document.location.href="../pieces/fin.html"; 
	}
	
	
	
	
	let d1 = document.getElementById("d1");
	d1.style.display = "none";
	
	
	
	
	function togg() {
			d1.style.display = "block";
		
	};
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 6-4 ") === -1) {
		piecescheck.push(" 6-4 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));
	


});
