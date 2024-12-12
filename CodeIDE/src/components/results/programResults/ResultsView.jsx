import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import { getProgramResults } from "../../../redux/actions/result";

const StyledTableBCell = styled(TableCell)(({ theme }) => ({
  paddingBlock: "1rem",
}));

const StyledCaption = styled("caption")(({ theme }) => ({
  fontSize: "1.08rem",
  fontWeight: "700",
  padding: "1rem",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
}));

function ResultsViewComponent({ programResultsData }) {
  return (
    programResultsData && (
      <TableContainer component={Paper} sx={{ mt: 2, width: "600px" }}>
        <div className="w-full bg-blue-800 bg-opacity-10">
          <StyledCaption>Results</StyledCaption>
        </div>
        <Table aria-label="program results table">
          <TableBody>
            <TableRow>
              <StyledTableBCell>Number of Test Cases Passed</StyledTableBCell>
              <StyledTableBCell align="right">
                {programResultsData.mainTable?.No_TestCasesPassed}
              </StyledTableBCell>
            </TableRow>
            <TableRow>
              <StyledTableBCell>Number of Test Cases Failed</StyledTableBCell>
              <StyledTableBCell align="right">
                {programResultsData.mainTable?.No_TestCasesFailed}
              </StyledTableBCell>
            </TableRow>
            <TableRow>
              <StyledTableBCell>Result</StyledTableBCell>
              <StyledTableBCell
                sx={{
                  color:
                    String(
                      programResultsData.mainTable?.Result
                    ).toLowerCase() === "fail"
                      ? "red"
                      : "green",
                }}
                align="right"
              >
                {programResultsData.mainTable?.Result}
              </StyledTableBCell>
            </TableRow>
            <TableRow>
              <StyledTableBCell>Grade</StyledTableBCell>
              <StyledTableBCell align="right">
                <span className="font-bold">
                  {programResultsData.mainTable?.Grade}
                </span>
              </StyledTableBCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
  programResultsData: state.programResults.data,
});

const mapDispatch = {
  getProgramResultsDispatch: getProgramResults,
};

const ResultsView = connect(mapState, mapDispatch)(ResultsViewComponent);

export default ResultsView;
