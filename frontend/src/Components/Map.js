import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  rotateControl: false,
  scrollwheel: false,
  draggable: false,
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

  if (!isLoaded) return <div>Loading</div>;

  return (
    <div className="map-container">
      <GoogleMap
        id="map"
        zoom={13}
        mapTypeId="satellite"
        center={coord}
        mapContainerClassName={"map"}
        options={mapOptions}
      ></GoogleMap>
    </div>
  );
};

export default GoogleMapView;
