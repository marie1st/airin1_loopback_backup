"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrderProductController = class OrderProductController {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async create(orderProduct) {
        return this.orderProductRepository.create(orderProduct);
    }
    async count(where) {
        return this.orderProductRepository.count(where);
    }
    async find(filter) {
        return this.orderProductRepository.find(filter);
    }
    async updateAll(orderProduct, where) {
        return this.orderProductRepository.updateAll(orderProduct, where);
    }
    async findById(id, filter) {
        return this.orderProductRepository.findById(id, filter);
    }
    async updateById(id, orderProduct) {
        await this.orderProductRepository.updateById(id, orderProduct);
    }
    async replaceById(id, orderProduct) {
        await this.orderProductRepository.replaceById(id, orderProduct);
    }
    async deleteById(id) {
        await this.orderProductRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/order-products', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.OrderProduct) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderProduct, {
                    title: 'NewOrderProduct',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.OrderProduct]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/order-products/count', {
        responses: {
            '200': {
                description: 'OrderProduct model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.OrderProduct)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/order-products', {
        responses: {
            '200': {
                description: 'Array of OrderProduct model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.OrderProduct, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.OrderProduct)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/order-products', {
        responses: {
            '200': {
                description: 'OrderProduct PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderProduct, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.OrderProduct)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.OrderProduct, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/order-products/{id}', {
        responses: {
            '200': {
                description: 'OrderProduct model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.OrderProduct, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.OrderProduct, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/order-products/{id}', {
        responses: {
            '204': {
                description: 'OrderProduct PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrderProduct, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.OrderProduct]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/order-products/{id}', {
        responses: {
            '204': {
                description: 'OrderProduct PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.OrderProduct]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/order-products/{id}', {
        responses: {
            '204': {
                description: 'OrderProduct DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderProductController.prototype, "deleteById", null);
OrderProductController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderProductRepository])
], OrderProductController);
exports.OrderProductController = OrderProductController;
//# sourceMappingURL=order-product.controller.js.map