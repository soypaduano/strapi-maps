import "./App.css";
import GoogleMapView from "./Components/Maps/Map";
import cityUtils from "./info-utils/utils";
import { useState, useEffect } from "react";
import GameOverPanel from "./Components/Panels/GameOver";
import CorrectPanel from "./Components/Panels/Correct";
import Header from "./Components/Header/Header";
import GoogleMapViewPin from "./Components/Maps/PinMap";

function App() {
  const [correctCityList, setCorrectCityList] = useState([]);
  const [cities, setCities] = useState(null);

  const [currentCity, setCurrentCity] = useState({});
  const [currentDistanceBetweenPoints, setCurrentDistanceBetweenPoints] =
    useState(0);

  const [dev, setDev] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameOverPanel, setGameOverPanel] = useState(false);
  const [correctPanel, setCorrectPanel] = useState(false);

  const addCorrectCity = coordinatesGuessCity => {
    const coordinatesCurrentCity = {
      lat: currentCity.latitude,
      lng: currentCity.longitude,
    };

    const distance = cityUtils.calcCrow(
      coordinatesGuessCity,
      coordinatesCurrentCity
    );
    setCurrentDistanceBetweenPoints(old => distance);

    if (currentDistanceBetweenPoints < 1000) {
      //Anadimos la ciudad recien acertada
      setCorrectCityList(oldCitiesGuessed => [
        ...oldCitiesGuessed,
        currentCity.name,
      ]);

      //Quitamos la ciudad recien acertada del array de ciudades
      const newCities = cities.filter(
        item => item.attributes.name !== currentCity.name
      );

      //Anadimos las nuevas ciudades
      setCities(newCities);

      //Mostramos panel de correcto
      setCorrectPanel(true);
    } else {
      setGameOverPanel(true);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:1337/api/cities`)
      .then(res => res.json())
      .then(
        result => {
          setCities(cityUtils.orderCitiesByPopulation(result.data));
          if (result.data.length) {
            setCurrentCity(getCityByLevel(result.data));
          }
        },
        error => {
          alert("errror");
        }
      );
  }, []);

  const getCityByLevel = newCities => {
    let citiesWithLevel = newCities.filter(
      item => item.attributes.level === currentLevel
    );

    //while?
    if (citiesWithLevel.length === 0) {
      setCurrentLevel(oldLevel => oldLevel + 1);
      citiesWithLevel = newCities.filter(
        item => item.attributes.level === currentLevel + 1
      );
    }

    return citiesWithLevel[Math.floor(Math.random() * citiesWithLevel.length)]
      .attributes;
  };

  const nextCityCorrect = () => {
    //Anadimos una ciudad aleatoria, asignada por nivel
    setCurrentCity(getCityByLevel(cities));
  };

  return (
    <div className="App">
      <Header correctCity={correctCityList.length} />

      <div className="map-container">
        <GoogleMapView
          latitude={currentCity.latitude}
          longitude={currentCity.longitude}
        />
        <GoogleMapViewPin
          addCorrectCity={addCorrectCity}
          zoom={Math.random(0, 1) * 1}
          center={{ lat: 0, lng: 0 }}
        />
      </div>

      <GameOverPanel
        open={gameOverPanel}
        handleClosePanelGameOver={() => window.location.reload()}
        correctCityList={correctCityList}
        currentCity={currentCity.name}></GameOverPanel>

      <CorrectPanel
        open={correctPanel}
        setOpen={setCorrectPanel}
        distance={currentDistanceBetweenPoints}
      />
    </div>
  );
}

export default App;
