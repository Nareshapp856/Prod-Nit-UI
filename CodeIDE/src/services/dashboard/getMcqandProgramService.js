export function getMcqandProgramsService(x, y) {
  try {
    const resObj = {};

    const xArr = x.data?.dbresult || [];
    const yArr = y.data?.dbresult || [];
    const dataArr = [...xArr, ...yArr];

    resObj.status = x.status;
    resObj.data = {};
    resObj.data.dbresult = dataArr;

    return resObj;
  } catch (error) {
    throw error;
  }
}
