"use strict";

var path_base = '/var/www/html/tique_web/';
var url_base = 'https://inmobiliariatique.com/';
var arreglo = valor;
var map_propertyLoc;
var map_eirene;
var map_beatriz;
var markers = [];
var generic_icon;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var placesService;
var infowindow;
var markers_map;
var cant =[];
var tipo_hogar;


function setAllMap(map) {
    $.each(markers, function (index, marker) {
        marker.infobox.close();
        marker.infobox.isOpen = false;
        marker.setMap(map);
    });
}     


function HomeControl(controlDiv, map) {

    // Set CSS styles for the DIV containing the control
    // Setting padding to 5 px will offset the control
    // from the edge of the map.
    controlDiv.style.padding = '5px';

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = 'white';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '2px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.margin = '5px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'My Location';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '12px';
    controlText.style.paddingLeft = '4px';
    controlText.style.paddingRight = '4px';
    controlText.innerHTML = '<strong>My Location</strong>';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    google.maps.event.addDomListener(controlUI, 'click', function () {
        var myloc = new google.maps.Marker({
            clickable: false,
            icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                    new google.maps.Size(22, 22),
                    new google.maps.Point(0, 18),
                    new google.maps.Point(11, 11)),
            shadow: null,
            zIndex: 999,
            map: map
        });

        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(function (pos) {
                var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                myloc.setPosition(me);
                // Zoom in
                var bounds = new google.maps.LatLngBounds();
                bounds.extend(me);
                map.fitBounds(bounds);
                var zoom = map.getZoom();
                map.setZoom(zoom > zoomOnMapSearch ? zoomOnMapSearch : zoom);
            }, function (error) {
                console.log(error);
            });
    });
}

