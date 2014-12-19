/**
 * Created by david on 27/10/14.
 */
var App = {
    initialize: function () {
        this.initializeTemplates();
        this.bindEvents();
    },
    initializeTemplates: function () {
        App.templates = {
            headerContent: "",
            footerContent: "",
            locationNavbar: "",
            mascotasListado: "",
            mascotaVista: "",
            mascotaProblemas: "",
            mascotaEvoluciones: ""
        };
        this.compileTemplates();
        this.fillTemplatesContent();
    },
    bindEvents: function() {
        if ( Helper.isAccessedByMobile() ) return document.addEventListener('deviceready', this.onDeviceReady, false);
        return this.onDeviceReady();
    },
    onDeviceReady: function () {
        Helper.jqueryMobileOnPageInit(App.onPageInit);

        Helper.jqueryOnClick('#a-reload-location', function (e) {
            e.preventDefault();
        });

        Helper.jqueryMobileOnPageShow('#page-historia-clinica', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var mascotas = { mascotas:[
                {id:1,nombre:"mascota 1",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                {id:2,nombre:"mascota 2",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            ]};
            var html = App.templates.mascotasListado(mascotas);
            Helper.jqueryFillHTMLContent('#ul-mascotas-listview', html).listview('refresh');
            Helper.jqueryMobileHideAjaxLoading();
        });

        Helper.jqueryMobileOnPageShow('#page-mascota', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var html;

            Helper.jqueryClearHTMLContent('#div-evoluciones-listado');

            var informacion = {
                nombre:"Mascota 1",
                duenio:"Prueba 1",
                sexo:"Masculino",
                nacimiento:"99/99/9999"
            };

            html = App.templates.mascotaVista(informacion);
            Helper.jqueryFillHTMLContent('#div-mascota-informacion', html);

            var problemas = {problemas:[
                {id:"1",titulo:"Pierna lastimada",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
                {id:"2",titulo:"Resfrio",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
                {id:"3",titulo:"Dolor de estomago",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
            ]};
            html = App.templates.mascotaProblemas(problemas);
            Helper.jqueryFillHTMLContent('#ul-problemas-listview', html).listview('refresh');

            Helper.jqueryMobileHideAjaxLoading();
        });

        Helper.jqueryMobileOnPageShow('#page-location', function (e) {
            e.preventDefault();
            App.initializeMap();

            $("#div-share").hide();

            $("#geocomplete").geocomplete({
                details: "body",
                location: "",
                types: ["geocode", "establishment"],
                scrollwheel: true
            });

            Helper.jqueryOnClick('#a-georefence-me',function (event) {
                event.preventDefault();
                Mapa.clearMarkers();
                App.drawIntoMapCurrentPosition();
            });

            Helper.jqueryOnClick('#a-reload-location',function (event) {
                event.preventDefault();
                App.initializeMap();
            });

            Helper.jqueryOnClick('#a-georefence',function (event) {
                event.preventDefault();

                var lat = $("#lat").val();
                var lng = $("#lng").val();

                if(empty(lat) || empty(lng))
                {
                    alert("Debe seleccionar una direccion");
                    return false;
                }
                Mapa.clearMarkers();
                App.markOnMap(lat, lng);
            });

            Helper.jqueryOnClick('#a-georefence-petshops',function (event) {
                event.preventDefault();
                Helper.jqueryMobileShowAjaxLoading();
                Mapa.clearMarkers();
                //App.drawIntoMapCurrentPosition();
                App.markOnMap(-34.670561, -58.380784, function(map, googleMapsLatLng, marker){
                    var contentInfoWindow = '<div class="ui-grid-solo">' +
                        '<div class="ui-block-a" >' +
                        '<p>Pet-Shop Prueba 1</p>' +
                        '<p>Texto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>' +
                        '<a href="#" class="a-share">Twitter</a>' +
                        ' | ' +
                        '<a href="#" class="a-share">Facebook</a>' +
                        '</div>' +
                        '</div>';

                    Mapa.addPopUP(marker, contentInfoWindow);
                });
                App.markOnMap(-34.671831, -58.381036, function(map, googleMapsLatLng, marker){
                    var contentInfoWindow = '<div class="ui-grid-solo">' +
                        '<div class="ui-block-a" >' +
                        '<p>Pet-Shop Prueba 2</p>' +
                        '<p>Texto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>' +
                        '<a href="#" class="a-share">Twitter</a>' +
                        ' | ' +
                        '<a href="#" class="a-share">Facebook</a>' +
                        '</div>' +
                        '</div>';

                    Mapa.addPopUP(marker, contentInfoWindow);
                });
                Helper.jqueryMobileHideAjaxLoading();
            });

            Helper.jqueryOnClick('#a-georefence-veterinarias',function (event) {
                event.preventDefault();
                Helper.jqueryMobileShowAjaxLoading();
                Mapa.clearMarkers();
                //App.drawIntoMapCurrentPosition();
                App.markOnMap(-34.673290, -58.381989, function(map, googleMapsLatLng, marker){
                    var contentInfoWindow = '<div class="ui-grid-solo">' +
                        '<div class="ui-block-a" >' +
                        '<p>Veterinaria Prueba 1</p>' +
                        '<p>Doctor: Juan Perez</p>' +
                        '<p>Texto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>' +
                        '<a href="#" class="a-share">Twitter</a>' +
                        ' | ' +
                        '<a href="#" class="a-share">Facebook</a>' +
                        '</div>' +
                        '</div>';

                    Mapa.addPopUP(marker, contentInfoWindow);
                });
                App.markOnMap(-34.674676, -58.382161, function(map, googleMapsLatLng, marker){
                    var contentInfoWindow = '<div class="ui-grid-solo">' +
                        '<div class="ui-block-a" >' +
                        '<p>Veterinaria Prueba 2</p>' +
                        '<p>Doctor: Eduardo Ramirez</p>' +
                        '<p>Texto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>' +
                        '<a href="#" class="a-share">Twitter</a>' +
                        ' | ' +
                        '<a href="#" class="a-share">Facebook</a>' +
                        '</div>' +
                        '</div>';

                    Mapa.addPopUP(marker, contentInfoWindow);
                });
                Helper.jqueryMobileHideAjaxLoading();
            });
        });

        $("#ul-mascotas-listview").delegate('.a-go-to-mascota-view','click', function (e) {
            e.preventDefault();
           Helper.jqueryMobileChangePage("#page-mascota");
        });

        $("#ul-problemas-listview").delegate('.a-show-evoluciones','click', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var evoluciones = {evoluciones:[
                {
                    id:1,
                    practica:{titulo:'Practica 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                    medicacion:{titulo:'Medicacion 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                    estudio:{titulo:'Estudio 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    id:2,
                    practica:{titulo:'Practica 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                    medicacion:{titulo:'Medicacion 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
                    estudio:{titulo:'Estudio 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                }
            ]};
            var html = App.templates.mascotaEvoluciones(evoluciones);
            Helper.jqueryFillHTMLContent('#div-evoluciones-listado', html)
                .show()
                .find("ul#ul-evoluciones-listview").listview().listview('refresh');
            Helper.jqueryMobileHideAjaxLoading();
        });

        $("#map-canvas").delegate('.a-share','click', function (e) {
            e.preventDefault();
            alert('hola');
            window.plugins.socialsharing.shareViaTwitter('Message via Twitter');
            //$.mobile.changePage( "#page-share", { role: "dialog" } );
        });

    },
    onPageInit: function () {
        $.mobile.defaultPageTransition = 'none';
        Helper.jqueryMobileHideAjaxLoading();
    },
    fillTemplatesContent: function () {
        this.fillHeaderContent();
        this.fillFooterContent();
    },
    fillHeaderContent: function () {
        Helper.jqueryFillHTMLContent('.header-content', App.templates.headerContent({title:''}));
        Helper.jqueryFillHTMLContent('.header-content#header-home', App.templates.headerContent({title:'Home'}));
        Helper.jqueryFillHTMLContent('.header-content#header-location', App.templates.headerContent({
            title:'Location',
            html:App.templates.locationNavbar()
        }));
        Helper.jqueryFillHTMLContent('.header-content#header-app-info', App.templates.headerContent({title:'©2014 App'}));
        Helper.jqueryFillHTMLContent('.header-content#header-historia-clinica', App.templates.headerContent({title:'Mascotas'}));
    },
    fillFooterContent: function () {
        Helper.jqueryFillHTMLContent('.footer-content', App.templates.footerContent());
    },
    compileTemplates: function () {
        var source;

        source = Helper.jqueryGetHTMLFromField('#header-content');
        App.templates.headerContent = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#footer-content');
        App.templates.footerContent = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#location-navbar');
        App.templates.locationNavbar = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-listado');
        App.templates.mascotasListado = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-vista');
        App.templates.mascotaVista = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-problemas');
        App.templates.mascotaProblemas = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#mascota-evoluciones');
        App.templates.mascotaEvoluciones = Handlebars.compile(source);

    },
    onSuccess: function (position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        App.markOnMap(latitude, longitude, function (map, googleMapsLatLng) {
            var populationOptions = {
                strokeColor: '#FF0000',
                strokeOpacity: 0.1,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: googleMapsLatLng,
                radius: 5 * 100
            };

            cityCircle = new google.maps.Circle(populationOptions);
        });
        Helper.jqueryMobileHideAjaxLoading();

    },
    onError: function (error) {
        Helper.jqueryMobileHideAjaxLoading();
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    },
    markOnMap: function(lat, long, callback) {
        var place = {
            lat:lat,
            lng:long
        };
        var cb = callback || null;
        Mapa.addMarker(place, cb);
    },
    initializeMap: function () {
        var optionsMap = {
            zoom: 4,
            center: new google.maps.LatLng(-38.416097, -63.616671999999994),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        Mapa.initializeMap(optionsMap, document.getElementById("map-canvas"));
    },
    drawIntoMapCurrentPosition: function () {
        Helper.jqueryMobileShowAjaxLoading();

        navigator.geolocation.getCurrentPosition(App.onSuccess, App.onError);
    }
};