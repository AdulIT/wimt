import {Marker} from '@react-google-maps/api';
// import s from './CurrentLocationMarker.module.css';

export const CurrentLocationMarker = ({position}) => {
    return <Marker position={position}/>
     

}