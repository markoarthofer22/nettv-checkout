import React, { useEffect, useRef } from 'react';
import CustomMarker from './CustomMarker';
import './googlemap.scss';
import MarkerClusterer from '@google/markerclusterer';

const CustomMap = ({ children, lat, lng, data }) => {
    const googleMap = useRef();
    const center = { lat: parseFloat(lat), lng: parseFloat(lng) };
    const markers = useRef([]);

    //map settings
    const mapOptions = {
        zoom: 14,
        center: center,
        SENSOR: true,
        scrollwheel: true,
        clickableIcons: false,
        disableDefaultUI: false
    };

    const createGoogleMap = () => {
        return new window.google.maps.Map(document.getElementById('customMap'), mapOptions);
    };

    /*INIT */
    useEffect(() => {
        if (window.google && window.google.maps) {
            onLoad();
            return;
        }

        const googleScript = document.createElement('script');
        googleScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCz1qZIYyYL7wPEMbqOnNDVWDBkfoSmJ-g';
        document.body.appendChild(googleScript);
        googleScript.addEventListener('load', onLoad);
    }, []);

    const onLoad = () => {
        googleMap.current = createGoogleMap();
        window.google.maps.event.addListenerOnce(googleMap.current, 'idle', function() {
            window.google.maps.event.trigger(googleMap.current, 'resize');
        });

        window.google.maps.event.trigger(googleMap.current, 'resize');

        for (let i = 0; i < data.length; i++) {
            if (data[i].lat && data[i].lng) {
                let marker = new CustomMarker(googleMap.current, data[i]);
                markers.current.push(marker);
            }
        }

        var markerCluster = new MarkerClusterer(googleMap.current, markers.current, {
            maxZoom: 17,
            gridSize: 80,
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
    };

    return <div id="customMap" style={style}></div>;
};

export default CustomMap;

const style = { width: '100%', height: '100%' };
