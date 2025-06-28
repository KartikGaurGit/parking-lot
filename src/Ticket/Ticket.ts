import { nanoid } from "nanoid";
import { ParkingSlot } from "../ParkingSlot/ParkingSlot";
import { Vehicle } from "../Vehicle/Vehicle";
import { TicketInterface } from "./TicketInterface";

export class Ticket implements TicketInterface{
    private ticketId: string;
    private vehicle:Vehicle;
    private parkingSlot:ParkingSlot;
    private inTime: Date | null;
    private outTime: Date | null;
    private isPaid: boolean;

    constructor(vehicle:Vehicle, parkingSlot:ParkingSlot){
        this.ticketId = nanoid(5);
        this.vehicle = vehicle;
        this.parkingSlot = parkingSlot;
        this.inTime = new Date();
        this.outTime = null;
        this.isPaid = false;
    }

    getTicketId(): string {
        return this.ticketId;
    }

    getTicketInTime(): Date | null {
        return this.inTime;
    }

    getTicketOutTime(): Date | null {
        return this.outTime;
    }

    updateTicketOutTime(): boolean {
        this.outTime = new Date("2025-06-29T05:57:34");
        return true;
    }
    getTicketParkingSlot(): ParkingSlot {
        return this.parkingSlot;
    }
    getTicketVehicle(): Vehicle {
        return this.vehicle;
    }
    takePayment(): boolean {
        return this.isPaid = true;
    }
}