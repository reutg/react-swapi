import React from "react";

interface IProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const Bar = ({ x, y, width, height }: IProps) => {
  return (
    <rect className="bar" x={x} width={width} y={y} height={height}></rect>
  );
};

interface BarTextProps {
  x: number;
  y: number;
  text: string;
}

export const BarLabel = ({ x, y, text }: BarTextProps) => {
  return (
    <text y={y} x={x} style={{ textAnchor: "middle" }} fontSize={16}>
      {text}
    </text>
  );
};
