import { DonutChart } from "@tremor/react";

interface Props {
    title : string;
}

const sales = [
    {
      name: 'New York',
      value: 9800,
    },
    {
      name: 'London',
      value: 4567,
    },
    {
      name: 'Hong Kong',
      value: 3908,
    },
    {
      name: 'San Francisco',
      value: 2400,
    },
    {
      name: 'Singapore',
      value: 2174,
    },
  ];
  
  export default function DonutChartComponent({title}: Props) {
    return(
    <>
      <div className="mx-auto space-y-12 p-8 w-[250px]">
        <div className="space-y-3">
          <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {title}
          </span>
          <div className="flex justify-center">
            <DonutChart
              data={sales}
              variant="donut"
            />
          </div>
        </div>
      </div>
    </>
  )};