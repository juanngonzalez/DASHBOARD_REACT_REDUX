import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../theme";

const RadarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = {
    labels: ["Protein", "Carbs", "Fibre", "Calories"],
    datasets: [
      {
        label: "Macros this week",
        data: [55, 49, 44, 24],
        backgroundColor: "rgba(219, 79, 74, 0.2)",
        borderColor: colors.redAccent[500],
        pointBackgroundColor: colors.redAccent[500],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: colors.redAccent[500],
      },
      {
        label: "Macros last week",
        data: [45, 9, 4, 14],
        backgroundColor: "rgba(83, 90, 200, 0.2)",
        borderColor: colors.blueAccent[600],
        pointBackgroundColor: colors.blueAccent[600],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: colors.blueAccent[600],
      },
    ],
  };
  const columns = [
    { id: "empty", label: "" },
    { id: "protein", label: "Protein" },
    { id: "carbs", label: "Carbs" },
    { id: "fibre", label: "Fibre" },
    { id: "calories", label: "Calories" },
  ];
  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          stepSize: 20,
          backdropColor: "rgba(0, 0, 0, 0)",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const desiredValues = [65, 40, 50, 30]; // Change these to your desired values

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ width: "100%", height: "65%", padding: 10 }}>
        <Radar type="line" data={data} options={options} />
      </div>
      <div style={{ borderTop: `4px solid ${colors.blueAccent[900]}` }}>
        <div style={{ height: 200 }}>
          <TableContainer style={{ border: "hidden" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      <Typography color="secondary">{column.label}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.datasets.map((dataset, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ border: "hidden" }} key={index}>
                      <Typography color="white">{dataset.label}</Typography>
                    </TableCell>
                    {dataset.data.map((value, i) => (
                      <TableCell style={{ border: "hidden" }} key={i}>
                        <Typography color="white">{value}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow key="deseableValue">
                  <TableCell style={{ border: "hidden" }} key="deseableValue">
                    <Typography color="white">Estimated values</Typography>
                  </TableCell>
                  {desiredValues.map((value, i) => (
                    <TableCell style={{ border: "hidden" }} key={i}>
                      <Typography color="white">{value}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
