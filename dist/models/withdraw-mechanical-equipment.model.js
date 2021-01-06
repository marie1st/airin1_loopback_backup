"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawMechanicalEquipment = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let WithdrawMechanicalEquipment = class WithdrawMechanicalEquipment extends repository_1.Entity {
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
], WithdrawMechanicalEquipment.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawMechanicalEquipment.prototype, "meid", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawMechanicalEquipment.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawMechanicalEquipment.prototype, "brand", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawMechanicalEquipment.prototype, "withdraw_amount", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawMechanicalEquipment.prototype, "classifier", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], WithdrawMechanicalEquipment.prototype, "is_approved", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawMechanicalEquipment.prototype, "employee_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], WithdrawMechanicalEquipment.prototype, "order_id", void 0);
WithdrawMechanicalEquipment = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], WithdrawMechanicalEquipment);
exports.WithdrawMechanicalEquipment = WithdrawMechanicalEquipment;
//# sourceMappingURL=withdraw-mechanical-equipment.model.js.map