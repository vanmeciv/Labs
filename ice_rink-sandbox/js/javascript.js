
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g';
// Set bounds to New York, New York
var bounds = [
  [-130, -75], // [west, south]
  [130, 75]  // [east, north]
];

var map = new mapboxgl.Map({
container: 'map',
center: [0,0],
zoom: 1,
attributionControl: false,
style: 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny',
maxBounds: bounds,
});





// Set the map's max bounds.
// map.setMaxBounds(bounds);

// var map = L.mapbox.map('map', 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny', {
//         minZoom: 5,
//         maxZoom: 12,
//         // maxBounds: [[-105, -50],[105,50]]
//     }).setView([0, 0], 9);



// map.addControl(new mapboxgl.AttributionControl(), 'top-right');
