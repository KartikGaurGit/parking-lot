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
exports.TwoWheelerParkingSlot = void 0;
var HourlyPricingStratergy_1 = require("./HourlyPricingStratergy");
var ParkingSlot_1 = require("./ParkingSlot");
var nanoid_1 = require("nanoid");
var TwoWheelerParkingSlot = /** @class */ (function (_super) {
    __extends(TwoWheelerParkingSlot, _super);
    function TwoWheelerParkingSlot() {
        var _this = _super.call(this, new HourlyPricingStratergy_1.HourlyParkingStratergy()) || this;
        _this.price = 100;
        _this.vehicle = null;
        _this.id = nanoid_1.nanoid(10);
        _this.isEmpty = true;
        _this.type = "TWO_WHEELER";
        return _this;
    }
    TwoWheelerParkingSlot.prototype.parkVehicle = function (vehicle) {
        this.vehicle = vehicle;
        this.isEmpty = false;
    };
    TwoWheelerParkingSlot.prototype.removeVehicle = function () {
        this.vehicle = null;
        this.isEmpty = true;
    };
    TwoWheelerParkingSlot.prototype.checkIsEmpty = function () {
        return this.isEmpty;
    };
    TwoWheelerParkingSlot.prototype.getBasePrice = function () {
        return this.price;
    };
    return TwoWheelerParkingSlot;
}(ParkingSlot_1.ParkingSlot));
exports.TwoWheelerParkingSlot = TwoWheelerParkingSlot;
