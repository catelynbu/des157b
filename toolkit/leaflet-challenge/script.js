(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([38.546719, -121.744339], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([38.543319, -121.754428]).addTo(map)
        .bindPopup('My favorite place on campus.')
        .openPopup();

    L.marker([38.543397, -121.746816]).addTo(map)
        .bindPopup('I like the boba here.')
        .openPopup();

    var circle = L.circle([38.539601, -121.749569], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
        
    }).addTo(map);

    circle.bindPopup("My favorite library on campus.");
}());