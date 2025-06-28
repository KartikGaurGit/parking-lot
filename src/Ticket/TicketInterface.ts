import { ParkingSlot } from "../ParkingSlot/ParkingSlot";
import { Vehicle } from "../Vehicle/Vehicle";

export interface TicketInterface{
    getTicketVehicle():Vehicle;
    getTicketParkingSlot():ParkingSlot;
    getTicketId():string;
    getTicketInTime():Date|null;
    getTicketOutTime():Date|null;
    updateTicketOutTime(): boolean;
    takePayment(): boolean;
}