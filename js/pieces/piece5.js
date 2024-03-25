

$(document).ready(function()	{
   var objets_a_avoir = [];
   var objets_trousse = [];
   var objets_obtenus = [];
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
	
	}
	
	
	
	
	function DansListe(element) {
		
		var flag = 0;
		
		if(element == 'panel' || element == 'retour'){
			flag = 1;
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
	   
	   
		
		
		
		
		
		if(objet == 'retour'){
			document.location.href="../pieces/piece4-2.html";
		}
		
		else if(objet == 'panel'){
			document.location.href="../pieces/piece5-2.html";
		}
		
		else if(flag == 1){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEJA OBTENU"); 			
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
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 5 ") === -1) {
		piecescheck.push(" 5 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));
	
	

	
	

});
