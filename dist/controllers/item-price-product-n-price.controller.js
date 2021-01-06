"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPriceProductNPriceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ItemPriceProductNPriceController = class ItemPriceProductNPriceController {
    constructor(itemPriceRepository) {
        this.itemPriceRepository = itemPriceRepository;
    }
    async get(id, filter) {
        return this.itemPriceRepository.productNPrice(id).get(filter);
    }
    async create(id, productNPrice) {
        return this.itemPriceRepository.productNPrice(id).create(productNPrice);
    }
    async patch(id, productNPrice, where) {
        return this.itemPriceRepository.productNPrice(id).patch(productNPrice, where);
    }
    async delete(id, where) {
        return this.itemPriceRepository.productNPrice(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/item-prices/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'ItemPrice has one ProductNPrice',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ProductNPrice),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceProductNPriceController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/item-prices/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'ItemPrice model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ProductNPrice) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProductNPrice, {
                    title: 'NewProductNPriceInItemPrice',
                    exclude: ['id'],
                    optional: ['item_price_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceProductNPriceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/item-prices/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'ItemPrice.ProductNPrice PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProductNPrice, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ProductNPrice))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceProductNPriceController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/item-prices/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'ItemPrice.ProductNPrice DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ProductNPrice))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemPriceProductNPriceController.prototype, "delete", null);
ItemPriceProductNPriceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ItemPriceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ItemPriceRepository])
], ItemPriceProductNPriceController);
exports.ItemPriceProductNPriceController = ItemPriceProductNPriceController;
//# sourceMappingURL=item-price-product-n-price.controller.js.map