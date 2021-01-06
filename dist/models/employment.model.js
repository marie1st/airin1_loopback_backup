"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employment = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const employee_model_1 = require("./employee.model");
let Employment = class Employment extends repository_1.Entity {
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
], Employment.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Employment.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => employee_model_1.Employee),
    tslib_1.__metadata("design:type", Array)
], Employment.prototype, "employees", void 0);
Employment = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Employment);
exports.Employment = Employment;
//# sourceMappingURL=employment.model.js.map