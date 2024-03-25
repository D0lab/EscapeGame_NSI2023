konami = [38,38,40,40,37,39,37,39,66,65]
timep = [84,73,77,69,80]
timem = [84,73,77,69,77]

var cheatcode = []
duree = parseInt(localStorage.getItem("dureeMinuteur"));



document.addEventListener('keydown', function(event) {
		
		if(event.keyCode == 88){
			cheatcode = []
		}
		
		else{
		
		cheatcode.push(event.keyCode)
		console.log(event.keyCode)
		console.log(cheatcode)
		
		
		
		var checkkonami = 0;
		var checktimep = 0;
		var checktimem = 0;
		for(var i=0;i<cheatcode.length;i++){				
				
				
				
				if(cheatcode[i] == konami[i]){
															
					checkkonami = checkkonami + 1;
					
				}
				
				if(cheatcode[i] == timep[i]){
															
					checktimep = checktimep + 1;
					
				}
				
				if(cheatcode[i] == timem[i]){
															
					checktimem = checktimem + 1;
					
				}
				
				
			
			
		}
			
		if(checkkonami == konami.length){
			
			console.log('KONAMI')
			konamicheck = 'Oui'
			localStorage.setItem("konami", konamicheck);
			cheatcode = []
			document.location.href="../pieces/fin.html"; 				
		}	
		
		if(checktimep == timep.length){					
			console.log('TimeP')
			cheatcode = []	
			duree = duree + 60
			console.log(duree)
			localStorage.setItem("dureeMinuteur", duree);
			
		}
		
		if(checktimem == timem.length){			
			console.log('TimeM')
			cheatcode = []	
			duree = duree - 60
			console.log(duree)
			localStorage.setItem("dureeMinuteur", duree);
			
		}
		
	}
		
	});
