import { useEffect, useState } from "react";
import Calender from "./dashboard/Calender";
import Steps from "./Test/Steps";
import { connect } from "react-redux";
import { getMcqandProgramsDispatch } from "../../redux/actions/dashboard";
import usePageVisibility from "../../hooks/dashboard/usePageVisibility";
import { useMediaQuery, useTheme } from "@mui/material";
import Graph from "./Test/Graph";
import Profile from "../../ui/home/mainnav/sidenav/Profile";

function DashboardComponent({ userState, userName, getMcqandPrograms }) {
  const theme = useTheme();

  const [selectedDate, setSelectedDate] = useState(new Date());

  // const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  // const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  // const isXlScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const dispatchGetMcqandPrograms = () => {
    if (userState.userId && selectedDate)
      getMcqandPrograms({
        studentId: userState.userId,
        date: selectedDate,
      });
  };

  const onVisible = () => {
    dispatchGetMcqandPrograms();
  };

  usePageVisibility({ onVisible });

  useEffect(() => {
    dispatchGetMcqandPrograms();
  }, [selectedDate, getMcqandPrograms]);

  return (
    <div style={{ marginInlineStart: "280px" }}>
      <div className="pt-4 ps-4 flex flex-wrap gap-x-4 gap-y-4">
        <div className="w-full xl:w-[70%] 2xl:w-[65%] flex flex-col gap-y-4">
          <div className="shadow block shadow-blue-200 text-[#0f0f0f] 2xl:hidden">
            <Profile />
          </div>

          <div className="shadow shadow-blue-200 rounded w-full">
            <Graph />
          </div>

          <div className="shadow shadow-blue-200 rounded w-full">
            <Steps />
          </div>
        </div>

        <div className="relative shadow shadow-blue-100 rounded w-full xl:w-[30%] 2xl:w-[30%]">
          <div className="absolute min-w-full bg-gradient-to-b from-blue-800 via-blue-800 to-white opacity-[.05] top-0 left-0 -z-10">
            <div className="min-w-full bg-gradient-to-b from-white via-white to-white opacity-20">
              <div className="min-w-full bg-gradient-to-t from-blue-800 via-white to-blue-800 opacity-70"></div>
            </div>
          </div>

          <div className="shadow shadow-blue-200 rounded w-full">
            <div className="p-4 py-[1.36rem]">
              <Calender
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  userState: state.user,
  userName: state.user.userName,
  macqandprogramState: state.mcqsandprograms.state,
});

const mapDispatch = {
  getMcqandPrograms: getMcqandProgramsDispatch,
};

const Test = connect(mapState, mapDispatch)(DashboardComponent);

export default Test;
