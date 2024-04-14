/* "use server"; */
import { AreaChart } from "@tremor/react";

const chartData = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },

  {
    date: "Feb 15",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },

  {
    date: "Mar 05",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },

  {
    date: "Apr 27",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },

  {
    date: "May 14",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },

  {
    date: "Jun 27",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },

  {
    date: "Jul 28",
    SemiAnalysis: 3490,
    "The Pragmatic Engineer": 1982,
  },

  {
    date: "Aug 22",
    SemiAnalysis: 2903,
    "The Pragmatic Engineer": 2012,
  },
  {
    date: "Sep 22",
    SemiAnalysis: 2643,
    "The Pragmatic Engineer": 2342,
  },
  {
    date: "Oct 22",
    SemiAnalysis: 2837,
    "The Pragmatic Engineer": 2473,
  },
  {
    date: "Nov 22",
    SemiAnalysis: 2954,
    "The Pragmatic Engineer": 3848,
  },
  {
    date: "Dec 22",
    SemiAnalysis: 3239,
    "The Pragmatic Engineer": 3736,
  },
];


export default function AreaChartComponent() {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Newsletter Revenue
      </h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        $70,567
      </p>
      <AreaChart
        className="mt-4 h-72"
        data={chartData}
        index="date"
        yAxisWidth={65}
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={["indigo", "cyan"]}
      />
    </>
  );
}
