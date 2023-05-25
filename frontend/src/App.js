import "./App.css";
import GoogleMapView from "./Components/Map";
import InputCity from "./Components/InputCity";
import createCapitals from "./Pages/Create";
import { useState, useEffect } from "react";
import GameOverPanel from "./Components/GameOver";

function App() {
  const [correctCityCounter, setCorrectCityCounter] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const [cities, setCities] = useState(null);
  const [dev, setDev] = useState(true);
  const [gameOverPanel, setGameOverPanel] = useState(false);

  const addCorrectCity = (city) => {
    //Is the same
    if (city.toLowerCase() === currentCity.name.toLowerCase()) {
      const newCities = cities.filter(
        (item) => item.attributes.name !== currentCity.name
      );
      setCities(newCities); //Quitamos la ciudad que acaba de salir
      setCorrectCityCounter((oldCitiesGuessed) => [
        ...oldCitiesGuessed,
        currentCity.name,
      ]); //Anadimos la ciudad recien acertada
      setCurrentCity(
        cities[Math.floor(Math.random() * cities.length)].attributes
      ); //Asignamos una nueva ciudad
    } else {
      setGameOverPanel(true);
    }
  };

  const handleCreateCities = () => {
    createCapitals();
  };

  const renderCitiesGuessed = () => {
    return (
      <div>
        <ul>
          {correctCityCounter.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  };

  const handlePanelClose = () => {
    setGameOverPanel(false);
    window.location.reload();
  };

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

  return (
    <div className="App">
      <div className="nav-urls">
        <a href="https://google.com">Leaderboard</a>
        {dev ? (
          <button onClick={() => handleCreateCities()}>Subir paises</button>
        ) : null}
        {dev ? <span>Current City: {currentCity.name} </span> : null}
      </div>

      <header className="App-header">
        <div>
          <h3>Which city is this? 🌆 </h3>
          <h6>Guess the city from a bird's eye</h6>
        </div>
      </header>
      <GoogleMapView
        latitude={currentCity.latitude}
        longitude={currentCity.longitude}
      />
      <>
        <InputCity
          correctCity={correctCityCounter.length}
          addCorrectCity={addCorrectCity}
          disabled={gameOverPanel}
        />
      </>

      <GameOverPanel
        open={gameOverPanel}
        handleClose={handlePanelClose}
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
