import { ParkingSlot } from "./ParkingSlot";
import { ParkingSlotManager } from "./ParkingSlotManager";
import { TwoWheelerParkingSlot } from "./TwoWheelerParkingSlot";
import { TwoWheelerParkingStratergy } from "./TwoWheelerParkingStratergy";

export class ParkingSlotTwoWheelerManager extends ParkingSlotManager{
    static parkinSlotsList:TwoWheelerParkingSlot[] = [];
    constructor(){
        if(ParkingSlotTwoWheelerManager.parkinSlotsList.length === 0){
            for(let i=0;i<10;i++){
                ParkingSlotTwoWheelerManager.parkinSlotsList.push(new TwoWheelerParkingSlot());
            }
        }
        
        super(ParkingSlotTwoWheelerManager.parkinSlotsList,(new TwoWheelerParkingStratergy()));
    }
}