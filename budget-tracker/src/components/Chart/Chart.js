import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximum = Math.max(...maxValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
          onFilterMonth={props.onFilterMonth}
        />;
      })}
    </div>
  );
};

export default Chart;
