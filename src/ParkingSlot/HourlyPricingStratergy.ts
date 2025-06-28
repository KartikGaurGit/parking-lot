import { TicketInterface } from "../Ticket/TicketInterface";
import { PricingStratergyInterface } from "./PricingStratergyInterface";

export class HourlyParkingStratergy implements PricingStratergyInterface{
    calculateTotalPrice(ticket:TicketInterface, slotPrice:number ): number {
        const inTime = ticket.getTicketInTime();
        const outTime = ticket.getTicketOutTime();
        let totalHours = 1;
        console.log(inTime, outTime);
        
        if(inTime !=null && outTime != null){
            console.log("total hours>>", outTime.getTime(), inTime.getTime())
            totalHours = Math.round((outTime.getTime() - inTime.getTime())/ (1000*60*60));
        }
        return totalHours * slotPrice;
    }
}