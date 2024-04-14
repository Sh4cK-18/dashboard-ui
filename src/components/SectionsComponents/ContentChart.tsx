import AreaChartComponent from "../ChartsComponents/AreaChart";
import DonutChartComponent from "../ChartsComponents/DonutChart";
export default function ContentChart() {
  return (
    <>
      <div className="flex flex-col w-full items-center overflow-y-scroll gap-y-8">
        <div className="w-[950px]  2xl:w-[1150px] h-[420px] rounded-xl p-4 mx-4 mt-10 dark:bg-slate-950 shadow-lg shadow-black">
          <AreaChartComponent />
        </div>
        <div className=" w-[950px] 2xl:w-[1150px] h-[400px] mb-8 rounded-xl dark:bg-slate-950 flex flex-row justify-center items-center gap-x-20 shadow-lg shadow-black">
        <DonutChartComponent
          title="Donut Chart 1"
        />
        <DonutChartComponent
        title="Donut Chart 2"
        />
        <DonutChartComponent
        title="Donut Chart 3"
        />
        <DonutChartComponent 
        title="Donut Chart 4"
        />
        </div>
      </div>
    </>
  );
}
