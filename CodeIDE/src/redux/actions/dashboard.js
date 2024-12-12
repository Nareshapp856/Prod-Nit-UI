import { types } from "./types";

export function getDailyTasksDispatch(payload) {
  const { studentId, date: createdAt } = payload;

  if (!studentId || !createdAt)
    throw new Error("not passing valid data to get dialy tasks");

  return {
    type: types.D_DAILY_TASKS_LIST,
    payload: { studentId, createdAt },
  };
}

export function getMcqandProgramsDispatch(payload) {
  const { studentId, date: createdAt } = payload;

  if (!studentId || !createdAt)
    throw new Error("not passing valid data to get mcq and programs");

  return {
    type: types.D_MCQANDPROGRAM_DATA,
    payload: {
      studentId,
      createdAt,
    },
  };
}
