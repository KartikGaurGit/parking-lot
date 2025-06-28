"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var nanoid_1 = require("nanoid");
var Ticket = /** @class */ (function () {
    function Ticket(vehicle, parkingSlot) {
        this.ticketId = nanoid_1.nanoid(5);
        this.vehicle = vehicle;
        this.parkingSlot = parkingSlot;
        this.inTime = new Date();
        this.outTime = null;
        this.isPaid = false;
    }
    Ticket.prototype.getTicketId = function () {
        return this.ticketId;
    };
    Ticket.prototype.getTicketInTime = function () {
        return this.inTime;
    };
    Ticket.prototype.getTicketOutTime = function () {
        return this.outTime;
    };
    Ticket.prototype.updateTicketOutTime = function () {
        this.outTime = new Date("2025-06-29T05:57:34");
        return true;
    };
    Ticket.prototype.getTicketParkingSlot = function () {
        return this.parkingSlot;
    };
    Ticket.prototype.getTicketVehicle = function () {
        return this.vehicle;
    };
    Ticket.prototype.takePayment = function () {
        return this.isPaid = true;
    };
    return Ticket;
}());
exports.Ticket = Ticket;
