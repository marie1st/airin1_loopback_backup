"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const employee_model_1 = require("./employee.model");
let Department = class Department extends repository_1.Entity {
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
], Department.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => employee_model_1.Employee),
    tslib_1.__metadata("design:type", Array)
], Department.prototype, "employees", void 0);
Department = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Department);
exports.Department = Department;
//# sourceMappingURL=department.model.js.map