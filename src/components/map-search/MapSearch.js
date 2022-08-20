import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapSearch() {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  function setTextSearch() {
    //
  }

  return (
    <div className="form-group">
      <button id="mapSearch" className="btn btn-primary">Open Map</button>
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapSearch
