import React, { useState } from "react";

const InputCity = (props) => {
  const { addCorrectCity, disabled } = props;
  const [citySelected, setCitySelected] = useState("");

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
          list="cities"
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
