import { destinationList } from './app.js';

const tableBody = document.querySelector('#wishlist-body');
const emptyMessage = document.querySelector('#empty-message');

export function showLoading() {
    tableBody.innerHTML = '<tr><td colspan="3" class="text-center text-muted fw-bold">Loading your destinations...</td></tr>';
    emptyMessage.hidden = true;
}

export function showFailure(errorMessage) {
    tableBody.innerHTML = `<tr><td colspan="3" class="text-center text-danger fw-bold">Failed to load data: ${errorMessage}</td></tr>`;
    emptyMessage.hidden = true;
}

export function render(list) {
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

const wishlistForm = document.querySelector('form');
const countryInput = document.querySelector('#country');
const placeInput = document.querySelector('#place');
const activityInput = document.querySelector('#things-to-do');
const submitButton = wishlistForm.querySelector('button[type="submit"]');

submitButton.disabled = true;

function isFormValid() {
    return countryInput.value.trim() !== "" && 
           placeInput.value.trim() !== "" && 
           activityInput.value.trim() !== "";
}

[countryInput, placeInput, activityInput].forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() === "") {
            input.setAttribute("aria-invalid", "true");
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.removeAttribute("aria-invalid");
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
        
        submitButton.disabled = !isFormValid();
    });
});

wishlistForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!isFormValid()) {
        const firstInvalid = [countryInput, placeInput, activityInput].find(input => input.value.trim() === "");
        if (firstInvalid) firstInvalid.focus();
        return;
    }

    const newTrip = {
        country: countryInput.value.trim(),
        place: placeInput.value.trim(),
        activity: activityInput.value.trim(),
        visited: false
    };

    destinationList.push(newTrip);

    const activeBtn = document.querySelector('#filter button.active');
    const category = activeBtn ? activeBtn.dataset.category : 'all';
    
    const filteredList = destinationList.filter((dest) => {
        if (category === 'all') return true;
        if (category === 'visited') return dest.visited === true;
        if (category === 'unvisited') return dest.visited === false;
    });

    render(filteredList);
    
    wishlistForm.reset();
    submitButton.disabled = true; 
    [countryInput, placeInput, activityInput].forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
        input.removeAttribute("aria-invalid");
    });
});