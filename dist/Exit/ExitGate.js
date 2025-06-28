"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitGate = void 0;
var ParkingSlotFactory_1 = require("../ParkingSlot/ParkingSlotFactory");
var ExitGate = /** @class */ (function () {
    function ExitGate() {
    }
    ExitGate.prototype.calculatePayment = function (ticket) {
        var parkingSlot = ticket.getTicketParkingSlot();
        ticket.updateTicketOutTime();
        var price = parkingSlot.getPrice(ticket);
        return price;
    };
    ExitGate.prototype.makePayment = function (ticket) {
        return ticket.takePayment();
    };
    ExitGate.prototype.freeUpParkingSpot = function (ticket) {
        var parkingSlotManager = (new ParkingSlotFactory_1.ParkingSlotFactory()).getParkingSlotManager(ticket.getTicketVehicle(), "TWO_WHEELER");
        return parkingSlotManager.clearParkingSlot(ticket.getTicketParkingSlot());
    };
    return ExitGate;
}());
exports.ExitGate = ExitGate;
