

$(document).ready(function()	{
   var objets_a_avoir = ["carte d'accès"];
   var objets_trousse = [];
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
	if(objet.data("nom")== 'tiroir' && verif()=='true'){
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
				console.log('true')				
			}		
				
			else{
				return 'false';
				console.log('false')			
			}
			
		
	}
	
	
	
	
	function DansListe(element) {
		
		var flag = 0;
		
		if(element == 'flamme'){
			var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));
			explosionslieux.push(" "+element+" (p3) ")
			localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
			document.location.href="../pieces/perdu.html"; 
		}
		
		if(element == 'potion' || element == 'retour' || element == 'flamme'){
			flag = 1;
		}
		
		if(element == 'potion'){
			
			togg()
		}
		
		
		for(var i=0; i<objets_trousse.length;i++){
			if(objet === objets_trousse[i]){
				flag = 1;
			}
			
		}
		
		if(flag == 0){
			objets_trousse.push(element);
		}
		
		
	}
	   

   
   function AddTrousse(objet){
		if(objet == 'retour' && verif()=='false'){
			document.location.href="../pieces/piece2.html"; 
		}
		if(objet == 'retour' && verif()=='true'){
			ParIciLaSortief(); 
		}
		if(objet == 'potion'){
			$("#trousse").html($("#trousse").html()+'<br />'+'Mr.Potion'); 
		}
		else{
			$("#trousse").html($("#trousse").html()+'<br />'+objet); 
		}
	   
	   
   }

	function ParIciLaSortief(){
		sortir = true;	
		document.location.href="../pieces/piece2-2.html"; 
	}
		
	
	
	
	
	let d1 = document.getElementById("d1");
	d1.style.display = "none";
	
	
	
	
	function togg() {
			d1.style.display = "block";
		
	};
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 3 ") === -1) {
		piecescheck.push(" 3 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));
	
	
	
	
	
	

});
