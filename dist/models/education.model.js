"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const employee_model_1 = require("./employee.model");
let Education = class Education extends repository_1.Entity {
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
], Education.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Education.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => employee_model_1.Employee, { keyFrom: 'id' }),
    tslib_1.__metadata("design:type", employee_model_1.Employee)
], Education.prototype, "employee", void 0);
Education = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Education);
exports.Education = Education;
//# sourceMappingURL=education.model.js.map