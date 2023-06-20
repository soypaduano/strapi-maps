import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Header = (props) => {
  const { correctCity } = props;

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
      }
    },
    hide: {
      y: -20,
      scale: 1.5,
      opacity: 0,
    },
  };

  return (
    <header className="App-header">

      <div className="leaderboard-div">
        <h6>Leaderboard</h6>
      </div>

      <div className="title-div">
        <h3> Pin 📍 the city on the map right below 🌆</h3>
      </div>

      <div className="counter-div">
        <motion.h5
          whileHover={{ scale: 1.1 }}
          className="counter"
          key={correctCity}
          variants={variants}
          animate={"show"}
          initial={"hide"}
        >
          Correct cities: {correctCity}
        </motion.h5>

      </div>
    </header>
  );
};

export default Header;
