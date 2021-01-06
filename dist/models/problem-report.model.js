"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemReport = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const order_product_model_1 = require("./order-product.model");
let ProblemReport = class ProblemReport extends repository_1.Entity {
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
], ProblemReport.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProblemReport.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProblemReport.prototype, "order_id", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => order_product_model_1.OrderProduct, { keyTo: 'order_id' }),
    tslib_1.__metadata("design:type", Array)
], ProblemReport.prototype, "orderProducts", void 0);
ProblemReport = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProblemReport);
exports.ProblemReport = ProblemReport;
//# sourceMappingURL=problem-report.model.js.map