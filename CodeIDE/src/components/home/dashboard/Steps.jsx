import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import StepsRenderer from "./steps/StepsRenderer";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

function VerticalLinearStepperComponent({
  userName,
  email,
  selectedDate,
  mcqAndProgramData,
  mcqAndProgramIsError,
  mcqAndProgramIsLoading,
}) {
  const theme = useTheme();

  const [mcqList, setMcqList] = useState([]);
  const [codeList, setCodeList] = useState([]);

  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (Array.isArray(mcqAndProgramData)) {
      const codeArr = [];
      const mcqArr = [];

      mcqAndProgramData.forEach((x) => {
        if (x.ExamType === "code") {
          codeArr.push(x);
        } else {
          mcqArr.push(x);
        }
      });

      setMcqList(mcqArr);
      setCodeList(codeArr);
    } else {
      setMcqList([]);
      setCodeList([]);
    }
  }, [mcqAndProgramData]);

  if (mcqAndProgramIsLoading)
    return (
      <div className="min-h-40 grid place-content-center">
        <Typography variant="h6" color="textSecondary">
          Loading...
        </Typography>
      </div>
    );
  if (mcqAndProgramIsError)
    return (
      <div className="min-h-40 grid place-content-center">
        <Typography variant="h6" color="textSecondary">
          Loading...
        </Typography>
      </div>
    );

  return (
    <Box
      sx={{
        width: "100%",
        padding: 4,
        paddingTop: isSmScreen ? 0 : 4,
        paddingInline: isSmScreen ? 0 : 4,
        maxHeight: "94vh",
        overflow: "auto",
      }}
    >
      {(mcqList.length > 0 || codeList.length > 0) && (
        <div>
          {mcqList.length > 0 && (
            <div>
              <Typography variant="h5" sx={{ fontWeight: "semibold", mb: 2 }}>
                MCQ Tests
              </Typography>
              {mcqList.map((step, index) => (
                <StepsRenderer
                  key={index}
                  step={step}
                  selectedDate={selectedDate}
                  email={email}
                  userName={userName}
                />
              ))}
            </div>
          )}

          {codeList.length > 0 && (
            <div>
              <Typography variant="h5" sx={{ fontWeight: "semibold", mb: 2 }}>
                Coding Tests
              </Typography>
              {codeList.map((step, index) => (
                <StepsRenderer
                  key={index}
                  step={step}
                  selectedDate={selectedDate}
                  email={email}
                  userName={userName}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {mcqList.length === 0 && codeList.length === 0 && (
        <div className="min-h-40 grid place-content-center">
          <Typography variant="h6" color="textSecondary">
            No tasks to show
          </Typography>
        </div>
      )}
    </Box>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
  email: state.user.email,
  mcqAndProgramData: state.mcqsandprograms.data,
  mcqAndProgramIsError: state.mcqsandprograms.isError,
  mcqAndProgramIsLoading: state.mcqsandprograms.isLoading,
});

const VerticalLinearStepper = connect(mapState)(VerticalLinearStepperComponent);

export default VerticalLinearStepper;
