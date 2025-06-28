"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinuteParkingStratergy = void 0;
var MinuteParkingStratergy = /** @class */ (function () {
    function MinuteParkingStratergy() {
    }
    MinuteParkingStratergy.prototype.calculateTotalPrice = function (ticket, slotPrice) {
        var inTime = ticket.getTicketInTime();
        var outTime = ticket.getTicketOutTime();
        var totalMinutes = 1;
        if (inTime != null && outTime != null) {
            totalMinutes = Math.round((outTime.getTime() - inTime.getTime()) / (1000 * 60));
        }
        return totalMinutes * slotPrice;
    };
    return MinuteParkingStratergy;
}());
exports.MinuteParkingStratergy = MinuteParkingStratergy;
