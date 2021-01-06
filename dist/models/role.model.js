"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const employee_model_1 = require("./employee.model");
let Role = class Role extends repository_1.Entity {
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
], Role.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => employee_model_1.Employee),
    tslib_1.__metadata("design:type", Array)
], Role.prototype, "employees", void 0);
Role = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Role);
exports.Role = Role;
//# sourceMappingURL=role.model.js.map