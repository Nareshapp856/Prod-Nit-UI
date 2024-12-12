import { api } from "../api";

export const programResultsApi = async (payload) => {
  try {
    const res = await api.post("RetriveProgramResults", payload);

    const mainTable =
      res.data?.dbresult?.[res.data?.dbresult?.length - 1] || {};
    const testCasesTable = res.data?.dbresult || [];

    const data = { mainTable, testCasesTable };
    const status = res.status;

    return {
      data,
      status,
    };
  } catch (error) {
    throw error;
  }
};
