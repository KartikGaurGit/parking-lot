import { TicketInterface } from "../Ticket/TicketInterface";

export interface ExitInterface {
    calculatePayment(ticket:TicketInterface):number;
    makePayment(ticket:TicketInterface):boolean;
    freeUpParkingSpot(ticket:TicketInterface):boolean;
}