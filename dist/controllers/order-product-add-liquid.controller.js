"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductAddLiquidController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductAddLiquidController = class OrderProductAddLiquidController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async get(id, filter) {
        return this.orderProductRepository.addLiquid(id).get(filter);
    }
    async create(id, addLiquid) {
        return this.orderProductRepository.addLiquid(id).create(addLiquid);
    }
    async patch(id, addLiquid, where) {
        return this.orderProductRepository.addLiquid(id).patch(addLiquid, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.addLiquid(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/add-liquid', {
        responses: {
            '200': {
                description: 'OrderProduct has one AddLiquid',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.AddLiquid),
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
], OrderProductAddLiquidController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/add-liquid', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AddLiquid) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AddLiquid, {
                    title: 'NewAddLiquidInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductAddLiquidController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/add-liquid', {
        responses: {
            '200': {
                description: 'OrderProduct.AddLiquid PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AddLiquid, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.AddLiquid))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductAddLiquidController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/add-liquid', {
        responses: {
            '200': {
                description: 'OrderProduct.AddLiquid DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.AddLiquid))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductAddLiquidController.prototype, "delete", null);
OrderProductAddLiquidController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductAddLiquidController);
exports.OrderProductAddLiquidController = OrderProductAddLiquidController;
//# sourceMappingURL=order-product-add-liquid.controller.js.map