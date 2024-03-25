

$(document).ready(function()	{
   var objets_a_avoir = [];
   var objets_trousse = [];
   var sortir = false;
   var flag = 0;
   var code_a_trouver = [3,9,2,5];
   var code = [];
   
   
   
   
   
   
   
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
	objets_trousse.push(code);
	
	

   function AfficherTrousse(){
	//pour l'affichage à droite on utilise jquery
	texte = "<h2>Contenu de la trousse</h2>";
	texte += "<ul>";
	for (var i = 0; i< objets_trousse.length; i++)
	texte +="<li>"+objets_trousse[i]+"</li>";
	texte +="</ul>";
	$("#trousse").html(texte);
	}
	
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
	VerifCode(objet.data("nom"));
	console.log(objet.data("nom"));
	
	}
	
	
	
   
	
	function DansListe(element) {
		
		var flag = 0;
		
		if(element == 'retour' || element == 'ouvrir' || element == 'fermer' || element == 'alarme' || element == '1' || element == '2' || element == '3' || element == '4' || element == '5' || element == '6' || element == '7' || element == '8' || element == '9' || element == '10'){
			flag = 1;
		}
		
		if(element == 'alarme'){
			var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));
			explosionslieux.push(" "+element+" (p8-2) ")
			localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
			document.location.href="../pieces/perdu.html";			
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
		
		if(objet == 'retour'){
			document.location.href="../pieces/piece8.html";
		}
			
	   
	   
   }

	   

   
   function VerifCode(objet){
		
		
		if (objet == '1' || objet == '2' || objet == '3' || objet == '4' || objet == '5' || objet == '6' || objet == '7' || objet == '8' || objet == '9' || objet == '10'){
			objets_trousse = [];
			code.push(objet);
			objets_trousse.push(code);
			AfficherTrousse()
			
			
		}
		
		console.log(code);
		
		var bool = true;
		var bool2 = true;
		
		
		function CodeValidation(){
		
			
			for (let i = 0; i < code_a_trouver.length+1; i++) {
				if(code[i]!=code_a_trouver[i]){
					bool = false;
					
				}
				if(bool==false){
					bool2 = false
				}
				}
				
			if(bool2==true){
				console.log("sortie")
				ParIciLaSortief();			
			}
			
			
			;
			console.log('on atteint les 4 là');
			objets_trousse = [];
			code = [];
			console.log(objets_trousse)
			AfficherTrousse();
		}
		
		if(code.length == code_a_trouver.length){
			$("#trousse").html($("#trousse").html()+'<br />'+"VERIFICATION");
			setTimeout(CodeValidation, 750);
		}
			
	   
	   
   }

	function ParIciLaSortief(){
		sortir = true;	
		document.location.href="../pieces/piece8-3.html"; 
	}
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 8-2 ") === -1) {
		piecescheck.push(" 8-2 ")
	}
	
		
	localStorage.setItem("check", JSON.stringify(piecescheck));
	
	
	

});
