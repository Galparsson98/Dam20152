$(document).ready(function () {

    if (Modernizr.geolocation) {
        alert('El explorador soporta geolocalización');
    } else {
        alert('El explorador NO soporta geolocalización');
    }
    navigator.geolocation.getCurrentPosition(function (position) {
        alert('We found you!');

    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var coords = position.coords;
            showMap(coords.latitude, coords.longitude, coords.accuracy);
        });
    }
    var speedEl = document.getElementById("status");
    navigator.geolocation.watchPosition(function (geodata) {
        var speed = geodata.coords.speed;
        if (speed === null || speed === 0) {
            speedEl.innerHTML = "You're standing still!";
        } else {
            speedEl.innerHTML = speed + "Mps";
        }
    }, function () {
        speedEl.innerHTML="Unable to determine speed :-(";
    }, {
        enableHighAccuracy: true
    });

    function showMap() {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }
});
