import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import {
  formatDateToLocal,
  formateDateWithTime,
} from "../../../../services/date";
import { useNavigate } from "react-router-dom";
import { Paper, Divider, Typography, Button, IconButton } from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

function StepsRenderer({ step, selectedDate, email, userName }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const isTestEnabled = step.TestEnabled === 1;
  const ExamSubmitted = step.ExamSubmitted;

  return (
    <Paper
      sx={{
        padding: 1,
        marginBottom: 1,
        background: step.ExamType === "code" ? "#B0531E" : "#1EB0AE",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        "&:hover": { boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)" },
        borderRadius: 2,
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <Typography variant="subtitle1" fontWeight="bold" color="white">
          TestID: {step.TestID}
        </Typography>
        <Typography variant="caption" color="white">
          {formatDateToLocal(selectedDate)}
        </Typography>
      </div>
      <Typography variant="body1" sx={{ marginBottom: 1, color: "white" }}>
        {step.TestDescription}
      </Typography>
      <Divider sx={{ marginY: 1, backgroundColor: "white" }} />
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-sm">
          <p className="border-e-2 text-white pe-2">
            {!isSmScreen && "Start: "}
            {formateDateWithTime(
              new Date(`${step.TestStartDate} ${step.TestStartTime}`)
            )}
          </p>
          <p className="text-white">
            {!isSmScreen && "End: "}
            {formateDateWithTime(
              new Date(`${step.TestEndDate} ${step.TestEndTime}`)
            )}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {ExamSubmitted === "No" && (
            <Button
              disabled={!isTestEnabled}
              size="small"
              sx={{
                backgroundColor: "#006edc9A",
                fontSize: ".8rem",
                color: "white",
                borderRadius: 1,
                padding: "0.5rem 1rem",
              }}
              onClick={() =>
                (window.location.href =
                  step.ExamType === "code"
                    ? `${
                        process.env.REACT_APP_CODEIDE_URL
                      }problemset?email=${email}&username=${userName}&testId=${
                        step.TestID
                      }&source=dashboard&testcases=${Boolean(step.TestCaseID)}`
                    : `${process.env.REACT_APP_MCQRESULTS_URL}MCQExamPage?testID=${step.TestID}&transactionId=${step.TransactionId}&UserName=${userName}`)
              }
              variant="contained"
            >
              Start Test
            </Button>
          )}
          {ExamSubmitted === "Yes" && (
            <Button
              size="small"
              color="success"
              sx={{
                fontSize: ".8rem",
                color: "white",
                borderRadius: 1,
                padding: "0.5rem",
                backgroundColor: "#006edc9A",
              }}
              onClick={() => {
                if (step.ExamType === "code") {
                  navigate(`/program-results?programId=${step.ProgramId}`);
                } else {
                  window.open(
                    `${process.env.REACT_APP_STUDENTEXAMPAGE_URL}studentResultPage?testId=${step.TestID}&username=${userName}&transactionID=${step.TransactionId}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
              variant="contained"
              startIcon={<StickyNote2Icon fontSize="small" />}
            >
              View Results
            </Button>
          )}
        </div>
      </div>
    </Paper>
  );
}

export default StepsRenderer;
