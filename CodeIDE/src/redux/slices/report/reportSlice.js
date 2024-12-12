import { getBasicGetSlice } from "../../util/get";

const report = getBasicGetSlice({ sliceName: "report" });

export const {
  fetchStart: requestReportStart,
  fetchSuccess: requestReportSuccess,
  fetchError: requestReportError,
} = report.actions;
