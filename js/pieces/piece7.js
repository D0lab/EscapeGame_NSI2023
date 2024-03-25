var objets_a_avoir = ["clé"];
var objets_trousse = [];
var objets_obtenus = [];
var sortir = false;
var imagejavascript = document.createElement("img");


   
   
   
   
   
   
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
			explosionslieux.push(" "+element+" (p7) ")
			localStorage.setItem("explosionslieux", JSON.stringify(explosionslieux));
			document.location.href="../pieces/perdu.html";
		}
		
		if(element == 'ecran' && objets_obtenus.indexOf('clé') === -1){
			togg1();
		}
		
		if(element == 'moniteur'){
			togg2();
		}
		
		
		if(element == 'porte' || element == 'boutonrouge' || element == 'ecran' || element == 'serrure' || element == 'moniteur'){
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
	   
	   
	   
	   
		if(objet == 'serrure' && verif()=='false'){
			$("#trousse").html($("#trousse").html()+'<br />'+"JE N'AI PAS DE CLE"); 
		}
		
		else if(objet == 'serrure' && verif()=='true'){
			$("#trousse").html($("#trousse").html()+'<br />'+"OUVERTURE"); 
			ParIciLaSortief()
		}
		
		else if(objet == 'porte'){
			$("#trousse").html($("#trousse").html()+'<br />'+"TROP DE RADIATIONS"); 
		}
		
		else if(flag == 1){
			$("#trousse").html($("#trousse").html()+'<br />'+"DEJA OBTENU"); 			
		}
		
		else{
			$("#trousse").html($("#trousse").html()+'<br />'+objet); 			
		}
		
		if(objet == 'serrure'){
			flag = 1;
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
		document.location.href="../pieces/piece8.html"; 
	}
	
	
	
	var piecescheck = JSON.parse(localStorage.getItem("check"));
	if (piecescheck.indexOf(" 7 ") === -1) {
		piecescheck.push(" 7 ")
	}	
	localStorage.setItem("check", JSON.stringify(piecescheck));
	
	
	
	let d1 = document.getElementById("d1");
	d1.style.display = "none";
	
	let d2 = document.getElementById("d2");
	d2.style.display = "none";
	
	
	
	
	function togg1() {
		d1.style.display = "block";
		
	};
	
	
	function togg2() {
		if(d2.style.display=='none'){
			d2.style.display = "block";
		}
		else{
			d2.style.display = "none";
		}
		
	};
	
	
	
		
	
	



var container = document.getElementById("game1");  
var content = container.innerHTML;
var ordrecases = ["drag2","drag3","drag1","drag4"]

data1 = 0
data2 = 0
data3 = 0
data4 = 0

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev,casenum) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    if(casenum == 1){
		data1 = ev.dataTransfer.getData("text");		
	}
    if(casenum == 2){
		data2 = ev.dataTransfer.getData("text");		
	}
    if(casenum == 3){
		data3 = ev.dataTransfer.getData("text");		
	}
    if(casenum == 4){
		data4 = ev.dataTransfer.getData("text");		
	}
		
    var evtarget=ev.target;
      if (evtarget=="[object HTMLImageElement]"){
           evtarget = evtarget.parentNode;
      }
      else {
      ev.target.appendChild(document.getElementById(data));
      }
}

function reset1(){
    var container = document.getElementById("game1");
    container.innerHTML= html;
    data1=0
    data2=0
    data3=0
    data4=0
}                
var html;
window.onload = function(){
	html = document.getElementById('game1').innerHTML;
};   


function verifcases(){
	ordrecasescheck = 0
	ordrecaseserreurs = 0
	
	if(data1 == ordrecases[0]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	if(data2 == ordrecases[1]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	if(data3 == ordrecases[2]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	if(data4 == ordrecases[3]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	
			
	if(ordrecasescheck == ordrecases.length){
		d1.style.display = "none";
		objets_trousse.push('clé');
		objets_obtenus.push('clé');
		AfficherTrousse();
		
		
	}
	else{
		if(ordrecaseserreurs > 1){
			document.getElementById("resultat").textContent = ordrecaseserreurs+" ERREURS";
		}
		else{
			document.getElementById("resultat").textContent = ordrecaseserreurs+" ERREUR";
		}
	}
		
	
}
function verifcases(){
	ordrecasescheck = 0
	ordrecaseserreurs = 0
	
	if(data1 == ordrecases[0]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	if(data2 == ordrecases[1]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	if(data3 == ordrecases[2]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	if(data4 == ordrecases[3]){
		ordrecasescheck++
	}
	else{
	ordrecaseserreurs++	
	}
	
	
			
	if(ordrecasescheck == ordrecases.length){
		d1.style.display = "none";
		objets_trousse.push('clé');
		objets_obtenus.push('clé');
		AfficherTrousse();
		
		
	}
	else{
		if(ordrecaseserreurs > 1){
			document.getElementById("resultat").textContent = ordrecaseserreurs+" ERREURS";
		}
		else{
			document.getElementById("resultat").textContent = ordrecaseserreurs+" ERREUR";
		}
	}
		
	
}
