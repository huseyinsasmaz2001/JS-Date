// Fonction pour calculer l'heure et la date futures en fonction d'un nombre donné d'heures
function calculateDateTime(hours) {
    // Obtient l'horodatage actuel en millisecondes
    const currentTimestamp = Date.now();
    
    // Calcule l'horodatage dans le futur en ajoutant les heures converties en millisecondes à l'horodatage actuel
    const futureTimestamp = currentTimestamp + (hours * 60 * 60 * 1000);
    
    // Crée un objet Date basé sur l'horodatage futur calculé
    const futureDate = new Date(futureTimestamp);
    
    // Renvoie une représentation sous forme de chaîne de caractères de la date et l'heure au format local
    return futureDate.toLocaleString();
}

// Sélection des éléments bouton, champ d'entrée pour les heures et élément pour afficher le résultat
const calculateButton = document.getElementById('calculateButton'); // Sélectionne le bouton par son ID
const hoursInput = document.getElementById('hoursInput'); // Sélectionne l'input pour les heures par son ID
const resultElement = document.getElementById('result'); // Sélectionne l'élément où afficher le résultat par son ID

// Écoute de l'événement de clic sur le bouton
calculateButton.addEventListener('click', () => {
    // Récupère la valeur du champ d'entrée pour les heures et la convertit en nombre entier
    const hours = parseInt(hoursInput.value);
    
    // Vérifie si la valeur saisie est un nombre valide
    if (!isNaN(hours)) {
        // Si c'est un nombre valide, calcule l'heure et la date dans le futur en fonction du nombre d'heures
        const futureDateTime = calculateDateTime(hours);
        
        // Affiche le résultat dans l'élément spécifié, montrant le nombre d'heures et la date future correspondante
        resultElement.textContent = `Dans ${hours} heures, ce sera : ${futureDateTime}`;
    } else {
        // Si la valeur saisie n'est pas un nombre valide, affiche un message d'erreur
        resultElement.textContent = 'Veuillez saisir un nombre valide d\'heures.';
    }
});
