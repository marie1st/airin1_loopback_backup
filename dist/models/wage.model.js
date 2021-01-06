"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wage = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const product_n_price_model_1 = require("./product-n-price.model");
let Wage = class Wage extends repository_1.Entity {
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
], Wage.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Wage.prototype, "category", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Wage.prototype, "btu", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Wage.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Wage.prototype, "price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Wage.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => product_n_price_model_1.ProductNPrice, { keyTo: 'wage_id' }),
    tslib_1.__metadata("design:type", product_n_price_model_1.ProductNPrice)
], Wage.prototype, "productNPrice", void 0);
Wage = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Wage);
exports.Wage = Wage;
//# sourceMappingURL=wage.model.js.map