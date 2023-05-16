import { useState } from "react";

const InputCity = (props) => {
  const { correctCity, addCorrectCity } = props;
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
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          autoComplete="true"
          value={citySelected}
          list="cities"
          onChange={handleChange}
          onKeyDown={(e) => onKeyPress(e)}
          required
        />
        <label for="name" class="form__label">
          Introduce la ciudad
        </label>
      </div>
      <h4 className="counter">{correctCity} ✅</h4>
    </div>
  );
};

export default InputCity;
