(function() {
	var myMap,
        myPlacemark;
    

    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map("map", {
            center: [59.93680598, 30.32079263],
            controls: [],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([59.93680598, 30.32079263], {}, {
        	iconLayout: 'default#image',
        	iconImageHref: 'img/map-marker.png',
        	iconImageSize: [36, 35],
        	iconImageOffset: [-20, 28] 
        });
            
        myMap.geoObjects.add(myPlacemark);

    };
}());