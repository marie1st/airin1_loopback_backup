"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WageProductNPriceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WageProductNPriceController = class WageProductNPriceController {
    constructor(wageRepository) {
        this.wageRepository = wageRepository;
    }
    async get(id, filter) {
        return this.wageRepository.productNPrice(id).get(filter);
    }
    async create(id, productNPrice) {
        return this.wageRepository.productNPrice(id).create(productNPrice);
    }
    async patch(id, productNPrice, where) {
        return this.wageRepository.productNPrice(id).patch(productNPrice, where);
    }
    async delete(id, where) {
        return this.wageRepository.productNPrice(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/wages/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'Wage has one ProductNPrice',
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
], WageProductNPriceController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/wages/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'Wage model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ProductNPrice) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProductNPrice, {
                    title: 'NewProductNPriceInWage',
                    exclude: ['id'],
                    optional: ['wage_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WageProductNPriceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/wages/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'Wage.ProductNPrice PATCH success count',
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
], WageProductNPriceController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/wages/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'Wage.ProductNPrice DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ProductNPrice))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WageProductNPriceController.prototype, "delete", null);
WageProductNPriceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WageRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WageRepository])
], WageProductNPriceController);
exports.WageProductNPriceController = WageProductNPriceController;
//# sourceMappingURL=wage-product-n-price.controller.js.map