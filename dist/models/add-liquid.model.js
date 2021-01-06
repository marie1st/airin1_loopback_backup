"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLiquid = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let AddLiquid = class AddLiquid extends repository_1.Entity {
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
], AddLiquid.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AddLiquid.prototype, "liquid_to_sys", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddLiquid.prototype, "is_pass", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddLiquid.prototype, "is_standard", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], AddLiquid.prototype, "order_id", void 0);
AddLiquid = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AddLiquid);
exports.AddLiquid = AddLiquid;
//# sourceMappingURL=add-liquid.model.js.map