"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawUsedEquipment = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let WithdrawUsedEquipment = class WithdrawUsedEquipment extends repository_1.Entity {
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
], WithdrawUsedEquipment.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawUsedEquipment.prototype, "ueid", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawUsedEquipment.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawUsedEquipment.prototype, "brand", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WithdrawUsedEquipment.prototype, "withdraw_amount", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawUsedEquipment.prototype, "classifier", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], WithdrawUsedEquipment.prototype, "is_approved", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawUsedEquipment.prototype, "employee_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], WithdrawUsedEquipment.prototype, "order_id", void 0);
WithdrawUsedEquipment = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], WithdrawUsedEquipment);
exports.WithdrawUsedEquipment = WithdrawUsedEquipment;
//# sourceMappingURL=withdraw-used-equipment.model.js.map