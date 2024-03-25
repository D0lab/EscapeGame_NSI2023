

$(document).ready(function()	{
   var objets_a_avoir = ["carte d'accès"];
   var objets_trousse = ["carte d'accès"];
   var sortir = false;
   var flag = 0;
   
   
   
   
   
   
   
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
	
	AfficherTrousse()
	
	
   	
	AddTrousse(objet.data("nom"));
	console.log(objet.data("nom"))
	if(objet.data("nom")== "entree1" && verif()=='true'){
		console.log("sortie")
		ParIciLaSortief();
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
				console.log('true');				
			}		
				
			else{
				return 'false';
				console.log('false');			
			}
			
		
	}
	
	
	
	
   

	
	function DansListe(element) {
		
		var flag = 0;
		
		
		if(element == 'centrale'){
			var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));
			explosionslieux.push(" "+element+" (p2-2) ")
			localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
			document.location.href="../pieces/perdu.html";
		}
		for(var i=0; i<objets_trousse.length;i++){
			if(element === objets_trousse[i]){
				flag = 1;
			}
			
		}
		
		
		
	}

	   

   
   function AddTrousse(objet){
	   
	   
		
		
		if(objet == 'entree1' && verif()=='false'){
			$("#trousse").html($("#trousse").html()+'<br />'+"INACCESSIBLE"); 
		}
		
		else if(objet == 'entree1' && verif()=='true'){
			$("#trousse").html($("#trousse").html()+'<br />'+"OUVERTURE"); 
		}
		
		else if(objet == 'entree2'){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEJA VISITE"); 
		}
			
		else if(objet != 'entree1'){
			$("#trousse").html($("#trousse").html()+'<br />'+"INACCESSIBLE"); 
		
		}
		
	   
	   
   }

	function ParIciLaSortief(){
		sortir = true;	
		document.location.href="../pieces/piece4.html"; 
	}
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 2-2 ") === -1) {
		piecescheck.push(" 2-2 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));
	
	
	
	

});
