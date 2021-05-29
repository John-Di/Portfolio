import React from 'react';
import LocationContext from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';

const LocationProvider = ({ location = {}, children }) => {
  return (
    <LocationContext.Provider value={useLocation({ location })} >
      {children}
    </LocationContext.Provider>
  )
}
export default LocationProvider