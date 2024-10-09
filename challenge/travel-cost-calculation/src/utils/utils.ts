import { DestinationList, Vehicle } from "../types/types";

export async function fetchVehicleTypes(): Promise<Vehicle[]> {
  return new Promise((resolve, reject) => {
    resolve([
      { id: "1", label: "plane" },
      { id: "2", label: "car" },
      { id: "3", label: "train" },
    ]);
  });
}

export async function getTotal(
  startinPoint: string,
  destinationList: DestinationList[],
  vehicleList: Vehicle[]
): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(Math.random() * 1000);
  });
}
