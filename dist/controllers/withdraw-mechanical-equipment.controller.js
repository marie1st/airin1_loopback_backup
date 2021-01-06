"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawMechanicalEquipmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WithdrawMechanicalEquipmentController = class WithdrawMechanicalEquipmentController {
    constructor(withdrawMechanicalEquipmentRepository) {
        this.withdrawMechanicalEquipmentRepository = withdrawMechanicalEquipmentRepository;
    }
    async create(withdrawMechanicalEquipment) {
        return this.withdrawMechanicalEquipmentRepository.create(withdrawMechanicalEquipment);
    }
    async count(where) {
        return this.withdrawMechanicalEquipmentRepository.count(where);
    }
    async find(filter) {
        return this.withdrawMechanicalEquipmentRepository.find(filter);
    }
    async updateAll(withdrawMechanicalEquipment, where) {
        return this.withdrawMechanicalEquipmentRepository.updateAll(withdrawMechanicalEquipment, where);
    }
    async findById(id, filter) {
        return this.withdrawMechanicalEquipmentRepository.findById(id, filter);
    }
    async updateById(id, withdrawMechanicalEquipment) {
        await this.withdrawMechanicalEquipmentRepository.updateById(id, withdrawMechanicalEquipment);
    }
    async replaceById(id, withdrawMechanicalEquipment) {
        await this.withdrawMechanicalEquipmentRepository.replaceById(id, withdrawMechanicalEquipment);
    }
    async deleteById(id) {
        await this.withdrawMechanicalEquipmentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/withdraw-mechanical-equipments', {
        responses: {
            '200': {
                description: 'WithdrawMechanicalEquipment model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment, {
                    title: 'NewWithdrawMechanicalEquipment',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WithdrawMechanicalEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-mechanical-equipments/count', {
        responses: {
            '200': {
                description: 'WithdrawMechanicalEquipment model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.WithdrawMechanicalEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-mechanical-equipments', {
        responses: {
            '200': {
                description: 'Array of WithdrawMechanicalEquipment model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.WithdrawMechanicalEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/withdraw-mechanical-equipments', {
        responses: {
            '200': {
                description: 'WithdrawMechanicalEquipment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.WithdrawMechanicalEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WithdrawMechanicalEquipment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/withdraw-mechanical-equipments/{id}', {
        responses: {
            '200': {
                description: 'WithdrawMechanicalEquipment model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.WithdrawMechanicalEquipment, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/withdraw-mechanical-equipments/{id}', {
        responses: {
            '204': {
                description: 'WithdrawMechanicalEquipment PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.WithdrawMechanicalEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.WithdrawMechanicalEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/withdraw-mechanical-equipments/{id}', {
        responses: {
            '204': {
                description: 'WithdrawMechanicalEquipment PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.WithdrawMechanicalEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/withdraw-mechanical-equipments/{id}', {
        responses: {
            '204': {
                description: 'WithdrawMechanicalEquipment DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WithdrawMechanicalEquipmentController.prototype, "deleteById", null);
WithdrawMechanicalEquipmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WithdrawMechanicalEquipmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WithdrawMechanicalEquipmentRepository])
], WithdrawMechanicalEquipmentController);
exports.WithdrawMechanicalEquipmentController = WithdrawMechanicalEquipmentController;
//# sourceMappingURL=withdraw-mechanical-equipment.controller.js.map