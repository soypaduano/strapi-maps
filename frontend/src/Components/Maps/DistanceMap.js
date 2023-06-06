import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
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

const GoogleMapDistancePoints = (props) => {
  const { p1, p2 } = props;

  //Recibe 2 puntos
  //Pinta esos 2 puntos con una linea
  //Pone el zoom en relacion a esos 2 puntos.

  let coord = {
    lat: parseFloat(props.latitude),
    lng: parseFloat(props.longitude),
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOjjucPuX3-uUDBHkoPmSvtEa7ARLPNOc",
  });

  const renderMarkers = () => {
    return <Marker position={coord} />;
  };

  const renderLine = () => {};

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
        {renderMarkers()}
      </GoogleMap>
    </>
  );
};

export default GoogleMapDistancePoints;
