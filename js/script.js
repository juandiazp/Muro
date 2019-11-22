var map, infoWindow;

        function initMap() {
            map = new google.maps.Map(document.getElementById('mapa'), {
                center: { lat: 19.4978, lng: -99.1269 },
                zoom: 6
            });

            infoWindow = new google.maps.InfoWindow;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Ubicación encontrada soy Jaqui.');
                    infoWindow.open(map);
                    map.setCenter(pos);
                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // No soporta Geolocalización
                handleLocationError(false, infoWindow, map.getCenter());
            }
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: El servicio de Geolocalización falló' :
                'Error: Tu navegador no soporta Geolocalización.');
            infoWindow.open(map);
        }