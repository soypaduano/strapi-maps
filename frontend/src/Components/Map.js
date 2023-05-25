import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const mapOptions = {
  panControl: false,
  zoomControl: true,
  minZoom: 10,
  maxZoom: 15,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  rotateControl: false,
  scrollwheel: false,
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

  if (!isLoaded) return <div>Loading</div>;

  return (
    <div className="map-container">
      <GoogleMap
        id="map"
        zoom={12}
        mapTypeId="satellite"
        center={coord}
        mapContainerClassName={"map"}
        options={mapOptions}
      ></GoogleMap>
    </div>
  );
};

export default GoogleMapView;
