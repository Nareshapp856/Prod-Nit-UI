import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function StudentTable() {
  return (
    <div
      style={{ width: "100%", height: "600px" }}
      className="bg-blue-500 ag-theme-alpine"
    >
      <AgGridReact
        rowData={[
          {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "123-456-7890",
          },
        ]}
        columnDefs={[
          { headerName: "ID", field: "id" },
          { headerName: "Student Name", field: "name" },
          { headerName: "Student Email", field: "email" },
          { headerName: "Phone Number", field: "phone" },
        ]}
      />
    </div>
  );
}

export default StudentTable;
