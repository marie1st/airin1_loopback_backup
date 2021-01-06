"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedEquipmentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsedEquipmentController = class UsedEquipmentController {
    constructor(usedEquipmentRepository) {
        this.usedEquipmentRepository = usedEquipmentRepository;
    }
    async create(usedEquipment) {
        return this.usedEquipmentRepository.create(usedEquipment);
    }
    async count(where) {
        return this.usedEquipmentRepository.count(where);
    }
    async find(filter) {
        return this.usedEquipmentRepository.find(filter);
    }
    async updateAll(usedEquipment, where) {
        return this.usedEquipmentRepository.updateAll(usedEquipment, where);
    }
    async findById(id, filter) {
        return this.usedEquipmentRepository.findById(id, filter);
    }
    async updateById(id, usedEquipment) {
        await this.usedEquipmentRepository.updateById(id, usedEquipment);
    }
    async replaceById(id, usedEquipment) {
        await this.usedEquipmentRepository.replaceById(id, usedEquipment);
    }
    async deleteById(id) {
        await this.usedEquipmentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/used-equipments', {
        responses: {
            '200': {
                description: 'UsedEquipment model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.UsedEquipment) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UsedEquipment, {
                    title: 'NewUsedEquipment',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UsedEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/used-equipments/count', {
        responses: {
            '200': {
                description: 'UsedEquipment model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.UsedEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/used-equipments', {
        responses: {
            '200': {
                description: 'Array of UsedEquipment model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.UsedEquipment, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.UsedEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/used-equipments', {
        responses: {
            '200': {
                description: 'UsedEquipment PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UsedEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.UsedEquipment)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UsedEquipment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/used-equipments/{id}', {
        responses: {
            '200': {
                description: 'UsedEquipment model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.UsedEquipment, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.UsedEquipment, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/used-equipments/{id}', {
        responses: {
            '204': {
                description: 'UsedEquipment PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UsedEquipment, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.UsedEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/used-equipments/{id}', {
        responses: {
            '204': {
                description: 'UsedEquipment PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.UsedEquipment]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/used-equipments/{id}', {
        responses: {
            '204': {
                description: 'UsedEquipment DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsedEquipmentController.prototype, "deleteById", null);
UsedEquipmentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UsedEquipmentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsedEquipmentRepository])
], UsedEquipmentController);
exports.UsedEquipmentController = UsedEquipmentController;
//# sourceMappingURL=used-equipment.controller.js.map