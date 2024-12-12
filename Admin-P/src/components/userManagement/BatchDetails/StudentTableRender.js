import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIncludedStudentsArr } from "../../../store/slice/userManagement.slice";

function StudentTableRender({
  studentsList,
  cellStyle,
  tableHeight,
  tableWidth,
}) {
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);

  const { includedStudents, showWarn } = useSelector(
    (store) => store.userManagementPageReducer
  );

  const onSelect = (flag, data) => {
    const updatedArr = [...includedStudents];

    if (flag) {
      updatedArr.push(data.StudentID);
    } else {
      const index = updatedArr.indexOf(data.StudentID);

      updatedArr.splice(index, 1);
    }

    dispatch(setIncludedStudentsArr(updatedArr));
  };

  const onGridReady = useMemo(() => {
    let defaultColumnDefs = [
      {
        field: "StudentID",
        headerName: "Student ID",
        width: 170,
        filter: true,
        floatingFilter: true,
        cellRenderer: (param) => {
          return (
            <div className="flex">
              <p>
                <Checkbox
                  size="small"
                  checked={includedStudents.includes(param.data.StudentID)}
                  onClick={(e) => onSelect(e.target.checked, param.data)}
                />
              </p>
              <p className="ms-2">
                {isNaN(Number(param.data.StudentID))
                  ? ""
                  : param.data.StudentID}
              </p>
            </div>
          );
        },
      },
      {
        field: "FirstName",
        headerName: "First Name",
        width: 235,
        filter: true,
        floatingFilter: true,
      },
      {
        field: "LastName",
        headerName: "Last Name",
        width: 235,
      },
      {
        field: "Email",
        headerName: "Email",
        width: 350,
      },
      {
        field: "PhoneNumber",
        headerName: "PhoneNumber",
        width: 240,
      },
    ];

    defaultColumnDefs = defaultColumnDefs.map((def) => ({
      ...def,
      cellStyle: {
        ...def.cellStyle,
        ...cellStyle,
      },
    }));

    setColumnDefs(defaultColumnDefs);
  }, [includedStudents]);

  useEffect(() => {
    setRowData(studentsList || []);
  }, [studentsList]);

  return (
    <div
      style={{ height: tableHeight, width: tableWidth }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        rowSelection="multiple"
        overlayNoRowsTemplate="No Students Found"
      />
    </div>
  );
}

export default StudentTableRender;
