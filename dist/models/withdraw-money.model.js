"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawMoney = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let WithdrawMoney = class WithdrawMoney extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WithdrawMoney.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], WithdrawMoney.prototype, "date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], WithdrawMoney.prototype, "amount_of_money", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], WithdrawMoney.prototype, "is_approved", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], WithdrawMoney.prototype, "order_id", void 0);
WithdrawMoney = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], WithdrawMoney);
exports.WithdrawMoney = WithdrawMoney;
//# sourceMappingURL=withdraw-money.model.js.map