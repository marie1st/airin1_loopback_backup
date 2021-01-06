"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemReportController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProblemReportController = class ProblemReportController {
    constructor(problemReportRepository) {
        this.problemReportRepository = problemReportRepository;
    }
    async create(problemReport) {
        return this.problemReportRepository.create(problemReport);
    }
    async count(where) {
        return this.problemReportRepository.count(where);
    }
    async find(filter) {
        return this.problemReportRepository.find(filter);
    }
    async updateAll(problemReport, where) {
        return this.problemReportRepository.updateAll(problemReport, where);
    }
    async findById(id, filter) {
        return this.problemReportRepository.findById(id, filter);
    }
    async updateById(id, problemReport) {
        await this.problemReportRepository.updateById(id, problemReport);
    }
    async replaceById(id, problemReport) {
        await this.problemReportRepository.replaceById(id, problemReport);
    }
    async deleteById(id) {
        await this.problemReportRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/problem-reports', {
        responses: {
            '200': {
                description: 'ProblemReport model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ProblemReport) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProblemReport, {
                    title: 'NewProblemReport',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProblemReport]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/problem-reports/count', {
        responses: {
            '200': {
                description: 'ProblemReport model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ProblemReport)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/problem-reports', {
        responses: {
            '200': {
                description: 'Array of ProblemReport model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ProblemReport, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ProblemReport)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/problem-reports', {
        responses: {
            '200': {
                description: 'ProblemReport PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProblemReport, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ProblemReport)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProblemReport, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/problem-reports/{id}', {
        responses: {
            '200': {
                description: 'ProblemReport model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ProblemReport, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ProblemReport, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/problem-reports/{id}', {
        responses: {
            '204': {
                description: 'ProblemReport PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProblemReport, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ProblemReport]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/problem-reports/{id}', {
        responses: {
            '204': {
                description: 'ProblemReport PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ProblemReport]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/problem-reports/{id}', {
        responses: {
            '204': {
                description: 'ProblemReport DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProblemReportController.prototype, "deleteById", null);
ProblemReportController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ProblemReportRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProblemReportRepository])
], ProblemReportController);
exports.ProblemReportController = ProblemReportController;
//# sourceMappingURL=problem-report.controller.js.map