import { ParkingSlot } from "./ParkingSlot";
import { ParkingStratergy } from "./ParkingStratergy";

export class TwoWheelerParkingStratergy implements ParkingStratergy{
    private availableSlot:ParkingSlot | null;
    constructor(){
        this.availableSlot = null;
    }
    findParking(parkingSlots: [ParkingSlot]): ParkingSlot | null{
        parkingSlots.forEach((parkingSlot)=>{
            if(parkingSlot.checkIsEmpty())
                this.availableSlot = parkingSlot;
        });
        return this.availableSlot;
    }
}