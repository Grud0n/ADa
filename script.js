document.addEventListener('DOMContentLoaded', function () {
  // Event-Listener für den Button hinzufügen
  document.getElementById('add-box-button').addEventListener('click', openPopup);
  document.getElementById('closePopup').addEventListener('click', closePopup);
  document.getElementById('submitData').addEventListener('click', submitData);
  // Event-Listener für Kategorien im Dropdown hinzufügen
  var categoryLinks = document.querySelectorAll('.dropdown-content a');
  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      openPopup(link.dataset.category);
    });
  });
});

function openPopup(selectedCategory) {
  document.getElementById('overlay').style.display = 'flex';
  // Setze die ausgewählte Kategorie im Popup
  document.getElementById('category').value = selectedCategory || '';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  // Zurücksetzen der ausgewählten Kategorie im Popup und Felder leeren
  document.getElementById('category').value = '';
  document.getElementById('companyName').value = '';
  document.getElementById('location').value = '';
  document.getElementById('shortDescription').value = '';
}

function submitData() {
  // Daten aus den Eingabefeldern abrufen
  var companyName = document.getElementById('companyName').value;
  var location = document.getElementById('location').value;
  var category = document.getElementById('category').value;
  var shortDescription = document.getElementById('shortDescription').value;

  // Überprüfen, ob alle Felder ausgefüllt sind
  if (companyName.trim() === '' || location.trim() === '' || category.trim() === '' || shortDescription.trim() === '') {
    alert('Bitte füllen Sie alle Felder aus.');
    return; // Beende die Funktion, wenn nicht alle Felder ausgefüllt sind
  }

  // Beispiel: Daten in einer neuen Box anzeigen
  addCraftsmanBox(companyName, location, category, shortDescription);

  // Schließe das Popup
  closePopup();
}

function addCraftsmanBox(companyName, location, category, shortDescription) {
  // Container für die Boxen
  var craftsmanBoxContainer = document.getElementById('craftsman-box-container');

  // Neue Box erstellen
  var newCraftsmanBox = document.createElement('div');
  newCraftsmanBox.className = 'craftsman-box';

  // Inhalt der Box
  newCraftsmanBox.innerHTML = `
    <h3>${companyName}</h3>
    <p>Standort: ${location}</p>
    <p>Kategorie: ${category}</p>
    <p>Kurzbeschreibung: ${shortDescription}</p>
  `;

  // Box zum Container hinzufügen
  craftsmanBoxContainer.appendChild(newCraftsmanBox);
}
