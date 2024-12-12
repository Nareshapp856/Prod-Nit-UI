import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import clsx from "clsx";

function StepsRenderer({ step, selectedDate, email, userName }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const isTestEnabled = step.TestEnabled === 1;
  const ExamSubmitted = step.ExamSubmitted;

  const handleStartTest = () => {
    // Navigate to the test start page or handle the test start logic here
    navigate(`/start-test/${step.TestID}`);
  };

  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row shadow-lg shadow-blue-100 my-2 bg-white w-full font-[500] space-y-2 sm:space-y-0 sm:space-x-4 py-3 px-2 items-center",
        {
          "border-l-[4px] border-green-500": step.ExamType === "MCQ",
          "border-l-[4px] border-red-500": step.ExamType !== "MCQ",
        }
      )}
    >
      <div className="flex items-center w-full sm:w-[8%]">
        <p className="ms-2">{step.TestID}</p>
      </div>
      <p className="w-full sm:w-[26%] truncate">{step.TestDescription}</p>
      <p className="w-full sm:w-[26%]">
        {step.TestStartTime} - {step.TestEndTime}
      </p>
      <p
        className={clsx("w-full sm:w-[12%] py-1 mx-2 rounded-2xl text-center", {
          "bg-green-500 bg-opacity-20": step.ExamType === "MCQ",
          "bg-red-500 bg-opacity-20": step.ExamType !== "MCQ",
        })}
      >
        {step.ExamType}
      </p>
      <button
        onClick={handleStartTest}
        className="sm:w-auto w-[8rem] bg-blue-800 bg-opacity-65 text-white py-2 px-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Start Test <StickyNote2Icon className="ml-2" />
      </button>
    </div>
  );
}

export default StepsRenderer;
