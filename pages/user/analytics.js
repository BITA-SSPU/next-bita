import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStoreState } from "easy-peasy";
import faker from "faker";

import { Button } from "flowbite-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { AgGridReact } from "ag-grid-react";

import MyLineChart from "../../components/charts/MyLineChart";
import MyBubbleChart from "../../components/charts/MyBubbleChart";
import MyRadarChart from "../../components/charts/MyRadarChart";
import DataGrid from "../../components/DataGrid";
import MyChart from "../../components/charts/MyBarChart";

import Papa from "papaparse";


export default function Analytics() {
  const router = useRouter();
  const isLoggedIn = useStoreState((state) => state.isLoggedIn);

  useEffect(() => {
    console.log("Analytics: " + isLoggedIn);
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "Date", filter: true },
    { field: "Entries", filter: true },
    { field: "Notes" },
    { field: "Clothes" },
  ]);

  const [file, setFile] = useState([]);

  let data = null;

  const handleFileSubmit = (file) => {};

  const handleFileChange = (e) => {
    if (e.target.files) {
      console.log(file);
      Papa.parse(e.target.files[0], {
        header: true,
        complete: function (results) {
          console.log(results);
          const parsedResults = JSON.stringify(results.data);
          setFile(parsedResults);
        },
      });
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }
  };

  return (
    <>
      {/* <SideBar /> */}
      <p className="text-3xl text-center">Enter Data for analysis</p>

      <div className="flex flex-col mx-auto max-w-[600px]">
        <input type="file" onChange={handleFileChange} />
        <Button onClick={handleUploadClick}>Upload</Button>
      </div>

      <p className="text-4xl bg-indigo-400 p-7 text-white rounded-lg mx-10">
        Analytics
      </p>
      <div className="container w-screen mx-auto">
        <div className="grid grid-cols-2 gap-5 max-w-screen mx-auto mt-5  object-contain">
          <div className="shadow rounded-lg p-5">
            <p className="text-center text-xl mt-5">
              These are your operational expenses for the fiscal year dated
              2021-22
            </p>
            <MyChart
              chartData={
                (data = {
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "Opertion Cost 1",
                      data: labels.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                      ),
                      backgroundColor: "rgba(255, 99, 132, 0.5)",
                    },
                    {
                      label: "operational Cost 2",
                      data: labels.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                      ),
                      backgroundColor: "rgba(53, 162, 235, 0.5)",
                    },
                  ],
                })
              }
            />
          </div>
          <div className="shadow rounded-lg p-5">
            <p className="text-center text-xl mt-5">
              This is your revenue per month for the fiscal year dated 2021-22
            </p>
            <MyLineChart />
          </div>
          <div className="shadow rounded-lg p-5">
            <p className="text-center text-xl mt-5">
              These are your main expenses per month for the fiscal year dated
              2021-22
            </p>
            <MyBubbleChart />
          </div>

          <div className="shadow rounded-lg p-5">
            <p className="text-center text-xl mt-5">
              These are your main expenses per month for the fiscal year dated
              2021-22
            </p>
            <MyRadarChart />
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-col justify-center">
        <p className="text-4xl mt-5 bg-indigo-400 p-7 text-white rounded-lg mx-10">
          Data Entries
        </p>
        <div className="mx-auto mt-8">
          {/* <DataGrid file={file} /> */}
          <DataTable file={file} />
        </div>
      </div>
    </>
  );
}
