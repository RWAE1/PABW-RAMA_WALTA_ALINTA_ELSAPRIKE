import { destinationList } from './app.js';

const tableBody = document.querySelector('#wishlist-body');
const emptyMessage = document.querySelector('#empty-message');

function render(list) {

    tableBody.textContent = ""; 

    if (list.length === 0) {
        emptyMessage.hidden = false;
        return; 
    }
    emptyMessage.hidden = true;

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

const filterRow = document.querySelector('#filter');

function markActiveButton(activeButton) {
    document.querySelectorAll("#filter button").forEach((button) => {

        button.classList.toggle("active", button === activeButton);

        if (button === activeButton) {
            button.classList.replace('btn-outline-dark', 'btn-dark');
        } else {
            button.classList.replace('btn-dark', 'btn-outline-dark');
        }
    });
}

filterRow.addEventListener('click', (event) => {

    const button = event.target.closest('button');
    if (!button) return; 

    markActiveButton(button);

    const category = button.dataset.category;

    const filteredList = destinationList.filter((dest) => {
        if (category === 'all') return true;
        if (category === 'visited') return dest.visited === true;
        if (category === 'unvisited') return dest.visited === false;
    });

    render(filteredList);
});