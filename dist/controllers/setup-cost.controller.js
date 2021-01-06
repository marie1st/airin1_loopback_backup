"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupCostController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SetupCostController = class SetupCostController {
    constructor(setupCostRepository) {
        this.setupCostRepository = setupCostRepository;
    }
    async create(setupCost) {
        return this.setupCostRepository.create(setupCost);
    }
    async count(where) {
        return this.setupCostRepository.count(where);
    }
    async find(filter) {
        return this.setupCostRepository.find(filter);
    }
    async updateAll(setupCost, where) {
        return this.setupCostRepository.updateAll(setupCost, where);
    }
    async findById(id, filter) {
        return this.setupCostRepository.findById(id, filter);
    }
    async updateById(id, setupCost) {
        await this.setupCostRepository.updateById(id, setupCost);
    }
    async replaceById(id, setupCost) {
        await this.setupCostRepository.replaceById(id, setupCost);
    }
    async deleteById(id) {
        await this.setupCostRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/setup-costs', {
        responses: {
            '200': {
                description: 'SetupCost model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupCost) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupCost, {
                    title: 'NewSetupCost',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupCost]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/setup-costs/count', {
        responses: {
            '200': {
                description: 'SetupCost model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.SetupCost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/setup-costs', {
        responses: {
            '200': {
                description: 'Array of SetupCost model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.SetupCost, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.SetupCost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/setup-costs', {
        responses: {
            '200': {
                description: 'SetupCost PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupCost, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.SetupCost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.SetupCost, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/setup-costs/{id}', {
        responses: {
            '200': {
                description: 'SetupCost model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupCost, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.SetupCost, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/setup-costs/{id}', {
        responses: {
            '204': {
                description: 'SetupCost PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupCost, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupCost]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/setup-costs/{id}', {
        responses: {
            '204': {
                description: 'SetupCost PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.SetupCost]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/setup-costs/{id}', {
        responses: {
            '204': {
                description: 'SetupCost DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SetupCostController.prototype, "deleteById", null);
SetupCostController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SetupCostRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SetupCostRepository])
], SetupCostController);
exports.SetupCostController = SetupCostController;
//# sourceMappingURL=setup-cost.controller.js.map