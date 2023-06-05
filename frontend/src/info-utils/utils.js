const debugCities = (cities, correctCityCounter) => {
  return (
    <div style={{ display: "flex", fontSize: "15px" }}>
      <div>
        <h6>Cities guessed</h6>
        <ol>
          {correctCityCounter.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
      <div>
        <h6>Cities to be guessed</h6>
        <ol>
          {cities
            ? cities.map((city) => {
                return <li>{city.attributes.name}</li>;
              })
            : null}
        </ol>
      </div>
    </div>
  );
};

const orderCitiesByPopulation = (cities) => {
  const citiesOrderedByPopulation = cities.sort(
    (a, b) => b.attributes.population - a.attributes.population
  );

  return citiesOrderedByPopulation;
};

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(p1, p2) {
  var lat1 = p1.lat;
  var lat2 = p2.lat;
  var lon1 = p1.lng;
  var lon2 = p2.lng;

  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  alert(d);
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

const formatCityName = (city) => {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const cityUtils = {
  debugCities,
  orderCitiesByPopulation,
  calcCrow,
};

export default cityUtils;
