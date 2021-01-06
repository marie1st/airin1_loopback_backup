"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacummTestController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VacummTestController = class VacummTestController {
    constructor(vacummTestRepository) {
        this.vacummTestRepository = vacummTestRepository;
    }
    async create(vacummTest) {
        return this.vacummTestRepository.create(vacummTest);
    }
    async count(where) {
        return this.vacummTestRepository.count(where);
    }
    async find(filter) {
        return this.vacummTestRepository.find(filter);
    }
    async updateAll(vacummTest, where) {
        return this.vacummTestRepository.updateAll(vacummTest, where);
    }
    async findById(id, filter) {
        return this.vacummTestRepository.findById(id, filter);
    }
    async updateById(id, vacummTest) {
        await this.vacummTestRepository.updateById(id, vacummTest);
    }
    async replaceById(id, vacummTest) {
        await this.vacummTestRepository.replaceById(id, vacummTest);
    }
    async deleteById(id) {
        await this.vacummTestRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/vacumm-tests', {
        responses: {
            '200': {
                description: 'VacummTest model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.VacummTest) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.VacummTest, {
                    title: 'NewVacummTest',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.VacummTest]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/vacumm-tests/count', {
        responses: {
            '200': {
                description: 'VacummTest model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.VacummTest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/vacumm-tests', {
        responses: {
            '200': {
                description: 'Array of VacummTest model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.VacummTest, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.VacummTest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/vacumm-tests', {
        responses: {
            '200': {
                description: 'VacummTest PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.VacummTest, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.VacummTest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.VacummTest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/vacumm-tests/{id}', {
        responses: {
            '200': {
                description: 'VacummTest model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.VacummTest, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.VacummTest, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/vacumm-tests/{id}', {
        responses: {
            '204': {
                description: 'VacummTest PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.VacummTest, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.VacummTest]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/vacumm-tests/{id}', {
        responses: {
            '204': {
                description: 'VacummTest PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.VacummTest]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/vacumm-tests/{id}', {
        responses: {
            '204': {
                description: 'VacummTest DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], VacummTestController.prototype, "deleteById", null);
VacummTestController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.VacummTestRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VacummTestRepository])
], VacummTestController);
exports.VacummTestController = VacummTestController;
//# sourceMappingURL=vacumm-test.controller.js.map