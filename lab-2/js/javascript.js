// LAB 2
//
// instructions for building this .js found here: https://github.com/UWTMGIS/TGIS_504-Wi20/blob/master/lab-2/instructions.md#lab-2-routing-with-leaflet-and-the-mapbox-directions-api
var map = L.map('map').setView([47.25, -122.44], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g',
}).addTo(map);
// Part 2 Step 2: Leaflet Routing Machine Plugin
var control = L.Routing.control({
    waypoints: [
        // L.latLng(47.246587, -122.438830), //commented out for Step 5
        // L.latLng(47.318017, -122.542970), //commented out for Step 5
        // L.latLng(47.258024, -122.444725) //commented out for Step 5
    ],
     routeWhileDragging: true,
// Part 2 Step 3: Change units from metric to imperial
     units:'imperial',
     collapsible: true,
     show: false,
// Part 2 Step 3: Changed Routing Service from OSRM to Mapbox Direction API &&
     router: L.Routing.mapbox('pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g'),
// Part 2 Step 4: Add a geocoder so you can add waypoints by searching for an address or location
     geocoder: L.Control.Geocoder.mapbox('pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g'),
}).addTo(map);
// Part 2 Step 5: Add waypoints by clicking on the map
function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}
map.on('click', function(e) {
    var container = L.DomUtil.create('div'),
        startBtn = createButton('Start from this location', container),
        destBtn = createButton('Go to this location', container);

        L.DomEvent.on(startBtn, 'click', function() {
            control.spliceWaypoints(0, 1, e.latlng);
            map.closePopup();
        });

        L.DomEvent.on(destBtn, 'click', function() {
            control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
            control.show();
            map.closePopup();
        });

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
 });
function onLocationFound(e) {
    var radius = e.accuracy; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.

    L.marker(e.latlng).addTo(map)  //this adds a marker at the lat and long returned by the locate function.
        .bindPopup("You are within " + Math.round(radius * 3.28084) + " feet from this point").openPopup(); //this binds a popup to the marker. The text of the popup is defined here as well. Note that we multiply the radius by 3.28084 to convert the radius from meters to feet and that we use Math.round to round the conversion to the nearest whole number.

    L.circle(e.latlng, radius).addTo(map); //this adds a circle to the map centered at the lat and long returned by the locate function. Its radius is set to the var radius defined above.
}
// //Lab 2 Step 6: Geolocation
map.once('locationfound', onLocationFound); //this is the event listener
//popup that runs if location denies access or other error
function onLocationError(e) {
  alert(e.message);
}
map.on('locationerror', onLocationError);
// //recenters the map on the user's location (browser dialogue box requesting location permissions)
// // setView recenters map on user's location or world view
// // watch detects continuous location changes -- requests location data for each browser page refresh
// // watch: true may darken red circle depending upon how many times the user allows location collection
map.locate({setView: true, watch: false, maxZoom: 16})

// Creating window object
var win =  L.control.window(map,{title:'<h1>Geolocation</h1><h5>(This window is draggable.)</h5>',content:'This page requests your location information in order to show a circle displaying your approximate proximity to a nearby marker. This site DOES NOT store or share their location information.<br><br>Mobile: Enable device location settings.<br>Desktop: Select Allow. Selecting Block will not allow this page to load correctly.<br>Then close out of this window.<br><br> If you want to center the map on your location, use the <i class="fa fa-crosshairs" aria-hidden="true"></i> button in the upper left corner.<br>Use the <img src="img/routing-icon.png" alt="waypoints"> button in the upper right corner for selecting new destinations. Also, you can click on the map for start and end points or drag and drop points already on the map (except for your projected location).'})
           .show()
// Adding hello world popup
// var helloPopup = L.popup().setContent('Hello World!');
//
// L.easyButton('<img src="img/easy-button.png">', function(btn, map){
//     helloPopup.setLatLng(map.getCenter()).openOn(map);
// }).addTo(map);
// Add crosshairs (from fontAwesome) button that gives browser alert for the map center coords
// easyButton plugin requests an additional
L.easyButton('fas fa-crosshairs', function(btn, map){
  map.locate({setView: true, watch: false, maxZoom: 16}),
  alert('Map center is at: ' + map.getCenter().toString() +  '. Click OK to zoom to your location.')


}).addTo(map);






