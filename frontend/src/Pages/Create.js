const url = "http://localhost:1337/api/cities"; // Replace with your endpoint URL

const data = [
  {
    name: "Amsterdam",
    country: "Netherlands",
    points: 100,
    latitude: 52.3702,
    longitude: 4.8952,
  },
  {
    name: "Andorra la Vella",
    country: "Andorra",
    points: 100,
    latitude: 42.5063,
    longitude: 1.5218,
  },
  {
    name: "Athens",
    country: "Greece",
    points: 100,
    latitude: 37.9838,
    longitude: 23.7275,
  },
  {
    name: "Belgrade",
    country: "Serbia",
    points: 100,
    latitude: 44.7866,
    longitude: 20.4489,
  },
  {
    name: "Berlin",
    country: "Germany",
    points: 100,
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    name: "Bern",
    country: "Switzerland",
    points: 100,
    latitude: 46.948,
    longitude: 7.4474,
  },
  {
    name: "Bratislava",
    country: "Slovakia",
    points: 100,
    latitude: 48.1486,
    longitude: 17.1077,
  },
  {
    name: "Brussels",
    country: "Belgium",
    points: 100,
    latitude: 50.8503,
    longitude: 4.3517,
  },
  {
    name: "Bucharest",
    country: "Romania",
    points: 100,
    latitude: 44.4396,
    longitude: 26.0963,
  },
  {
    name: "Budapest",
    country: "Hungary",
    points: 100,
    latitude: 47.4979,
    longitude: 19.0402,
  },
  {
    name: "Chisinau",
    country: "Moldova",
    points: 100,
    latitude: 47.0105,
    longitude: 28.8638,
  },
  {
    name: "Copenhagen",
    country: "Denmark",
    points: 100,
    latitude: 55.6761,
    longitude: 12.5683,
  },
  {
    name: "Dublin",
    country: "Ireland",
    points: 100,
    latitude: 53.3498,
    longitude: -6.2603,
  },
  {
    points: 1,
    name: "Helsinki",
    country: "Finland",
    latitude: 60.1699,
    longitude: 24.9384,
  },
  {
    points: 2,
    name: "Kyiv",
    country: "Ukraine",
    latitude: 50.4501,
    longitude: 30.5234,
  },
  {
    points: 3,
    name: "Lisbon",
    country: "Portugal",
    latitude: 38.7223,
    longitude: -9.1393,
  },
  {
    points: 4,
    name: "Ljubljana",
    country: "Slovenia",
    latitude: 46.0569,
    longitude: 14.5058,
  },
  {
    points: 5,
    name: "London",
    country: "United Kingdom",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    points: 6,
    name: "Luxembourg City",
    country: "Luxembourg",
    latitude: 49.6116,
    longitude: 6.1319,
  },
  {
    points: 7,
    name: "Madrid",
    country: "Spain",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  {
    points: 8,
    name: "Minsk",
    country: "Belarus",
    latitude: 53.9045,
    longitude: 27.5615,
  },
  {
    points: 9,
    name: "Monaco",
    country: "Monaco",
    latitude: 43.7384,
    longitude: 7.4246,
  },
  {
    points: 10,
    name: "Moscow",
    country: "Russia",
    latitude: 55.7512,
    longitude: 37.6184,
  },
  {
    points: 11,
    name: "Nicosia",
    country: "Cyprus",
    latitude: 35.1856,
    longitude: 33.3823,
  },
  {
    points: 12,
    name: "Oslo",
    country: "Norway",
    latitude: 59.9139,
    longitude: 10.7522,
  },
  {
    points: 13,
    name: "Paris",
    country: "France",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    points: 1,
    name: "Podgorica",
    country: "Montenegro",
    latitude: 42.4304,
    longitude: 19.2594,
  },
  {
    points: 2,
    name: "Prague",
    country: "Czech Republic",
    latitude: 50.0755,
    longitude: 14.4378,
  },
  {
    points: 3,
    name: "Reykjavik",
    country: "Iceland",
    latitude: 64.1466,
    longitude: -21.9426,
  },
  {
    points: 4,
    name: "Riga",
    country: "Latvia",
    latitude: 56.9496,
    longitude: 24.1052,
  },
  {
    points: 5,
    name: "Rome",
    country: "Italy",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    points: 6,
    name: "San Marino",
    country: "San Marino",
    latitude: 43.9424,
    longitude: 12.4578,
  },
  {
    points: 7,
    name: "Sarajevo",
    country: "Bosnia and Herzegovina",
    latitude: 43.8563,
    longitude: 18.4131,
  },
  {
    points: 8,
    name: "Skopje",
    country: "North Macedonia",
    latitude: 41.9981,
    longitude: 21.4254,
  },
  {
    points: 9,
    name: "Sofia",
    country: "Bulgaria",
    latitude: 42.6977,
    longitude: 23.3219,
  },
  {
    points: 10,
    name: "Stockholm",
    country: "Sweden",
    latitude: 59.3293,
    longitude: 18.0686,
  },
  {
    points: 11,
    name: "Tallinn",
    country: "Estonia",
    latitude: 59.437,
    longitude: 24.7536,
  },
  {
    points: 12,
    name: "Tirana",
    country: "Albania",
    latitude: 41.3275,
    longitude: 19.8187,
  },
  {
    points: 13,
    name: "Vaduz",
    country: "Liechtenstein",
    latitude: 47.141,
    longitude: 9.5215,
  },
  {
    points: 14,
    name: "Valletta",
    country: "Malta",
    latitude: 35.8989,
    longitude: 14.5146,
  },
  {
    points: 2,
    name: "Vienna",
    country: "Austria",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    points: 3,
    name: "Vilnius",
    country: "Lithuania",
    latitude: 54.6872,
    longitude: 25.2797,
  },
  {
    points: 4,
    name: "Warsaw",
    country: "Poland",
    latitude: 52.2297,
    longitude: 21.0122,
  },
  {
    points: 5,
    name: "Zagreb",
    country: "Croatia",
    latitude: 45.815,
    longitude: 15.9819,
  },
];

const createCapitals = () => console.clear();
data.map((city) => {
  city.latitude = "" + city.latitude;
  city.longitude = "" + city.longitude;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: city }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log("POST request successful:", result);
    })
    .catch((error) => {
      console.error("Error making POST request:", error);
    });
  return true;
});

export default createCapitals;
