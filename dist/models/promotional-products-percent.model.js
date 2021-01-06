"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalProductsPercent = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PromotionalProductsPercent = class PromotionalProductsPercent extends repository_1.Entity {
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
], PromotionalProductsPercent.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPercent.prototype, "category", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPercent.prototype, "btu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPercent.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], PromotionalProductsPercent.prototype, "percent_discount", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsPercent.prototype, "description", void 0);
PromotionalProductsPercent = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PromotionalProductsPercent);
exports.PromotionalProductsPercent = PromotionalProductsPercent;
//# sourceMappingURL=promotional-products-percent.model.js.map