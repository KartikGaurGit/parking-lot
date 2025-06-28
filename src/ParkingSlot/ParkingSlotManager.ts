import { Vehicle } from "../Vehicle/Vehicle";
import { ParkingSlot } from "./ParkingSlot";
import { ParkingStratergy } from "./ParkingStratergy";

export abstract class ParkingSlotManager{
    private parkingSlots:ParkingSlot[];
    private parkingStratergy:ParkingStratergy;

    constructor(parkingSlots:ParkingSlot[], parkingStratergy:ParkingStratergy){
        this.parkingSlots = parkingSlots;
        this.parkingStratergy = parkingStratergy;
    }

    getParkingSlot(vehicle:Vehicle):ParkingSlot | null{
        return this.parkingStratergy.findParking(this.parkingSlots);
    }

    assignParkingSlot(parkingSlot:ParkingSlot, vehicle:Vehicle):boolean{
        if(parkingSlot.checkIsEmpty())
        parkingSlot.parkVehicle(vehicle);
        return !parkingSlot.checkIsEmpty();
    }

    clearParkingSlot(parkingSlot:ParkingSlot):boolean{
        parkingSlot.removeVehicle();
        return parkingSlot.checkIsEmpty();
    }
}