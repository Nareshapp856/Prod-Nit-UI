import { types } from "./types";

export const getProgramResults = (payload) => {
  const { userName: UserName, programId: ProgramId } = payload;

  if (!UserName)
    throw new Error("not passing valid data to fetch program results");

  return {
    type: types.R_PROGRAM_RESULT,
    payload: {
      UserName,
      ProgramId,
    },
  };
};
