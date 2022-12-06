import React, { useRef } from 'react';
import {GoogleMap} from '@react-google-maps/api';
import s from './Map.module.css';
import { defaultTheme } from './Theme';
import { CurrentLocationMarker } from '../CurrentLocationMarker/CurrentLocationMarker.jsx';



const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 51.144911467631516,
    lng: 71.42281325851249
  };

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disabledDoubleClickZoom: false,
    fullscreenControl: false,
    // styles: defaultTheme
}

export const MODES = {
  MOVE: 1,
  SET_MARKER: 0
}

const Map = ({center, mode, markers }) => {

    const mapRef = React.useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
      }, []);

      const onClick = React.useCallback((loc) => {
        if(mode === MODES.SET_MARKER) {
          const lat = loc.latLng.lat();
          const lng = loc.latLng.lng();
          console.log({lat, lng})
        }
      }, [mode])


    return <div className={s.container}>
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onClick={onClick}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <CurrentLocationMarker position={center}/>
        
      </GoogleMap>

    </div>
}

export {Map}