"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalProductsGiveawayController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PromotionalProductsGiveawayController = class PromotionalProductsGiveawayController {
    constructor(promotionalProductsGiveawayRepository) {
        this.promotionalProductsGiveawayRepository = promotionalProductsGiveawayRepository;
    }
    async create(promotionalProductsGiveaway) {
        return this.promotionalProductsGiveawayRepository.create(promotionalProductsGiveaway);
    }
    async count(where) {
        return this.promotionalProductsGiveawayRepository.count(where);
    }
    async find(filter) {
        return this.promotionalProductsGiveawayRepository.find(filter);
    }
    async updateAll(promotionalProductsGiveaway, where) {
        return this.promotionalProductsGiveawayRepository.updateAll(promotionalProductsGiveaway, where);
    }
    async findById(id, filter) {
        return this.promotionalProductsGiveawayRepository.findById(id, filter);
    }
    async updateById(id, promotionalProductsGiveaway) {
        await this.promotionalProductsGiveawayRepository.updateById(id, promotionalProductsGiveaway);
    }
    async replaceById(id, promotionalProductsGiveaway) {
        await this.promotionalProductsGiveawayRepository.replaceById(id, promotionalProductsGiveaway);
    }
    async deleteById(id) {
        await this.promotionalProductsGiveawayRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/promotional-products-giveaways', {
        responses: {
            '200': {
                description: 'PromotionalProductsGiveaway model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsGiveaway) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsGiveaway, {
                    title: 'NewPromotionalProductsGiveaway',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PromotionalProductsGiveaway]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-giveaways/count', {
        responses: {
            '200': {
                description: 'PromotionalProductsGiveaway model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PromotionalProductsGiveaway)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-giveaways', {
        responses: {
            '200': {
                description: 'Array of PromotionalProductsGiveaway model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.PromotionalProductsGiveaway, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PromotionalProductsGiveaway)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/promotional-products-giveaways', {
        responses: {
            '200': {
                description: 'PromotionalProductsGiveaway PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsGiveaway, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PromotionalProductsGiveaway)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PromotionalProductsGiveaway, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-giveaways/{id}', {
        responses: {
            '200': {
                description: 'PromotionalProductsGiveaway model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsGiveaway, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PromotionalProductsGiveaway, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/promotional-products-giveaways/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsGiveaway PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsGiveaway, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PromotionalProductsGiveaway]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/promotional-products-giveaways/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsGiveaway PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PromotionalProductsGiveaway]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/promotional-products-giveaways/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsGiveaway DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsGiveawayController.prototype, "deleteById", null);
PromotionalProductsGiveawayController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PromotionalProductsGiveawayRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PromotionalProductsGiveawayRepository])
], PromotionalProductsGiveawayController);
exports.PromotionalProductsGiveawayController = PromotionalProductsGiveawayController;
//# sourceMappingURL=promotional-products-giveaway.controller.js.map