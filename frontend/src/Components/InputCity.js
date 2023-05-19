import React, { useState } from "react";
import { motion } from "framer-motion";

const InputCity = (props) => {
  const { correctCity, addCorrectCity } = props;
  const [citySelected, setCitySelected] = useState("");

  const variants = {
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
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
      scale: 3,
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
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          autoComplete={false}
          value={citySelected}
          list="cities"
          onChange={handleChange}
          onKeyDown={(e) => onKeyPress(e)}
          required
        />
        <label for="name" class="form__label" autoComplete={false}>
          Type in the city
        </label>
      </div>
      <div className="counter-div">
        <motion.h4
          className="counter"
          key={correctCity}
          variants={variants}
          animate={"show"}
          initial="hide"
        >
          {correctCity}
        </motion.h4>
      </div>
    </div>
  );
};

export default InputCity;
