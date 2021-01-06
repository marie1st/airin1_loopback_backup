"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationEmployeeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EducationEmployeeController = class EducationEmployeeController {
    constructor(educationRepository) {
        this.educationRepository = educationRepository;
    }
    async get(id, filter) {
        return this.educationRepository.employee(id).get(filter);
    }
    async create(id, employee) {
        return this.educationRepository.employee(id).create(employee);
    }
    async patch(id, employee, where) {
        return this.educationRepository.employee(id).patch(employee, where);
    }
    async delete(id, where) {
        return this.educationRepository.employee(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/educations/{id}/employee', {
        responses: {
            '200': {
                description: 'Education has one Employee',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Employee),
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
], EducationEmployeeController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/educations/{id}/employee', {
        responses: {
            '200': {
                description: 'Education model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Employee) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Employee, {
                    title: 'NewEmployeeInEducation',
                    exclude: ['employee_id'],
                    optional: ['educationId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationEmployeeController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/educations/{id}/employee', {
        responses: {
            '200': {
                description: 'Education.Employee PATCH success count',
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
], EducationEmployeeController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/educations/{id}/employee', {
        responses: {
            '200': {
                description: 'Education.Employee DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Employee))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationEmployeeController.prototype, "delete", null);
EducationEmployeeController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EducationRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EducationRepository])
], EducationEmployeeController);
exports.EducationEmployeeController = EducationEmployeeController;
//# sourceMappingURL=education-employee.controller.js.map