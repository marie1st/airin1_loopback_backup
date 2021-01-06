"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupProcessController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupProcessController = class SetupProcessController {
    constructor(setupProcessRepository) {
        this.setupProcessRepository = setupProcessRepository;
    }
    async create(setupProcess) {
        return this.setupProcessRepository.create(setupProcess);
    }
    async count(where) {
        return this.setupProcessRepository.count(where);
    }
    async find(filter) {
        return this.setupProcessRepository.find(filter);
    }
    async updateAll(setupProcess, where) {
        return this.setupProcessRepository.updateAll(setupProcess, where);
    }
    async findById(id, filter) {
        return this.setupProcessRepository.findById(id, filter);
    }
    async updateById(id, setupProcess) {
        await this.setupProcessRepository.updateById(id, setupProcess);
    }
    async replaceById(id, setupProcess) {
        await this.setupProcessRepository.replaceById(id, setupProcess);
    }
    async deleteById(id) {
        await this.setupProcessRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-processes', {
        responses: {
            '200': {
                description: 'SetupProcess model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupProcess) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcess, {
                    title: 'NewSetupProcess',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupProcess]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-processes/count', {
        responses: {
            '200': {
                description: 'SetupProcess model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupProcess)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-processes', {
        responses: {
            '200': {
                description: 'Array of SetupProcess model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupProcess, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupProcess)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-processes', {
        responses: {
            '200': {
                description: 'SetupProcess PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcess, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupProcess)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupProcess, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-processes/{id}', {
        responses: {
            '200': {
                description: 'SetupProcess model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupProcess, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupProcess, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-processes/{id}', {
        responses: {
            '204': {
                description: 'SetupProcess PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcess, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupProcess]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-processes/{id}', {
        responses: {
            '204': {
                description: 'SetupProcess PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupProcess]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-processes/{id}', {
        responses: {
            '204': {
                description: 'SetupProcess DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupProcessController.prototype, "deleteById", null);
SetupProcessController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupProcessRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupProcessRepository])
], SetupProcessController);
exports.SetupProcessController = SetupProcessController;
//# sourceMappingURL=setup-process.controller.js.map