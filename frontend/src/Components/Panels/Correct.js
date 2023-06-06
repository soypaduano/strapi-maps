import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GoogleMapDistancePoints from "../Maps/DistanceMap";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CorrectPanel = props => {
  // prettier-ignore
  const {open, setOpen, distance, p1, p2} = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    p: 4,
  };

  const onKeyPress = e => {
    if (e.keyCode === 13) {
      alert("next");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box className="modal correct" sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h1">
              <b> You guessed right! 🥳 </b>
            </Typography>{" "}
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Distance: {distance} kms </b> <br></br>
            </Typography>
            <GoogleMapDistancePoints p1={p1} p2={p2} />
            <Button
              onClick={() => setOpen(false)}
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
    </div>
  );
};

export default CorrectPanel;
