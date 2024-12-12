import { styled } from "@mui/material/styles";
import { memo } from "react";

// Custom StepIcon component
const CustomStepIconRoot = styled("div")(({ theme, ownerState, type }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: ".8rem",
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: type === "code" ? "#0f0f0fdf" : "#0f0f0fdf",
  color: "#fff",
  ...(ownerState.completed && {
    backgroundColor: "#0f0f0fdf",
    color: "#fff",
  }),
}));

const CustomStepIcon = (props) => {
  const { active, completed, className, icon, type } = props;

  return (
    <CustomStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      type={type}
    >
      {icon}
    </CustomStepIconRoot>
  );
};

export default memo(CustomStepIcon);
