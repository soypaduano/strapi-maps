const cities = [];

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
