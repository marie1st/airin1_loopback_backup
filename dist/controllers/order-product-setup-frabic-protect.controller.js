"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductSetupFrabicProtectController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductSetupFrabicProtectController = class OrderProductSetupFrabicProtectController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async get(id, filter) {
        return this.orderProductRepository.setupFrabicProtect(id).get(filter);
    }
    async create(id, setupFrabicProtect) {
        return this.orderProductRepository.setupFrabicProtect(id).create(setupFrabicProtect);
    }
    async patch(id, setupFrabicProtect, where) {
        return this.orderProductRepository.setupFrabicProtect(id).patch(setupFrabicProtect, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.setupFrabicProtect(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/setup-frabic-protect', {
        responses: {
            '200': {
                description: 'OrderProduct has one SetupFrabicProtect',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupFrabicProtectController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/setup-frabic-protect', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect, {
                    title: 'NewSetupFrabicProtectInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupFrabicProtectController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/setup-frabic-protect', {
        responses: {
            '200': {
                description: 'OrderProduct.SetupFrabicProtect PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFrabicProtect, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupFrabicProtect))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupFrabicProtectController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/setup-frabic-protect', {
        responses: {
            '200': {
                description: 'OrderProduct.SetupFrabicProtect DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupFrabicProtect))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupFrabicProtectController.prototype, "delete", null);
OrderProductSetupFrabicProtectController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductSetupFrabicProtectController);
exports.OrderProductSetupFrabicProtectController = OrderProductSetupFrabicProtectController;
//# sourceMappingURL=order-product-setup-frabic-protect.controller.js.map