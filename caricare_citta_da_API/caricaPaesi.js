document.addEventListener('DOMContentLoaded', caricaListaPaesi);

function caricaListaPaesi() {
  const url = 'https://restcountries.com/v3.1/all';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const listaPaesi = document.getElementById('listaPaesi');

      data.forEach(paese => {
        const listItem = document.createElement('li');
        listItem.textContent = paese.name.common;
        listaPaesi.appendChild(listItem);
      });
    })
    .catch(error => console.error('Errore nel caricamento dell\'API:', error));
}