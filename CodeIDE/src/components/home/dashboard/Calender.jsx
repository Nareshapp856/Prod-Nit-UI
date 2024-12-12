import { addDays } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <Calendar
      onChange={setSelectedDate}
      value={selectedDate}
      defaultValue={addDays(new Date(), 1)}
      className="custom-calendar"
    />
  );
};

export default CustomCalendar;
