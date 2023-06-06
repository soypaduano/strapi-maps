import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { LinearProgress } from "@mui/material";

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

const GoogleMapView = (props) => {
  let coord = {
    lat: parseFloat(props.latitude),
    lng: parseFloat(props.longitude),
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOjjucPuX3-uUDBHkoPmSvtEa7ARLPNOc",
  });

  const renderMarker = () => {
    return <Marker position={coord} />;
  };

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
        zoom={12}
        mapTypeId="satellite"
        center={coord}
        mapContainerClassName={"map"}
        options={mapOptions}
      >
        {renderMarker()}
      </GoogleMap>
    </>
  );
};

export default GoogleMapView;
