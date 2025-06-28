import { FourWheelerParkingSlot } from "./FourWheelerParkingSlot";
import { FourWheelerParkingStratergy } from "./FourWheelerParkingStratergy";
import { ParkingSlotManager } from "./ParkingSlotManager";

export class ParkingSlotFourWheelerManager extends ParkingSlotManager{
    constructor(){
            const parkingSlots = []
            for(let i=0;i<10;i++){
                parkingSlots.push(new FourWheelerParkingSlot());
            }
            super(parkingSlots,(new FourWheelerParkingStratergy()));
        }
}