"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentEmployeeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DepartmentEmployeeController = class DepartmentEmployeeController {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async find(id, filter) {
        return this.departmentRepository.employees(id).find(filter);
    }
    async create(id, employee) {
        return this.departmentRepository.employees(id).create(employee);
    }
    async patch(id, employee, where) {
        return this.departmentRepository.employees(id).patch(employee, where);
    }
    async delete(id, where) {
        return this.departmentRepository.employees(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/departments/{id}/employees', {
        responses: {
            '200': {
                description: 'Array of Department has many Employee',
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
], DepartmentEmployeeController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/departments/{id}/employees', {
        responses: {
            '200': {
                description: 'Department model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Employee) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Employee, {
                    title: 'NewEmployeeInDepartment',
                    exclude: ['employee_id'],
                    optional: ['departmentId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentEmployeeController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/departments/{id}/employees', {
        responses: {
            '200': {
                description: 'Department.Employee PATCH success count',
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
], DepartmentEmployeeController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/departments/{id}/employees', {
        responses: {
            '200': {
                description: 'Department.Employee DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Employee))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentEmployeeController.prototype, "delete", null);
DepartmentEmployeeController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DepartmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DepartmentRepository])
], DepartmentEmployeeController);
exports.DepartmentEmployeeController = DepartmentEmployeeController;
//# sourceMappingURL=department-employee.controller.js.map