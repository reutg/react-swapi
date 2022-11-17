import React from "react";

interface IProps {
  children: any;
  height: number;
  width: number;
}

export const ChartWrapper = ({ children, height, width }: IProps) => {
  return (
    <svg
      className="chart-wrapper"
      width={width}
      height={height}
      viewBox={`0 0 ${width * 1.25} ${height}`}
    >
      {children}
    </svg>
  );
};
