"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductSetupFcuController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductSetupFcuController = class OrderProductSetupFcuController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async get(id, filter) {
        return this.orderProductRepository.setupFcu(id).get(filter);
    }
    async create(id, setupFcu) {
        return this.orderProductRepository.setupFcu(id).create(setupFcu);
    }
    async patch(id, setupFcu, where) {
        return this.orderProductRepository.setupFcu(id).patch(setupFcu, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.setupFcu(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/setup-fcu', {
        responses: {
            '200': {
                description: 'OrderProduct has one SetupFcu',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupFcu),
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
], OrderProductSetupFcuController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/setup-fcu', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupFcu) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFcu, {
                    title: 'NewSetupFcuInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupFcuController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/setup-fcu', {
        responses: {
            '200': {
                description: 'OrderProduct.SetupFcu PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupFcu, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupFcu))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupFcuController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/setup-fcu', {
        responses: {
            '200': {
                description: 'OrderProduct.SetupFcu DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupFcu))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupFcuController.prototype, "delete", null);
OrderProductSetupFcuController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductSetupFcuController);
exports.OrderProductSetupFcuController = OrderProductSetupFcuController;
//# sourceMappingURL=order-product-setup-fcu.controller.js.map