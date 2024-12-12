import { getBasicGetSlice } from "../../util/get";

export const dailyTaskSlice = getBasicGetSlice({
  sliceName: "d_dailyTasks",
});

export const mcqsandprogramsSlice = getBasicGetSlice({
  sliceName: "d_macqandprogram",
});

export const {
  fetchStart: fetchDialyTasksStart,
  fetchSuccess: fetchDialyTasksSuccess,
  fetchError: fetchDialyTasksError,
} = dailyTaskSlice.actions;

export const {
  fetchStart: fetchMcqAndProgramStart,
  fetchSuccess: fetchMcqAndProgramSuccess,
  fetchError: fetchMcqAndProgramError,
} = mcqsandprogramsSlice.actions;
