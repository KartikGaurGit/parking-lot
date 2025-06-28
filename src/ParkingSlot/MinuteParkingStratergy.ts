import { TicketInterface } from "../Ticket/TicketInterface";
import { PricingStratergyInterface } from "./PricingStratergyInterface";

export class MinuteParkingStratergy implements PricingStratergyInterface{
    calculateTotalPrice(ticket:TicketInterface,slotPrice:number): number {
        const inTime = ticket.getTicketInTime();
        const outTime = ticket.getTicketOutTime();
        let totalMinutes = 1;
        if(inTime !=null && outTime != null){
            totalMinutes = Math.round((outTime.getTime() - inTime.getTime())/ (1000*60));
        }
        return totalMinutes * slotPrice;
    }
}