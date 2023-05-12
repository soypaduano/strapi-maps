import "./App.css";
import GoogleMapView from "./Components/Map";
import InputCity from "./Components/InputCity";
import { useState, useEffect } from "react";

function App() {
  const [correctCityCounter, setCorrectCityCounter] = useState(0);
  const [currentCity, setCurrentCity] = useState({});
  const [cities, setCities] = useState(null);

  const addCorrectCity = (city) => {
    //Is the same
    if (city === currentCity.name) {
      alert("correct!");
      setCorrectCityCounter((old) => {
        return old + 1;
      });
      setCurrentCity(
        cities[Math.floor(Math.random() * cities.length)].attributes
      );
    } else {
      alert("wrong");
      //Game over?
    }
  };

  useEffect(() => {
    fetch(`http://localhost:1337/api/cities`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCities(result.data);
          setCurrentCity(
            result.data[Math.floor(Math.random() * result.data.length)]
              .attributes
          );
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert("errror");
        }
      );
  }, []);

  console.log("Cities!");
  console.log(cities);
  console.log("current city");
  console.log(currentCity);

  return (
    <div className="App">
      <div className="nav-urls">
        <a href="https://google.com">Leaderboard</a>
        <a href="https://google.com">Subir paises</a>
        <span>Current city: {currentCity.name}</span>
      </div>

      <header className="App-header">
        <h3>Adivina la ciudad! 🌆 </h3>
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
