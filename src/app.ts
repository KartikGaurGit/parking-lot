import { ExitGate } from "./Exit/ExitGate";
import { ExitInterface } from "./Exit/ExitInterface";
import { ParkingSlot } from "./ParkingSlot/ParkingSlot";
import { ParkingSlotFactory } from "./ParkingSlot/ParkingSlotFactory";
import { ParkingSlotManager } from "./ParkingSlot/ParkingSlotManager";
import { Ticket } from "./Ticket/Ticket";
import { TicketInterface } from "./Ticket/TicketInterface";
import { TwoWheelerVehicle } from "./Vehicle/TwoWheelerVehicle";
import { Vehicle } from "./Vehicle/Vehicle";

const vehicle:Vehicle = new TwoWheelerVehicle();
const parkingSlotFactory:ParkingSlotFactory = new ParkingSlotFactory();
const parkingSlotManager:ParkingSlotManager = parkingSlotFactory.getParkingSlotManager(vehicle, "TWO_WHEELER");
const parkingSlot:ParkingSlot | null = parkingSlotManager.getParkingSlot(vehicle);
if(!parkingSlot){
   
    console.log("No slot available for parking");
}
else{
    parkingSlotManager.assignParkingSlot(parkingSlot, vehicle);
    let ticket:TicketInterface = new Ticket(vehicle, parkingSlot);
    let exitGate:ExitInterface = new ExitGate();
    exitGate.calculatePayment(ticket)
    exitGate.makePayment(ticket);
    console.log(parkingSlot.checkIsEmpty());
    exitGate.freeUpParkingSpot(ticket);
    console.log(parkingSlot.checkIsEmpty());
}



