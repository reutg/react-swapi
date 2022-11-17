import { PilotType, PlanetResponseType, VehicleResponseType } from "./types";

const baseUrl = "https://swapi.py4e.com/api/";

class Api {
  public getVehicles = async () => {
    let response = await this.get(`${baseUrl}/vehicles`);
    const vehicles: VehicleResponseType[] = response.results;

    while (response.next) {
      response = await this.get(response.next);
      vehicles.push(...response.results);
    }

    return vehicles.map(({ url, name, pilots }) => ({ url, name, pilots }));
  };

  public getPilots = async (pilotUrls: string[]) => {
    const pilots: PilotType[] = [];

    for (const url of pilotUrls) {
      const { name, homeworld } = await this.get(url);
      pilots.push({ url, name, homeworld });
    }
    return pilots;
  };

  public getPlanets = async () => {
    let response = await this.get(`${baseUrl}/planets/`);
    const planets: PlanetResponseType[] = response.results;

    while (response.next) {
      response = await this.get(response.next);
      planets.push(...response.results);
    }
    return planets.map((planet) => ({
      url: planet.url,
      name: planet.name,
      population: +planet.population,
    }));
  };

  private get = async (path: string) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(path, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default new Api();
