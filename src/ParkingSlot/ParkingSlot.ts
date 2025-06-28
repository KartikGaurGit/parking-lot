import { TicketInterface } from "../Ticket/TicketInterface";
import { Vehicle } from "../Vehicle/Vehicle";
import { PricingStratergyInterface } from "./PricingStratergyInterface";

export abstract class ParkingSlot {
    private pricingStratergy: PricingStratergyInterface;

    constructor(pricingStratergy:PricingStratergyInterface){
        this.pricingStratergy = pricingStratergy;
    }
    abstract parkVehicle(Vehicle:Vehicle):void;
    abstract removeVehicle():void;
    
    abstract checkIsEmpty():boolean;
    abstract getBasePrice():number;

    getPrice(ticket:TicketInterface):number{
        return this.pricingStratergy.calculateTotalPrice(ticket, this.getBasePrice());
    }
}