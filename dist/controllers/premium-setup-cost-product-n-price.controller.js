"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumSetupCostProductNPriceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PremiumSetupCostProductNPriceController = class PremiumSetupCostProductNPriceController {
    constructor(premiumSetupCostRepository) {
        this.premiumSetupCostRepository = premiumSetupCostRepository;
    }
    async get(id, filter) {
        return this.premiumSetupCostRepository.productNPrice(id).get(filter);
    }
    async create(id, productNPrice) {
        return this.premiumSetupCostRepository.productNPrice(id).create(productNPrice);
    }
    async patch(id, productNPrice, where) {
        return this.premiumSetupCostRepository.productNPrice(id).patch(productNPrice, where);
    }
    async delete(id, where) {
        return this.premiumSetupCostRepository.productNPrice(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/premium-setup-costs/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'PremiumSetupCost has one ProductNPrice',
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
], PremiumSetupCostProductNPriceController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/premium-setup-costs/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'PremiumSetupCost model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ProductNPrice) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProductNPrice, {
                    title: 'NewProductNPriceInPremiumSetupCost',
                    exclude: ['id'],
                    optional: ['premium_setup_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostProductNPriceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/premium-setup-costs/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'PremiumSetupCost.ProductNPrice PATCH success count',
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
], PremiumSetupCostProductNPriceController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/premium-setup-costs/{id}/product-n-price', {
        responses: {
            '200': {
                description: 'PremiumSetupCost.ProductNPrice DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ProductNPrice))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiumSetupCostProductNPriceController.prototype, "delete", null);
PremiumSetupCostProductNPriceController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PremiumSetupCostRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PremiumSetupCostRepository])
], PremiumSetupCostProductNPriceController);
exports.PremiumSetupCostProductNPriceController = PremiumSetupCostProductNPriceController;
//# sourceMappingURL=premium-setup-cost-product-n-price.controller.js.map