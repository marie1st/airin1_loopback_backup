"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductPipeSysNElecController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductPipeSysNElecController = class OrderProductPipeSysNElecController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async get(id, filter) {
        return this.orderProductRepository.pipeSysNElec(id).get(filter);
    }
    async create(id, pipeSysNElec) {
        return this.orderProductRepository.pipeSysNElec(id).create(pipeSysNElec);
    }
    async patch(id, pipeSysNElec, where) {
        return this.orderProductRepository.pipeSysNElec(id).patch(pipeSysNElec, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.pipeSysNElec(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/pipe-sys-n-elec', {
        responses: {
            '200': {
                description: 'OrderProduct has one PipeSysNElec',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec),
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
], OrderProductPipeSysNElecController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/pipe-sys-n-elec', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec, {
                    title: 'NewPipeSysNElecInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductPipeSysNElecController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/pipe-sys-n-elec', {
        responses: {
            '200': {
                description: 'OrderProduct.PipeSysNElec PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.PipeSysNElec, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.PipeSysNElec))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductPipeSysNElecController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/pipe-sys-n-elec', {
        responses: {
            '200': {
                description: 'OrderProduct.PipeSysNElec DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.PipeSysNElec))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductPipeSysNElecController.prototype, "delete", null);
OrderProductPipeSysNElecController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductPipeSysNElecController);
exports.OrderProductPipeSysNElecController = OrderProductPipeSysNElecController;
//# sourceMappingURL=order-product-pipe-sys-n-elec.controller.js.map