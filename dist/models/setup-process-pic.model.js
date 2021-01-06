"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcessPic = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
const setup_process_model_1 = require("./setup-process.model");
let SetupProcessPic = class SetupProcessPic extends repository_1.Entity {
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
], SetupProcessPic.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], SetupProcessPic.prototype, "pic", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], SetupProcessPic.prototype, "order_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => setup_process_model_1.SetupProcess, { name: 'SetupProcess' }),
    tslib_1.__metadata("design:type", Number)
], SetupProcessPic.prototype, "setup_process_id", void 0);
SetupProcessPic = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], SetupProcessPic);
exports.SetupProcessPic = SetupProcessPic;
//# sourceMappingURL=setup-process-pic.model.js.map