var map = L.map('main_map').setView([4.60971,-74.08175], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([4.5235149,-74.1222651]).addTo(map); //aurora
L.marker([4.5794549,-74.1600856]).addTo(map); //ud
L.marker([4.5844364,-74.1790023]).addTo(map); //perdomo