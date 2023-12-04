document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('locationForm');
  const locationInfo = document.getElementById('locationInfo');

  // Array of locations
  const locations = [
    'New York, USA',
    'Tokyo, Japan',
    'London, UK',
    'Sydney, Australia',
    'Manila, Philippines'
  ];

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    locationInfo.innerHTML = ''; // Clear previous results

    const locationInput = document.getElementById('locationInput');
    const customLocation = locationInput.value.trim();

    // If custom location is provided, add it to the array
    const allLocations = customLocation ? [...locations, customLocation] : locations;

    // Iterate over the array of locations
    allLocations.forEach(location => {
      getLocationInfo(location);
    });
  });

  function getLocationInfo(location) {
    const apiKey = 'AIzaSyCAC8eP20iVmcCd6y-W3WTnCEgZmLId0M0';
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayLocationInfo(data);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
        locationInfo.textContent = 'Error fetching location data.';
      });
  }

  function displayLocationInfo(data) {
    if (data.results && data.results.length > 0) {
      const place = data.results[0];
      const placeName = place.formatted_address;
      const coordinates = place.geometry.location;

      const locationContent = `Location: ${placeName}, Coordinates: ${coordinates.lat}, ${coordinates.lng}`;

      // Append location content to the result container
      const locationElement = document.createElement('div');
      locationElement.textContent = locationContent;
      locationInfo.appendChild(locationElement);
    } else {
      locationInfo.textContent = 'Location not found.';
    }
  }
});
