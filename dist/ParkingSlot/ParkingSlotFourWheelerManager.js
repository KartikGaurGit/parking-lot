"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSlotFourWheelerManager = void 0;
var FourWheelerParkingSlot_1 = require("./FourWheelerParkingSlot");
var FourWheelerParkingStratergy_1 = require("./FourWheelerParkingStratergy");
var ParkingSlotManager_1 = require("./ParkingSlotManager");
var ParkingSlotFourWheelerManager = /** @class */ (function (_super) {
    __extends(ParkingSlotFourWheelerManager, _super);
    function ParkingSlotFourWheelerManager() {
        var _this = this;
        var parkingSlots = [];
        for (var i = 0; i < 10; i++) {
            parkingSlots.push(new FourWheelerParkingSlot_1.FourWheelerParkingSlot());
        }
        _this = _super.call(this, parkingSlots, (new FourWheelerParkingStratergy_1.FourWheelerParkingStratergy())) || this;
        return _this;
    }
    return ParkingSlotFourWheelerManager;
}(ParkingSlotManager_1.ParkingSlotManager));
exports.ParkingSlotFourWheelerManager = ParkingSlotFourWheelerManager;
