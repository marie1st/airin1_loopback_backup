"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionalProductsPriceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PromotionalProductsPriceController = class PromotionalProductsPriceController {
    constructor(promotionalProductsPriceRepository) {
        this.promotionalProductsPriceRepository = promotionalProductsPriceRepository;
    }
    async create(promotionalProductsPrice) {
        return this.promotionalProductsPriceRepository.create(promotionalProductsPrice);
    }
    async count(where) {
        return this.promotionalProductsPriceRepository.count(where);
    }
    async find(filter) {
        return this.promotionalProductsPriceRepository.find(filter);
    }
    async updateAll(promotionalProductsPrice, where) {
        return this.promotionalProductsPriceRepository.updateAll(promotionalProductsPrice, where);
    }
    async findById(id, filter) {
        return this.promotionalProductsPriceRepository.findById(id, filter);
    }
    async updateById(id, promotionalProductsPrice) {
        await this.promotionalProductsPriceRepository.updateById(id, promotionalProductsPrice);
    }
    async replaceById(id, promotionalProductsPrice) {
        await this.promotionalProductsPriceRepository.replaceById(id, promotionalProductsPrice);
    }
    async deleteById(id) {
        await this.promotionalProductsPriceRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/promotional-products-prices', {
        responses: {
            '200': {
                description: 'PromotionalProductsPrice model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPrice) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPrice, {
                    title: 'NewPromotionalProductsPrice',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PromotionalProductsPrice]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-prices/count', {
        responses: {
            '200': {
                description: 'PromotionalProductsPrice model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.PromotionalProductsPrice)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-prices', {
        responses: {
            '200': {
                description: 'Array of PromotionalProductsPrice model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.PromotionalProductsPrice, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.PromotionalProductsPrice)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/promotional-products-prices', {
        responses: {
            '200': {
                description: 'PromotionalProductsPrice PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPrice, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.PromotionalProductsPrice)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.PromotionalProductsPrice, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/promotional-products-prices/{id}', {
        responses: {
            '200': {
                description: 'PromotionalProductsPrice model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPrice, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.PromotionalProductsPrice, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/promotional-products-prices/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsPrice PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PromotionalProductsPrice, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PromotionalProductsPrice]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/promotional-products-prices/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsPrice PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.PromotionalProductsPrice]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/promotional-products-prices/{id}', {
        responses: {
            '204': {
                description: 'PromotionalProductsPrice DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PromotionalProductsPriceController.prototype, "deleteById", null);
PromotionalProductsPriceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PromotionalProductsPriceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PromotionalProductsPriceRepository])
], PromotionalProductsPriceController);
exports.PromotionalProductsPriceController = PromotionalProductsPriceController;
//# sourceMappingURL=promotional-products-price.controller.js.map