function LoadMap_main(color) {
    var prefix = '';
    if( typeof color !=='undefined'){
        prefix = color+'/';
    }
   /*markers_map = new Array(
        [20.691329, -103.454233, 'assets/img/icons/Icono-TIQUE-pin.png', 'assets/img/placeholders/275x165.png' , 'Inmobiliaria TIQUE'],
    );*/
   // markers_map.push();

    // option
    if ($('#main-map').length) {
        var myLocationEnabled = true;
        var style_map = [{"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}];
        var scrollwheelEnabled = false;

        var mapOptions = {
            center: new google.maps.LatLng(20.66682, -103.39182),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles: style_map
        };

        /* markers info ( ltng, icon, image, title) */
        var tope = arreglo.length;
        markers_map = new Array(
                [20.691329, -103.454233, 'assets/img/icons/Icono-TIQUE-pin.png', 'assets/img/placeholders/275x165.png' , 'Inmobiliaria TIQUE']
                );
        for(var i = 0; i < tope; i++){

            var georeferencia = arreglo[i][0];
            var commaPos = georeferencia.indexOf(',');
            var Lat = parseFloat(georeferencia.substring(0, commaPos));
            var Long = parseFloat(georeferencia.substring(commaPos + 1, georeferencia.length));
            if(arreglo[i][6]==1){
                tipo_hogar="Casa";
            }
            if(arreglo[i][6]==2){
                tipo_hogar="Depa";
            }

            var arreglop = new Array(Lat, Long, 'assets/img/markers/'+prefix+'house.png', arreglo[i][2], arreglo[i][3], 'hogares/'+arreglo[i][4]+'.php',arreglo[i][5],tipo_hogar,arreglo[i][7],arreglo[i][8]);


            markers_map.push(arreglop);
        }




        var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);

        $.each(markers_map, function (index, marker_map) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                map: map,
                icon: marker_map[2]
            });

            var myOptions = {

                content: '<div class="infobox">\n\
                            <div class="image hover-default">\n\
                                <img src="' + marker_map[3] + '" width="275px" height="175px" alt="">\n\
                                <a href= "'+ marker_map[5] +'" class="property-card-hover">\n\
                                    <img src="assets/img/property-hover-arrow.png" alt="" class="left-icon">\n\
                                    <img src="assets/img/plus.png" alt="" class="center-icon">\n\
                                    <img src="assets/img/icon-notice.png" alt="" class="right-icon">\n\
                                </a>\n\
                            </div>\n\
                            <div class="title">\n\
                                <a href="'+ marker_map[5] +'">' + marker_map[4] + '</a>\n\
                            </div>\n\
                            <div class="content clearfix">\n\
                                <div class="pull-left">\n\
                                       '+ marker_map[6] +'<br> \n\
                                </div>\n\
                                <div class="pull-right">\n\
                                      <a href="'+ marker_map[5] +'" class="infobox-link-btn">View details</a>                \n\
                                </div>\n\
                            </div>\n\
                                <div class="infobox-footer text-color-primary">\n\
                                    <div class="property-preview-f-left"> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-home" >'+ marker_map[7] +'</i> \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i class="fa fa-square-o">'+ marker_map[8] +'</i> \n\
                                        </span> \n\
                                        <span class="property-card-value"> \n\
                                            <i >$ '+ marker_map[9] +'</i> \n\
                                        </span> \n\
                                    </div> \n\
                                </div>\n\
                            </div>',
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-138, -335),
                zIndex: null,
                closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
                infoBoxClearance: new google.maps.Size(1, 1),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false
            };
            marker.infobox = new InfoBox(myOptions);
            marker.infobox.isOpen = false;
            markers.push(marker);

            // action        
            google.maps.event.addListener(marker, "click", function (e) {
                var curMarker = this;

                $.each(markers, function (index, marker) {
                    // if marker is not the clicked marker, close the marker
                    if (marker !== curMarker) {
                        marker.infobox.close();
                        marker.infobox.isOpen = false;
                    }
                });

                if (curMarker.infobox.isOpen === false) {
                    curMarker.infobox.open(map, this);
                    curMarker.infobox.isOpen = true;
                    map.panTo(curMarker.getPosition());
                } else {
                    curMarker.infobox.close();
                    curMarker.infobox.isOpen = false;
                }

            });
        });

        var mcOptions = {
            gridSize: 40,
            styles: [
                {
                    height: 42,
                    url: 'assets/img/cluster/'+prefix+'cluster.png',
                    width: 42,
                    textColor: '#46616B'
                }
            ]
        };

        marker_clusterer = new MarkerClusterer(map, markers, mcOptions);
        if (myLocationEnabled) {
            // [START gmap mylocation]

            // Construct your control in whatever manner is appropriate.
            // Generally, your constructor will want access to the
            // DIV on which you'll attach the control UI to the Map.
            var controlDiv = document.createElement('div');

            // We don't really need to set an index value here, but
            // this would be how you do it. Note that we set this
            // value as a property of the DIV itself.
            controlDiv.index = 1;

            // Add the control to the map at a designated control position
            // by pushing it on the position's array. This code will
            // implicitly add the control to the DOM, through the Map
            // object. You should not attach the control manually.
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);

            HomeControl(controlDiv, map)

            // [END gmap mylocation]
        }
    }
}
 var map;
function hogar_eirene_map(){
    if ($('#hogar-eirene-map').length) {
        // map init
        var myLocationEnabled = true;
        var style_map =[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
        var scrollwheelEnabled = false;

        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(20.778675958284325, -103.47732705984673),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles:style_map
        };

        map = new google.maps.Map(document.getElementById('hogar-eirene-map'), mapOptions1);
        map_eirene = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(20.778675958284325, -103.47732705984673),
            map: map,
            icon: '../assets/img/markers/house.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Dirección: Fuente Agua Marina #9043  2-G, Fraccionamiento  Villa Fontana Diamante </div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(20.778675958284325, -103.47732705984673),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker1.infobox = new InfoBox(myOptions2);
        marker1.infobox.isOpen = false;
        markers1.push(marker1);

        // action
        google.maps.event.addListener(marker1, "click", function (e) {
            var curMarker = this;

            $.each(markers1, function (index, marker) {
                // if marker is not the clicked marker, close the marker
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if(curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }
            window.map_eirene.i
        });

        if(myLocationEnabled){
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }


        // init_gmap_searchbox();
        $(".places_select a").on('click', function(){
            init_places($(this).attr('data-rel'), $(this).find('img').attr('src'));
        });

        var selected_place_type = 4;

        init_directions();
        directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});


        directionsDisplay.setMap(map);
        init_places($(".places_select a:eq("+selected_place_type+")").attr('data-rel'), $(".places_select a:eq("+selected_place_type+") img").attr('src'));

    }
}