// LAB 1
//
//
//
// // instructions for building this .js found here: https://github.com/UWTMGIS/TGIS_504-Wi20/blob/master/lab-1/Instructions.md
// //Lab 1 Step 1: Prepare the page and initialize the map
// // var map = L.map('map').fitWorld(); //commented out for step 4
// // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g', {
// //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //     maxZoom: 18,
// //     id: 'mapbox/streets-v10',
// //     //retina screen detection errors and tile size adjustments
// //     tileSize: 512,
// //     zoomOffset: -1,
// // }).addTo(map);
// //Lab 1 Step 4: Changing the basemap based on environmental conditions
// var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id:'mapbox/light-v10',
//     tileSize: 512,
//     zoomOffset: -1,
// });
//
// var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id:'mapbox/dark-v10',
//     tileSize: 512,
//     zoomOffset: -1,
// });
// // Step 4: Changing the basemap based on environmental conditions
// // var map = L.map('map', {layers:[light]}).fitWorld();
// // Step 5: Finishing touches
// // Part 2 (basemap layer controls)
// var map = L.map('map', {layers:[light, dark]}).fitWorld(); //moved the map initialization to bottom of environmental contions
// // Step 5: Finishing Touches
// // Part 2 Adding a layer control
// var baseMaps = {
//     "Light": light,
//     "Dark": dark
// };
// L.control.layers(baseMaps).addTo(map);
// //Lab 1 Step 2: Geolocation
// //
// function onLocationFound(e) {
//     var radius = e.accuracy; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.
//     L.marker(e.latlng).addTo(map)  //this adds a marker at the lat and long returned by the locate function.
//         .bindPopup("You are within " + Math.round(radius * 3.28084) + " feet from this point").openPopup(); //this binds a popup to the marker. The text of the popup is defined here as well. Note that we multiply the radius by 3.28084 to convert the radius from meters to feet and that we use Math.round to round the conversion to the nearest whole number.
//     // L.circle(e.latlng, radius).addTo(map); //this adds a circle to the map centered at the lat and long returned by the locate function. Its radius is set to the var radius defined above.
//     // Conditional circle around location based on accuracy (syntax correction "[color" should be "{color"
//     // circle only shows on desktop browser if less than certain distance
// // Lab 1 Step 3: Giving the user feedback about the geolocation accuracy of their device
//     if (radius <= 100) {
//       L.circle(e.latlng, radius, {color: 'green'}).bindTooltip("The circle is displaying your approximate<br>proximity to this marker.").addTo(map);//added a topltip description of the circle
//       // L.circle([48.85, 2.35], {radius: 1000}).bindTooltip("test").addTo(map);
//       // L.rectangle([[48.84, 2.34], [48.86, 2.36]]).bindTooltip("test").addTo(map);
//     }
//     else {
//       L.circle(e.latlng, radius, {color: 'red'}).bindTooltip("The circle is displaying your approximate<br>proximity to this marker.").addTo(map); //needs to be .addTo(map) NOT .addTo(mymap); also added a topltip description of the circle
//       // L.circle([48.85, 2.35], {radius: 1000}).bindTooltip("test").addTo(map);
//       // L.rectangle([[48.84, 2.34], [48.86, 2.36]]).bindTooltip("test").addTo(map);
//     }
// //Lab 1 Step 4: Changing the basemap based on environmental conditions (Cont.)
//     // Basemap changes conditionally based on sunrise/sunset time using SunCalc (https://github.com/mourner/suncalc)
//     var times = SunCalc.getTimes(new Date(), e.latitude, e.longitude);
//     var sunrise = times.sunrise.getHours();
//     var sunset = times.sunset.getHours();
//
//
//     var currentTime = new Date().getHours();
//     if (sunrise < currentTime && currentTime < sunset){
//       map.removeLayer(dark);
//       map.addLayer(light);
//     }
//     else {
//       map.removeLayer(light);
//       map.addLayer(dark);
//     }
// }
