"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSlot = void 0;
var ParkingSlot = /** @class */ (function () {
    function ParkingSlot(pricingStratergy) {
        this.pricingStratergy = pricingStratergy;
    }
    ParkingSlot.prototype.getPrice = function (ticket) {
        return this.pricingStratergy.calculateTotalPrice(ticket, this.getBasePrice());
    };
    return ParkingSlot;
}());
exports.ParkingSlot = ParkingSlot;
