"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExitGate_1 = require("./Exit/ExitGate");
var ParkingSlotFactory_1 = require("./ParkingSlot/ParkingSlotFactory");
var Ticket_1 = require("./Ticket/Ticket");
var TwoWheelerVehicle_1 = require("./Vehicle/TwoWheelerVehicle");
var vehicle = new TwoWheelerVehicle_1.TwoWheelerVehicle();
var parkingSlotFactory = new ParkingSlotFactory_1.ParkingSlotFactory();
var parkingSlotManager = parkingSlotFactory.getParkingSlotManager(vehicle, "TWO_WHEELER");
var parkingSlot = parkingSlotManager.getParkingSlot(vehicle);
if (!parkingSlot) {
    console.log("No slot available for parking");
}
else {
    parkingSlotManager.assignParkingSlot(parkingSlot, vehicle);
    var ticket = new Ticket_1.Ticket(vehicle, parkingSlot);
    var exitGate = new ExitGate_1.ExitGate();
    exitGate.calculatePayment(ticket);
    exitGate.makePayment(ticket);
    console.log(parkingSlot.checkIsEmpty());
    exitGate.freeUpParkingSpot(ticket);
    console.log(parkingSlot.checkIsEmpty());
}
