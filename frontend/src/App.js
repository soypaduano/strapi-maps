import "./App.css";
import GoogleMapView from "./Components/Map";
import InputCity from "./Components/InputCity";
import createMethods from "./Pages/Create";
import cityUtils from "./info-utils/utils";
import { useState, useEffect } from "react";
import GameOverPanel from "./Components/GameOver";
import Header from "./Components/Header";

function App() {
  const [correctCityCounter, setCorrectCityCounter] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const [cities, setCities] = useState(null);
  const [dev, setDev] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameOverPanel, setGameOverPanel] = useState(false);

  const formatCityName = (city) => {
    return city
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const addCorrectCity = (city) => {
    if (formatCityName(city) === formatCityName(currentCity.name)) {
      //Anadimos la ciudad recien acertada
      setCorrectCityCounter((oldCitiesGuessed) => [
        ...oldCitiesGuessed,
        currentCity.name,
      ]);

      //Quitamos la ciudad recien acertada del array de ciudades
      const newCities = cities.filter(
        (item) => item.attributes.name !== currentCity.name
      );
      setCities(newCities);

      //Anadimos una ciudad aleatoria, asignada por nivel
      setCurrentCity(getCityByLevel(newCities));
    } else {
      setGameOverPanel(true);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:1337/api/cities`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCities(cityUtils.orderCitiesByPopulation(result.data));
          if (result.data.length) {
            setCurrentCity(getCityByLevel(result.data));
          }
        },
        (error) => {
          alert("errror");
        }
      );
  }, []);

  const getCityByLevel = (newCities) => {
    let citiesWithLevel = newCities.filter(
      (item) => item.attributes.level === currentLevel
    );

    //while?
    if (citiesWithLevel.length === 0) {
      setCurrentLevel((oldLevel) => oldLevel + 1);
      citiesWithLevel = newCities.filter(
        (item) => item.attributes.level === currentLevel + 1
      );
    }

    return citiesWithLevel[Math.floor(Math.random() * citiesWithLevel.length)]
      .attributes;
  };

  return (
    <div className="App">
      <div className="nav-urls">
        <a href="https://google.com">Leaderboard</a>
        {dev ? (
          <button onClick={() => createMethods.createCapitals()}>
            Subir paises
          </button>
        ) : null}
        {dev ? <span>Current City: {currentCity.name} </span> : null}
        {dev ? <span>Current Level: {currentLevel} </span> : null}
      </div>

      <Header />

      <GoogleMapView
        latitude={currentCity.latitude}
        longitude={currentCity.longitude}
        correctCity={correctCityCounter.length}
      />
      <InputCity addCorrectCity={addCorrectCity} disabled={gameOverPanel} />

      <GameOverPanel
        open={gameOverPanel}
        handleClosePanelGameOver={() => window.location.reload()}
        correctCityCounter={correctCityCounter}
        currentCity={currentCity.name}
      ></GameOverPanel>

      <footer>
        <div>Developed by Padu 2023</div>
      </footer>
    </div>
  );
}

export default App;
