import "./App.css";
import GoogleMapView from "./Components/Map";
import InputCity from "./Components/InputCity";
import createCapitals from "./Pages/Create";
import { useState, useEffect } from "react";

function App() {
  const [correctCityCounter, setCorrectCityCounter] = useState(0);
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
      setCorrectCityCounter((old) => old + 1); // Ponemos el contador
      setCurrentCity(
        cities[Math.floor(Math.random() * cities.length)].attributes
      ); //Asignamos una nueva ciudad
    } else {
      setGameOverPanel(true);
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

  const renderAllCities = () => {
    console.log("rendering all cities again");
    return (
      <div>
        <ol>
          {cities
            ? cities.map((city) => {
                return <li>{city.attributes.name}</li>;
              })
            : null}
        </ol>
      </div>
    );
  };

  console.log(cities);

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
