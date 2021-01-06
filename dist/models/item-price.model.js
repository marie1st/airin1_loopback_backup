"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPrice = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const product_n_price_model_1 = require("./product-n-price.model");
let ItemPrice = class ItemPrice extends repository_1.Entity {
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
], ItemPrice.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ItemPrice.prototype, "category", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ItemPrice.prototype, "btu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ItemPrice.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ItemPrice.prototype, "price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ItemPrice.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => product_n_price_model_1.ProductNPrice, { keyTo: 'item_price_id' }),
    tslib_1.__metadata("design:type", product_n_price_model_1.ProductNPrice)
], ItemPrice.prototype, "productNPrice", void 0);
ItemPrice = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ItemPrice);
exports.ItemPrice = ItemPrice;
//# sourceMappingURL=item-price.model.js.map