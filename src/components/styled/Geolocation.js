import React, { useCallback } from 'react';
import { useState } from 'react';
import { Map } from '../Map';
import { useJsApiLoader } from '@react-google-maps/api';
import { Autocomplete } from '../Autocomplete';
import s from '../Geolocation.module.css';
// import { useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY
const defaultCenter = {
    lat: -3.745,
    lng: -38.523
  };

const libraries = ['places']
  
const Geolocation = () => {
    const [center, setCenter] = React.useState(defaultCenter)
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
    

    return (
        <div>
            <div className={s.adressSearchContainer}></div>
            <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
            {isLoaded ? <Map center={center}/> : <h2>Loading</h2>}
        </div>
    );
}

export default Geolocation;