"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoWheelerParkingStratergy = void 0;
var TwoWheelerParkingStratergy = /** @class */ (function () {
    function TwoWheelerParkingStratergy() {
        this.availableSlot = null;
    }
    TwoWheelerParkingStratergy.prototype.findParking = function (parkingSlots) {
        var _this = this;
        parkingSlots.forEach(function (parkingSlot) {
            if (parkingSlot.checkIsEmpty())
                _this.availableSlot = parkingSlot;
        });
        return this.availableSlot;
    };
    return TwoWheelerParkingStratergy;
}());
exports.TwoWheelerParkingStratergy = TwoWheelerParkingStratergy;
