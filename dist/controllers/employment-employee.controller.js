"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentEmployeeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmploymentEmployeeController = class EmploymentEmployeeController {
    constructor(employmentRepository) {
        this.employmentRepository = employmentRepository;
    }
    async find(id, filter) {
        return this.employmentRepository.employees(id).find(filter);
    }
    async create(id, employee) {
        return this.employmentRepository.employees(id).create(employee);
    }
    async patch(id, employee, where) {
        return this.employmentRepository.employees(id).patch(employee, where);
    }
    async delete(id, where) {
        return this.employmentRepository.employees(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/employments/{id}/employees', {
        responses: {
            '200': {
                description: 'Array of Employment has many Employee',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Employee) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmploymentEmployeeController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/employments/{id}/employees', {
        responses: {
            '200': {
                description: 'Employment model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Employee) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Employee, {
                    title: 'NewEmployeeInEmployment',
                    exclude: ['employee_id'],
                    optional: ['employement_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmploymentEmployeeController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/employments/{id}/employees', {
        responses: {
            '200': {
                description: 'Employment.Employee PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Employee, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Employee))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmploymentEmployeeController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/employments/{id}/employees', {
        responses: {
            '200': {
                description: 'Employment.Employee DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Employee))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmploymentEmployeeController.prototype, "delete", null);
EmploymentEmployeeController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EmploymentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmploymentRepository])
], EmploymentEmployeeController);
exports.EmploymentEmployeeController = EmploymentEmployeeController;
//# sourceMappingURL=employment-employee.controller.js.map