import React, { useState } from "react";

const InputCity = (props) => {
  const { addCorrectCity, disabled } = props;
  const [citySelected, setCitySelected] = useState("");

  const cities = [
    { label: "Amsterdam" },
    { label: "Andorra la Vella" },
    { label: "Athens" },
    { label: "Belgrade" },
    { label: "Berlin" },
    { label: "Bern" },
    { label: "Bratislava" },
    { label: "Brussels" },
    { label: "Bucharest" },
    { label: "Budapest" },
    { label: "Chisinau" },
    { label: "Copenhagen" },
    { label: "Dublin" },
    { label: "Helsinki" },
    { label: "Kyiv" },
    { label: "Lisbon" },
    { label: "Ljubljana" },
    { label: "London" },
    { label: "Luxembourg City" },
    { label: "Madrid" },
    { label: "Minsk" },
    { label: "Monaco" },
    { label: "Moscow" },
    { label: "Nicosia" },
    { label: "Oslo" },
    { label: "Paris" },
    { label: "Podgorica" },
    { label: "Prague" },
    { label: "Reykjavik" },
    { label: "Riga" },
    { label: "Rome" },
    { label: "San Marino" },
    { label: "Sarajevo" },
    { label: "Skopje" },
    { label: "Sofia" },
    { label: "Stockholm" },
    { label: "Tallinn" },
    { label: "Tirana" },
    { label: "Vaduz" },
    { label: "Valletta" },
    { label: "Vienna" },
    { label: "Vilnius" },
    { label: "Warsaw" },
    { label: "Zagreb" },
    { label: "Buenos Aires" },
    { label: "La Paz" },
    { label: "Brasilia" },
    { label: "Santiago" },
    { label: "Bogota" },
    { label: "Quito" },
    { label: "Asuncion" },
    { label: "Lima" },
    { label: "Montevideo" },
    { label: "Caracas" },
  ];

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      addCorrectCity(citySelected);
      setCitySelected("");
    }
  };

  const handleChange = (event) => {
    let { value } = event.target;
    setCitySelected(value);
  };

  return (
    <div className="input-user">
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          disabled={disabled}
          autoComplete={0}
          value={citySelected}
          list="languages"
          onChange={handleChange}
          onKeyDown={(e) => onKeyPress(e)}
          required
        />

        <label htmlFor="name" className="form__label" autoComplete={0}>
          Type in the city
        </label>
      </div>
    </div>
  );
};

export default InputCity;
