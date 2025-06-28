import { ParkingSlot } from "./ParkingSlot";

export interface ParkingStratergy {
    findParking(parkingSlots:ParkingSlot[]):ParkingSlot | null;
}