

$(document).ready(function()	{
   var objets_a_avoir = ["carte d'accès ascenseur"];
   var objets_trousse = ["carte d'accès ascenseur"];
   var objets_obtenus = ["carte d'accès ascenseur","pot de fleur"];
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
	
	//pour l'affichage à droite on utilise jquery
	texte = "<h2>Contenu de la trousse</h2>";
	texte += "<ul>";
	for (var i = 0; i< objets_trousse.length; i++)
	texte +="<li>"+objets_trousse[i]+"</li>";
	texte +="</ul>";
	$("#trousse").html(texte);
	
	
   	
	AddTrousse(objet.data("nom"));
	console.log(objet.data("nom"))
	if(objet.data("nom")== 'ascenseur1' && verif()=='true'){
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
		
		for(var u=0; u<objets_obtenus.length;u++){
			if(element === objets_obtenus[u]){
				flag = 2;
				return flag
			}
			
		}
		
		if(element == 'ascenseur1' || element == 'ascenseur2' || element == 'boutons'){
			flag = 1;
		}
		
		else if(element == 'pot de fleur' && flag == 0){
			objets_trousse.push("carte d'accès ascenseur");
			flag = 1;
		}
		
		else if(element == "tableau1"){
			toggd1();
			flag = 1;
		}
		
		else if(element == "tableau2"){
			toggd2();
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
		
		
		if(objet == 'boutons'){
			var explosionslieux = JSON.parse(localStorage.getItem("explosionslieux"));
			explosionslieux.push(objet+" (p4) ")
			localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
			document.location.href="../pieces/perdu.html";
			
		}
		
		else if(objet == 'tableau1' || objet == 'tableau2'){
			flag = 1;
		}
		else if(objet == 'ascenseur1' && verif()=='false'){
			$("#trousse").html($("#trousse").html()+'<br />'+"INACCESSIBLE"); 
		}
		else if(objet == 'ascenseur1' && verif()=='true'){
			$("#trousse").html($("#trousse").html()+'<br />'+"OUVERTURE"); 
		}
		else if(objet == 'ascenseur2'){
			$("#trousse").html($("#trousse").html()+'<br />'+"HORS SERVICE"); 
		}
		else if(flag == 1){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEJA OBTENU"); 			
		}
		else{
			$("#trousse").html($("#trousse").html()+'<br />'+objet); 
		}
		
		
		for(var u=0; u<objets_obtenus.length;u++){
			if(objet === objets_obtenus[u]){
				flag = 2;
			}
			
		}
		
		if(flag == 0){
			objets_obtenus.push(objet);
		}
	   
	   
   }

	function ParIciLaSortief(){
		sortir = true;	
		document.location.href="../pieces/piece5.html"; 
	}
		
	
	
	
	
	let d1 = document.getElementById("d1");
	d1.style.display = "none";
	
	let d2 = document.getElementById("d2");
	d2.style.display = "none";
	
	
	
	
	function toggd1() {
		if(d1.style.display == "none"){
			d1.style.display = "block";
			d2.style.display = "none";
		}
		
		else{
			d1.style.display = "none";
		}
		
	};
	
	function toggd2() {
		if(d2.style.display == "none"){
			d2.style.display = "block";
			d1.style.display = "none";
		}
		
		else{
			d2.style.display = "none";
		}
		
	};
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 4-2 ") === -1) {
		piecescheck.push(" 4-2 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));

	
	

});