function hogar_beatriz_map(){
    if ($('#hogar-beatriz-map').length) {
        // map init
        var myLocationEnabled = true;
        var style_map =[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
        var scrollwheelEnabled = false;

        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(20.680501336421816, -103.2855670580026),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles:style_map
        };

        map = new google.maps.Map(document.getElementById('hogar-beatriz-map'), mapOptions1);
        map_eirene = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(20.680501336421816, -103.2855670580026),
            map: map,
            icon: '../assets/img/markers/house.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Dirección: Fuente Agua Marina #9043  2-G, Fraccionamiento  Villa Fontana Diamante </div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(20.680501336421816, -103.2855670580026),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker1.infobox = new InfoBox(myOptions2);
        marker1.infobox.isOpen = false;
        markers1.push(marker1);

        // action
        google.maps.event.addListener(marker1, "click", function (e) {
            var curMarker = this;

            $.each(markers1, function (index, marker) {
                // if marker is not the clicked marker, close the marker
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if(curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }
            window.map_beatriz.i
        });

        if(myLocationEnabled){
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }


        // init_gmap_searchbox();
        $(".places_select a").on('click', function(){
            init_places($(this).attr('data-rel'), $(this).find('img').attr('src'));
        });

        var selected_place_type = 4;

        init_directions();
        directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});


        directionsDisplay.setMap(map);
        init_places($(".places_select a:eq("+selected_place_type+")").attr('data-rel'), $(".places_select a:eq("+selected_place_type+") img").attr('src'));

    }
}

function hogar_santiago_map(){
    if ($('#hogar-santiago-map').length) {
        // map init
        var myLocationEnabled = true;
        var style_map =[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
        var scrollwheelEnabled = false;

        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(20.66618370792872, -103.21229791900916),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles:style_map
        };

        map = new google.maps.Map(document.getElementById('hogar-santiago-map'), mapOptions1);
        map_eirene = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(20.66618370792872, -103.21229791900916),
            map: map,
            icon: '../assets/img/markers/house.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Dirección: Priv Rio Santiago 33, Urbi Paseos de Santiago, Tonala. </div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(20.66618370792872, -103.21229791900916),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker1.infobox = new InfoBox(myOptions2);
        marker1.infobox.isOpen = false;
        markers1.push(marker1);

        // action
        google.maps.event.addListener(marker1, "click", function (e) {
            var curMarker = this;

            $.each(markers1, function (index, marker) {
                // if marker is not the clicked marker, close the marker
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if(curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }
            window.map_beatriz.i
        });

        if(myLocationEnabled){
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }


        // init_gmap_searchbox();
        $(".places_select a").on('click', function(){
            init_places($(this).attr('data-rel'), $(this).find('img').attr('src'));
        });

        var selected_place_type = 4;

        init_directions();
        directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});


        directionsDisplay.setMap(map);
        init_places($(".places_select a:eq("+selected_place_type+")").attr('data-rel'), $(".places_select a:eq("+selected_place_type+") img").attr('src'));

    }
}

