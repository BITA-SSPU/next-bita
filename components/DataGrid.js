import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import faker from 'faker'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function App () {
  const [rowData] = useState([
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
    { Date: faker.date.weekday(), Type: faker.finance.transactionType(), Entry: faker.datatype.number() },
  ]);

  const [columnDefs] = useState([
    { field: 'Date' },
    { field: 'Type' },
    { field: 'Entry' },
    { field: 'LF' },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};


