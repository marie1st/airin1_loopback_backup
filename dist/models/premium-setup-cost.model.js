"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumSetupCost = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const product_n_price_model_1 = require("./product-n-price.model");
let PremiumSetupCost = class PremiumSetupCost extends repository_1.Entity {
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
], PremiumSetupCost.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PremiumSetupCost.prototype, "category", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PremiumSetupCost.prototype, "btu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PremiumSetupCost.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], PremiumSetupCost.prototype, "price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PremiumSetupCost.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => product_n_price_model_1.ProductNPrice, { keyTo: 'premium_setup_id' }),
    tslib_1.__metadata("design:type", product_n_price_model_1.ProductNPrice)
], PremiumSetupCost.prototype, "productNPrice", void 0);
PremiumSetupCost = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], PremiumSetupCost);
exports.PremiumSetupCost = PremiumSetupCost;
//# sourceMappingURL=premium-setup-cost.model.js.map