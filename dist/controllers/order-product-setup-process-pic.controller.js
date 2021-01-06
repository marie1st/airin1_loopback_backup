"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductSetupProcessPicController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductSetupProcessPicController = class OrderProductSetupProcessPicController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async get(id, filter) {
        return this.orderProductRepository.setupProcessPic(id).get(filter);
    }
    async create(id, setupProcessPic) {
        return this.orderProductRepository.setupProcessPic(id).create(setupProcessPic);
    }
    async patch(id, setupProcessPic, where) {
        return this.orderProductRepository.setupProcessPic(id).patch(setupProcessPic, where);
    }
    async delete(id, where) {
        return this.orderProductRepository.setupProcessPic(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/order-products/{id}/setup-process-pic', {
        responses: {
            '200': {
                description: 'OrderProduct has one SetupProcessPic',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic),
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
], OrderProductSetupProcessPicController.prototype, "get", null);
tslib_1.__decorate([
    rest_1.post('/order-products/{id}/setup-process-pic', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic, {
                    title: 'NewSetupProcessPicInOrderProduct',
                    exclude: ['id'],
                    optional: ['order_id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupProcessPicController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}/setup-process-pic', {
        responses: {
            '200': {
                description: 'OrderProduct.SetupProcessPic PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.SetupProcessPic, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupProcessPic))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupProcessPicController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}/setup-process-pic', {
        responses: {
            '200': {
                description: 'OrderProduct.SetupProcessPic DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SetupProcessPic))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductSetupProcessPicController.prototype, "delete", null);
OrderProductSetupProcessPicController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductSetupProcessPicController);
exports.OrderProductSetupProcessPicController = OrderProductSetupProcessPicController;
//# sourceMappingURL=order-product-setup-process-pic.controller.js.map