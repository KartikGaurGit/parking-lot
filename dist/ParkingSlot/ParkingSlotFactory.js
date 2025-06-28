"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSlotFactory = void 0;
var ParkingSlotTwoWheelerManager_1 = require("./ParkingSlotTwoWheelerManager");
var ParkingSlotFactory = /** @class */ (function () {
    function ParkingSlotFactory() {
        this.getParkingSlotManager = function (vehicle, type) {
            return new ParkingSlotTwoWheelerManager_1.ParkingSlotTwoWheelerManager();
        };
    }
    return ParkingSlotFactory;
}());
exports.ParkingSlotFactory = ParkingSlotFactory;
