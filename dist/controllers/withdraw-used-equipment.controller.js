"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawUsedEquipmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WithdrawUsedEquipmentController = class WithdrawUsedEquipmentController {
    constructor(withdrawUsedEquipmentRepository) {
        this.withdrawUsedEquipmentRepository = withdrawUsedEquipmentRepository;
    }
    async create(withdrawUsedEquipment) {
        return this.withdrawUsedEquipmentRepository.create(withdrawUsedEquipment);
    }
    async count(where) {
        return this.withdrawUsedEquipmentRepository.count(where);
    }
    async find(filter) {
        return this.withdrawUsedEquipmentRepository.find(filter);
    }
    async updateAll(withdrawUsedEquipment, where) {
        return this.withdrawUsedEquipmentRepository.updateAll(withdrawUsedEquipment, where);
    }
    async findById(id, filter) {
        return this.withdrawUsedEquipmentRepository.findById(id, filter);
    }
    async updateById(id, withdrawUsedEquipment) {
        await this.withdrawUsedEquipmentRepository.updateById(id, withdrawUsedEquipment);
    }
    async replaceById(id, withdrawUsedEquipment) {
        await this.withdrawUsedEquipmentRepository.replaceById(id, withdrawUsedEquipment);
    }
    async deleteById(id) {
        await this.withdrawUsedEquipmentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/withdraw-used-equipments', {
        responses: {
            '200': {
                description: 'WithdrawUsedEquipment model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment, {
                    title: 'NewWithdrawUsedEquipment',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WithdrawUsedEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-used-equipments/count', {
        responses: {
            '200': {
                description: 'WithdrawUsedEquipment model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.WithdrawUsedEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-used-equipments', {
        responses: {
            '200': {
                description: 'Array of WithdrawUsedEquipment model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.WithdrawUsedEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/withdraw-used-equipments', {
        responses: {
            '200': {
                description: 'WithdrawUsedEquipment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.WithdrawUsedEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WithdrawUsedEquipment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-used-equipments/{id}', {
        responses: {
            '200': {
                description: 'WithdrawUsedEquipment model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.WithdrawUsedEquipment, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/withdraw-used-equipments/{id}', {
        responses: {
            '204': {
                description: 'WithdrawUsedEquipment PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawUsedEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.WithdrawUsedEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/withdraw-used-equipments/{id}', {
        responses: {
            '204': {
                description: 'WithdrawUsedEquipment PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.WithdrawUsedEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/withdraw-used-equipments/{id}', {
        responses: {
            '204': {
                description: 'WithdrawUsedEquipment DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawUsedEquipmentController.prototype, "deleteById", null);
WithdrawUsedEquipmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WithdrawUsedEquipmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WithdrawUsedEquipmentRepository])
], WithdrawUsedEquipmentController);
exports.WithdrawUsedEquipmentController = WithdrawUsedEquipmentController;
//# sourceMappingURL=withdraw-used-equipment.controller.js.map