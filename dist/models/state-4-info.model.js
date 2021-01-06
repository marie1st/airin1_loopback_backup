"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State4Info = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let State4Info = class State4Info extends repository_1.Entity {
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
], State4Info.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], State4Info.prototype, "model", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], State4Info.prototype, "serial", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], State4Info.prototype, "warranty", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], State4Info.prototype, "clean_air_con", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], State4Info.prototype, "order_id", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => order_product_model_1.OrderProduct, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", order_product_model_1.OrderProduct)
], State4Info.prototype, "orderProduct", void 0);
State4Info = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], State4Info);
exports.State4Info = State4Info;
//# sourceMappingURL=state-4-info.model.js.map