import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GameOverPanel = (props) => {
  const { open, handleClose, correctCityCounter, currentCity } = props;
  const [playerName, setPlayerName] = React.useState("");

  const CssTextField = styled(TextField)({
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    p: 4,
  };

  const handleChange = (event) => {
    let { value } = event.target;
    setPlayerName(value);
  };

  const uploadPlayerName = () => {
    alert(playerName);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        disableAutoFocus={true}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="modal-game-over" sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h1">
              <b> Wrong! 😨 </b>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div style={{ display: "inline-grid" }}>
                <div>
                  The correct city was <b> {currentCity} </b>
                </div>
                <div>
                  You guessed right <b> {correctCityCounter.length} cities </b>
                </div>
                {correctCityCounter.length > -1 ? (
                  <div
                    style={{
                      marginTop: "30px",
                      display: "inline-grid",
                      justifyContent: "center",
                    }}
                  >
                    <CssTextField
                      label="Enter your name"
                      id="custom-css-outlined-input"
                      sx={{ input: { color: "white" } }}
                      inputProps={{
                        style: { fontSize: 20, fontWeight: "bold" },
                      }}
                    />
                    <Button variant="contained" id="button-player-submit">
                      Submit
                    </Button>
                  </div>
                ) : null}
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default GameOverPanel;
