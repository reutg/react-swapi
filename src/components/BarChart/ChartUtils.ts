import { planetType } from "../../api/types";

export const intToString = (value: number) => {
  const suffixes = ["", "k", "m", "b", "t"];
  const suffixNum = Math.floor(("" + value).length / 3);
  let shortValue: number | string = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

export const maxValue = (values: number[]) =>
  values.reduce((a: number, b: number) => Math.max(a, b), 0);

export const scaleValue = (data: planetType[], height: number) =>
  height / maxValue(data.map((d) => d.population || 0));
