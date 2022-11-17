import React from "react";

interface IProps {
  x: number;
  y: number;
  label: string;
}

export const AxisLabels = ({ x, y, label }: IProps) => {
  return (
    <>
      <text y={y} x={x} transform="rotate(90)" fontSize={16}>
        {label}
      </text>
      <line y2="10" x2="0"></line>
    </>
  );
};
