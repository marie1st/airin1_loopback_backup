"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupFrabicProtect = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let SetupFrabicProtect = class SetupFrabicProtect extends repository_1.Entity {
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
], SetupFrabicProtect.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
    }),
    tslib_1.__metadata("design:type", Boolean)
], SetupFrabicProtect.prototype, "is_good", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], SetupFrabicProtect.prototype, "order_id", void 0);
SetupFrabicProtect = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], SetupFrabicProtect);
exports.SetupFrabicProtect = SetupFrabicProtect;
//# sourceMappingURL=setup-frabic-protect.model.js.map