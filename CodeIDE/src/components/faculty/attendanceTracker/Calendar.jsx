import { Modal, Box } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const CustomCalendar = ({ selectedDate, setSelectedDate }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Choose Date
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box
          className="p-4 bg-white rounded shadow-md"
          style={{ maxWidth: "300px", margin: "auto", marginTop: "10%" }}
        >
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="custom-calendar"
          />
        </Box>
      </Modal>
    </>
  );
};

export default CustomCalendar;
