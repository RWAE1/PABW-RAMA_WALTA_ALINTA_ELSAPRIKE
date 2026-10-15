import { loadDestinations } from './api.js';
import { render, showLoading, showFailure } from './dom.js';

export let destinationList = [];

async function init() {
    showLoading(); 
    
    try {
        const data = await loadDestinations();
        destinationList = data;

        render(destinationList); 
        
    } catch (error) {
        showFailure(error.message); 
    }
}

init();