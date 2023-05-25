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

  console.log(citiesOrderedByPopulation);
  return citiesOrderedByPopulation;
};

const cityUtils = {
  debugCities,
  orderCitiesByPopulation,
};

export default cityUtils;
