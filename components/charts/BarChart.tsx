"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  color?: string;
  options?: ApexOptions;
};

const BarChart = ({ color = "#7579FF", options }: PropsType) => {
  // charts series
  const series = [
    {
      show: true,
      data: [30, 50, 40, 50, 70, 65, 90],
    },
  ];

  // charts options
  const defaultOptions: ApexOptions = {
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: [color],
    plotOptions: {
      bar: {
        columnWidth: "20%",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Nov 23"],
        ["Nov 24"],
        ["Nov 25"],
        ["Nov 26"],
        ["Nov 27"],
        ["Nov 28"],
        ["Nov 29"],
        ["Nov 30"],
        ["Dec 1"],
      ],
      labels: {
        style: {
          colors: "var(--para-1st-color)",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "var(--para-1st-color)",
        },
      },
    },
  };

  const chartOptions = options ?? defaultOptions;

  return (
    <ApexCharts
      type="bar"
      series={series}
      options={chartOptions}
      height={250}
    />
  );
};

export default BarChart;
