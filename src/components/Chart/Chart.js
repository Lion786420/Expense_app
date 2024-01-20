import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((data) => {
    return data.value;
  });
  let maxValue = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          max={maxValue}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