function hogar_eden_map(){
    if ($('#hogar-eden-map').length) {
        // map init
        var myLocationEnabled = true;
        var style_map =[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
        var scrollwheelEnabled = false;

        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(20.787577892894156, -103.44356244048255),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles:style_map
        };

        map = new google.maps.Map(document.getElementById('hogar-eden-map'), mapOptions1);
        map_eirene = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(20.787577892894156, -103.44356244048255),
            map: map,
            icon: '../assets/img/markers/house.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Dirección: Av. Paraíso Poniente No. 267, Condominio Toledo Int. 17, Fracc. Campo Real, Zapopan.\n </div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(20.787577892894156, -103.44356244048255),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker1.infobox = new InfoBox(myOptions2);
        marker1.infobox.isOpen = false;
        markers1.push(marker1);

        // action
        google.maps.event.addListener(marker1, "click", function (e) {
            var curMarker = this;

            $.each(markers1, function (index, marker) {
                // if marker is not the clicked marker, close the marker
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if(curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }
            window.map_beatriz.i
        });

        if(myLocationEnabled){
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }


        // init_gmap_searchbox();
        $(".places_select a").on('click', function(){
            init_places($(this).attr('data-rel'), $(this).find('img').attr('src'));
        });

        var selected_place_type = 4;

        init_directions();
        directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});


        directionsDisplay.setMap(map);
        init_places($(".places_select a:eq("+selected_place_type+")").attr('data-rel'), $(".places_select a:eq("+selected_place_type+") img").attr('src'));

    }
}


function map_property() {
    if ($('#property-map').length) {
            // map init    
        var myLocationEnabled = true;
        var style_map =[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
        var scrollwheelEnabled = false;

        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(20.61624635304796, -103.20401539140512),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles:style_map
        };

        map = new google.maps.Map(document.getElementById('property-map'), mapOptions1);
        map_propertyLoc = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(20.61624635304796, -103.20401539140512),
            map: map,
            icon: '../assets/img/markers/house.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Dirección: Colina Vieja #136, Colinas de Tonalá, Tonalá Jalisco </div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(20.61630660358605, -103.20392956072172),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker1.infobox = new InfoBox(myOptions2);
        marker1.infobox.isOpen = false;
        markers1.push(marker1);
        
        // action        
        google.maps.event.addListener(marker1, "click", function (e) {
            var curMarker = this;

            $.each(markers1, function (index, marker) {
                // if marker is not the clicked marker, close the marker
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if(curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }

        }); 

        if(myLocationEnabled){
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }

        
    // init_gmap_searchbox();
         $(".places_select a").on('click', function(){
             init_places($(this).attr('data-rel'), $(this).find('img').attr('src'));
         });

         var selected_place_type = 4;

         init_directions();
         directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});


         directionsDisplay.setMap(map);
         init_places($(".places_select a:eq("+selected_place_type+")").attr('data-rel'), $(".places_select a:eq("+selected_place_type+") img").attr('src'));

    }
}

function map_property_general() {
    if ($('#property-map-general').length) {
        // map init
        var myLocationEnabled = true;
        var style_map =[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
        var scrollwheelEnabled = false;
        var ubicacion = document.getElementById('ubicacion').value;
        var georeferencia = document.getElementById('georeferencia').value;
        var commaPos = georeferencia.indexOf(',');
        var Lat = parseFloat(georeferencia.substring(0, commaPos));
        var Long = parseFloat(georeferencia.substring(commaPos + 1, georeferencia.length));
        var georeferencia_point = new google.maps.LatLng(Lat, Long);


        var markers1 = new Array();
        var mapOptions1 = {
            center: new google.maps.LatLng(georeferencia_point),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles:style_map
        };

        map = new google.maps.Map(document.getElementById('property-map-general'), mapOptions1);
        map_propertyLoc = map

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(georeferencia_point),
            map: map,
            icon: url_base + 'assets/img/markers/house.png'
        });

        var myOptions2 = {
            content: "<div class='infobox2'>Dirección: " + ubicacion + "</div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(georeferencia_point),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker1.infobox = new InfoBox(myOptions2);
        marker1.infobox.isOpen = false;
        markers1.push(marker1);

        // action
        google.maps.event.addListener(marker1, "click", function (e) {
            var curMarker = this;

            $.each(markers1, function (index, marker) {
                // if marker is not the clicked marker, close the marker
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if(curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }

        });

        if(myLocationEnabled){
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }


        // init_gmap_searchbox();
        $(".places_select a").on('click', function(){
            init_places($(this).attr('data-rel'), $(this).find('img').attr('src'));
        });

        var selected_place_type = 4;

        init_directions();
        directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});


        directionsDisplay.setMap(map);
        init_places($(".places_select a:eq("+selected_place_type+")").attr('data-rel'), $(".places_select a:eq("+selected_place_type+") img").attr('src'));

    }
}



