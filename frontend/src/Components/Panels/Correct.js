import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CorrectPanel = props => {
  // prettier-ignore
  const { open, nextCity, distance } = props;

  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    width: 400,
    p: 4,
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => nextCity()}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          }
        }}>
        <Fade in={open} >
          <Box className="modal correct" sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h1">
              <b> You guessed right! 🥳 </b>
            </Typography>{" "}
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Distance: {distance} kms </b> <br></br>
            </Typography>
            <Button
              onClick={() => nextCity()}
              variant="contained"
              id="button-player-submit"
              style={{
                borderRadius: 25,
                backgroundColor: "white",
                padding: "18px 36px",
                fontSize: "18px",
                color: "#282c34",
              }}>
              Siguiente
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div >
  );
};

export default CorrectPanel;
