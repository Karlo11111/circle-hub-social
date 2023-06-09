"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  options?: ApexOptions;
};

const DoubleLineChart = ({ options }: PropsType) => {
  // charts series
  const series = [
    {
      show: false,
      data: [20, 33, 25, 55, 30, 65, 70, 72],
    },
    {
      data: [28, 43, 25, 35, 25, 45, 80, 83],
    },
  ];

  // charts options
  const defaultOptions: ApexOptions = {
    chart: {
      //   height: 250,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    colors: ["#55FFB8", "#fff"],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  const chartOptions = options ?? defaultOptions;

  return <ApexCharts series={series} options={chartOptions} height={250} />;
};

export default DoubleLineChart;