function contactMap() {

    var map;
    if ($('#contact-map').length) {
        var myLocationEnabled = true;
        var style_map = [{"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}];
        var scrollwheelEnabled = false;
        var markers = new Array();
        var mapOptions = {
            center: new google.maps.LatLng(20.691329, -103.454233),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            styles: style_map
        };
        var map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(20.691329, -103.454233),
            map: map,
            icon: 'assets/img/icons/Icono-TIQUE-pin.png'
        });

        var myOptions = {
            content: "<div class='infobox2'>Dirección: AVENIDA IGNACIO L. VALLARTA #6503 LOCAL H-12</div>",
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-138, -80),
            zIndex: null,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            position: new google.maps.LatLng(20.691329, -103.454233),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };

        marker.infobox = new InfoBox(myOptions);
        marker.infobox.isOpen = false;
        markers.push(marker);

        // action        
        google.maps.event.addListener(marker, "click", function (e) {
            var curMarker = this;

            $.each(markers, function (index, marker) {
                if (marker !== curMarker) {
                    marker.infobox.close();
                    marker.infobox.isOpen = false;
                }
            });

            if (curMarker.infobox.isOpen === false) {
                curMarker.infobox.open(map, this);
                curMarker.infobox.isOpen = true;
                map.panTo(curMarker.getPosition());
            } else {
                curMarker.infobox.close();
                curMarker.infobox.isOpen = false;
            }

        });

        if (myLocationEnabled) {
            var controlDiv = document.createElement('div');
            controlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
            HomeControl(controlDiv, map)
        }
    }
}

function init_places(places_types, icon) {
    var pyrmont = new google.maps.LatLng(45.812231, 15.920618);

    setAllMap(null);

    generic_icon = icon;


    var places_type_array = places_types.split(','); 

    var request = {
        location: pyrmont,
        radius: 2000,
        types: places_type_array
    };

    infowindow = new google.maps.InfoWindow();
    placesService = new google.maps.places.PlacesService(map);
    placesService.nearbySearch(request, callback);

}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function calcRoute(source_place, dest_place) {
  var selectedMode = 'WALKING';
  var request = {
      origin: source_place,
      destination: dest_place,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      //console.log(response.routes[0].legs[0].distance.value);
    }
  });
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var propertyLocation = new google.maps.LatLng(45.812231, 15.920618);

    if(place.icon.indexOf("generic") > -1)
    {
        place.icon = generic_icon;
    }

    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: place.geometry.location
  });

  markers.push(marker);

  var distanceKm = (calcDistance(propertyLocation, placeLoc)*1.2).toFixed(2);
  var walkingTime = parseInt((distanceKm/5)*60+0.5);

  google.maps.event.addListener(marker, 'click', function() {

        //drawing route
        calcRoute(propertyLocation, placeLoc);

    // Fetch place details
    placesService.getDetails({ placeId: place.place_id }, function(placeDetails, statusDetails){



        //open popup infowindow
        infowindow.setContent(place.name+'<br />Distance: '+distanceKm+'Km'+
                              '<br />WalkingTime: '+walkingTime+'Min'+
                              '<br /><a target="_blank" href="'+placeDetails.url+'">Details</a>');
        infowindow.open(map_propertyLoc, marker);
    });

  });
}

//calculates distance between two points
function calcDistance(p1, p2){
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}


function init_directions() {
  $(".places_select").css('display', 'block');
}
    