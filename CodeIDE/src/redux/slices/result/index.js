import { getBasicGetSlice } from "../../util/get";

export const programResultSlice = getBasicGetSlice({
  sliceName: "r_programrequest",
});

export const {
  fetchStart: fetchProgramRequest,
  fetchSuccess: fetchProgramSuccess,
  fetchError: fetchProgramError,
} = programResultSlice.actions;
