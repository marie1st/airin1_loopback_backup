"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EducationController = class EducationController {
    constructor(educationRepository) {
        this.educationRepository = educationRepository;
    }
    async create(education) {
        return this.educationRepository.create(education);
    }
    async count(where) {
        return this.educationRepository.count(where);
    }
    async find(filter) {
        return this.educationRepository.find(filter);
    }
    async updateAll(education, where) {
        return this.educationRepository.updateAll(education, where);
    }
    async findById(id, filter) {
        return this.educationRepository.findById(id, filter);
    }
    async updateById(id, education) {
        await this.educationRepository.updateById(id, education);
    }
    async replaceById(id, education) {
        await this.educationRepository.replaceById(id, education);
    }
    async deleteById(id) {
        await this.educationRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/educations', {
        responses: {
            '200': {
                description: 'Education model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Education) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Education, {
                    title: 'NewEducation',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Education]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/educations/count', {
        responses: {
            '200': {
                description: 'Education model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Education)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/educations', {
        responses: {
            '200': {
                description: 'Array of Education model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Education, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Education)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/educations', {
        responses: {
            '200': {
                description: 'Education PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Education, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Education)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Education, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/educations/{id}', {
        responses: {
            '200': {
                description: 'Education model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Education, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Education, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/educations/{id}', {
        responses: {
            '204': {
                description: 'Education PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Education, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Education]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/educations/{id}', {
        responses: {
            '204': {
                description: 'Education PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Education]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/educations/{id}', {
        responses: {
            '204': {
                description: 'Education DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EducationController.prototype, "deleteById", null);
EducationController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EducationRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EducationRepository])
], EducationController);
exports.EducationController = EducationController;
//# sourceMappingURL=education.controller.js.map