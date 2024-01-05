function daysSince(timestamp) {
    const currentTimestamp = Date.now();
    const difference = currentTimestamp - timestamp;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}

// Exemple : Date de naissance (horodatage en millisecondes)
const birthTimestamp = new Date('2001-11-27').getTime();

// Appel de la fonction pour déterminer le nombre de jours écoulés depuis la date de naissance
const daysSinceBirth = daysSince(birthTimestamp);

// Sélection de l'élément où afficher le résultat
const daysSinceElement = document.getElementById('daysSince');

// Affichage du résultat dans l'élément sélectionné
daysSinceElement.textContent = `Nombre de jours écoulés depuis ma date de naissance : ${daysSinceBirth} jours.`;





//---------------------------------------------------------------------------------------------------------------


function daysSince1970(timestamp) {
    const currentTimestamp = Date.now();
    const difference = currentTimestamp - timestamp;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}

// Exemple : Horodatage après 1970 (en millisecondes)
const givenTimestamp = new Date('1970-01-01').getTime();

// Appel de la fonction pour déterminer le nombre de jours écoulés depuis le moment donné après 1970
const daysSinceGivenTimestamp = daysSince1970(givenTimestamp);

// Sélection de l'élément où afficher le résultat
const daysSince1970Element = document.getElementById('daysSince1970');

// Affichage du résultat dans l'élément sélectionné
daysSince1970Element.textContent = `Nombre de jours écoulés depuis le moment donné après 1970 : ${daysSinceGivenTimestamp} jours.`;