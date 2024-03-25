// Récupération de la durée depuis le stockage local
duree = localStorage.getItem("dureeMinuteur");
	
	
	// Fonction pour afficher et mettre à jour le minuteur
    function afficherMinuteur() {
      

      // Vérification si la durée existe
      if (duree) {
        var minutes = Math.floor(duree / 60);
        var secondes = duree % 60;

        // Affichage du minuteur dans un élément HTML avec l'ID "minuteur"
        document.getElementById("minuteur").textContent = minutes + "m " + secondes + "s";

        // Décrémentation de la durée
        duree--;

        // Mise à jour de la durée dans le stockage local
        localStorage.setItem("dureeMinuteur", duree);

        // Vérification si le minuteur est écoulé
        if (duree <= 0) {
          clearInterval(interval);
			document.location.href="../pieces/fin2.html";
        }
      }
    }

    // Lancement du minuteur toutes les secondes
    var interval = setInterval(afficherMinuteur, 1000);
