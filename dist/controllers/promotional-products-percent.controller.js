"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalProductsPercentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PromotionalProductsPercentController = class PromotionalProductsPercentController {
    constructor(promotionalProductsPercentRepository) {
        this.promotionalProductsPercentRepository = promotionalProductsPercentRepository;
    }
    async create(promotionalProductsPercent) {
        return this.promotionalProductsPercentRepository.create(promotionalProductsPercent);
    }
    async count(where) {
        return this.promotionalProductsPercentRepository.count(where);
    }
    async find(filter) {
        return this.promotionalProductsPercentRepository.find(filter);
    }
    async updateAll(promotionalProductsPercent, where) {
        return this.promotionalProductsPercentRepository.updateAll(promotionalProductsPercent, where);
    }
    async findById(id, filter) {
        return this.promotionalProductsPercentRepository.findById(id, filter);
    }
    async updateById(id, promotionalProductsPercent) {
        await this.promotionalProductsPercentRepository.updateById(id, promotionalProductsPercent);
    }
    async replaceById(id, promotionalProductsPercent) {
        await this.promotionalProductsPercentRepository.replaceById(id, promotionalProductsPercent);
    }
    async deleteById(id) {
        await this.promotionalProductsPercentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/promotional-products-percents', {
        responses: {
            '200': {
                description: 'PromotionalProductsPercent model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPercent) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPercent, {
                    title: 'NewPromotionalProductsPercent',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PromotionalProductsPercent]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-percents/count', {
        responses: {
            '200': {
                description: 'PromotionalProductsPercent model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PromotionalProductsPercent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-percents', {
        responses: {
            '200': {
                description: 'Array of PromotionalProductsPercent model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.PromotionalProductsPercent, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PromotionalProductsPercent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/promotional-products-percents', {
        responses: {
            '200': {
                description: 'PromotionalProductsPercent PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPercent, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PromotionalProductsPercent)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PromotionalProductsPercent, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-percents/{id}', {
        responses: {
            '200': {
                description: 'PromotionalProductsPercent model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPercent, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PromotionalProductsPercent, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/promotional-products-percents/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsPercent PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPercent, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PromotionalProductsPercent]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/promotional-products-percents/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsPercent PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PromotionalProductsPercent]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/promotional-products-percents/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsPercent DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPercentController.prototype, "deleteById", null);
PromotionalProductsPercentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PromotionalProductsPercentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PromotionalProductsPercentRepository])
], PromotionalProductsPercentController);
exports.PromotionalProductsPercentController = PromotionalProductsPercentController;
//# sourceMappingURL=promotional-products-percent.controller.js.map