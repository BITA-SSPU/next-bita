import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const fakeAccountName = faker.finance.transactionType();

export const data = {
  labels: [
    faker.finance.transactionType(),
    faker.finance.transactionType(),
    faker.finance.transactionType(),
    faker.finance.transactionType(),
    faker.finance.transactionType(),
    faker.finance.transactionType(),
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [210, 190, 200, 500, 250, 200],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 7,
    },
  ],
};

export default function App() {
  return <PolarArea data={data} />;
}
