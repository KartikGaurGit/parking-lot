import { ParkingSlotFactory } from "../ParkingSlot/ParkingSlotFactory";
import { TicketInterface } from "../Ticket/TicketInterface";
import { ExitInterface } from "./ExitInterface";

export class ExitGate implements ExitInterface{
    calculatePayment(ticket: TicketInterface): number {
        const parkingSlot = ticket.getTicketParkingSlot();
        ticket.updateTicketOutTime();
        const price = parkingSlot.getPrice(ticket);
        return price;
    }
    makePayment(ticket: TicketInterface): boolean {
        return ticket.takePayment();
    }
    freeUpParkingSpot(ticket: TicketInterface): boolean {
        const parkingSlotManager = (new ParkingSlotFactory()).getParkingSlotManager(ticket.getTicketVehicle(), "TWO_WHEELER");
        return parkingSlotManager.clearParkingSlot(ticket.getTicketParkingSlot());
    }
}