import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { fetchStudentListbyTechModule } from "../../../store/root.actions";
import StudentTableRender from "./StudentTableRender";
import ExcelImports from "./ExcelImports";
import ToggleSelector from "./ToggleSelector";
import Addstudent from "./Addstudent";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIncludedStudentsArr } from "../../../store/slice/userManagement.slice";

// styles
const cellStyle = {
  fontFamily: "Roboto",
  fontSize: "1rem",
  color: "#636363",
  fontStyle: "normal",
};
const tableHeight = "600px";
const tableWidth = "1250px";

function StudentTableComponent({
  studentsList,
  isLoading,
  isError,
  technologyId,
  moduleId,
  fetchStudentsList,
  excelImports,
}) {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const { includedStudents } = useSelector(
    (store) => store.userManagementPageReducer
  );

  const iterableStudentList = useMemo(
    () => (studentsList ? [...studentsList] : []),
    [studentsList]
  );

  const [currentStudentList, setCurrentStudentList] = useState(
    selectedIndex === 1
      ? studentsList
      : selectedIndex === 2
      ? excelImports
      : [...excelImports, ...iterableStudentList]
  );

  useEffect(() => {
    setCurrentStudentList(
      selectedIndex === 1
        ? studentsList
        : selectedIndex === 2
        ? excelImports
        : [...excelImports, ...iterableStudentList]
    );
  }, [selectedIndex, studentsList, excelImports, iterableStudentList]);

  const handleExcludeAll = () => {
    dispatch(
      setIncludedStudentsArr(
        includedStudents.filter(
          (student) =>
            !currentStudentList.some(
              (currentStudent) => currentStudent.StudentID === student
            )
        )
      )
    );
  };

  const handleIncludeAll = () => {
    dispatch(
      setIncludedStudentsArr(
        Array.from(
          new Set([
            ...includedStudents,
            ...currentStudentList.map((student) => student.StudentID),
          ])
        )
      )
    );
  };

  return (
    <div className="flex justify-center mt-10">
      <div>
        <div className="w-full flex justify-end">
          <div className="ms-5 mb-6">
            <Button variant="contained" onClick={handleIncludeAll}>
              Include All
            </Button>
          </div>
          <div className="ms-5 mb-6">
            <Button variant="contained" onClick={handleExcludeAll}>
              Exclude All
            </Button>
          </div>
          <div className="ms-5">
            <ExcelImports setShowAddStudent={setShowAddStudent} />
          </div>
          <div className="ms-5">
            <ToggleSelector
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
        </div>
        <div className="mb-5">
          <Addstudent
            showAddStudent={showAddStudent}
            setShowAddStudent={setShowAddStudent}
          />
        </div>
        <div>
          <StudentTableRender
            studentsList={currentStudentList}
            cellStyle={cellStyle}
            tableHeight={tableHeight}
            tableWidth={tableWidth}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToComponent = (state) => ({
  studentsList: state.studentListByTechModuleReducer.data,
  isLoading: state.studentListByTechModuleReducer.isLoading,
  isError: state.studentListByTechModuleReducer.isError,
  technologyId: state.userManagementPageReducer.technologyId,
  moduleId: state.userManagementPageReducer.moduleId,
  excelImports: state.excelStudnetReducer.excelImports,
});

const mapDispatch = {
  fetchStudentsList: (payload) => fetchStudentListbyTechModule(payload),
};

const StudentTable = connect(
  mapStateToComponent,
  mapDispatch
)(StudentTableComponent);

export default StudentTable;
