import { combineReducers } from "@reduxjs/toolkit";
import { dailyTaskSlice, mcqsandprogramsSlice } from "./dashboard";
import { userSlice } from "./user/userSlice";
import { loginSlice } from "./user/loginSlice";
import { programResultSlice } from "./result";
import {
  at_retrieveDetails,
  at_slotSlice,
  at_studentSlice,
  at_submitActionsSlice,
} from "./faculty/attendanceTracker";

export const rootReducer = combineReducers({
  // Auth
  user: userSlice.reducer,
  login: loginSlice.reducer,

  // Dashboard
  dailyTasks: dailyTaskSlice.reducer,
  mcqsandprograms: mcqsandprogramsSlice.reducer,

  // Program
  programResults: programResultSlice.reducer,

  //Faculty
  //Home
  at_students: at_studentSlice.reducer,
  at_slots: at_slotSlice.reducer,
  at_submitActions: at_submitActionsSlice.reducer,
  at_retrieveDetails: at_retrieveDetails.reducer,
});
