const apiUrl = 'https://api.n2yo.com/rest/v1/satellite/above/34.0033536/-118.1188096/0/20/0/&apiKey=YVT8F9N-ZFUM9H-A5JYF4-58FI';

// Modify the URL to use cors-anywhere proxy
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const corsApiUrl = proxyUrl + apiUrl;

// Now use corsApiUrl in your fetch request
fetch(corsApiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// Function to fetch satellite data from N2YO API
async function fetchSatelliteData(latitude, longitude) {
    const response = await fetch(`https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longitude}/0/20/0/&apiKey=YVT8F9N-ZFUM9H-A5JYF4-58FI`);
    const data = await response.json();
    return data;
}

// Function to update the table with the closest satellites
function updateSatelliteTable(latitude, longitude) {
    fetchSatelliteData(latitude, longitude)
        .then(data => {
            // Sort satellites by distance
            const satellites = data.above.sort((a, b) => a.satlat - b.satlat + a.satlng - b.satlng);

            // Display the top 3 closest satellites on the table
            const table = document.getElementById('satellite-table');
            const tbody = table.getElementsByTagName('tbody')[0];
            tbody.innerHTML = ''; // Clear previous data

            for (let i = 0; i < Math.min(3, satellites.length); i++) {
                const satellite = satellites[i];
                const row = tbody.insertRow();
                row.insertCell(0).textContent = satellite.satname;
                row.insertCell(1).textContent = `${satellite.satlat}°, ${satellite.satlng}°`;
                row.insertCell(2).textContent = `${satellite.satalt} km`;
            }
        })
        .catch(error => console.error('Error fetching satellite data:', error));
}

// Initialize the map and update satellite table
function initMap() {
    const urlParams = new URLSearchParams(window.location.search);
    const latitude = parseFloat(urlParams.get('latitude'));
    const longitude = parseFloat(urlParams.get('longitude'));

    // Update satellite table
    updateSatelliteTable(latitude, longitude);
}


