import { Vehicle } from "./Vehicle";

export class TwoWheelerVehicle implements Vehicle{
    private TYPE:String;

    constructor(){
        this.TYPE = "TWO_WHEELER";
    }
}