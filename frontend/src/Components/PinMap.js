import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Button } from "@mui/material";
import React from "react";

const GoogleMapViewPin = (props) => {
  const [currentMarker, setCurrentMarker] = React.useState({});
  const [currentCenter, setCurrentCenter] = React.useState({ lat: 0, lng: 0 });

  const mapOptions = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggableCursor: "default",
    draggingCursor: "pointer",
    streetViewControl: false,
    overviewMapControl: true,
    rotateControl: true,
    scrollwheel: true,
    draggable: true,
    disableDefaultUI: true,
    mapTypeId: "roadmap",
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOjjucPuX3-uUDBHkoPmSvtEa7ARLPNOc",
  });

  const handleClickPinMap = (lat, lng) => {
    setCurrentMarker({ lat: lat, lng: lng });
  };

  const renderMarker = () => {
    if (currentMarker.lat) {
      return (
        <Marker
          position={{
            lat: parseFloat(currentMarker.lat),
            lng: parseFloat(currentMarker.lng),
          }}
        />
      );
    }
  };

  const handleGuess = () => {
    alert(currentMarker.lat);
    alert(currentMarker.lng);
  };

  if (!isLoaded) {
    return <></>;
  }

  return (
    <div className="map-container-pin">
      <GoogleMap
        id="map-pin"
        zoom={0}
        center={currentCenter}
        mapTypeId="hybrid"
        mapContainerClassName={"map"}
        options={mapOptions}
        onClick={(ev) => handleClickPinMap(ev.latLng.lat(), ev.latLng.lng())}
        onCenterChanged={(ev) => console.log(ev)}
      >
        {renderMarker()}
      </GoogleMap>
      <div>
        <Button
          color="success"
          className="button-guess"
          disabled={currentMarker.lat ? false : true}
          onClick={() => handleGuess()}
          sx={{ width: "50%", marginTop: "5px" }}
          variant="contained"
        >
          Guess
        </Button>
      </div>
    </div>
  );
};

export default GoogleMapViewPin;
