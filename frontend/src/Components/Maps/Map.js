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
  const guessCords = { lat: props.guessCityCoords.lat, lng: props.guessCityCoords.lng }
  let coord = { lat: parseFloat(props.latitude), lng: parseFloat(props.longitude) };
  const { distance } = props;
  const [zoom, setZoom] = useState(12)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOjjucPuX3-uUDBHkoPmSvtEa7ARLPNOc",
  });

  const renderMarker = () => {
    return <Marker position={coord} />;
  };

  const renderMarkerGuessCity = () => {
    return <Marker position={guessCords} />
  }

  const drawLineBetweenPoints = () => {

    const path = [
      coord,
      guessCords
    ];

    return <Polyline
      path={path}
      strokeColor="#0000FF"
      strokeOpacity={0.3}
      strokeWeight={1} />
  }

  useEffect(() => {
    console.log('recalculate zoom')
  }, [])

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
        zoom={zoom}
        mapTypeId="satellite"
        center={coord}
        mapContainerClassName={"map"}
        options={mapOptions}>
        {renderMarker()}
        {renderMarkerGuessCity()}
        {drawLineBetweenPoints()}
      </GoogleMap>
    </>
  );
};

export default GoogleMapView;
