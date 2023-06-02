import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";

const GoogleMapViewPin = (props) => {
  const mapOptions = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: true,
    rotateControl: true,
    scrollwheel: true,
    draggable: true,
    disableDefaultUI: true,
    mapTypeId: "roadmap",
  };

  let coord = {
    lat: parseFloat(props.latitude),
    lng: parseFloat(props.longitude),
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOjjucPuX3-uUDBHkoPmSvtEa7ARLPNOc",
  });

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
    <div className="map-container-pin">
      <GoogleMap
        id="map-pin"
        zoom={1}
        mapTypeId="hybrid"
        center={coord}
        mapContainerClassName={"map"}
        options={mapOptions}
      ></GoogleMap>
    </div>
  );
};

export default GoogleMapViewPin;
