"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTestingInfo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let AirTestingInfo = class AirTestingInfo extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "remote_temp", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "fcu_temp_back", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "pipe_temp_back", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "elec_current", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "cdu_temp_back", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "liquid_pressure_back", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "phy_temp", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "fcu_temp_out", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "pipe_temp_out", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "elec_volt", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "cdu_temp_out", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AirTestingInfo.prototype, "liquid_pressure_out", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AirTestingInfo.prototype, "order_id", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => order_product_model_1.OrderProduct, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", Array)
], AirTestingInfo.prototype, "orderProducts", void 0);
AirTestingInfo = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AirTestingInfo);
exports.AirTestingInfo = AirTestingInfo;
//# sourceMappingURL=air-testing-info.model.js.map