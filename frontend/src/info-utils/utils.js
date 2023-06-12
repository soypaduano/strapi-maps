
const dataEmoji = [
  { city: "Amsterdam", country: "Netherlands", emoji: "🇳🇱" },
  { city: "Andorra la Vella", country: "Andorra", emoji: "🇦🇩" },
  { city: "Athens", country: "Greece", emoji: "🇬🇷" },
  { city: "Belgrade", country: "Serbia", emoji: "🇷🇸" },
  { city: "Berlin", country: "Germany", emoji: "🇩🇪" },
  { city: "Bern", country: "Switzerland", emoji: "🇨🇭" },
  { city: "Bratislava", country: "Slovakia", emoji: "🇸🇰" },
  { city: "Brussels", country: "Belgium", emoji: "🇧🇪" },
  { city: "Bucharest", country: "Romania", emoji: "🇷🇴" },
  { city: "Budapest", country: "Hungary", emoji: "🇭🇺" },
  { city: "Chisinau", country: "Moldova", emoji: "🇲🇩" },
  { city: "Copenhagen", country: "Denmark", emoji: "🇩🇰" },
  { city: "Dublin", country: "Ireland", emoji: "🇮🇪" },
  { city: "Helsinki", country: "Finland", emoji: "🇫🇮" },
  { city: "Kyiv", country: "Ukraine", emoji: "🇺🇦" },
  { city: "Lisbon", country: "Portugal", emoji: "🇵🇹" },
  { city: "Ljubljana", country: "Slovenia", emoji: "🇸🇮" },
  { city: "London", country: "United Kingdom", emoji: "🇬🇧" },
  { city: "Luxembourg City", country: "Luxembourg", emoji: "🇱🇺" },
  { city: "Madrid", country: "Spain", emoji: "🇪🇸" },
  { city: "Minsk", country: "Belarus", emoji: "🇧🇾" },
  { city: "Monaco", country: "Monaco", emoji: "🇲🇨" },
  { city: "Moscow", country: "Russia", emoji: "🇷🇺" },
  { city: "Nicosia", country: "Cyprus", emoji: "🇨🇾" },
  { city: "Oslo", country: "Norway", emoji: "🇳🇴" },
  { city: "Paris", country: "France", emoji: "🇫🇷" },
  { city: "Podgorica", country: "Montenegro", emoji: "🇲🇪" },
  { city: "Prague", country: "Czech Republic", emoji: "🇨🇿" },
  { city: "Reykjavik", country: "Iceland", emoji: "🇮🇸" },
  { city: "Riga", country: "Latvia", emoji: "🇱🇻" },
  { city: "Rome", country: "Italy", emoji: "🇮🇹" },
  { city: "San Marino", country: "San Marino", emoji: "🇸🇲" },
  { city: "Sarajevo", country: "Bosnia and Herzegovina", emoji: "🇧🇦" },
  { city: "Skopje", country: "North Macedonia", emoji: "🇲🇰" },
  { city: "Sofia", country: "Bulgaria", emoji: "🇧🇬" },
  { city: "Stockholm", country: "Sweden", emoji: "🇸🇪" },
  { city: "Tallinn", country: "Estonia", emoji: "🇪🇪" },
  { city: "Tirana", country: "Albania", emoji: "🇦🇱" },
  { city: "Vaduz", country: "Liechtenstein", emoji: "🇱🇮" },
  { city: "Valletta", country: "Malta", emoji: "🇲🇹" },
  { city: "Vienna", country: "Austria", emoji: "🇦🇹" },
  { city: "Vilnius", country: "Lithuania", emoji: "🇱🇹" },
  { city: "Warsaw", country: "Poland", emoji: "🇵🇱" },
  { city: "Zagreb", country: "Croatia", emoji: "🇭🇷" },
  { city: "Buenos Aires", country: "Argentina", emoji: "🇦🇷" },
  { city: "La Paz", country: "Bolivia", emoji: "🇧🇴" },
  { city: "Brasilia", country: "Brazil", emoji: "🇧🇷" },
  { city: "Santiago", country: "Chile", emoji: "🇨🇱" },
  { city: "Bogota", country: "Colombia", emoji: "🇨🇴" },
  { city: "Quito", country: "Ecuador", emoji: "🇪🇨" },
  { city: "Asuncion", country: "Paraguay", emoji: "🇵🇾" },
  { city: "Lima", country: "Peru", emoji: "🇵🇪" },
  { city: "Montevideo", country: "Uruguay", emoji: "🇺🇾" },
  { city: "Caracas", country: "Venezuela", emoji: "🇻🇪" },
]

const debugCities = (cities, correctCityList) => {
  return (
    <div style={{ display: "flex", fontSize: "15px" }}>
      <div>
        <h6>Cities guessed</h6>
        <ol>
          {correctCityList.map(item => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
      <div>
        <h6>Cities to be guessed</h6>
        <ol>
          {cities
            ? cities.map(city => {
              return <li>{city.attributes.name}</li>;
            })
            : null}
        </ol>
      </div>
    </div>
  );
};

const orderCitiesByPopulation = cities => {
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
  return d * 1000;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function formatDistance(distance) {
  const threshold = 1000; // Threshold value in meters

  if (distance >= threshold) {
    const kilometers = (distance / 1000).toFixed(2);
    return kilometers + " kms";
  } else {
    return distance.toFixed(2) + " m";
  }
}

function getEmojiCountry(country) {
  const item = dataEmoji.find(item => item.country === country)
  return item.emoji;
}

const cityUtils = {
  orderCitiesByPopulation,
  calcCrow,
  formatDistance,
  debugCities,
  getEmojiCountry
};

export default cityUtils;
