"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DepartmentController = class DepartmentController {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async create(department) {
        return this.departmentRepository.create(department);
    }
    async count(where) {
        return this.departmentRepository.count(where);
    }
    async find(filter) {
        return this.departmentRepository.find(filter);
    }
    async updateAll(department, where) {
        return this.departmentRepository.updateAll(department, where);
    }
    async findById(id, filter) {
        return this.departmentRepository.findById(id, filter);
    }
    async updateById(id, department) {
        await this.departmentRepository.updateById(id, department);
    }
    async replaceById(id, department) {
        await this.departmentRepository.replaceById(id, department);
    }
    async deleteById(id) {
        await this.departmentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/departments', {
        responses: {
            '200': {
                description: 'Department model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Department) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Department, {
                    title: 'NewDepartment',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Department]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/departments/count', {
        responses: {
            '200': {
                description: 'Department model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Department)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/departments', {
        responses: {
            '200': {
                description: 'Array of Department model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Department, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Department)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/departments', {
        responses: {
            '200': {
                description: 'Department PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Department, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Department)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Department, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/departments/{id}', {
        responses: {
            '200': {
                description: 'Department model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Department, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Department, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/departments/{id}', {
        responses: {
            '204': {
                description: 'Department PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Department, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Department]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/departments/{id}', {
        responses: {
            '204': {
                description: 'Department PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Department]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/departments/{id}', {
        responses: {
            '204': {
                description: 'Department DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "deleteById", null);
DepartmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DepartmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DepartmentRepository])
], DepartmentController);
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controller.js.map