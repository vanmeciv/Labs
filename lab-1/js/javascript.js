// instructions for building this .js found here: https://github.com/UWTMGIS/TGIS_504-Wi20/blob/master/lab-1/Instructions.md
//Lab 1 Step 1: Prepare the page and initialize the map
// var map = L.map('map').fitWorld(); //commented out for step 4
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v10',
//     //retina screen detection errors and tile size adjustments
//     tileSize: 512,
//     zoomOffset: -1,
// }).addTo(map);
//Lab 1 Step 4: Changing the basemap based on environmental conditions
var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWpzbGFnZXIiLCJhIjoiZUMtVjV1ZyJ9.2uJjlUi0OttNighmI-8ZlQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
});

var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWpzbGFnZXIiLCJhIjoiZUMtVjV1ZyJ9.2uJjlUi0OttNighmI-8ZlQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
});
var map = L.map('map', {layers:[light]}).fitWorld(); //moved the map initialization to bottom of environmental contions
//Lab 1 Step 2: Geolocation
function onLocationFound(e) {
    var radius = e.accuracy; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.
    L.marker(e.latlng).addTo(map)  //this adds a marker at the lat and long returned by the locate function.
        .bindPopup("You are within " + Math.round(radius * 3.28084) + " feet from this point").openPopup(); //this binds a popup to the marker. The text of the popup is defined here as well. Note that we multiply the radius by 3.28084 to convert the radius from meters to feet and that we use Math.round to round the conversion to the nearest whole number.
    // L.circle(e.latlng, radius).addTo(map); //this adds a circle to the map centered at the lat and long returned by the locate function. Its radius is set to the var radius defined above.
    // Conditional circle around location based on accuracy (syntax correction "[color" should be "{color"
    // circle only shows on desktop browser if less than certain distance
// Lab 1 Step 3: Giving the user feedback about the geolocation accuracy of their device
    if (radius <= 100) {
      L.circle(e.latlng, radius, {color: 'green'}).addTo(map);
    }
    else {
      L.circle(e.latlng, radius, {color: 'red'}).addTo(map); //needs to be .addTo(map) NOT .addTo(mymap)
    }
//Lab 1 Step 4: Changing the basemap based on environmental conditions (Cont.)
    // Basemap changes conditionally based on sunrise/sunset time using SunCalc (https://github.com/mourner/suncalc)
    var times = SunCalc.getTimes(new Date(), e.latitude, e.longitude);
    var sunrise = times.sunrise.getHours();
    var sunset = times.sunset.getHours();


    var currentTime = new Date().getHours();
    if (sunrise < currentTime && currentTime < sunset){
      map.removeLayer(dark);
      map.addLayer(light);
    }
    else {
      map.removeLayer(light);
      map.addLayer(dark);
    }
}
//Lab 1 Step 2: Geolocation
map.on('locationfound', onLocationFound); //this is the event listener
//popup that runs if location denies access or other error
function onLocationError(e) {
  alert(e.message);
}
map.on('locationerror', onLocationError);
//recenters the map on the user's location (browser dialogue box requesting location permissions)
map.locate({setView: true, maxZoom: 16});
