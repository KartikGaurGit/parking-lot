import { nanoid } from "nanoid";
import { Vehicle } from "../Vehicle/Vehicle";
import { ParkingSlot } from "./ParkingSlot";
import { MinuteParkingStratergy } from "./MinuteParkingStratergy";

export class FourWheelerParkingSlot extends ParkingSlot{
    private price:number;
        private vehicle:Vehicle | null;
        private id: string;
        private isEmpty: boolean;
        private type:string;
        constructor(){
            super(new MinuteParkingStratergy());
            this.price = 100;
            this.vehicle = null;
            this.id = nanoid(10);
            this.isEmpty = true;
            this.type = "FOUR_WHEELER";
        }
    
        parkVehicle(vehicle:Vehicle): void {
            this.vehicle = vehicle;
            this.isEmpty = false;
        }
        removeVehicle(): void {
            this.vehicle = null;
            this.isEmpty = true;
        }
        getBasePrice():number{
            return this.price;
        }
        checkIsEmpty(): boolean {
            return this.isEmpty;
        }
}