import { addDays } from "date-fns";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateRenderer = ({ date }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div>
      <motion.p animate={{}}>{daysOfWeek[new Date(date).getDay()]}</motion.p>
    </div>
  );
};

const CalendarRenderer = () => {
  console.log("in");
  const startDate = new Date();
  const max = 6;
  const dates = [];

  for (let i = 0; i < max; i++) {
    dates.push(addDays(startDate, i));
  }

  return (
    <div>
      {dates.map((date) => (
        <DateRenderer key={date} date={date} />
      ))}
    </div>
  );
};

const CustomCalendar = ({ selectedDate, setSelectedDate }) => {
  return <CalendarRenderer />;
};

export default CustomCalendar;
