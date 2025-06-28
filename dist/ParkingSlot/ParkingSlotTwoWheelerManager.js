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
exports.ParkingSlotTwoWheelerManager = void 0;
var ParkingSlotManager_1 = require("./ParkingSlotManager");
var TwoWheelerParkingSlot_1 = require("./TwoWheelerParkingSlot");
var TwoWheelerParkingStratergy_1 = require("./TwoWheelerParkingStratergy");
var ParkingSlotTwoWheelerManager = /** @class */ (function (_super) {
    __extends(ParkingSlotTwoWheelerManager, _super);
    function ParkingSlotTwoWheelerManager() {
        var _this = this;
        if (ParkingSlotTwoWheelerManager.parkinSlotsList.length === 0) {
            for (var i = 0; i < 10; i++) {
                ParkingSlotTwoWheelerManager.parkinSlotsList.push(new TwoWheelerParkingSlot_1.TwoWheelerParkingSlot());
            }
        }
        _this = _super.call(this, ParkingSlotTwoWheelerManager.parkinSlotsList, (new TwoWheelerParkingStratergy_1.TwoWheelerParkingStratergy())) || this;
        return _this;
    }
    ParkingSlotTwoWheelerManager.parkinSlotsList = [];
    return ParkingSlotTwoWheelerManager;
}(ParkingSlotManager_1.ParkingSlotManager));
exports.ParkingSlotTwoWheelerManager = ParkingSlotTwoWheelerManager;
