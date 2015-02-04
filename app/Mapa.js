var Mapa = {};

Mapa.mapOptions = {};

Mapa.markers = [];

Mapa.divMap = "";

Mapa.map = {};

Mapa.initializeMap = function(options,mapElement){
    Mapa.mapOptions = options;
    Mapa.divMap = mapElement;
    Mapa.map = new google.maps.Map(Mapa.divMap, Mapa.mapOptions);
}

Mapa.Dibujar = function (places, popUp) {
    var places = places || null;
    var n = 1;

    if (places != 0)
    {
        var place = new Array();
        var i;

        for (i in places)
        {
            var lat = parseFloat(places[i]['lat']);
            var lng = parseFloat(places[i]['lng']);
            place[i] = new google.maps.LatLng(lat, lng);
        }

        for (i in place)
        {
            var marker = Mapa.marker(place[i], places[i]["notas"]);

            if (popUp)
            {
                Mapa.addPopUP(marker, places[i]["contenidoPopUp"])
            }
        }
    }
};

Mapa.addMarker = function (coordenadas, callback) {
    var lng = parseFloat(coordenadas.lng);
    var lat = parseFloat(coordenadas.lat);
    var googleMapsLatLng = new google.maps.LatLng(lat, lng);
    var marker = Mapa.marker(googleMapsLatLng);
    var centerMarker = coordenadas.center || false;

    Mapa.markers.push(marker);
    Mapa.map.setZoom(15);
    if(centerMarker === true) Mapa.map.setCenter(googleMapsLatLng);

    if(!empty(callback)) callback(Mapa.map, googleMapsLatLng, marker);

};

Mapa.marker = function (googleMapsLatLng, titulo, nota, icono) {
    return new google.maps.Marker({
        position: googleMapsLatLng,
        map: Mapa.map,
        title: titulo || '',
        note: nota || null,
        icon: icono || null
    });
};

Mapa.addPopUP = function (marker, content) {
    var infowindow = new google.maps.InfoWindow({
        content: content
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(Mapa.map, marker);
    });
};

Mapa.clearMarkers = function () {
    for (var i = 0; i < Mapa.markers.length; i++) {
        Mapa.markers[i].setMap(null);
    }
};