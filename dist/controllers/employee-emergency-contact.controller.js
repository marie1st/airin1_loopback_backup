"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeEmergencyContactController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmployeeEmergencyContactController = class EmployeeEmergencyContactController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async get(id, filter) {
        return this.employeeRepository.emergencyContact(id).get(filter);
    }
    async create(id, emergencyContact) {
        return this.employeeRepository.emergencyContact(id).create(emergencyContact);
    }
    async patch(id, emergencyContact, where) {
        return this.employeeRepository.emergencyContact(id).patch(emergencyContact, where);
    }
    async delete(id, where) {
        return this.employeeRepository.emergencyContact(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/employees/{id}/emergency-contact', {
        responses: {
            '200': {
                description: 'Employee has one EmergencyContact',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.EmergencyContact),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeEmergencyContactController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/employees/{id}/emergency-contact', {
        responses: {
            '200': {
                description: 'Employee model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.EmergencyContact) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.EmergencyContact, {
                    title: 'NewEmergencyContactInEmployee',
                    exclude: ['id'],
                    optional: ['employeeId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeEmergencyContactController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/employees/{id}/emergency-contact', {
        responses: {
            '200': {
                description: 'Employee.EmergencyContact PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.EmergencyContact, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.EmergencyContact))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeEmergencyContactController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/employees/{id}/emergency-contact', {
        responses: {
            '200': {
                description: 'Employee.EmergencyContact DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.EmergencyContact))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmployeeEmergencyContactController.prototype, "delete", null);
EmployeeEmergencyContactController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EmployeeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmployeeRepository])
], EmployeeEmergencyContactController);
exports.EmployeeEmergencyContactController = EmployeeEmergencyContactController;
//# sourceMappingURL=employee-emergency-contact.controller.js.map