"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSlotManager = void 0;
var ParkingSlotManager = /** @class */ (function () {
    function ParkingSlotManager(parkingSlots, parkingStratergy) {
        this.parkingSlots = parkingSlots;
        this.parkingStratergy = parkingStratergy;
    }
    ParkingSlotManager.prototype.getParkingSlot = function (vehicle) {
        return this.parkingStratergy.findParking(this.parkingSlots);
    };
    ParkingSlotManager.prototype.assignParkingSlot = function (parkingSlot, vehicle) {
        if (parkingSlot.checkIsEmpty())
            parkingSlot.parkVehicle(vehicle);
        return !parkingSlot.checkIsEmpty();
    };
    ParkingSlotManager.prototype.clearParkingSlot = function (parkingSlot) {
        parkingSlot.removeVehicle();
        return parkingSlot.checkIsEmpty();
    };
    return ParkingSlotManager;
}());
exports.ParkingSlotManager = ParkingSlotManager;
