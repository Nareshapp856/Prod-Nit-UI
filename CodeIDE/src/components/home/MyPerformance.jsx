import { connect } from "react-redux";
import { getMcqandProgramsDispatch } from "../../redux/actions/dashboard";
import { useMediaQuery, useTheme } from "@mui/material";
import ColumnLineChart from "./myPerformance/ColumnLineChart";

function MyPerformanceComponent({ userState, userName, getMcqandPrograms }) {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{ padding: isSmScreen ? "0" : "1rem" }}
      className="py-[1.36rem]"
    >
      {isSmScreen && (
        <div className="mb-4 p-4 pb-0">
          <p className="text-xl font-bold mb-2"></p> <hr />
        </div>
      )}
      <div className="px-2">
        <ColumnLineChart />
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

const MyPerformance = connect(mapState, mapDispatch)(MyPerformanceComponent);

export default MyPerformance;
