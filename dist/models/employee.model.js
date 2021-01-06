"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const emergency_contact_model_1 = require("./emergency-contact.model");
const education_model_1 = require("./education.model");
const department_model_1 = require("./department.model");
const role_model_1 = require("./role.model");
const employment_model_1 = require("./employment.model");
const employee_working_model_1 = require("./employee-working.model");
let Employee = class Employee extends repository_1.Entity {
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
], Employee.prototype, "first_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "last_name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "phone_number", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "birth_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "education_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "talent", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "etc", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "id_line", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "facebook", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "profile_pic", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "id_card_pic", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "address", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "country", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "province", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "subdistrict", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "postcode", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "start_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "salary", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "super_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "created_at", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "employee_id", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => emergency_contact_model_1.EmergencyContact),
    tslib_1.__metadata("design:type", emergency_contact_model_1.EmergencyContact)
], Employee.prototype, "emergencyContact", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => education_model_1.Education),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "educationId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => department_model_1.Department),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "departmentId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => role_model_1.Role),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "roleId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => employment_model_1.Employment),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "employmentId", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => employment_model_1.Employment, { name: 'Employment' }),
    tslib_1.__metadata("design:type", Number)
], Employee.prototype, "employement_id", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => employee_working_model_1.EmployeeWorking, { keyTo: 'employee_id' }),
    tslib_1.__metadata("design:type", Array)
], Employee.prototype, "employeeWorkings", void 0);
Employee = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.model.js.map