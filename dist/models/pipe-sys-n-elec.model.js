"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipeSysNElec = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let PipeSysNElec = class PipeSysNElec extends repository_1.Entity {
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
], PipeSysNElec.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], PipeSysNElec.prototype, "flaring_is_good", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], PipeSysNElec.prototype, "pipe_size_true", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], PipeSysNElec.prototype, "wire_true", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], PipeSysNElec.prototype, "order_id", void 0);
PipeSysNElec = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PipeSysNElec);
exports.PipeSysNElec = PipeSysNElec;
//# sourceMappingURL=pipe-sys-n-elec.model.js.map