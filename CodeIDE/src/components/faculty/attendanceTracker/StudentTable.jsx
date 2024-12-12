import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import { Checkbox, useMediaQuery, useTheme } from "@mui/material";
import { at_fetchStudentsDispatch } from "../../../redux/actions/faculty";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function StudentTableComponent({
  studentsData,
  includedStudents,
  setIncludedStudents,
}) {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    if (studentsData && studentsData.students) {
      if (Array.isArray(studentsData.students))
        setStudentList(studentsData.students);
    } else {
      setStudentList([]);
    }
  }, [studentsData, setStudentList]);

  const onSelect = (flag, data) => {
    setIncludedStudents((prev) => {
      const updatedArr = [...prev];
      if (flag) {
        updatedArr.push(data.id);
      } else {
        const index = updatedArr.indexOf(data.id);
        updatedArr.splice(index, 1);
      }
      return updatedArr;
    });
  };

  const columnDefs = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.8,
      filter: true,
      floatingFilter: true,
      cellRenderer: (param) => {
        return (
          <div className="flex items-center">
            <Checkbox
              size="small"
              checked={includedStudents.includes(param.data.id)}
              onClick={(e) => onSelect(e.target.checked, param.data)}
            />
            <p className="ms-3">
              {isNaN(Number(param.data.id)) ? "" : param.data.id}
            </p>
          </div>
        );
      },
    },
    {
      headerName: "First Name",
      field: "firstName",
      flex: 1,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "Last Name",
      field: "lastName",
      flex: 1,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "Email",
      field: "email",
      flex: 2,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "Phone",
      field: "phone",
      flex: 1,
      filter: true,
      floatingFilter: true,
    },
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "80vh", width: "100%", minWidth: "500px" }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={studentList}
        rowSelection="multiple"
      />
    </div>
  );
}

const mapState = (state) => ({
  studentsData: state.at_students.data,
});

const mapDispatch = {
  at_fetchStudents: at_fetchStudentsDispatch,
};

const StudentTable = connect(mapState, mapDispatch)(StudentTableComponent);

export default StudentTable;
