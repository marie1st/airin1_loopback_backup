"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupCost = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let SetupCost = class SetupCost extends repository_1.Entity {
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
], SetupCost.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], SetupCost.prototype, "cost", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], SetupCost.prototype, "pipe_size", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], SetupCost.prototype, "pipe_distance", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'orderProduct' }),
    tslib_1.__metadata("design:type", String)
], SetupCost.prototype, "order_id", void 0);
SetupCost = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], SetupCost);
exports.SetupCost = SetupCost;
//# sourceMappingURL=setup-cost.model.js.map