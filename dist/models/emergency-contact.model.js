"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyContact = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const employee_model_1 = require("./employee.model");
let EmergencyContact = class EmergencyContact extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EmergencyContact.prototype, "first_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EmergencyContact.prototype, "last_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EmergencyContact.prototype, "phone_number", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], EmergencyContact.prototype, "relationship", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], EmergencyContact.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => employee_model_1.Employee, { name: 'Employee' }),
    tslib_1.__metadata("design:type", String)
], EmergencyContact.prototype, "employee_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], EmergencyContact.prototype, "employeeId", void 0);
EmergencyContact = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], EmergencyContact);
exports.EmergencyContact = EmergencyContact;
//# sourceMappingURL=emergency-contact.model.js.map