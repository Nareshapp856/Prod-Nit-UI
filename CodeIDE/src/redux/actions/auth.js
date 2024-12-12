import { types } from "./types";

export function loginDispatch(payload) {
  const { userName: UserName, Password } = payload;

  if (!UserName || !Password)
    throw new Error("not passing valid data to login");

  return {
    type: types.A_LOGIN,
    payload: {
      UserName,
      Password,
    },
  };
}
