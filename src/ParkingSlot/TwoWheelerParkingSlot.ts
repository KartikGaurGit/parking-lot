import { Vehicle } from "../Vehicle/Vehicle";
import { HourlyParkingStratergy } from "./HourlyPricingStratergy";
import { ParkingSlot } from "./ParkingSlot";
import {nanoid} from "nanoid";

export class TwoWheelerParkingSlot extends ParkingSlot{
    private price:number;
    private vehicle:Vehicle | null;
    private id: string;
    private isEmpty: boolean;
    private type:string;
    constructor(){
        super(new HourlyParkingStratergy());
        this.price = 100;
        this.vehicle = null;
        this.id = nanoid(10);
        this.isEmpty = true;
        this.type = "TWO_WHEELER";
    }

    parkVehicle(vehicle:Vehicle): void {
        this.vehicle = vehicle;
        this.isEmpty = false;
    }
    removeVehicle(): void {
        this.vehicle = null;
        this.isEmpty = true;
    }
    checkIsEmpty(): boolean {
        return this.isEmpty;
    }
    getBasePrice():number{
        return this.price;
    }
}