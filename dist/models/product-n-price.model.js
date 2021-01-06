"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNPrice = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const wage_model_1 = require("./wage.model");
const item_price_model_1 = require("./item-price.model");
const premium_setup_cost_model_1 = require("./premium-setup-cost.model");
let ProductNPrice = class ProductNPrice extends repository_1.Entity {
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
], ProductNPrice.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductNPrice.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductNPrice.prototype, "brand", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductNPrice.prototype, "btu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "selling_price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "promotion_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "cost", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "other_cost", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "total_cost", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "profit", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "profit_percent", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => wage_model_1.Wage, { name: 'Wage' }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "wage_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => item_price_model_1.ItemPrice, { name: 'ItemPrice' }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "item_price_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => premium_setup_cost_model_1.PremiumSetupCost, { name: 'PremiiumSetupCost' }),
    tslib_1.__metadata("design:type", Number)
], ProductNPrice.prototype, "premium_setup_id", void 0);
ProductNPrice = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProductNPrice);
exports.ProductNPrice = ProductNPrice;
//# sourceMappingURL=product-n-price.model.js.map