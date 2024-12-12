import axios from "axios";

export const baseURL = process.env.REACT_APP_ADMIN_API_URL;

const api = axios.create({ baseURL });

export default api;

export async function getBatchDetails(props) {
  try {
    const batchId = props;

    if (!batchId) {
      throw new Error("must pass batchId to fetch batch details.");
    }

    const response = await api.get(`/retrive-batch-details/${batchId}`);

    return response;
  } catch (error) {
    return error;
    // const notFound = { message: "page not found" };

    // if (error.response.status >= 400 && error.response.status < 500) {
    // }

    // if (error.response.status === 500) {
    // }
  }
}

export async function deleteEnrollItem(payload) {
  try {
    const res = api.delete("/DeleteEnrollmentId", {
      data: { EnrollmentId: payload },
    });

    return res;
  } catch (error) {
    return {};
  }
}
