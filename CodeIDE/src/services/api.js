import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const facultyURL = process.env.REACT_APP_FACULTY_API_URL;
const reportURL = process.env.REACT_APP_REPORT_API_URL;

export const api = axios.create({ baseURL });
export const facultyAPI = axios.create({ baseURL: facultyURL });
export const reportAPI = axios.create({ baseURL: reportURL });

export async function getDailyTasksApi(payload) {
  try {
    const res = await api.post("RetriveTestsBystudentId", payload);

    return res;
  } catch (error) {
    throw error;
  }
}

export async function getMcqandProgramsApi(payload) {
  try {
    function formatDateToLocal(date) {
      const year = date?.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    // const mcqRes = await api.post("RetriveTestsBystudentId_Mcq", {
    //   studentId: payload.studentId,
    //   createdAt: formatDateToLocal(payload.createdAt),
    // });

    const codeRes = await api.post("GetTodayTests_code", {
      studentId: payload.studentId,
      createdAt: formatDateToLocal(payload.createdAt),
    });

    // const resObj = getMcqandProgramsService(mcqRes, codeRes);

    return codeRes;
  } catch (error) {
    throw error;
  }
}

export async function loginApi(payload) {
  try {
    const res = await api.post("AuthenticateStudent", payload);

    if (
      res &&
      res.data &&
      res.data.dbresult &&
      res.data.dbresult[0] &&
      res.data.dbresult[0].IsAuthenticated
    ) {
      let user =
        localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user"));

      if (!user) user = {};

      user.IsAuthenticated = true;

      user = JSON.stringify(user);

      localStorage.setItem("user", user);
    }

    return res;
  } catch (error) {
    throw error;
  }
}

// Faculty

export const at_fetchStudents = async (payload) => {
  try {
    const response = await facultyAPI.get(
      `/api/attendancetracker/getstudents/1`,
      payload
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const at_fetchSlots = async (payload) => {
  try {
    const response = await facultyAPI.get(
      `api/attendancetracker/getslots/1`,
      payload
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const at_submitUserActions = async (payload) => {
  try {
    const response = await facultyAPI.post(
      `api/attendancetracker/submit-useractions`,
      payload
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const at_retrieveDetailsActions = async (payload) => {
  try {
    const response = await facultyAPI.get(
      `api/attendancetracker/load-data/${payload}`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const reportApi = async (payload) => {
  try {
    const response = await reportAPI.post(`/report/dashboard`, payload);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
