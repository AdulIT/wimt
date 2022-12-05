import React, { useCallback } from 'react';
import { useState } from 'react';
import { Map, MODES } from '../Map';
import { useJsApiLoader } from '@react-google-maps/api';
import { Autocomplete } from '../Autocomplete';
import s from '../Geolocation.module.css';
// import { useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY
const defaultCenter = {
    lat: 51.144911467631516,
    lng: 71.42281325851249
  };

const libraries = ['places']
  
const Geolocation = () => {
    const [center, setCenter] = React.useState(defaultCenter);
    const [mode, setMode] = React.useState(MODES.MOVE)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    });

    const onPlaceSelect = React.useCallback(
        (coordinates) => {
            setCenter(coordinates)
        }, 
        [],
    )

    const toggleMode = React.useCallback(() => {
        switch(mode) {
            case MODES.MOVE:
                setMode(MODES.SET_MARKER);
                break;
            case MODES.SET_MARKER:
                setMode(MODES.MOVE);
                break;
            default:
                setMode(MODES.MOVE);
        }
        console.log(mode);
    }, [mode])
    
    
    

    return (
        <div>
            <div className={s.addressSearchContainer}>
                <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
                <button className={s.modeToggle} onClick={toggleMode}>Set marker</button>
            </div>
            
            {isLoaded ? <Map center={center} mode={mode}/> : <h2>Loading</h2>}
        </div>
    );
}

export default Geolocation;