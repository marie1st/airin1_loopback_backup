"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductWithdrawUsedEquipmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductWithdrawUsedEquipmentController = class OrderProductWithdrawUsedEquipmentController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async find(id, filter) {
        return this.orderProductRepository.withdrawUsedEquipments(id).find(filter);
    }
    async create(id, withdrawUsedEquipment) {
        return this.orderProductRepository.withdrawUsedEquipments(id).create(withdrawUsedEquipment);
    }
    async patch(id, withdrawUsedEquipment, where) {
        return this.orderProductRepository.withdrawUsedEquipments(id).patch(withdrawUsedEquipment, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.withdrawUsedEquipments(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/withdraw-used-equipments', {
        responses: {
            '200': {
                description: 'Array of OrderProduct has many WithdrawUsedEquipment',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment) },
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
], OrderProductWithdrawUsedEquipmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/withdraw-used-equipments', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment, {
                    title: 'NewWithdrawUsedEquipmentInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductWithdrawUsedEquipmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/withdraw-used-equipments', {
        responses: {
            '200': {
                description: 'OrderProduct.WithdrawUsedEquipment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.WithdrawUsedEquipment))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductWithdrawUsedEquipmentController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/withdraw-used-equipments', {
        responses: {
            '200': {
                description: 'OrderProduct.WithdrawUsedEquipment DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.WithdrawUsedEquipment))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductWithdrawUsedEquipmentController.prototype, "delete", null);
OrderProductWithdrawUsedEquipmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductWithdrawUsedEquipmentController);
exports.OrderProductWithdrawUsedEquipmentController = OrderProductWithdrawUsedEquipmentController;
//# sourceMappingURL=order-product-withdraw-used-equipment.controller.js.map