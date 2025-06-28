import { Vehicle } from "../Vehicle/Vehicle";
import { ParkingSlotManager } from "./ParkingSlotManager";
import { ParkingSlotTwoWheelerManager } from "./ParkingSlotTwoWheelerManager";

export class ParkingSlotFactory {
    public getParkingSlotManager = (vehicle:Vehicle, type:String):ParkingSlotManager => {
        return new ParkingSlotTwoWheelerManager();
    }
}