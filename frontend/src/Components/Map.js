import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { motion } from "framer-motion";

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
  const { correctCity } = props;

  let coord = {
    lat: parseFloat(props.latitude),
    lng: parseFloat(props.longitude),
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDOjjucPuX3-uUDBHkoPmSvtEa7ARLPNOc",
  });

  const variants = {
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
    hide: {
      y: -20,
      scale: 1.5,
      opacity: 0,
    },
  };

  if (!isLoaded) return <div>Loading</div>;

  return (
    <div className="map-container">
      <div className="counter-div">
        <motion.h4
          whileHover={{ scale: 1.1 }}
          className="counter"
          key={correctCity}
          variants={variants}
          animate={"show"}
          initial={"hide"}
        >
          Correct cities: {correctCity}
        </motion.h4>
      </div>
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
