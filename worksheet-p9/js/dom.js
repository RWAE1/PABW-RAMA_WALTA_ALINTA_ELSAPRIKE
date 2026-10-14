import { destinationList } from './app.js';

const tableBody = document.querySelector('#wishlist-body');

function render(list) {

    tableBody.textContent = ""; 

    list.forEach((dest) => {

        const tr = document.createElement('tr');

        const thCountry = document.createElement('th');
        thCountry.setAttribute('scope', 'row');
        thCountry.textContent = dest.country;

        const tdPlace = document.createElement('td');
        tdPlace.textContent = dest.place;

        const tdActivity = document.createElement('td');
        tdActivity.textContent = dest.activity;

        tr.append(thCountry, tdPlace, tdActivity);

        tableBody.append(tr);
    });
}

render(destinationList);