"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalProductsPrice = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PromotionalProductsPrice = class PromotionalProductsPrice extends repository_1.Entity {
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
], PromotionalProductsPrice.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPrice.prototype, "category", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPrice.prototype, "btu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPrice.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], PromotionalProductsPrice.prototype, "price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPrice.prototype, "description", void 0);
PromotionalProductsPrice = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PromotionalProductsPrice);
exports.PromotionalProductsPrice = PromotionalProductsPrice;
//# sourceMappingURL=promotional-products-price.model.js.map