import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Button } from "@mui/material";
import React, { useEffect } from "react";

const GoogleMapViewPin = props => {

  const { enterPressed, setEnterPressed } = props;

  const [currentMarker, setCurrentMarker] = React.useState(null);
  const [currentCenter, setCurrentCenter] = React.useState(props.center);

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
    if (currentMarker) {
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
    props.addCorrectCity({ lat: currentMarker.lat, lng: currentMarker.lng });
    setCurrentMarker({});
  };

  useEffect(() => {
    if (enterPressed && currentMarker) {
      handleGuess();
      setEnterPressed(false)
    }
  })

  if (!isLoaded) {
    return <></>;
  }

  return (
    <div className="map-container-pin">
      <GoogleMap
        id="map-pin"
        zoom={props.zoom}
        initialCenter={currentCenter}
        center={currentCenter}
        mapTypeId="hybrid"
        mapContainerClassName={"map"}
        options={mapOptions}
        onClick={ev => handleClickPinMap(ev.latLng.lat(), ev.latLng.lng())}
        onCenterChanged={ev => console.log(ev)}>
        {renderMarker()}
      </GoogleMap>

      <div>
        <Button
          color="success"
          className="button-guess"
          disabled={currentMarker ? false : true}
          onClick={() => handleGuess()}
          sx={{ width: "50%", marginTop: "5px" }}
          variant="contained">
          Guess
        </Button>
      </div>
    </div>
  );
};

export default GoogleMapViewPin;
