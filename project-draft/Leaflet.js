var map = L.map('map').setView([47.62, -122.29], 13);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CPfYEXO5BfII8Cy19h4T', {
    attribution: '© MapTiler © OpenStreetMap contributors '
}).addTo(map);


var text = "205 40th Avenue E<br> $2,395,000";
var result = text.link('secondpage.html');

L.marker([47.620580, -122.281810]).addTo(map)
    .bindPopup(result)

L.control.locate({ initialZoomLevel: 13 }).addTo(map);