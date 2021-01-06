"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacummTest = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let VacummTest = class VacummTest extends repository_1.Entity {
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
], VacummTest.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], VacummTest.prototype, "is_pass", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], VacummTest.prototype, "order_id", void 0);
VacummTest = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], VacummTest);
exports.VacummTest = VacummTest;
//# sourceMappingURL=vacumm-test.model.js.map