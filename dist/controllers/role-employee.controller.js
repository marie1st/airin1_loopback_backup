"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEmployeeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RoleEmployeeController = class RoleEmployeeController {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async find(id, filter) {
        return this.roleRepository.employees(id).find(filter);
    }
    async create(id, employee) {
        return this.roleRepository.employees(id).create(employee);
    }
    async patch(id, employee, where) {
        return this.roleRepository.employees(id).patch(employee, where);
    }
    async delete(id, where) {
        return this.roleRepository.employees(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/roles/{id}/employees', {
        responses: {
            '200': {
                description: 'Array of Role has many Employee',
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
], RoleEmployeeController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/roles/{id}/employees', {
        responses: {
            '200': {
                description: 'Role model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Employee) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Employee, {
                    title: 'NewEmployeeInRole',
                    exclude: ['employee_id'],
                    optional: ['roleId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleEmployeeController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/roles/{id}/employees', {
        responses: {
            '200': {
                description: 'Role.Employee PATCH success count',
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
], RoleEmployeeController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/roles/{id}/employees', {
        responses: {
            '200': {
                description: 'Role.Employee DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Employee))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleEmployeeController.prototype, "delete", null);
RoleEmployeeController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RoleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoleRepository])
], RoleEmployeeController);
exports.RoleEmployeeController = RoleEmployeeController;
//# sourceMappingURL=role-employee.controller.js.map