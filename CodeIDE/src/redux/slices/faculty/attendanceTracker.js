import { getBasicGetSlice } from "../../util/get";

export const at_studentSlice = getBasicGetSlice({ sliceName: "at_student" });
export const at_slotSlice = getBasicGetSlice({ sliceName: "at_slot" });
export const at_submitActionsSlice = getBasicGetSlice({
  sliceName: "at_submitActions",
});
export const at_retrieveDetails = getBasicGetSlice({
  sliceName: "at_retrieveDetails",
});

export const {
  fetchStart: at_submitActionsRequest,
  fetchSuccess: at_submitActionsSuccess,
  fetchError: at_submitActionsError,
  resetSlice: at_resetSubmitActions,
} = at_submitActionsSlice.actions;

export const {
  fetchStart: at_fetchStudentStart,
  fetchSuccess: at_fetchStudentSuccess,
  fetchError: at_fetchStudentError,
  resetSlice: at_resetStudentSlice,
} = at_studentSlice.actions;

export const {
  fetchStart: at_fetchSlotStart,
  fetchSuccess: at_fetchSlotSuccess,
  fetchError: at_fetchSlotError,
  resetSlice: at_resetSlotSlice,
} = at_slotSlice.actions;

export const {
  fetchStart: at_fetchRetrieveDetailsStart,
  fetchSuccess: at_fetchRetrieveDetailsSuccess,
  fetchError: at_fetchRetrieveDetailsError,
  resetSlice: at_resetRetrieveDetailsSlice,
} = at_retrieveDetails.actions;
