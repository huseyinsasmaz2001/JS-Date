// Fonction pour obtenir la date et l'heure actuelles dans une ville spécifique
function getLocalTime(city, offset) {
    // Crée un objet Date représentant l'heure actuelle dans le fuseau horaire local
    const now = new Date();
    // Récupère le décalage en minutes entre le fuseau horaire local et UTC (temps universel coordonné)
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    // Calcule l'heure locale en ajoutant l'offset (décalage horaire) en millisecondes à l'heure UTC
    const localTime = new Date(utc + (3600000 * offset));
    
    // Retourne une chaîne de caractères représentant la ville et l'heure locale
    return `${city} : ${localTime}`;
}

// Fuseaux horaires des villes spécifiées avec leur offset par rapport à UTC
const cities = [
    { name: "Anchorage (États-Unis)", offset: -9 }, // Décalage horaire de -9 heures par rapport à UTC
    { name: "Reykjavik (Islande)", offset: 0 }, // Décalage horaire de 0 heures par rapport à UTC
    { name: "Saint-Pétersbourg (Russie)", offset: 3 }, // Décalage horaire de 3 heures par rapport à UTC
    { name: "Bruxelles", offset: 1 }, // Décalage horaire de 1 heure par rapport à UTC
];

// Sélection de l'élément de liste où les heures seront affichées dans le HTML
const timeList = document.getElementById('timeList');

// Affichage des dates et heures locales pour chaque ville dans le HTML
cities.forEach(city => {
    // Crée un nouvel élément de liste <li> pour chaque ville
    const listItem = document.createElement('li');
    // Appelle la fonction getLocalTime pour obtenir l'heure locale et l'assigne au texte de l'élément <li>
    listItem.textContent = getLocalTime(city.name, city.offset);
    // Ajoute l'élément <li> contenant l'heure locale à la liste <ul> dans le HTML
    timeList.appendChild(listItem);
});
