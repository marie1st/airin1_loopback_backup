"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupState3 = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let SetupState3 = class SetupState3 extends repository_1.Entity {
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
], SetupState3.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], SetupState3.prototype, "pipe_cover_good", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], SetupState3.prototype, "sewer_good", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], SetupState3.prototype, "is_cleanness", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], SetupState3.prototype, "order_id", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => order_product_model_1.OrderProduct, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", Array)
], SetupState3.prototype, "orderProducts", void 0);
SetupState3 = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], SetupState3);
exports.SetupState3 = SetupState3;
//# sourceMappingURL=setup-state3.model.js.map