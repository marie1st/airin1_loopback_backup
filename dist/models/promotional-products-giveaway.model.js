"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalProductsGiveaway = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PromotionalProductsGiveaway = class PromotionalProductsGiveaway extends repository_1.Entity {
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
], PromotionalProductsGiveaway.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsGiveaway.prototype, "category", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsGiveaway.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], PromotionalProductsGiveaway.prototype, "price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PromotionalProductsGiveaway.prototype, "description", void 0);
PromotionalProductsGiveaway = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PromotionalProductsGiveaway);
exports.PromotionalProductsGiveaway = PromotionalProductsGiveaway;
//# sourceMappingURL=promotional-products-giveaway.model.js.map