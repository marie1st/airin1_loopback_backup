"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeWorking = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const employee_model_1 = require("./employee.model");
const order_product_model_1 = require("./order-product.model");
let EmployeeWorking = class EmployeeWorking extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EmployeeWorking.prototype, "date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], EmployeeWorking.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => employee_model_1.Employee, { name: 'Employee' }),
    tslib_1.__metadata("design:type", String)
], EmployeeWorking.prototype, "employee_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => order_product_model_1.OrderProduct, { name: 'OrderProduct' }),
    tslib_1.__metadata("design:type", String)
], EmployeeWorking.prototype, "order_id", void 0);
EmployeeWorking = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], EmployeeWorking);
exports.EmployeeWorking = EmployeeWorking;
//# sourceMappingURL=employee-working.model.js.map