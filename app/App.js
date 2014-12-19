/**
 * Created by david on 27/10/14.
 */
var App = {
    initialize: function () {
        App.cityCircle = "";
        App.currentDuenio = 0;
        App.currentMascota = null;
        App.duenios = [
            {
                mascotas: [
                    {
                        id:1,
                        nombre:"Perro Octabio",
                        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        duenio: 'David',
                        sexo: 'Masculino',
                        nacimiento: '99/99/9999',
                        problemas:[
                            {
                                id:"1",
                                titulo:"Pierna lastimada",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
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
                                ]
                            },
                            {
                                id:"2",
                                titulo:"Resfrio",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
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
                                ]
                            },
                            {
                                id:"3",
                                titulo:"Dolor de estomago",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
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
                                ]
                            }
                        ]
                    },
                    {
                        id:2,
                        nombre: "Gato Olga",
                        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        duenio: 'David',
                        sexo: 'Femenino',
                        nacimiento: '99/99/9999',
                        problemas:[
                            {
                                id:"1",
                                titulo:"Pierna lastimada",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
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
                                ]
                            },
                            {
                                id:"2",
                                titulo:"Resfrio",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
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
                                ]
                            },
                            {
                                id:"3",
                                titulo:"Dolor de estomago",
                                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                                evoluciones: [
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
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        App.locales = {
            petShops : [
                {
                    georeference:{lat:'-23.530549', long:'-46.681076'},
                    data:{id:'p1',nombre:'PetShop A',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.530657', long:'-46.682417'},
                    data:{id:'p2',nombre:'PetShop B',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.529418', long:'-46.680186'},
                    data:{id:'p3',nombre:'PetShop C',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.528129', long:'-46.681988'},
                    data:{id:'p4',nombre:'PetShop D',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.533097', long:'-46.679778'},
                    data:{id:'p5',nombre:'PetShop E',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.532969', long:'-46.682922'},
                    data:{id:'p6',nombre:'PetShop F',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                }
            ],
            veterinarias : [
                {
                    georeference:{lat:'-23.530401', long:'-46.684488'},
                    data:{id:'v1',nombre:'Veterinaria A',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.531537', long:'-46.680108'},
                    data:{id:'v2',nombre:'Veterinaria B',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.531424', long:'-46.683101'},
                    data:{id:'v3',nombre:'Veterinaria C',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.529678', long:'-46.679116'},
                    data:{id:'v4',nombre:'Veterinaria D',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                },
                {
                    georeference:{lat:'-23.530037', long:'-46.684689'},
                    data:{id:'v5',nombre:'Veterinaria E',descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                }
            ]
        };
        App.myPointGeoReference = {lat:'-23.530893', long:'-46.680588'};
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
            mascotaEvoluciones: "",
            localPetShopInformacion: "",
            localVeterinariaInformacion: ""
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
            var mascotas = { mascotas:App.duenios[App.currentDuenio].mascotas};
            var html = App.templates.mascotasListado(mascotas);
            Helper.jqueryFillHTMLContent('#ul-mascotas-listview', html).listview('refresh');
            Helper.jqueryMobileHideAjaxLoading();
        });

        Helper.jqueryMobileOnPageShow('#page-mascota', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var html;
            var indexOfMascota = parseInt(App.currentMascota) - 1;
            Helper.jqueryClearHTMLContent('#div-evoluciones-listado');

            var informacion = {
                nombre:App.duenios[App.currentDuenio].mascotas[indexOfMascota].nombre,
                duenio:App.duenios[App.currentDuenio].mascotas[indexOfMascota].duenio,
                sexo:App.duenios[App.currentDuenio].mascotas[indexOfMascota].sexo,
                nacimiento:App.duenios[App.currentDuenio].mascotas[indexOfMascota].nacimiento
            };

            html = App.templates.mascotaVista(informacion);
            Helper.jqueryFillHTMLContent('#div-mascota-informacion', html);

            var problemas = {problemas:App.duenios[App.currentDuenio].mascotas[indexOfMascota].problemas};

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
                App.markPetShops();
                Helper.jqueryMobileHideAjaxLoading();
            });

            Helper.jqueryOnClick('#a-georefence-veterinarias',function (event) {
                event.preventDefault();
                Helper.jqueryMobileShowAjaxLoading();
                Mapa.clearMarkers();
                App.markVeterinarias();
                Helper.jqueryMobileHideAjaxLoading();
            });
        });

        $("#ul-mascotas-listview").delegate('.a-go-to-mascota-view','click', function (e) {
            e.preventDefault();
            App.currentMascota = $(this).attr("data-id-mascota");
            Helper.jqueryMobileChangePage("#page-mascota");
        });

        $("#ul-problemas-listview").delegate('.a-show-evoluciones','click', function (e) {
            e.preventDefault();
            Helper.jqueryMobileShowAjaxLoading();
            var idProblema = $(this).attr("data-id-problema");
            var indexProblema = parseFloat(idProblema) - 1;
            var evoluciones = {
                problema:App.duenios[0].mascotas[0].problemas[indexProblema],
                evoluciones:App.duenios[0].mascotas[0].problemas[indexProblema].evoluciones
            };
            var html = App.templates.mascotaEvoluciones(evoluciones);
            Helper.jqueryFillHTMLContent('#div-evoluciones-listado', html)
                .show()
                .find("ul#ul-evoluciones-listview").listview().listview('refresh');
            Helper.jqueryMobileHideAjaxLoading();
        });

        $("#map-canvas")
            .delegate('.a-share-twitter','click', function (e) {
                e.preventDefault();
                var id = $(this).attr('data-id');
                var idTitulo = "titulo-" + id;
                var idDescripcion = "descripcion-" + id;
                var titulo = $('#' + idTitulo).text();
                var message = 'Recomiendo ' + titulo + ' la mejor atencion by @ITHealth';
                window.plugins.socialsharing.shareViaTwitter(message);
            })
            .delegate('.a-share-facebook','click', function (e) {
                e.preventDefault();
                var id = $(this).attr('data-id');
                var idTitulo = "titulo-" + id;
                var idDescripcion = "descripcion-" + id;
                var titulo = $('#' + idTitulo).text();
                var message = 'Recomiendo ' + titulo + ' la mejor atencion by @ITHealth';
                var image = null;
                var url = null;
                window.plugins.socialsharing.shareViaFacebook(message, image , url , function() {
                    console.log('share ok');
                }, function(errormsg){
                    alert(errormsg)
                });
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

        source = Helper.jqueryGetHTMLFromField('#local-petshop-informacion');
        App.templates.localPetShopInformacion = Handlebars.compile(source);

        source = Helper.jqueryGetHTMLFromField('#local-veterinaria-informacion');
        App.templates.localVeterinariaInformacion = Handlebars.compile(source);

    },
    onSuccess: function (position) {

        var latitude = position.coords.latitude || null;
        var longitude = position.coords.longitude || null;

        App.myPointGeoReference.lat = latitude;
        App.myPointGeoReference.long = longitude;

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
            App.cityCircle = new google.maps.Circle(populationOptions);
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
        navigator.geolocation.getCurrentPosition(App.onSuccess, App.onError,{maximumAge: 3000, timeout: 5000, enableHighAccuracy: true});
    },
    markPetShops: function () {
        $.each(App.locales.petShops,function(index,petShop){
            App.markOnMap(petShop.georeference.lat, petShop.georeference.long, function (map, googleMapsLatLng, marker) {
                var contentInfoWindow = App.templates.localVeterinariaInformacion({
                    id: petShop.data.id,
                    titulo: petShop.data.nombre,
                    descripcion: petShop.data.descripcion
                });
                Mapa.addPopUP(marker, contentInfoWindow);
            });
        });
    },
    markVeterinarias: function () {
        $.each(App.locales.veterinarias,function(index,veterinaria){
            App.markOnMap(veterinaria.georeference.lat, veterinaria.georeference.long, function (map, googleMapsLatLng, marker) {
                var contentInfoWindow = App.templates.localVeterinariaInformacion({
                    id: veterinaria.data.id,
                    titulo: veterinaria.data.nombre,
                    doctor: veterinaria.data.doctor,
                    descripcion: veterinaria.data.descripcion
                });
                Mapa.addPopUP(marker, contentInfoWindow);
            });
        });
    }
};