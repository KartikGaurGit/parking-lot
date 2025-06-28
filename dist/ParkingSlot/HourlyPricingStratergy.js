"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyParkingStratergy = void 0;
var HourlyParkingStratergy = /** @class */ (function () {
    function HourlyParkingStratergy() {
    }
    HourlyParkingStratergy.prototype.calculateTotalPrice = function (ticket, slotPrice) {
        var inTime = ticket.getTicketInTime();
        var outTime = ticket.getTicketOutTime();
        var totalHours = 1;
        console.log(inTime, outTime);
        if (inTime != null && outTime != null) {
            console.log("total hours>>", outTime.getTime(), inTime.getTime());
            totalHours = Math.round((outTime.getTime() - inTime.getTime()) / (1000 * 60 * 60));
        }
        return totalHours * slotPrice;
    };
    return HourlyParkingStratergy;
}());
exports.HourlyParkingStratergy = HourlyParkingStratergy;
