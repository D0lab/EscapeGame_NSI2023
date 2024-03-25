

$(document).ready(function()	{
   var objets_a_avoir = [];
   var objets_trousse = [];
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
		
		
		if(element == 'centrale'){
			var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));
			explosionslieux.push(" "+element+" (p2) ")
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
		
		if(objet != 'entree2'){
			$("#trousse").html($("#trousse").html()+'<br />'+"INACCESSIBLE"); 
		
		}
		
		else if(objet == 'entree2'){
			$("#trousse").html($("#trousse").html()+'<br />'+"OUVERTURE"); 
			ParIciLaSortief();
		}
		
	   
	   
   }

	function ParIciLaSortief(){
		sortir = true;	
		document.location.href="../pieces/piece3.html"; 
	}
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 2 ") === -1) {
		piecescheck.push(" 2 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));
	
	
	
	

});
