        // Initialize and display the map
        function initMap() {
            // Specify coordinates to center the map
            const urlParams = new URLSearchParams(window.location.search);
            const lat = parseFloat(urlParams.get('latitude'));
            const lng = parseFloat(urlParams.get('longitude'));
            console.log(lat)
            console.log(lng)

            const center = { lat: lat, lng: lng };
            
            // Create a new map instance and set its options
            const map = new google.maps.Map(document.getElementById("map"), {
                center: center, // Set the center of the map
                zoom: 10, // Set the initial zoom level
            });
            const marker = new google.maps.Marker({
                position: center,
                map: map,
                title: 'Center'
            });
        }