import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableSortLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  paddingBlock: ".4rem",
  paddingBlockStart: ".6rem",
}));

const StyledTableBCell = styled(TableCell)(({ theme }) => ({
  paddingBlock: "1rem",
}));

function ResultGridComponent({ programResultsData }) {
  return (
    programResultsData && (
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="bg-blue-800 bg-opacity-[.10]">
              <StyledTableCell align="left">
                <TableSortLabel>Test Case Name</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>Input</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>Expected Output</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>Acutal Output</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>Test Result</TableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {programResultsData?.testCasesTable?.map((testCase) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableBCell component="th" scope="row">
                  {testCase?.TestCaseName}
                </StyledTableBCell>
                <StyledTableBCell>{testCase?.SampleInput}</StyledTableBCell>
                <StyledTableBCell>{testCase?.SampleOutput}</StyledTableBCell>
                <StyledTableBCell>{testCase?.Output}</StyledTableBCell>
                <StyledTableBCell>
                  <Typography
                    sx={{
                      color:
                        String(testCase?.TestCaseResult).toLowerCase() ===
                        "pass"
                          ? "green"
                          : "red",
                    }}
                    variant="body2"
                  >
                    {testCase?.TestCaseResult}
                  </Typography>
                </StyledTableBCell>
              </TableRow>
            ))}
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

const mapDispatch = {};

const ResultGrid = connect(mapState, mapDispatch)(ResultGridComponent);

export default ResultGrid;
