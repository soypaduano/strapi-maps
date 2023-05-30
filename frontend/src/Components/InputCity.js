import React, { useState } from "react";
import { motion } from "framer-motion";

const InputCity = (props) => {
  const { correctCity, addCorrectCity, disabled } = props;
  const [citySelected, setCitySelected] = useState("");

  const variants = {
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
    hide: {
      y: -20,
      scale: 1.5,
      opacity: 0,
    },
  };

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
      <div className="counter-div">
        <motion.h4
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="counter"
          key={correctCity}
          variants={variants}
          animate={"show"}
          initial={"hide"}
        >
          Correct cities: {correctCity}
        </motion.h4>
      </div>
    </div>
  );
};

export default InputCity;
