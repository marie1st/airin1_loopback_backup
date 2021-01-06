"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductLeakTestController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductLeakTestController = class OrderProductLeakTestController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async get(id, filter) {
        return this.orderProductRepository.leakTest(id).get(filter);
    }
    async create(id, leakTest) {
        return this.orderProductRepository.leakTest(id).create(leakTest);
    }
    async patch(id, leakTest, where) {
        return this.orderProductRepository.leakTest(id).patch(leakTest, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.leakTest(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/leak-test', {
        responses: {
            '200': {
                description: 'OrderProduct has one LeakTest',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.LeakTest),
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
], OrderProductLeakTestController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/leak-test', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.LeakTest) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LeakTest, {
                    title: 'NewLeakTestInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductLeakTestController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/leak-test', {
        responses: {
            '200': {
                description: 'OrderProduct.LeakTest PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LeakTest, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.LeakTest))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductLeakTestController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/leak-test', {
        responses: {
            '200': {
                description: 'OrderProduct.LeakTest DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.LeakTest))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductLeakTestController.prototype, "delete", null);
OrderProductLeakTestController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductLeakTestController);
exports.OrderProductLeakTestController = OrderProductLeakTestController;
//# sourceMappingURL=order-product-leak-test.controller.js.map