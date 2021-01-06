"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductWithdrawMechanicalEquipmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductWithdrawMechanicalEquipmentController = class OrderProductWithdrawMechanicalEquipmentController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async find(id, filter) {
        return this.orderProductRepository.withdrawMechanicalEquipments(id).find(filter);
    }
    async create(id, withdrawMechanicalEquipment) {
        return this.orderProductRepository.withdrawMechanicalEquipments(id).create(withdrawMechanicalEquipment);
    }
    async patch(id, withdrawMechanicalEquipment, where) {
        return this.orderProductRepository.withdrawMechanicalEquipments(id).patch(withdrawMechanicalEquipment, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.withdrawMechanicalEquipments(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/withdraw-mechanical-equipments', {
        responses: {
            '200': {
                description: 'Array of OrderProduct has many WithdrawMechanicalEquipment',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment) },
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
], OrderProductWithdrawMechanicalEquipmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/withdraw-mechanical-equipments', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment, {
                    title: 'NewWithdrawMechanicalEquipmentInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductWithdrawMechanicalEquipmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/withdraw-mechanical-equipments', {
        responses: {
            '200': {
                description: 'OrderProduct.WithdrawMechanicalEquipment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.WithdrawMechanicalEquipment))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductWithdrawMechanicalEquipmentController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/withdraw-mechanical-equipments', {
        responses: {
            '200': {
                description: 'OrderProduct.WithdrawMechanicalEquipment DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.WithdrawMechanicalEquipment))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductWithdrawMechanicalEquipmentController.prototype, "delete", null);
OrderProductWithdrawMechanicalEquipmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductWithdrawMechanicalEquipmentController);
exports.OrderProductWithdrawMechanicalEquipmentController = OrderProductWithdrawMechanicalEquipmentController;
//# sourceMappingURL=order-product-withdraw-mechanical-equipment.controller.js.map