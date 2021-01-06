"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPriceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ItemPriceController = class ItemPriceController {
    constructor(itemPriceRepository) {
        this.itemPriceRepository = itemPriceRepository;
    }
    async create(itemPrice) {
        return this.itemPriceRepository.create(itemPrice);
    }
    async count(where) {
        return this.itemPriceRepository.count(where);
    }
    async find(filter) {
        return this.itemPriceRepository.find(filter);
    }
    async updateAll(itemPrice, where) {
        return this.itemPriceRepository.updateAll(itemPrice, where);
    }
    async findById(id, filter) {
        return this.itemPriceRepository.findById(id, filter);
    }
    async updateById(id, itemPrice) {
        await this.itemPriceRepository.updateById(id, itemPrice);
    }
    async replaceById(id, itemPrice) {
        await this.itemPriceRepository.replaceById(id, itemPrice);
    }
    async deleteById(id) {
        await this.itemPriceRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/item-prices', {
        responses: {
            '200': {
                description: 'ItemPrice model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ItemPrice) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ItemPrice, {
                    title: 'NewItemPrice',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ItemPrice]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/item-prices/count', {
        responses: {
            '200': {
                description: 'ItemPrice model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ItemPrice)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/item-prices', {
        responses: {
            '200': {
                description: 'Array of ItemPrice model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ItemPrice, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ItemPrice)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/item-prices', {
        responses: {
            '200': {
                description: 'ItemPrice PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ItemPrice, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ItemPrice)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ItemPrice, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/item-prices/{id}', {
        responses: {
            '200': {
                description: 'ItemPrice model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ItemPrice, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ItemPrice, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/item-prices/{id}', {
        responses: {
            '204': {
                description: 'ItemPrice PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ItemPrice, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ItemPrice]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/item-prices/{id}', {
        responses: {
            '204': {
                description: 'ItemPrice PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ItemPrice]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/item-prices/{id}', {
        responses: {
            '204': {
                description: 'ItemPrice DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceController.prototype, "deleteById", null);
ItemPriceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ItemPriceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ItemPriceRepository])
], ItemPriceController);
exports.ItemPriceController = ItemPriceController;
//# sourceMappingURL=item-price.controller.js.map