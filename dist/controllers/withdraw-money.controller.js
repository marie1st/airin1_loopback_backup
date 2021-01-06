"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawMoneyController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WithdrawMoneyController = class WithdrawMoneyController {
    constructor(withdrawMoneyRepository) {
        this.withdrawMoneyRepository = withdrawMoneyRepository;
    }
    async create(withdrawMoney) {
        return this.withdrawMoneyRepository.create(withdrawMoney);
    }
    async count(where) {
        return this.withdrawMoneyRepository.count(where);
    }
    async find(filter) {
        return this.withdrawMoneyRepository.find(filter);
    }
    async updateAll(withdrawMoney, where) {
        return this.withdrawMoneyRepository.updateAll(withdrawMoney, where);
    }
    async findById(id, filter) {
        return this.withdrawMoneyRepository.findById(id, filter);
    }
    async updateById(id, withdrawMoney) {
        await this.withdrawMoneyRepository.updateById(id, withdrawMoney);
    }
    async replaceById(id, withdrawMoney) {
        await this.withdrawMoneyRepository.replaceById(id, withdrawMoney);
    }
    async deleteById(id) {
        await this.withdrawMoneyRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/withdraw-monies', {
        responses: {
            '200': {
                description: 'WithdrawMoney model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.WithdrawMoney) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMoney, {
                    title: 'NewWithdrawMoney',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WithdrawMoney]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-monies/count', {
        responses: {
            '200': {
                description: 'WithdrawMoney model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.WithdrawMoney)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-monies', {
        responses: {
            '200': {
                description: 'Array of WithdrawMoney model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.WithdrawMoney, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.WithdrawMoney)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/withdraw-monies', {
        responses: {
            '200': {
                description: 'WithdrawMoney PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMoney, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.WithdrawMoney)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WithdrawMoney, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-monies/{id}', {
        responses: {
            '200': {
                description: 'WithdrawMoney model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.WithdrawMoney, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.WithdrawMoney, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/withdraw-monies/{id}', {
        responses: {
            '204': {
                description: 'WithdrawMoney PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMoney, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WithdrawMoney]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/withdraw-monies/{id}', {
        responses: {
            '204': {
                description: 'WithdrawMoney PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WithdrawMoney]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/withdraw-monies/{id}', {
        responses: {
            '204': {
                description: 'WithdrawMoney DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMoneyController.prototype, "deleteById", null);
WithdrawMoneyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WithdrawMoneyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WithdrawMoneyRepository])
], WithdrawMoneyController);
exports.WithdrawMoneyController = WithdrawMoneyController;
//# sourceMappingURL=withdraw-money.controller.js.map