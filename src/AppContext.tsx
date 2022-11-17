import React from "react";
import ApiService from "./api/ApiService";
import { PilotType, planetType, VehicleData } from "./api/types";

export interface AppContextType {
  isLoading: boolean;
  isError: boolean;
  planets: planetType[];
  vehicle?: VehicleData;
}

interface ContextProps {
  children: JSX.Element;
}

export const AppContext = React.createContext<AppContextType>({
  isLoading: true,
  planets: [],
  isError: false,
});

export const AppContextProvider = (props: ContextProps) => {
  const [planets, setPlanets] = React.useState<planetType[]>([]);
  const [vehicle, setVehicle] = React.useState<VehicleData>();
  const [isLoading, setLoading] = React.useState(true);
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    getData()
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const getData = async () => {
    const planetsData = await getPlanets();
    const vehicleData = await getVehicleWithMaxPopulation(planetsData);
    setVehicle(vehicleData);
  };

  const getPlanets = async () => {
    const data = await ApiService.getPlanets();
    setPlanets(data);
    return data;
  };

  const getVehicleWithMaxPopulation = async (planetsData: planetType[]) => {
    let vehicleWithMaxPopulation: VehicleData | undefined;

    const data = await ApiService.getVehicles();
    let currentHighestPopulation = 0;

    for (const currentVehicle of data) {
      const { url, pilots, name } = currentVehicle;
      const pilotsData = await ApiService.getPilots(pilots);
      const populationSum = sumPopulation(pilotsData, planetsData);
      const vehicle = { url, name, pilots: pilotsData };

      if (currentHighestPopulation < populationSum) {
        vehicleWithMaxPopulation = vehicle;
        currentHighestPopulation = populationSum;
      }
    }

    return vehicleWithMaxPopulation;
  };

  const sumPopulation = (pilots: PilotType[], planetsData: planetType[]) => {
    let sum = 0;
    pilots.forEach((pilot) => {
      const planet = planetsData.find(
        (planet) => planet.url === pilot.homeworld
      );
      sum += planet?.population || 0;
    });

    return sum;
  };

  return (
    <AppContext.Provider value={{ planets, vehicle, isLoading, isError }}>
      {props.children}
    </AppContext.Provider>
  );
};
