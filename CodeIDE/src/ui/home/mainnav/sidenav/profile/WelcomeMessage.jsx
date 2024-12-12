import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Snackbar, Alert } from "@mui/material";

function WelcomeSnackbar({ firstName, lastName }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (firstName && lastName) {
      setOpen(true);
    }
  }, [firstName, lastName]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
        Welcome, {firstName} {lastName}!
      </Alert>
    </Snackbar>
  );
}

const mapState = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

export default connect(mapState)(WelcomeSnackbar);
