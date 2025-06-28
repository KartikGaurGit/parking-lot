import { TicketInterface } from "../Ticket/TicketInterface";

export interface PricingStratergyInterface{
    calculateTotalPrice(ticket:TicketInterface, slotPrice:number):number;
}