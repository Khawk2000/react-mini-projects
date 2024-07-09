import React, { useState } from "react";
import Chart from "react-apexcharts";

const PopChart = () => {
  const [direction, setDirection] = useState(false);
  const [series, setSeries] = useState([
    {
      name: "Population",
      data: [
        8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928,
        1300092, 1026908,
      ],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      background: "#f4f4f4",
      foreColor: "#333",
    },
    xaxis: {
      categories: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
      ],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      colors: ["#f44336"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Largest US Cities By Population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px",
      },
    },
  });

  const onClick = () => {
    setDirection(!direction)
    setOptions({
        plotOptions: {
          ...options.plotOptions,
          bar: {
            ...options.plotOptions.bar,
            horizontal: !direction,
          },
        },
      });
    
  };

  return (
    <React.Fragment>
      <Chart
        options={options}
        series={series}
        type="bar"
        height="450"
        width="100%"
      />
      <button onClick={onClick}>{direction ? <p>Horizontal</p> : <p>Vertical</p>}</button>
    </React.Fragment>
  );
};

export default PopChart;
