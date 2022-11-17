import React from "react";
import { maxValue, intToString } from "./ChartUtils";
import { Bar, BarLabel } from "./ChartElements/Bar";
import { AxisLabels } from "./ChartElements/AxisLabels";
import { ChartWrapper } from "./ChartElements/ChartWrapper";
import { AppContext } from "../../AppContext";
import "./Chart.css";

export const BarChart = () => {
  const context = React.useContext(AppContext);
  const { planets } = context;
  const validValues = planets.filter((planet) => !isNaN(planet.population));
  const barMargin = 5;
  const barWidth = 30;
  const height = 500;
  const width = 1200;
  const scaleValue =
    height / maxValue(planets.map((planet) => planet.population || 0));

  return (
    <div className="chart-container">
      <h4>Planets population</h4>
      <ChartWrapper height={height} width={width}>
        <g className="axis">
          {validValues.map((value, index) => {
            const barPosition: number = index * (barWidth + barMargin);
            const textPosition: number = barWidth / 2;
            const scaledValue = (value.population || 0) * scaleValue;

            return (
              <g transform={`translate(${barPosition},0)`} key={index}>
                <Bar
                  x={0}
                  y={height - scaledValue}
                  width={barWidth}
                  height={scaledValue}
                />

                <g
                  className="tick"
                  transform={`translate(${textPosition},${
                    height - scaledValue
                  })`}
                  fill="white"
                >
                  <BarLabel x={0} y={-5} text={intToString(value.population)} />
                </g>

                <g
                  transform={`translate(${textPosition},${height})`}
                  fill="white"
                >
                  <AxisLabels x={30} y={3} label={value.name} />
                </g>
              </g>
            );
          })}
        </g>
      </ChartWrapper>
    </div>
  );
};
