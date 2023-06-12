import { GoogleMap, useLoadScript, Marker, Polyline } from "@react-google-maps/api";
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";


const mapOptions = {
  panControl: true,
  zoomControl: false,
  minZoom: 10,
  maxZoom: 25,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  rotateControl: false,
  scrollwheel: true,
  draggable: true,
  disableDefaultUI: true,
  mapTypeId: "satellite",
};

const GoogleMapView = props => {
  const guessCords = { lat: parseFloat(props.guessCityCoords.lat), lng: parseFloat(props.guessCityCoords.lng) }
  let coord = { lat: parseFloat(props.latitude), lng: parseFloat(props.longitude) };
  const { correctPanel } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOjjucPuX3-uUDBHkoPmSvtEa7ARLPNOc",
  });

  const renderMarker = () => {
    return <Marker position={coord} icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'} />;
  };

  const renderMarkerGuessCity = () => {
    return <Marker position={guessCords} icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'} />
  }

  const calculateZoom = () => {
    if (!correctPanel) return 12;
    return 11
  }

  const drawLineBetweenPoints = () => {

    const path = [
      coord,
      guessCords
    ];


    const options = {
      strokeColor: '#FFE45E',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FFE45E',
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: 30000,
      paths: [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 }
      ],
      zIndex: 1
    };


    return <Polyline
      path={path}
      options={options} />
  }

  if (!isLoaded)
    return (
      <div className="loading-maps">
        <h2>Loading Google Maps API </h2>
        <LinearProgress
          sx={{ width: "80%", margin: "0 auto" }}
          color="inherit"
        />
      </div>
    );

  return (

    <>
      <GoogleMap
        id="map"
        zoom={calculateZoom()}
        mapTypeId="satellite"
        center={coord}
        mapContainerClassName={"map"}
        options={mapOptions}>
        {renderMarker()}
        {renderMarkerGuessCity()}
        {correctPanel ? drawLineBetweenPoints() : null}
      </GoogleMap>
    </>
  );
};

export default GoogleMapView;
