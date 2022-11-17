import React from "react";
import { AppContext } from "../../AppContext";

import "./Table.css";

export const Table = () => {
  const { vehicle, planets } = React.useContext(AppContext);
  const planetsUrls = vehicle?.pilots.map((pilot) => pilot.homeworld) || [];
  const pilotsNames = vehicle?.pilots.map((pilot) => pilot.name).join(", ");

  return (
    <table className="styled-table">
      <tbody>
        <tr>
          <td>Vehicle name with the largest sum</td>
          <td>{vehicle?.name}</td>
        </tr>
        <tr>
          <td>Related home planets and their respective population</td>
          {planetsUrls.map((url) => {
            const planet = planets.find((planet) => planet.url === url);
            return (
              <td
                key={planet?.url}
              >{`name: ${planet?.name}, population: ${planet?.population}`}</td>
            );
          })}
        </tr>
        <tr>
          <td>Related pilot names</td>
          <td>{pilotsNames}</td>
        </tr>
      </tbody>
    </table>
  );
};
