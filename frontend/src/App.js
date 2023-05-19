import "./App.css";
import GoogleMapView from "./Components/Map";
import InputCity from "./Components/InputCity";
import createCapitals from "./Pages/Create";
import { useState, useEffect } from "react";

function App() {
  const [correctCityCounter, setCorrectCityCounter] = useState(0);
  const [currentCity, setCurrentCity] = useState({});
  const [cities, setCities] = useState(null);

  const addCorrectCity = (city) => {
    //Is the same
    if (city === currentCity.name) {
      setCorrectCityCounter((old) => old + 1);
      setCurrentCity(
        cities[Math.floor(Math.random() * cities.length)].attributes
      );
    } else {
      //Game over?
    }
  };

  const handleSetCity = () => {};

  useEffect(() => {
    fetch(`http://localhost:1337/api/cities`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCities(result.data);
          if (result.data.length) {
            setCurrentCity(
              result.data[Math.floor(Math.random() * result.data.length)]
                .attributes
            );
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert("errror");
        }
      );
  }, []);

  const handleCreateCities = () => {
    createCapitals();
  };

  const handleDeleteCities = () => {};

  console.log("Cities!");
  console.log(cities);
  console.log("current city");
  console.log(currentCity);

  return (
    <div className="App">
      <div className="nav-urls">
        <a href="https://google.com">Leaderboard</a>
        <button onClick={() => handleCreateCities()}>Subir paises</button>
        <span>Current City: {currentCity.name} </span>
      </div>

      <header className="App-header">
        <div>
          <h3>Guess the city 🌆 </h3>
        </div>
      </header>
      <GoogleMapView
        latitude={currentCity.latitude}
        longitude={currentCity.longitude}
      />
      <>
        <InputCity
          correctCity={correctCityCounter}
          addCorrectCity={addCorrectCity}
        />
      </>
    </div>
  );
}

export default App;
