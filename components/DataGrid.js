import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function DataGrid({ file }) {
  const rowData = useState(file);
  console.log(file);

  const [columnDefs] = useState([
    {
      field: "Data",
    },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
