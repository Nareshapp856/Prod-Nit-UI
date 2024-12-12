import { Typography, Box, Divider } from "@mui/material";
import { connect } from "react-redux";
import { getProgramResults } from "../../redux/actions/result";
import { useEffect } from "react";
import { useLocation } from "react-router";
import ResultsView from "./programResults/ResultsView";
import ResultGrid from "./programResults/RestultGrid";

function ProgramResultsComponent({
  userName,
  programResultsData,
  getProgramResultsDispatch,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const programId = queryParams.get("programId");

  useEffect(() => {
    if (userName && programId)
      getProgramResultsDispatch({ userName: userName, programId: programId });
  }, [userName, programId, getProgramResultsDispatch]);

  return (
    <Box p={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {programResultsData?.mainTable?.ProgramName}
      </Typography>

      <Typography variant="body1" gutterBottom>
        {programResultsData?.mainTable?.ProgramDescription}
      </Typography>

      <Box display="flex" paddingInlineEnd={1} mb={4}>
        <Typography variant="body1" marginInlineEnd={2}>
          <strong>Test Date:</strong>{" "}
          {new Date(programResultsData?.mainTable?.SubmittedAt).toDateString()}
        </Typography>
      </Box>

      <Divider />

      <div>
        <ResultsView />
      </div>

      <div>
        <ResultGrid />
      </div>
    </Box>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
  programResultsData: state.programResults.data,
});

const mapDispatch = {
  getProgramResultsDispatch: getProgramResults,
};

const ProgramResults = connect(mapState, mapDispatch)(ProgramResultsComponent);

export default ProgramResults;
