// const URL = 'https://api.npoint.io/f3f9fa85806362c64872'; 

const URL = './destinations.json';

export async function loadDestinations() {
    try {
        const response = await fetch(URL);

        console.log('status', response.status, 'ok', response.ok);

        if (!response.ok) {
            throw new Error('status ' + response.status);
        }
    
        return await response.json();
    } catch (error) {
        console.error('failed to load', error.message);
        throw error;
    }
}