const URL = 'https://api.npoint.io/f3f9fa85806362c64872'; 

export async function loadDestinations() {
    const response = await fetch(URL);

    console.log('status', response.status, 'ok', response.ok);

    if (!response.ok) {
        throw new Error('status ' + response.status);
    }
    
    return response.json();
}