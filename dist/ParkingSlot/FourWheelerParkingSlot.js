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
exports.FourWheelerParkingSlot = void 0;
var nanoid_1 = require("nanoid");
var ParkingSlot_1 = require("./ParkingSlot");
var MinuteParkingStratergy_1 = require("./MinuteParkingStratergy");
var FourWheelerParkingSlot = /** @class */ (function (_super) {
    __extends(FourWheelerParkingSlot, _super);
    function FourWheelerParkingSlot() {
        var _this = _super.call(this, new MinuteParkingStratergy_1.MinuteParkingStratergy()) || this;
        _this.price = 100;
        _this.vehicle = null;
        _this.id = nanoid_1.nanoid(10);
        _this.isEmpty = true;
        _this.type = "FOUR_WHEELER";
        return _this;
    }
    FourWheelerParkingSlot.prototype.parkVehicle = function (vehicle) {
        this.vehicle = vehicle;
        this.isEmpty = false;
    };
    FourWheelerParkingSlot.prototype.removeVehicle = function () {
        this.vehicle = null;
        this.isEmpty = true;
    };
    FourWheelerParkingSlot.prototype.getBasePrice = function () {
        return this.price;
    };
    FourWheelerParkingSlot.prototype.checkIsEmpty = function () {
        return this.isEmpty;
    };
    return FourWheelerParkingSlot;
}(ParkingSlot_1.ParkingSlot));
exports.FourWheelerParkingSlot = FourWheelerParkingSlot;
