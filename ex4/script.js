// Sélection des éléments où afficher les informations de la date et de l'heure
const dayOfWeekElement = document.getElementById('dayOfWeek');
const dateElement = document.getElementById('date');
const yearElement = document.getElementById('year');
const timeElement = document.getElementById('time');

// Fonction pour mettre à jour l'heure actuelle
function updateTime() {
    const currentDate = new Date();

    // Obtention du nom du jour de la semaine, du jour, du mois et de l'année
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const year = currentDate.getFullYear();

    // Affichage des informations dans les éléments correspondants
    dayOfWeekElement.textContent = dayOfWeek;
    dateElement.textContent = `${day} ${month}`;
    yearElement.textContent = year;

    // Obtention et affichage de l'heure actuelle
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Appel initial de la fonction pour afficher l'heure actuelle
updateTime();

// Mise à jour de l'heure toutes les secondes
setInterval(updateTime, 1000);
