"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FourWheelerParkingStratergy = void 0;
var FourWheelerParkingStratergy = /** @class */ (function () {
    function FourWheelerParkingStratergy() {
        this.availableSlot = null;
    }
    FourWheelerParkingStratergy.prototype.findParking = function (parkingSlots) {
        var _this = this;
        parkingSlots.forEach(function (parkingSlot) {
            if (parkingSlot.checkIsEmpty())
                _this.availableSlot = parkingSlot;
        });
        return this.availableSlot;
    };
    return FourWheelerParkingStratergy;
}());
exports.FourWheelerParkingStratergy = FourWheelerParkingStratergy;
