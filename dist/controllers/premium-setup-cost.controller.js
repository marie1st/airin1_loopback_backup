"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumSetupCostController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PremiumSetupCostController = class PremiumSetupCostController {
    constructor(premiumSetupCostRepository) {
        this.premiumSetupCostRepository = premiumSetupCostRepository;
    }
    async create(premiumSetupCost) {
        return this.premiumSetupCostRepository.create(premiumSetupCost);
    }
    async count(where) {
        return this.premiumSetupCostRepository.count(where);
    }
    async find(filter) {
        return this.premiumSetupCostRepository.find(filter);
    }
    async updateAll(premiumSetupCost, where) {
        return this.premiumSetupCostRepository.updateAll(premiumSetupCost, where);
    }
    async findById(id, filter) {
        return this.premiumSetupCostRepository.findById(id, filter);
    }
    async updateById(id, premiumSetupCost) {
        await this.premiumSetupCostRepository.updateById(id, premiumSetupCost);
    }
    async replaceById(id, premiumSetupCost) {
        await this.premiumSetupCostRepository.replaceById(id, premiumSetupCost);
    }
    async deleteById(id) {
        await this.premiumSetupCostRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/premium-setup-costs', {
        responses: {
            '200': {
                description: 'PremiumSetupCost model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PremiumSetupCost) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PremiumSetupCost, {
                    title: 'NewPremiumSetupCost',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PremiumSetupCost]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/premium-setup-costs/count', {
        responses: {
            '200': {
                description: 'PremiumSetupCost model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PremiumSetupCost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/premium-setup-costs', {
        responses: {
            '200': {
                description: 'Array of PremiumSetupCost model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.PremiumSetupCost, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PremiumSetupCost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/premium-setup-costs', {
        responses: {
            '200': {
                description: 'PremiumSetupCost PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PremiumSetupCost, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PremiumSetupCost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PremiumSetupCost, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/premium-setup-costs/{id}', {
        responses: {
            '200': {
                description: 'PremiumSetupCost model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.PremiumSetupCost, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PremiumSetupCost, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/premium-setup-costs/{id}', {
        responses: {
            '204': {
                description: 'PremiumSetupCost PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PremiumSetupCost, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PremiumSetupCost]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/premium-setup-costs/{id}', {
        responses: {
            '204': {
                description: 'PremiumSetupCost PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PremiumSetupCost]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/premium-setup-costs/{id}', {
        responses: {
            '204': {
                description: 'PremiumSetupCost DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostController.prototype, "deleteById", null);
PremiumSetupCostController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PremiumSetupCostRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PremiumSetupCostRepository])
], PremiumSetupCostController);
exports.PremiumSetupCostController = PremiumSetupCostController;
//# sourceMappingURL=premium-setup-cost.controller.js.map