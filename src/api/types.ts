export interface VehicleResponseType {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  url: string;
  vehicle_class: string;
}

export interface PlanetResponseType {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface planetType {
  url: string;
  name: string;
  population: number;
}

export interface PilotType {
  url: string;
  name: string;
  homeworld: string;
}

export interface VehicleData {
  url: string;
  name: string;
  pilots: PilotType[];
  populationSum?: number;
}
