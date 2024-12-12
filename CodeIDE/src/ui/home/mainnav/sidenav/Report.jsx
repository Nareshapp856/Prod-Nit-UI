import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import { types } from "../../../../redux/actions/types";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

function ReportComponent({ user, programResults, report }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (!reason) {
      setError(true);
    } else {
      report({ reason, description, user, programResults });
      setOpen(false);
    }
  };

  return (
    <>
      <Box
        position="absolute"
        width="100%"
        bottom={8}
        left={0}
        display="flex"
        justifyContent="center"
      >
        <button
          className="w-[90%] text-[#0f0f0f] py-[.30rem] pt-[.40rem] bg-red-800 bg-opacity-30 rounded hover:bg-opacity-30"
          onClick={handleOpen}
        >
          Report
        </button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="report-modal-title"
        aria-describedby="report-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="report-modal-title" variant="h6" component="h2">
            Report Issue
          </Typography>
          <TextField
            label="Reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
              if (e.target.value) setError(false);
            }}
            required
            error={error}
            helperText={error ? "Reason is required" : ""}
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
          />
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

const mapState = (state) => ({
  user: state.user,
  programResults: state.programResults,
});

const mapDispatch = {
  report: (payload) => ({
    type: types.REPORT,
    payload,
  }),
};

const Report = connect(mapState, mapDispatch)(ReportComponent);

export default Report;
